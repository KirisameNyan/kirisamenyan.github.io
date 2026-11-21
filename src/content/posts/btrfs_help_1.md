---
title: btrfs文件系统无法写入磁盘解决方案
published: 2026-11-21
description: ''
image: ''
tags: [Arch Linux]
category: 'Arch Linux'
draft: false
lang: ''
slug: btrfs_help_1
---

## 报错内容

玩MC玩一半游戏+启动器双双崩溃,启动器报错为硬盘空间不足,重启后报错越来越多,例如

```FISH_SHELL
error: 无法创建临时文件 '/home/Neko/.local/share/fish/fish_history3EN1TFAXjp': 设备上没有空间 (os error 28)
```
## 尝试解决

刚开始在尝试`df -i`发现不是inode耗尽(Btrfs 动态分配 inode 的特性)

```OUTPUT
文件系统            Inodes  已用I   可用I  已用I% 挂载点
/dev/nvme1n1p2           0      0       0       - /
devtmpfs           4035940    870 4035070     1% /dev
tmpfs              4068761     24 4068737     1% /dev/shm
efivarfs                 0      0       0       - /sys/firmware/efi/efivars
tmpfs               819200   1513  817687     1% /run
none                  1024      1    1023     1% /run/credentials/systemd-journald.service
tmpfs              1048576     28 1048548     1% /tmp
/dev/nvme0n1p1           0      0       0       - /mnt/8af19d52-a330-4ba0-9ea1-94dcab6f360e
/dev/nvme1n1p2           0      0       0       - /home
/dev/nvme0n1p1           0      0       0       - /efi
tmpfs               813752    129  813623     1% /run/user/1000
```

## 再次尝试

问了大肥鱼给出了第二种方案，输入`sudo btrfs filesystem usage /`

请特别注意 `Unallocated` 和 `Metadata` 这两项：

```OUTPUT
Overall:
    Device size:                 476.45GiB
    Device allocated:            476.45GiB
    Device unallocated:            1.00MiB   <--- 设备未分配空间仅剩 1 MiB
    Device missing:                  0.00B
    Device slack:                    0.00B
    Used:                        454.01GiB
    Free (estimated):             21.42GiB   (min: 21.42GiB) 
    Free (statfs, df):            21.42GiB
    Data ratio:                       1.00
    Metadata ratio:                   2.00
    Global reserve:              512.00MiB   (used: 32.00KiB)
    Multiple profiles:                  no

Data,single: Size:451.43GiB, Used:430.01GiB (95.26%)
   /dev/nvme1n1p2        451.43GiB

Metadata,DUP: Size:12.50GiB, Used:12.00GiB (96.00%)   <--- 元数据几乎爆满
   /dev/nvme1n1p2         25.00GiB

System,DUP: Size:8.00MiB, Used:80.00KiB (0.98%)
   /dev/nvme1n1p2         16.00MiB

Unallocated:
   /dev/nvme1n1p2          1.00MiB   <--- 再次确认，物理层面已经没有任何空间可以分配给元数据了
```

`Unallocated`只剩下 1.00 MiB。Btrfs 想要写入新数据，必须要先分配一个新的块组（Chunk）。物理硬盘被分配得连 1MB 都不剩了，不管`Data`块里还有多少G ，Btrfs 也塞不进去新的东西。

再看 Metadata 这一行，总共分配了 12.5G，用了 12.0G（96%）。元数据马上要撑爆了，系统彻底进入死锁状态。

## 解决方案

建议先切入bash防止被打断，直接输入`bash`

接下来清理日志腾出救命空间：

```COMMAND
sudo rm -rf /var/log/journal/*
```
清理旧快照:

```COMMAND
sudo snapper -c root list //查看已有快照

sudo snapper -c root delete 1-50 //删除1-50号快照，具体删哪些见仁见智
```

强行回收碎片空间(最核心一步)：

```COMMAND
sudo btrfs balance start -dusage=0 -musage=0 / //清理绝对空的块
sudo btrfs balance start -dusage=10 -musage=10 / //渐进式清理利用率低的块
```

善后与数据校验：

```COMMAND
sudo btrfs scrub start -Bd /
```

问题解决

## 故障原因

Btrfs 文件系统在磁盘使用率极高且存在大量快照时，物理硬盘的空间被完全瓜分（`Device unallocated` 仅剩 1 MiB），导致元数据（`Metadata`）耗尽，系统进入“有剩余容量但无法新建任何文件”的写死状态
