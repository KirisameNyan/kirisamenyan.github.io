import type { MusicPlayerConfig } from "../types/musicConfig";

// 音乐播放器配置
export const musicPlayerConfig: MusicPlayerConfig = {
	// 是否在导航栏显示音乐播放器入口
	showInNavbar: true,

	// 是否在侧边栏显示音乐播放器组件
	showInSidebar: true,

	// 使用方式："meting" 使用 Meting API，"local" 使用本地音乐列表
	mode: "local",

	// 默认音量 (0-1)
	volume: 0.7,

	// 播放模式：'list'=列表循环, 'one'=单曲循环, 'random'=随机播放
	playMode: "list",

	// 是否显启用歌词
	showLyrics: false,

	// Meting API 配置
	meting: {
		// Meting API 地址
		// 默认使用官方 API，也可以使用自定义 API
		api: "https://api.i-meto.com/meting/api?server=:server&type=:type&id=:id&r=:r",
		// 音乐平台：netease=网易云音乐, tencent=QQ音乐, kugou=酷狗音乐, xiami=虾米音乐, baidu=百度音乐
		server: "netease",
		// 类型：song=单曲, playlist=歌单, album=专辑, search=搜索, artist=艺术家
		type: "playlist",
		// 歌单/专辑/单曲 ID 或搜索关键词
		id: "10046455237",
		// 认证 token（可选）
		auth: "",
		// 备用 API 配置（当主 API 失败时使用）
		fallbackApis: [
			"https://api.injahow.cn/meting/?server=:server&type=:type&id=:id",
			"https://api.moeyao.cn/meting/?server=:server&type=:type&id=:id",
		],
	},

	// 本地音乐配置（当 mode 为 'local' 时使用）
	// 1. 支持传入歌词文件的路径
	// lrc: "/assets/music/lrc/使一颗心免于哀伤-哼唱.lrc",
	// 2. 或者直接填入歌词字符串内容
	// lrc: "[00:00.00]歌词内容...",
	local: {
		playlist: [
			{
				name: "帝国少女",
				artist: "初音ミク R Sound Design",
				url: "/assets/music/track-01.mp3",
				cover: "/assets/music/covers/track-01.jpg",
				lrc: "",
			},
			{
				name: "ハローマリーナ",
				artist: "稲葉曇 歌愛ユキ 初音ミク",
				url: "/assets/music/track-02.mp3",
				cover: "/assets/music/covers/track-02.jpg",
				lrc: "",
			},
			{
				name: "私は雨",
				artist: "稲葉曇 歌愛ユキ",
				url: "/assets/music/track-03.mp3",
				cover: "/assets/music/covers/track-03.jpg",
				lrc: "",
			},
			{
				name: "うつしあそび",
				artist: "稲葉曇 歌愛ユキ",
				url: "/assets/music/track-04.mp3",
				cover: "/assets/music/covers/track-04.jpg",
				lrc: "",
			},
			{
				name: "きみに回帰線",
				artist: "稲葉曇 歌愛ユキ",
				url: "/assets/music/track-05.mp3",
				cover: "/assets/music/covers/track-05.jpg",
				lrc: "",
			},
			{
				name: "ギターと孤独と蒼い惑星",
				artist: "結束バンド",
				url: "/assets/music/track-06.mp3",
				cover: "/assets/music/covers/track-06.jpg",
				lrc: "",
			},
			{
				name: "親愛なるあなたは火葬",
				artist: "虻瀬",
				url: "/assets/music/track-07.mp3",
				cover: "/assets/music/covers/track-07.jpg",
				lrc: "",
			},
			{
				name: "最愛なるあなたは花葬",
				artist: "虻瀬",
				url: "/assets/music/track-08.mp3",
				cover: "/assets/music/covers/track-08.jpg",
				lrc: "",
			},
			{
				name: "dogdog",
				artist: "虻瀬",
				url: "/assets/music/track-09.mp3",
				cover: "/assets/music/covers/track-09.jpg",
				lrc: "",
			},
			{
				name: "砂の惑星",
				artist: "米津玄師 初音ミク",
				url: "/assets/music/track-10.mp3",
				cover: "/assets/music/covers/track-10.jpg",
				lrc: "",
			},
			{
				name: "プロポーズ",
				artist: "内緒のピアス 可不",
				url: "/assets/music/track-11.mp3",
				cover: "/assets/music/covers/track-11.jpg",
				lrc: "",
			},
			{
				name: "黄昏ホログラム",
				artist: "神様うさぎ 初音ミク",
				url: "/assets/music/track-12.mp3",
				cover: "/assets/music/covers/track-12.jpg",
				lrc: "",
			},
			{
				name: "月が綺麗ねと言われたい！",
				artist: "柿崎ユウタ",
				url: "/assets/music/track-13.mp3",
				cover: "/assets/music/covers/track-13.jpg",
				lrc: "",
			},
			{
				name: "バカみたいに",
				artist: "柿崎ユウタ",
				url: "/assets/music/track-14.mp3",
				cover: "/assets/music/covers/track-14.jpg",
				lrc: "",
			},
			{
				name: "Mr. Broken Heart",
				artist: "松下優也",
				url: "/assets/music/track-15.mp3",
				cover: "/assets/music/covers/track-15.jpg",
				lrc: "",
			},
			{
				name: "反乌托邦",
				artist: "乌托邦P",
				url: "/assets/music/track-16.mp3",
				cover: "/assets/music/covers/track-16.jpg",
				lrc: "",
			},
			{
				name: "猛独が襲う",
				artist: "一二三 初音ミク",
				url: "/assets/music/track-17.mp3",
				cover: "/assets/music/covers/track-17.jpg",
				lrc: "",
			},
			{
				name: "リリィ (feat. 倚水)",
				artist: "倚水 吐息",
				url: "/assets/music/track-18.mp3",
				cover: "/assets/music/covers/track-18.jpg",
				lrc: "",
			},
			{
				name: "心の記憶(feat.Miku)",
				artist: "A-39 初音ミク 沙包P",
				url: "/assets/music/track-19.mp3",
				cover: "/assets/music/covers/track-19.jpg",
				lrc: "",
			},
			{
				name: "回転を止めた惑星(feat.初音ミク)",
				artist: "A-39 沙包P 初音ミク",
				url: "/assets/music/track-20.mp3",
				cover: "/assets/music/covers/track-20.jpg",
				lrc: "",
			},
			{
				name: "雪降り、メリクリ(feat.Miku)",
				artist: "A-39 沙包P 初音ミク",
				url: "/assets/music/track-21.mp3",
				cover: "/assets/music/covers/track-21.jpg",
				lrc: "",
			},
			{
				name: "Frozen Heart(feat.初音ミク)",
				artist: "A-39 沙包P 初音ミク",
				url: "/assets/music/track-22.mp3",
				cover: "/assets/music/covers/track-22.jpg",
				lrc: "",
			},
			{
				name: "WATER(Feat.Miku)",
				artist: "A-39 沙包P 初音ミク",
				url: "/assets/music/track-23.mp3",
				cover: "/assets/music/covers/track-23.jpg",
				lrc: "",
			},
			{
				name: "We Leave The World Together(feat.初音ミク)",
				artist: "A-39 沙包P 初音ミク",
				url: "/assets/music/track-24.mp3",
				cover: "/assets/music/covers/track-24.jpg",
				lrc: "",
			},
			{
				name: "雪降り、メリクリ(Instruments)",
				artist: "A-39",
				url: "/assets/music/track-25.mp3",
				cover: "/assets/music/covers/track-25.jpg",
				lrc: "",
			},
			{
				name: "Two Different Worlds",
				artist: "KoruSe mzmff",
				url: "/assets/music/track-26.mp3",
				cover: "/assets/music/covers/track-26.jpg",
				lrc: "",
			},
		],
	},
};
