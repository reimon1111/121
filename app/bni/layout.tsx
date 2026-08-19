import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "青木玲門｜世界一ふざけたBNI 1to1プロフィール",
  description:
    "BNIメンバー向け。人手不足対策DXアドバイザー・青木玲門の人間性、G.A.I.N.S.、仕事内容、紹介してほしい方が分かる、世界一ふざけた1to1攻略サイト。",
  robots: {
    index: false,
    follow: false,
  },
};

export default function BniLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
