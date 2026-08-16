"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { flushSync } from "react-dom";

const careers = [
  { no: "01", place: "長野", title: "1987年 9月24日 長野県に爆誕", note: "この時点では、まだ小栗一瞬ではない。", src: "/images/timeline-birth.jpeg", alt: "青木玲門の誕生を表現した画像" },
  { no: "02", place: "東京", title: "デザイン専門学校 2年", note: "デッサンを学ぶ。なお、才能は最後まで輪郭を見せなかった。", src: "/images/timeline-design-school-drawing.png", alt: "デザイン学校で石膏デッサンをする青木玲門" },
  { no: "03", place: "神奈川", title: "ダーツマシン営業 3年", note: "ダーツマシンを売りながら営業力を習得。的に刺す技術だけは未実装。", src: "/images/timeline-darts-sales.png", alt: "ダーツを大きく外す青木玲門" },
  { no: "04", place: "東京", title: "Web制作会社 4年", note: "Web制作の基礎を叩き込まれる。締切という名の敵と毎日戦う。", src: "/images/timeline-web-company.jpg", alt: "Web制作会社時代を表現したパロディ画像", contain: true },
  { no: "05", place: "長野", title: "パチンコ店 広告宣伝課 4年", note: "派手なデザインは正義。最終的に、自分自身をパチンコ台にした。(嘘)", src: "/images/timeline-pachinko-cr-aoki-reimon.png", alt: "架空のパチンコ台CR青木玲門" },
  { no: "06", place: "現在", title: "ボーダレスとして独立", note: "Webもアプリも、仕事も笑いも境界なし。", src: "/images/timeline-borderless-independent.png", alt: "独立後すべての業務を一人で担当する青木玲門", current: true },
];

const works = [
  { src: "/images/work-leon.jpg", title: "雑誌LEONの表紙に\n勝手に就任", tag: "紳士", category: "カテゴリー 店舗工事業 Wさん" },
  { src: "/images/work-health.jpg", title: "健康は足元から。\nたぶん。", tag: "美容", category: "カテゴリー 女性専用インソール販売 Kさん" },
  { src: "/images/work-outrage.jpg", title: "全員悪人。\n本人だけ笑顔。", tag: "映画", category: "カテゴリー 生命保険(法人) Mさん" },
  { src: "/images/work-angel.jpg", title: "天使になったメンバー", tag: "神話", category: "カテゴリー 確定拠出年金 Kさん" },
  { src: "/images/work-topgun.jpg", title: "飛ばないトップガン", tag: "航空", category: "カテゴリー 国産自動車整備 Kさん" },
  { src: "/images/work-hentai.jpg", title: "間違いありません。\n変態です。", tag: "告白", category: "カテゴリー 車体整備士による車検整備 Kさん" },
  { src: "/images/work-it.jpg", title: "そこのボウヤ\nリトミックやらない？", tag: "恐怖", category: "カテゴリー リトミック音楽講師 Iさん" },
  { src: "/images/work-support.jpg", title: "私が全力でサポートします", tag: "支援", category: "ディレクター Yさん" },
  { src: "/images/work-moon.jpg", title: "月にかわって\nお仕置きよ", tag: "変身", category: "カテゴリー 大人のメンズ脱毛 Mさん" },
];

const topics = ["ふざけた企画", "マッチングアプリ", "お酒", "怒られた話", "レイモン教"];

