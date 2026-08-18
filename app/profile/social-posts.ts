export type SocialPost = {
  id: string;
  type: "image" | "video";
  title: string;
  alt: string;
  src: string;
  poster?: string;
  instagramUrl?: string;
};

export const INSTAGRAM_PROFILE_URL = "https://www.instagram.com/design_reimon/?hl=ja";

export const socialPosts: SocialPost[] = [
  {
    id: "social-01",
    type: "image",
    title: "進撃の粗チン",
    alt: "都市の上に立つ巨大な人物の加工画像",
    src: "/images/social/social-01.webp",
  },
  {
    id: "social-02",
    type: "image",
    title: "綾波 レイモンの痛車",
    alt: "スポーツカーの側面に人物を合成した画像",
    src: "/images/social/social-02.webp",
  },
  {
    id: "social-03",
    type: "video",
    title: "小栗 一瞬も投票行きます",
    alt: "白いシャツの人物が投票を呼びかける動画",
    src: "/images/social/social-03.mp4",
    poster: "/images/social/social-03-poster.webp",
  },
  {
    id: "social-04",
    type: "video",
    title: "レイモンしかいない\nマッチングアプリ",
    alt: "屋外で人物がこちらを向いている動画",
    src: "/images/social/social-04.mp4",
    poster: "/images/social/social-04-poster.webp",
  },
  {
    id: "social-05",
    type: "video",
    title: "モテマインド",
    alt: "ネクタイ姿の人物が映る動画",
    src: "/images/social/social-05.mp4",
    poster: "/images/social/social-05-poster.webp",
  },
  {
    id: "social-06",
    type: "video",
    title: "小栗旬のそっくりさん",
    alt: "アリーナの大型スクリーンに人物写真が映る動画",
    src: "/images/social/social-06.mp4",
    poster: "/images/social/social-06-poster.webp",
  },
];
