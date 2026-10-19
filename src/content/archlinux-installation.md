---
title: Arch Linux安装教学
published: 2026-10-18
description: 关于Arch Linux的安装
tags: [Arch linux]
category: Arch
slug: archlinux-installation
draft: true
---
本文部分参照了[archlinux 简明指南](https://arch.icekylin.online/)

## 为什么要写这篇文章

平时经常要重装系统，但是总是不记得一些命令，所以想要记录下来，也希望可以吸引更多人来玩Linux。

## Arch Linux是什么

Arch Linux 是一款极简、灵活且高度可定制的 Linux 发行版，采用滚动更新模式，由社区驱动，强调用户完全掌控系统。

[Arch wiki](https://wiki.archlinux.org/)

[Arch Linux中文维基](https://wiki.archlinuxcn.org/)

## 安装前的准备

### Arch Linux安装镜像的下载

请访问[Arch Linux下载](https://archlinux.org.cn/download/)这一页面，找到你所在地区的镜像站，并安装Arch Linux安装镜像

### Arch安装镜像的刻录

首先，需要准备一块不小于2GB的U盘

Window用户：使用[rufus](https://rufus.ie/zh/)将安装镜像刻入U盘

Linux用户：从AUR安装etcher
```command
yay -S etcher-bin
```
## 划分出Arch Linux所需的空间(可选，双系统适用)

### 系统盘

如果目标是双系统（win10 + archlinux），并且 win10 和 archlinux 将要共存在一个硬盘上的话，往往要在 win10 使用的分区上分出空闲硬盘空间给 archlinux。这里建议至少分 128GB 给 archlinux。

1.右键点击`开始菜单` > 点击 `磁盘管理`

2.右键点击 `需要压缩的分区` > 点击 `压缩卷`

3.在 `输入压缩空间量(MB)` 输入需要分给 archlinux 的空闲硬盘空间大小。假设分配 `128GB` 则输入 `131072`（1GB = 1024MB，128GB = 128 * 1024MB = 131072MB

4.点击 `压缩`，完成之后关闭磁盘管理即可

>请不要做多余的动作！不要在这里为分出的硬盘空间创建分区！

### EFI 分区

如果 archlinux 需要和 Windows 共存在一个硬盘上，需要通过 DiskGenius 或其他分区软件检查 EFI 分区容量不小于 256MB，如果小于，可能需要扩容（推荐，但可能不太好整）或者按照 [ArchWiki 提供的第三种挂载方式](https://wiki.archlinuxcn.org/wiki/EFI_%E7%B3%BB%E7%BB%9F%E5%88%86%E5%8C%BA#%E5%85%B8%E5%9E%8B%E6%8C%82%E8%BD%BD%E7%82%B9) 新增一个额外的挂载点。

## 获取 Bitlocker 恢复密钥(可选)

若 win10 分区使用了 🔐 Bitlocker 加密，请提前获取恢复密钥。

关于解锁密钥的查找请参阅 [Microsoft 相关页面](https://support.microsoft.com/zh-cn/windows/security/encryption/find-your-bitlocker-recovery-key)。

一般来说使用与 win10 相同的微软账号登录 [aka.ms 相关页面](https://aka.ms/myrecoverykey) 即可获取。

## 进入主板bios



**插入U盘，开机** 