const referrals = [
  {
    id: "hire",
    src: "/images/referral-office-hiring.png",
    alt: "書類と電話に追われ、事務員さんをもう一人採用しようとしている経営者",
    target: "事務員さんをもう一人\n採用しようとしている経営者",
    prefix: "事務員さんをもう一人",
    emphasis: "採用しようとしている経営者",
    shortTitle: "事務員を採用予定の経営者",
    signals: ["人が足りない", "事務員を採用したい", "Excelが増えすぎた"],
    question: "「新しく採用する人には、どんな仕事をしてもらう予定ですか？」",
    answer: "「入力や集計などの事務作業です」",
    introduction: "「人を増やす前に、その仕事自体を減らす仕組みを作っている青木玲門さんがいるよ。一度話してみない？」",
    difficulty: "★★☆☆☆",
    difficultyNote: "小栗旬問題に触れなければ、比較的安全に紹介できます。",
    copyText: "人手不足になると、最初に採用を考えがちですが、人を増やす前に業務自体を減らす方法もあります。業務整理から実際のシステム開発まで一貫して対応している、人手不足対策DXアドバイザーの青木玲門さんをご紹介します。一度お話ししてみませんか？",
  },
  {
    id: "field",
    src: "/images/referral-waterworks-owner.png",
    alt: "作業着で現場作業をしながら電話対応している水道工事会社の社長",
    target: "従業員5名以上の\nいつ会っても作業着を着ている\n水道工事会社の社長さん",
    prefix: "従業員5名以上の\nいつ会っても",
    emphasis: "作業着を着ている水道工事会社の社長さん",
    shortTitle: "現場を離れられない水道工事会社の社長",
    signals: ["俺がいないと現場が回らない", "職人からの電話が多い", "現場後に事務作業"],
    question: "「社長が明日1日、現場に出なくても会社は回りますか？」",
    answer: "「いや、俺がいないと現場が回らないよ」",
    introduction: "「社長が現場に出る時間を減らす仕組みを作っている青木さんがいるよ。一度話してみない？」",
    difficulty: "★★☆☆☆",
    difficultyNote: "「俺がいないと回らない」は、青木玲門召喚の確定演出です。",
    copyText: "〇〇さん、長野で「人手不足対策DXアドバイザー」として活動している青木玲門さんをご紹介します！\n\n青木さんは、現場の進捗や報告を見える化し、社長が現場に出る時間や、電話・確認・事務作業を少しずつ減らす仕組みを作っている方です。\n\n〇〇さんのお仕事と相性が良いと思い、お繋ぎしました。\n\nお二人とも、よろしくお願いします！",
  },
  {
    id: "goose",
    src: "/images/referral-construction-advisors.png",
    alt: "建設業を顧問先に持つ税理士と司法書士",
    target: "建設業を顧問先に持つ\n税理士さん・司法書士さん",
    prefix: "建設業を顧問先に持つ",
    emphasis: "税理士さん・司法書士さん",
    shortTitle: "建設業に強い税理士・司法書士",
    signals: ["建設会社の顧問先が多い", "顧問先から人手不足の相談を受ける", "「人が足りない」とよく聞く"],
    question: "「顧問先で『人が足りない！』と悲鳴を上げている建設会社の社長さん、いませんか？」",
    answer: "「いるよ。求人を出しても来ないって、いつも言っている社長がいるよ」",
    introduction: "「顧問先の人手不足を、業務改善で助ける青木さんがいるよ。一度話してみない？」",
    afterword: "その税理士さん・司法書士さんと青木玲門がつながれば、一社だけでなく、複数の建設会社を紹介していただける可能性があります。",
    difficulty: "★★★☆☆",
    difficultyNote: "一度信頼関係ができれば、紹介という金の卵を産み続ける可能性があります。いきなり卵を取りに行かず、まずはガチョウと仲良くなってください。",
    copyText: "〇〇さん、長野で「人手不足対策DXアドバイザー」として活動している青木玲門さんをご紹介します！\n\n青木さんは、建設会社の仕事を見直し、確認・連絡・入力・集計などの無駄を減らして、少人数でも回りやすい仕組みをつくっている方です。\n\n〇〇さんの顧問先で、人手不足や業務負担に困っている建設会社があれば、お力になれると思います。\n\nお二人とも、よろしくお願いします！",
  },
];

const gains = [
  {
    letter: "G",
    no: "01",
    title: "Goals",
    japanese: "目標",
    stamp: "暴走予定",
    items: [
      "長野で一番クレイジーな人と呼ばれる存在になる！",
      "筋肉ムキムキになって白のタンクトップが似合う男になる",
      "面白さで仕事が舞い込む世界を作る",
    ],
  },
  {
    letter: "A",
    no: "02",
    title: "Accomplishments",
    japanese: "実績",
    stamp: "前科あり",
    items: [
      "竜胆チャプターでコンプライアンスの限界に挑む画像を量産し、定例会を盛り上げた。最終的にBNI本部から正式に怒られた。",
      "「才能の無駄遣い」という最高級の褒め言葉を多数受賞",
    ],
  },
  {
    letter: "I",
    no: "03",
    title: "Interests",
    japanese: "興味",
    stamp: "だいたい誰得",
    items: [
      "怒られそうな企画を真剣に考えること",
      "「これ誰得？」と言われる作品づくり",
    ],
  },
  {
    letter: "N",
    no: "04",
    title: "Networks",
    japanese: "人脈",
    stamp: "生存ネットワーク",
    items: [
      "守成クラブ長野みらい",
      "中小企業家同友会 しなの支部",
      "怒られても仲良くしてくれる優しい仲間たち",
    ],
  },
  {
    letter: "S",
    no: "05",
    title: "Skills",
    japanese: "スキル",
    stamp: "取扱注意",
    items: [
      "プロコンプライアンス違反合成クリエイター",
      "気持ちの良いセクハラ",
      "人の特徴を誇張して笑いに変える能力",
    ],
  },
];

const getBniYear = () => {
  const japanDate = new Intl.DateTimeFormat("ja-JP", {
    timeZone: "Asia/Tokyo",
    year: "numeric",
    month: "numeric",
  }).formatToParts(new Date());
  const year = Number(japanDate.find((part) => part.type === "year")?.value ?? 2021);
  const month = Number(japanDate.find((part) => part.type === "month")?.value ?? 8);

  return Math.max(1, year - 2021 + (month >= 8 ? 1 : 0));
};

