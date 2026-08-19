import type { Metadata } from "next";
import GeneralProfilePage from "./profile/GeneralProfilePage";
import "./profile/profile.css";

export const metadata: Metadata = {
  title: "青木玲門｜世界一ふざけた公式プロフィール",
  description:
    "長野県長野市を拠点に活動する、人手不足対策DXアドバイザー・青木玲門の公式プロフィール。業務改善システム、採用ホームページ、企業ブランディングを一貫して支援します。",
};

export default function HomePage() {
  return <GeneralProfilePage />;
}