export default function Home() {
  const [judgement, setJudgement] = useState("まだ判定されていません。公平な目でお願いします。");
  const [judgementType, setJudgementType] = useState<"yes" | "instant" | "no" | null>(null);
  const [activeWork, setActiveWork] = useState(0);
  const [unsealed, setUnsealed] = useState(false);
  const [copied, setCopied] = useState(false);
  const [activeReferral, setActiveReferral] = useState<string | null>(null);
  const [bniYear, setBniYear] = useState(getBniYear);
  const featuredWorkRef = useRef<HTMLDivElement>(null);
  const workSelectorRef = useRef<HTMLDivElement>(null);
  const referralDetailRef = useRef<HTMLDivElement>(null);
  const copyTimeoutRef = useRef<number | null>(null);
  const timelineLightboxTriggerRef = useRef<HTMLButtonElement | null>(null);
  const [timelineLightbox, setTimelineLightbox] = useState<{
    src: string;
    alt: string;
    title: string;
    episode: string;
  } | null>(null);

  useEffect(() => {
    setBniYear(getBniYear());
  }, []);

  const closeTimelineLightbox = () => {
    setTimelineLightbox(null);
    window.requestAnimationFrame(() => {
      timelineLightboxTriggerRef.current?.focus();
    });
  };

  useEffect(() => {
    if (!timelineLightbox) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeTimelineLightbox();
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [timelineLightbox]);

  const openTimelineLightbox = (
    item: { src: string; alt: string; title: string; episode: string },
    trigger: HTMLButtonElement,
  ) => {
    timelineLightboxTriggerRef.current = trigger;
    setTimelineLightbox(item);
  };

  const judge = (type: "yes" | "instant" | "no") => {
    const messages = {
      yes: "愛してます。あなたはとてもいい人です！",
      instant: "正解です。その“一瞬”を11年以上こすり続けています。",
      no: "異議は認めません。実際に私をみていただきご判断ください。",
    };
    setJudgement(messages[type]);
    setJudgementType(type);
  };

  const prefersReducedMotion = () =>
    typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const isMobileWorksView = () =>
    typeof window !== "undefined" && window.matchMedia("(max-width: 700px)").matches;

  const selectWork = (index: number) => {
    flushSync(() => {
      setActiveWork(index);
    });
    if (!isMobileWorksView()) return;
    featuredWorkRef.current?.scrollIntoView({
      behavior: prefersReducedMotion() ? "auto" : "smooth",
      block: "start",
    });
  };

  const scrollToWorkSelector = () => {
    workSelectorRef.current?.scrollIntoView({
      behavior: prefersReducedMotion() ? "auto" : "smooth",
      block: "start",
    });
  };

  const selectedReferral = referrals.find((item) => item.id === activeReferral) ?? null;
  const otherReferrals = referrals.filter((item) => item.id !== activeReferral);
  const difficultyCount = selectedReferral?.difficulty.replace(/☆/g, "").length ?? 0;

  const resetReferralCopy = () => {
    setCopied(false);
    if (copyTimeoutRef.current) {
      window.clearTimeout(copyTimeoutRef.current);
      copyTimeoutRef.current = null;
    }
  };

  const scrollToReferralDetail = () => {
    referralDetailRef.current?.scrollIntoView({
      behavior: prefersReducedMotion() ? "auto" : "smooth",
      block: "start",
    });
  };

  const handleSelectReferral = (referralId: string) => {
    resetReferralCopy();
    if (referralId === activeReferral) {
      scrollToReferralDetail();
      return;
    }
    setActiveReferral(referralId);
  };

  useEffect(() => {
    if (!activeReferral) return;
    const detail = referralDetailRef.current;
    if (!detail) return;
    detail.scrollIntoView({
      behavior: prefersReducedMotion() ? "auto" : "smooth",
      block: "start",
    });
  }, [activeReferral]);

  const copyReferral = async () => {
    if (!selectedReferral) return;
    try {
      await navigator.clipboard.writeText(selectedReferral.copyText);
      setCopied(true);
      if (copyTimeoutRef.current) window.clearTimeout(copyTimeoutRef.current);
      copyTimeoutRef.current = window.setTimeout(() => setCopied(false), 3500);
    } catch {
      setCopied(false);
    }
  };

  return (
    <main>
      <div className="breaking-news" aria-label="お知らせ">
        <div className="ticker"><span>BNI速報｜竜胆チャプターで「小栗旬に一瞬だけ似ている男」を観測　カテゴリーは人手不足対策DXアドバイザー　夏場だけ異常にモテる（虫に）</span></div>
      </div>

      <div className="star-field" aria-hidden="true"><i /><i /><i /></div>

      <div className="site-shell">
        <header className="retro-nav">
          <a className="mini-logo" href="#top"><b>AOKI REIMON</b><small>BNI 1to1専用</small></a>
          <nav aria-label="ページ内ナビゲーション。各項目を押すと該当セクションへ移動します">
            <a href="#who" aria-label="取扱説明セクションへ移動">取扱説明</a>
            <a href="#one-to-one" aria-label="1to1攻略セクションへ移動">1to1攻略</a>
            <a href="#gains" aria-label="G.A.I.N.S.セクションへ移動">G.A.I.N.S.</a>
            <a href="#works" aria-label="封印作品セクションへ移動">封印作品</a>
            <a href="#referral" aria-label="紹介案件セクションへ移動">紹介案件</a>
          </nav>
          <div className="counter">あなたは <b>000038</b> 人目くらい</div>
        </header>

        <section className="hero" id="top">
          <div className="hero-intro">
            <p className="eyebrow">BNIメンバーの皆さまへ</p>
            <p className="eyebrow-note">※一般の方が見ても特に問題ありません</p>
            <h1><span className="hero-title-name">青木玲門の</span><br /><span className="hero-title-sub">世界一ふざけた<br />1to1攻略サイト</span></h1>
            <div className="hero-alert">※世界一は本人調べです。<br />異議は1to1で受け付けます。</div>
          </div>

          <div className="hero-visual">
            <div className="orbit orbit-one" /><div className="orbit orbit-two" />
            <div className="portrait-frame"><img src="/images/reimon-hero.jpg" alt="スーツ姿の青木玲門" /></div>
            <div className="speech speech-one">長野が生んだ<br /><b>変態</b></div>
            <div className="speech speech-two">通称<br /><strong>小栗一瞬</strong><span className="speech-two-note">小栗旬に一瞬<br />似ているから</span></div>
          </div>

          <div className="hero-details">
            <div className="bni-history">
              <span>BNI</span>
              <strong>長野リージョン 竜胆（リンドウ）チャプター所属</strong>
              <small suppressHydrationWarning>入会日 2021年8月 ／ BNI歴 {bniYear}年目</small>
            </div>
            <p className="hero-lead"><span>カテゴリー</span><strong>人手不足対策DXアドバイザー</strong></p>
            <p className="hero-business-copy">
              人を増やす前に、無駄な仕事を減らす。<br />
              少人数でも回る会社の仕組みをつくります。
            </p>
          </div>
          <a href="#who" className="scroll-note" aria-label="青木玲門の紹介へ移動">
            SCROLLすると人間性がバレます ↓
          </a>
        </section>

        <section className="paper-section intro-section" id="who">
          <div className="section-kicker">BEFORE YOUR 1TO1</div>
          <h2>青木玲門って<br /><em>誰だよ？</em></h2>
          <div className="intro-grid">
            <div className="intro-character">
              <img src="/images/reimon-detective.jpg" alt="電柱の陰で双眼鏡と焼きそばパンを持って張り込む青木玲門" />
            </div>
            <div className="profile-copy">
              <p className="big-copy">
                ムダな仕事も、採用の悩みも、会社の見せ方も。<br />
                <mark>システムとデザインで、まとめて整えます。</mark>
              </p>
              <p className="intro-bio">
                <span>長野市を拠点に、業務改善システム・採用ホームページ・企業ブランディングを手がけています。</span>
                <span>業務の整理からデザイン、実装まで一貫して対応し、少人数でも回る会社の仕組みをつくります。</span>
                <span>デザイン歴は11年超。現在は「ボーダレス」として活動しています。</span>
              </p>
              <dl className="quick-profile">
                <div className="profile-primary"><dt>屋号</dt><dd>ボーダレス</dd></div>
                <div className="profile-primary"><dt>生年月日</dt><dd>1987.09.24</dd></div>
                <div className="profile-primary"><dt>血液型</dt><dd>優しい綺麗好きのA型</dd></div>
                <div><dt>拠点</dt><dd>長野県長野市</dd></div>
                <div><dt>配偶者</dt><dd>未実装<small>沖縄料理屋店主のヒモ</small></dd></div>
                <div><dt>仲間</dt><dd>猫1・イモリ2・ドジョウ3</dd></div>
                <div><dt>燃料</dt><dd>お酒</dd></div>
                <div><dt>特殊能力</dt><dd>筋トレ・ガヤ</dd></div>
              </dl>
            </div>
          </div>

          <div className={`judge-box ${judgementType ? `judge-${judgementType}` : ""}`} id="oguri-judge">
            <div className="judge-comparison">
              <h3 className="judge-comparison-claim">
                本人は、
                <strong>小栗旬に似ている</strong>
                <span>と言い張っています。</span>
              </h3>

              <div className="judge-photo-grid">
                <figure className="judge-photo-card judge-photo-reimon">
                  <div className="judge-photo-frame">
                    <img src="/images/reimon-judge.jpg" alt="青木玲門の比較用写真" />
                  </div>
                  <figcaption>
                    <strong>青木 玲門</strong>
                    <span>自称・小栗一瞬</span>
                  </figcaption>
                </figure>

                <div className="judge-versus" aria-hidden="true">VS</div>

                <figure className="judge-photo-card judge-photo-oguri">
                  <div className="judge-photo-frame">
                    <img src="/images/oguri-shun-judge.jpg" alt="小栗旬さんの比較用写真" />
                  </div>
                  <figcaption>
                    <strong>小栗 旬</strong>
                    <span>本家</span>
                  </figcaption>
                </figure>
              </div>

              <p className="judge-comparison-note">
                ※メガネ・ヒゲ・顎の角度による印象操作を含みます。
              </p>
            </div>

            <div className="judge-question">
              <b className="judge-final-stamp">最終審議</b>
              <span>緊急アンケート</span>
              <h3>レイモンは小栗旬に似ていますか？</h3>
              <p>あなたの答えを、下の3つから押してください。</p>
            </div>
            <div className="judge-buttons" role="group" aria-label="小栗旬に似ているか回答する">
              <button aria-pressed={judgementType === "yes"} className={judgementType === "yes" ? "active" : ""} onClick={() => judge("yes")}>
                <small>回答 01</small><b>{judgementType === "yes" ? "✓ " : ""}似ている</b>
              </button>
              <button aria-pressed={judgementType === "instant"} className={judgementType === "instant" ? "active" : ""} onClick={() => judge("instant")}>
                <small>回答 02</small><b>{judgementType === "instant" ? "✓ " : ""}一瞬だけ</b>
              </button>
              <button aria-pressed={judgementType === "no"} className={judgementType === "no" ? "active" : ""} onClick={() => judge("no")}>
                <small>回答 03</small><b>{judgementType === "no" ? "✓ " : ""}異議あり</b>
              </button>
            </div>
            <div className="judge-result" aria-live="polite">
              <span>{judgementType ? "判定完了！" : "判定結果"}</span>
              <p key={judgementType ?? "waiting"}>{judgement}</p>
            </div>
          </div>
        </section>

        <section className="dark-section abilities-section" id="business">
          <div className="section-kicker yellow">REIMON&apos;S BUSINESS</div>
          <h2>
            で、結局<br />
            <em>何屋なんだよ？</em>
          </h2>
          <p className="ability-intro">
            会社の「ムダ・採用・見せ方」を、<br />
            システムとデザインで整える人です。
          </p>
          <div className="ability-grid">
            <article>
              <span className="service-label">SYSTEM</span>
              <h3>業務改善システム</h3>
              <div className="service-image">
                <button
                  type="button"
                  className="timeline-image-button"
                  onClick={(event) => openTimelineLightbox({
                    src: "/images/services/service-business-improvement-system-v4.png",
                    alt: "無駄な仕事を業務改善システムで整理する青木玲門",
                    title: "業務改善システム",
                    episode: "SERVICE",
                  }, event.currentTarget)}
                  aria-label="業務改善システムの画像を拡大表示"
                >
                  <Image
                    src="/images/services/service-business-improvement-system-v4.png"
                    alt="無駄な仕事を業務改善システムで整理する青木玲門"
                    width={1536}
                    height={1024}
                    sizes="(max-width: 900px) 100vw, 360px"
                  />
                  <span className="timeline-zoom-hint" aria-hidden="true">
                    <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                      <circle cx="11" cy="11" r="7" />
                      <path d="m20 20-4-4" />
                    </svg>
                    <span>click</span>
                  </span>
                </button>
              </div>
              <strong className="service-catch">人を増やす前に、まず仕事を減らす。</strong>
              <p className="service-description">入力・集計・確認・情報共有などのムダな作業をシステム化。少人数でも現場が回る仕組みをつくります。</p>
              <p className="service-note">新しく人を採用する前に、その仕事自体を減らせないか、一度ご相談ください。</p>
            </article>
            <article>
              <span className="service-label">RECRUIT</span>
              <h3>採用ホームページ</h3>
              <div className="service-image">
                <button
                  type="button"
                  className="timeline-image-button"
                  onClick={(event) => openTimelineLightbox({
                    src: "/images/services/service-recruitment-website-v2.png",
                    alt: "さまざまな職種の青木玲門が登場する採用ホームページ",
                    title: "採用ホームページ",
                    episode: "SERVICE",
                  }, event.currentTarget)}
                  aria-label="採用ホームページの画像を拡大表示"
                >
                  <Image
                    src="/images/services/service-recruitment-website-v2.png"
                    alt="さまざまな職種の青木玲門が登場する採用ホームページ"
                    width={1536}
                    height={1024}
                    sizes="(max-width: 900px) 100vw, 360px"
                  />
                  <span className="timeline-zoom-hint" aria-hidden="true">
                    <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                      <circle cx="11" cy="11" r="7" />
                      <path d="m20 20-4-4" />
                    </svg>
                    <span>click</span>
                  </span>
                </button>
              </div>
              <strong className="service-catch">求人票だけでは、御社の魅力は伝わらない。</strong>
              <p className="service-description">仕事の面白さや社風を引き出し、求職者が「ここで働きたい」とワクワクする採用ホームページをつくります。</p>
              <p className="service-note">普通の採用サイトは、たぶん作りません。</p>
            </article>
            <article>
              <span className="service-label">BRANDING</span>
              <h3>企業ブランディング</h3>
              <div className="service-image">
                <button
                  type="button"
                  className="timeline-image-button"
                  onClick={(event) => openTimelineLightbox({
                    src: "/images/services/service-corporate-branding.png",
                    alt: "ロゴ・名刺・動画・チラシ・パンフレット・ホームページを統一する企業ブランディング",
                    title: "企業ブランディング",
                    episode: "SERVICE",
                  }, event.currentTarget)}
                  aria-label="企業ブランディングの画像を拡大表示"
                >
                  <Image
                    src="/images/services/service-corporate-branding.png"
                    alt="ロゴ・名刺・動画・チラシ・パンフレット・ホームページを統一する企業ブランディング"
                    width={1536}
                    height={1024}
                    sizes="(max-width: 900px) 100vw, 360px"
                  />
                  <span className="timeline-zoom-hint" aria-hidden="true">
                    <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                      <circle cx="11" cy="11" r="7" />
                      <path d="m20 20-4-4" />
                    </svg>
                    <span>click</span>
                  </span>
                </button>
              </div>
              <strong className="service-catch">いい会社なのに、見せ方で損していませんか？</strong>
              <p className="service-description">ロゴ・パンフレット・プレゼン資料・動画まで、会社らしさを一貫して設計。選ばれ、覚えられる見せ方をつくります。</p>
              <p className="service-note">爪痕は残します。遺恨は残さないよう努力します。</p>
            </article>
          </div>
          <div className="power-meter">
            <div><span>デザイン</span><i style={{ width: "94%" }} /><b>94</b></div>
            <div><span>アプリ</span><i style={{ width: "98%" }} /><b>98</b></div>
            <div><span>筋トレ</span><i style={{ width: "63%" }} /><b>63</b></div>
            <div><span>変態</span><i className="over" style={{ width: "100%" }} /><b>120</b></div>
          </div>
        </section>

        <section className="paper-section one-to-one" id="one-to-one">
          <div className="section-kicker">HOW TO 1to1 WITH REIMON</div>
          <h2>青木玲門との1to1<br /><em>攻略マニュアル。</em></h2>
          <div className="topic-cloud">
            {topics.map((topic, index) => <span key={topic} style={{ transform: `rotate(${index % 2 ? 2 : -2}deg)` }}>{topic}</span>)}
          </div>
          <div className="one-to-one-grid">
            <article>
              <img src="/images/one-to-one-laugh.png" alt="机を叩いて大笑いしている様子" />
              <h3>とりあえず笑う</h3>
              <p>最初の3分で一度笑っておくと、その後の話がスムーズです。</p>
            </article>
            <article>
              <img src="/images/one-to-one-talk.png" alt="面白い話で相手の目が輝いている様子" />
              <h3>面白い話を振る</h3>
              <p>急に目が輝きます。仕事の相談より先に企画が始まる場合があります。</p>
            </article>
            <article>
              <img src="/images/one-to-one-serious.png" alt="真剣に話を聞いてメモを取っている様子" />
              <h3>とかいって意外と真面目</h3>
              <p>ぜひ、お悩みを教えてください。<br />私の人脈の中にお役に立てそうな方がいれば、おつなぎします！</p>
            </article>
          </div>
          <blockquote>「強い願望は、HENTAIを極めること。<br />ただし仕事は、びっくりするほど真面目。」</blockquote>
        </section>

        <section className="gains-section" id="gains" aria-labelledby="gains-title">
          <div className="gains-heading">
            <span>BNI 1to1 CHARACTER FILE</span>
            <h2 id="gains-title" aria-label="G.A.I.N.S.">
              {"GAINS".split("").map((letter) => <b key={letter}>{letter}<i>.</i></b>)}
            </h2>
            <p>レイモンを構成する、5つの危険成分。</p>
          </div>

          <nav className="gains-index" aria-label="G.A.I.N.S.早見表。押すと該当カードへ移動します">
            {gains.map((gain) => (
              <a
                key={gain.letter}
                href={`#gain-${gain.letter.toLowerCase()}`}
                className={`gains-index-item gains-accent-${gain.letter.toLowerCase()}`}
                aria-label={`${gain.letter} ${gain.japanese}へ移動`}
              >
                <b aria-hidden="true">{gain.letter}</b>
                <span>{gain.japanese}</span>
              </a>
            ))}
          </nav>

          <div className="gains-grid">
            {gains.map((gain) => (
              <article
                key={gain.letter}
                id={`gain-${gain.letter.toLowerCase()}`}
                className={`gains-file gains-accent-${gain.letter.toLowerCase()}`}
              >
                <header className="gains-file-head">
                  <div className="gains-file-letter" aria-hidden="true">{gain.letter}</div>
                  <div className="gains-file-titles">
                    <p className="gains-file-en">{gain.title}</p>
                    <h3>{gain.japanese}</h3>
                  </div>
                  <span className="gains-file-stamp" aria-hidden="true">{gain.stamp}</span>
                </header>
                <ol className="gains-file-list">
                  {gain.items.map((item, index) => (
                    <li key={item}>
                      <span className="gains-file-num" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                      <span className="gains-file-text">{item}</span>
                    </li>
                  ))}
                </ol>
              </article>
            ))}
          </div>
        </section>

        <section className="paper-section history-section" id="history">
          <div className="section-kicker">REIMON&apos;S BIOGRAPHY SHEET</div>
          <h2>すべては今につながる<br /><em>壮大な伏線だった。</em></h2>
          <div className="timeline">
            {careers.map((career) => (
              <article
                key={career.no}
                className={`timeline-card${career.current ? " timeline-card-current" : ""}${career.contain ? " timeline-card-image-contain" : ""}`}
              >
                <div className="timeline-image">
                  <button
                    type="button"
                    className="timeline-image-button"
                    onClick={(event) => openTimelineLightbox({
                      src: career.src,
                      alt: career.alt,
                      title: career.title,
                      episode: `EPISODE ${career.no}`,
                    }, event.currentTarget)}
                    aria-label={`${career.title}の画像を拡大表示`}
                  >
                    <img src={career.src} alt={career.alt} loading="lazy" />
                    <span className="timeline-zoom-hint" aria-hidden="true">
                      <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                        <circle cx="11" cy="11" r="7" />
                        <path d="m20 20-4-4" />
                      </svg>
                      <span>click</span>
                    </span>
                  </button>
                  <span className="timeline-place">{career.place}</span>
                  {career.current && <b className="timeline-stamp">伏線回収中</b>}
                </div>
                <div className="timeline-content">
                  <h3>{career.title}</h3>
                  <p>{career.note}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="paper-section works-section" id="works">
          <div className="section-kicker">TOP SECRET ARCHIVES</div>
          <h2>過去に作って、<br /><em>お蔵入りになった作品。</em></h2>
          <p className="section-lead">竜胆チャプターのメンバーの宣材写真を、勝手に（愛を込めて）ふざけた画像へ加工し、定例会でサプライズ発表していた作品たちです。<br /><br />しかし、BNI本部から正式にストップが入り、残念ながら全作品がお蔵入りとなりました…。</p>

          <div className="work-gallery">
            <div ref={workSelectorRef} className="work-selector">
              <div className="work-selector-heading">
                <div>
                  <span>WANTED / CLASSIFIED</span>
                  <h3>見たい黒歴史を選んでください</h3>
                  <p>全9作品・クリックで強制公開</p>
                </div>
                <div className="work-now" aria-live="polite">
                  <small>選択中</small>
                  <b>{String(activeWork + 1).padStart(2, "0")} / 09</b>
                </div>
              </div>
              <div className="work-grid">
                {works.map((work, index) => (
                  <button
                    className={activeWork === index ? "active" : ""}
                    key={work.src}
                    type="button"
                    onClick={() => selectWork(index)}
                    aria-pressed={activeWork === index}
                    aria-label={`${work.title.replace(/\n/g, "")}を大きく表示`}
                  >
                    <img src={work.src} alt="" />
                    <span>{work.tag}</span>
                    {activeWork === index && <b className="work-selected-badge">選択中</b>}
                  </button>
                ))}
              </div>
            </div>

            <div ref={featuredWorkRef} className="featured-work">
              <div className="featured-image">
                <div className="featured-now" aria-live="polite">
                  <small>いま選んだお蔵入り作品</small>
                  <b>{String(activeWork + 1).padStart(2, "0")} / 09</b>
                </div>
                <img key={works[activeWork].src} src={works[activeWork].src} alt={works[activeWork].title.replace(/\n/g, "")} />
              </div>
              <div className="featured-caption">
                <p className="featured-category">
                  {works[activeWork].category.startsWith("カテゴリー ") ? (
                    <>
                      <span>カテゴリー</span>
                      {works[activeWork].category.slice("カテゴリー ".length)}
                    </>
                  ) : (
                    works[activeWork].category
                  )}
                </p>
                <h3>
                  {works[activeWork].title.split("\n").map((line, index) => (
                    <span key={line}>
                      {index > 0 && <br />}
                      {line}
                    </span>
                  ))}
                </h3>
                <button className="work-back" type="button" onClick={scrollToWorkSelector}>別の黒歴史も見る</button>
              </div>
            </div>
          </div>
        </section>

        <section className="warning-section">
          <div className="warning-copy"><span>閲覧注意</span><h2>プロフィール画像が<br />ほぼ事故。</h2><p>本来は人間性を知ってもらうための写真です。人間性が伝わりすぎる可能性があります。</p><button onClick={() => setUnsealed(!unsealed)}>{unsealed ? "そっと封印する" : "封印を解く"}</button></div>
          <div className={`sealed-image ${unsealed ? "is-open" : ""}`}>
            <img src="/images/reimon-puzzle.jpg" alt={unsealed ? "パズル風に加工された青木玲門のプロフィール画像" : "封印されたプロフィール画像"} />
            {!unsealed && <button className="seal" onClick={() => setUnsealed(true)} aria-label="封印を解いてプロフィール画像を表示"><b>封</b><span>クリックで解禁</span></button>}
          </div>
        </section>

        <section className="evolution-section">
          <span className="next-badge">CURRENT MISSION</span>
          <h2>
            <strong>人手不足対策DXアドバイザー</strong>って、
            <br className="evolution-break" />
            何をする人？
          </h2>
          <p className="evolution-answer">会社のムダを見つけ、整理し、必要なところだけ仕組み化する人です。</p>

          <div className="evolution-works">
            <article>
              <span className="evolution-work-no">01</span>
              <h3>見つける</h3>
              <p>二重入力・紙・電話・属人化など、会社に残っているムダを見つける。</p>
            </article>
            <article>
              <span className="evolution-work-no">02</span>
              <h3>減らす</h3>
              <p>やめる・まとめる・自動化する仕事を整理する。</p>
            </article>
            <article>
              <span className="evolution-work-no">03</span>
              <h3>つくる</h3>
              <p>必要な機能だけを、現場で使える仕組みにする。</p>
            </article>
          </div>

          <div className="evolution-change">
            <p className="evolution-change-label">こう変わります</p>
            <div className="evolution-change-row">
              <span className="evolution-change-from">何度も同じ内容を入力</span>
              <span className="evolution-change-arrow" aria-hidden="true"></span>
              <span className="evolution-change-to">一度の入力で自動集計</span>
            </div>
            <div className="evolution-change-row">
              <span className="evolution-change-from">情報が紙・Excel・LINEにバラバラ</span>
              <span className="evolution-change-arrow" aria-hidden="true"></span>
              <span className="evolution-change-to">ひとつの画面でまとめて管理</span>
            </div>
            <div className="evolution-change-row">
              <span className="evolution-change-from">電話で現場の進捗を確認</span>
              <span className="evolution-change-arrow" aria-hidden="true"></span>
              <span className="evolution-change-to">いつでも画面で状況を確認</span>
            </div>
          </div>

          <p className="evolution-result">人を増やす前に、今いる人数で回りやすい会社へ。</p>
        </section>

        <section className="referral-section" id="referral">
          <div className="section-kicker">REFERRAL REQUEST</div>
          <h2>
            <span className="referral-heading-main">
              青木玲門に紹介してほしい
              <span className="referral-heading-nowrap">のは、</span>
            </span>
            <span className="referral-heading-accent">
              この3タイプです。
            </span>
          </h2>

          <div className="referral-picker">
            <p>顔が浮かんだカードを押すと、紹介の質問とセリフが出ます。</p>
          </div>

          <div className="referral-cards">
            {referrals.map((item) => {
              const selected = item.id === activeReferral;
              return (
                <button
                  key={item.id}
                  type="button"
                  className={`referral-card${selected ? " is-selected" : ""}`}
                  aria-expanded={selected}
                  aria-controls="referral-detail"
                  aria-current={selected ? "true" : undefined}
                  aria-label={item.target.replace(/\n/g, "")}
                  onClick={() => handleSelectReferral(item.id)}
                >
                  <span className="referral-card-image">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      sizes="(max-width: 900px) 40vw, 340px"
                      style={{ objectFit: "cover" }}
                    />
                  </span>
                  <span className="referral-card-body">
                    <p className="referral-card-target">
                      {item.prefix && (
                        <span className="referral-card-prefix">
                          {item.prefix}
                        </span>
                      )}
                      <span className="referral-card-emphasis">
                        {item.emphasis}
                      </span>
                    </p>
                    <span className="referral-card-cta">
                      <span className="referral-cta-pc">この方の紹介方法を見る →</span>
                      <span className="referral-cta-sp">紹介方法を見る →</span>
                    </span>
                  </span>
                </button>
              );
            })}
          </div>

          {selectedReferral && (
            <div
              id="referral-detail"
              ref={referralDetailRef}
              className="referral-route"
              aria-live="polite"
            >
              <div key={selectedReferral.id} className="referral-route-body">
                <div className="referral-detail-target">
                  <span>今回紹介してほしい方</span>
                  <strong>
                    {selectedReferral.target.split("\n").map((line) => (
                      <span key={line}>{line}</span>
                    ))}
                  </strong>
                </div>

                <div className="referral-signals">
                  <p className="referral-step"><span>STEP 1</span>こんな言葉を聞いたら</p>
                  <div className="referral-tags">
                    {selectedReferral.signals.map((signal, index) => (
                      <span key={signal} style={{ transform: `rotate(${index % 2 ? 1.5 : -1.5}deg)` }}>{signal}</span>
                    ))}
                  </div>
                </div>

                <div className="referral-script">
                  <p className="referral-step"><span>STEP 2</span>この質問をしてください</p>
                  <div className="referral-chat">
                    <article className="chat-q">
                      <span>質問</span>
                      <p>{selectedReferral.question}</p>
                    </article>
                    <article className="chat-a">
                      <span>返答</span>
                      <p>{selectedReferral.answer}</p>
                    </article>
                  </div>
                  <p className="referral-step"><span>STEP 3</span>この一言で青木玲門を紹介</p>
                  <blockquote>{selectedReferral.introduction}</blockquote>
                  <button className={`referral-copy ${copied ? "is-copied" : ""}`} type="button" onClick={copyReferral} aria-live="polite">
                    {copied ? "コピーしました！そのまま紹介してください" : "紹介文をコピーする"}
                  </button>
                  <p className="referral-difficulty">
                    紹介難易度 <strong aria-label={`星${difficultyCount}つ`}>{selectedReferral.difficulty}</strong>
                    ｜{selectedReferral.difficultyNote}
                  </p>
                </div>

                <div className="referral-action">
                  <p>興味を持ってくれたら、その場で3人のLINEグループを作って青木玲門をご紹介ください。</p>
                </div>

                <div className="referral-switch">
                  <p className="referral-switch-heading">ほかの紹介ルートも見てみる？</p>
                  <div className="referral-switch-list">
                    {otherReferrals.map((item) => (
                      <button
                        key={item.id}
                        type="button"
                        className="referral-switch-button"
                        aria-label={`${item.shortTitle}の紹介方法を見る`}
                        onClick={() => handleSelectReferral(item.id)}
                      >
                        <span className="referral-switch-thumb">
                          <Image
                            src={item.src}
                            alt=""
                            fill
                            sizes="90px"
                            style={{ objectFit: "cover" }}
                          />
                        </span>
                        <span className="referral-switch-copy">
                          <span className="referral-switch-label">{item.shortTitle}</span>
                          <span className="referral-switch-arrow" aria-hidden="true">→</span>
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </section>

        <footer>
          <p>© BORDERLESS / AOKI REIMON</p>
          <p>このサイトはBNIメンバー向けの真面目な1to1サイトです。たぶん。</p>
        </footer>
      </div>
      {timelineLightbox && (
        <div
          className="timeline-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="画像の拡大表示"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              closeTimelineLightbox();
            }
          }}
        >
          <div className="timeline-lightbox-content">
            <button
              type="button"
              className="timeline-lightbox-close"
              onClick={closeTimelineLightbox}
              aria-label="拡大画像を閉じる"
            >
              ×
            </button>
            <img src={timelineLightbox.src} alt={timelineLightbox.alt} />
            <div className="timeline-lightbox-caption">
              <span>{timelineLightbox.episode}</span>
              <strong>{timelineLightbox.title}</strong>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
