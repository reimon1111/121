"use client";

import { useState } from "react";

const careers = [
  { no: "01", place: "長野", title: "1987年 9月24日 長野県に爆誕", note: "この時点では、まだ小栗一瞬ではない。" },
  { no: "02", place: "東京", title: "デザイン専門学校 2年", note: "センスを学ぶ。でも、面白さだけは授業では教えてくれなかった。" },
  { no: "03", place: "神奈川", title: "ダーツマシン営業 3年", note: "狙う・刺す・売る。営業力を矢で習得。" },
  { no: "04", place: "東京", title: "Web制作会社 4年", note: "Web制作の基礎を叩き込まれる。締切という名の敵と毎日戦う。" },
  { no: "05", place: "長野", title: "パチンコ店 広告宣伝課 4年", note: "派手なデザインは正義。「もっと目立て」が口ぐせになる。" },
  { no: "06", place: "現在", title: "ボーダレスとして独立", note: "Webもアプリも、仕事も笑いも境界なし。" },
];

const works = [
  { src: "/images/work-leon.jpg", title: "雑誌LEONに勝手に就任", tag: "紳士" },
  { src: "/images/work-health.jpg", title: "健康は足元から。たぶん。", tag: "美容" },
  { src: "/images/work-outrage.jpg", title: "全員悪人。本人だけ笑顔。", tag: "映画" },
  { src: "/images/work-angel.jpg", title: "天使になった知人", tag: "神話" },
  { src: "/images/work-topgun.jpg", title: "飛ばないトップガン", tag: "航空" },
  { src: "/images/work-hentai.jpg", title: "間違いありません。", tag: "告白" },
  { src: "/images/work-it.jpg", title: "そこ、ボウヤリトミックやらない？", tag: "恐怖" },
  { src: "/images/work-support.jpg", title: "私が全力でサポートします", tag: "支援" },
  { src: "/images/work-moon.jpg", title: "月にかわってお仕置きです", tag: "変身" },
];

const topics = ["お酒", "筋トレ", "デザイン", "アプリ", "猫", "自給自足", "ふざけた企画"];

const gains = [
  {
    letter: "G",
    title: "Goals",
    japanese: "目標",
    items: [
      "長野で一番クレイジーな人と呼ばれる存在になる！",
      "筋肉ムキムキになって白のタンクトップが似合う男になる",
      "面白さで仕事が舞い込む世界を作る",
    ],
  },
  {
    letter: "A",
    title: "Accomplishments",
    japanese: "実績",
    items: [
      "竜胆チャプターでコンプライアンス違反しまくりの画像を作りまくり、定例会を盛り上げた。本部からコンプライアンス違反で怒られた。",
      "「才能の無駄遣い」という最高級の褒め言葉を多数受賞",
    ],
  },
  {
    letter: "I",
    title: "Interests",
    japanese: "興味",
    items: [
      "怒られそうな企画を真剣に考えること",
      "「これ誰得？」と言われる作品づくり",
    ],
  },
  {
    letter: "N",
    title: "Networks",
    japanese: "人脈",
    items: [
      "守成クラブ長野みらい",
      "中小企業家同友会 しなの支部",
      "怒られても仲良くしてくれる優しい仲間たち",
    ],
  },
  {
    letter: "S",
    title: "Skills",
    japanese: "スキル",
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
  const bniYear = getBniYear();

  const judge = (type: "yes" | "instant" | "no") => {
    const messages = {
      yes: "愛してます。あなたはとてもいい人です！",
      instant: "正解です。その“一瞬”を11年以上こすり続けています。",
      no: "異議は認めません。実際に私をみていただきご判断ください。",
    };
    setJudgement(messages[type]);
    setJudgementType(type);
  };

  return (
    <main>
      <div className="breaking-news" aria-label="お知らせ">
        <div className="ticker"><span>長野市で「小栗旬に一瞬だけ似ている男」を観測　本人は人手不足対策DXアドバイザーを名乗る　&emsp; ★ &emsp; 夏場だけ異常にモテる（虫に）</span></div>
      </div>

      <div className="star-field" aria-hidden="true"><i /><i /><i /></div>

      <div className="site-shell">
        <header className="retro-nav">
          <a className="mini-logo" href="#top"><b>REIMON</b><small>公式かもしれない</small></a>
          <nav aria-label="ページ内メニュー">
            <a href="#who">何者？</a>
            <a href="#history">人生</a>
            <a href="#works">封印作品</a>
            <a href="#one-to-one">1to1攻略</a>
          </nav>
          <div className="counter">あなたは <b>000038</b> 人目くらい</div>
        </header>

        <section className="hero" id="top">
          <div className="hero-copy">
            <p className="eyebrow">長野からのお知らせ</p>
            <h1><span className="hero-title-name">青木玲門</span><br /><span className="hero-title-sub">公式かもしれないサイト</span></h1>
            <div className="bni-history">
              <span>BNI</span>
              <strong>長野リージョン 竜胆(リンドウ)チャプター所属</strong>
              <small>入会日 2021年8月 ／ BNI歴 {bniYear}年目</small>
            </div>
            <p className="hero-lead"><span>カテゴリー</span><strong>人手不足対策DXアドバイザー</strong></p>
            <div className="hero-alert">※面白いことを振ると、本気になります。</div>
            <div className="hero-actions">
              <a className="primary-button" href="#who">疑わずにスクロール</a>
              <a className="secondary-button" href="#oguri-judge">小栗度を判定する</a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="orbit orbit-one" /><div className="orbit orbit-two" />
            <div className="portrait-frame"><img src="/images/reimon-hero.jpg" alt="スーツ姿の青木玲門" /></div>
            <div className="speech speech-one">長野が生んだ<br /><b>変態</b></div>
            <div className="speech speech-two">通称<br /><strong>小栗一瞬</strong><span className="speech-two-note">小栗旬に一瞬<br />似ているから</span></div>
          </div>
          <div className="scroll-note">SCROLLすると人間性がバレます ↓</div>
        </section>

        <section className="paper-section intro-section" id="who">
          <div className="section-kicker">WHO IS REIMON?</div>
          <h2>青木玲門って<br /><em>誰だよ？</em></h2>
          <div className="intro-grid">
            <div className="intro-character">
              <img src="/images/reimon-detective.jpg" alt="電柱の陰で双眼鏡と焼きそばパンを持って張り込む青木玲門" />
            </div>
            <div className="profile-copy">
              <p className="big-copy">Webも、アプリも、ロゴも、紙も。<br /><mark>面白さと使いやすさを、まとめて設計。</mark></p>
              <p>長野市を拠点に、Webサイト制作・Webアプリ開発・ロゴ・チラシ・名刺・動画まで、境界なくつくるデザイナー。デザイン歴は11年超。独立後は「ボーダレス」として、企業の魅力と未来の出会いをつないでいます。</p>
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
            <div className="judge-question">
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

        <section className="paper-section history-section" id="history">
          <div className="section-kicker">THE HISTORY OF A MAN</div>
          <h2>すべては今につながる<br /><em>壮大な伏線だった。</em></h2>
          <div className="timeline">
            {careers.map((career) => (
              <article key={career.no} className="timeline-card">
                <div className="timeline-no">{career.no}</div>
                <div><span>{career.place}</span><h3>{career.title}</h3><p>{career.note}</p></div>
              </article>
            ))}
          </div>
        </section>

        <section className="dark-section abilities-section">
          <div className="section-kicker yellow">REIMON&apos;S ABILITY</div>
          <h2>青木は、だいたい<br /><em>何でも作る。</em></h2>
          <div className="ability-grid">
            <article><b>01</b><h3>Webアプリ</h3><p><strong>忙しいから人を増やそうとしているそこのあなた</strong><br />人を増やす前に、その仕事自体を減らすシステム、作っちゃいます！</p></article>
            <article><b>02</b><h3>Webサイト</h3><p><strong>求人でうまくいっていないそこのあなた</strong><br />ぶっ飛んだ、見たことない世界観で求職者がワクワクする採用のホームページ、作っちゃいます！</p></article>
            <article><b>03</b><h3>ロゴ・紙・<br />プレゼン資料・動画</h3><p><strong>とにかく爪痕を残したいそこのあなた</strong><br />爪痕と遺恨を残す販促物は、お任せください。</p></article>
          </div>
          <div className="power-meter">
            <div><span>デザイン</span><i style={{ width: "94%" }} /><b>94</b></div>
            <div><span>アプリ</span><i style={{ width: "98%" }} /><b>98</b></div>
            <div><span>筋トレ</span><i style={{ width: "63%" }} /><b>63</b></div>
            <div><span>変態</span><i className="over" style={{ width: "100%" }} /><b>120</b></div>
          </div>
        </section>

        <section className="paper-section works-section" id="works">
          <div className="section-kicker">TOP SECRET ARCHIVES</div>
          <h2>過去に作って、<br /><em>お蔵入りになった作品。</em></h2>
          <p className="section-lead">こちらは、うちのチャプターのメンバーの宣材写真を勝手に（愛を込めて）ふざけた画像に加工し、定例会でサプライズ発表していた作品たちです。<br /><br />しかし、BNI本部から「コンプライアンス上問題がある」とご指摘をいただき、残念ながらすべてお蔵入りとなりました…。</p>

          <div className="featured-work">
            <div className="featured-image"><img src={works[activeWork].src} alt={works[activeWork].title} /></div>
            <div className="featured-caption"><span>{works[activeWork].tag}</span><h3>{works[activeWork].title}</h3><p>依頼されたわけではありません。思いついてしまったので、仕方なく全力で作りました。</p></div>
          </div>
          <div className="work-grid">
            {works.map((work, index) => (
              <button className={activeWork === index ? "active" : ""} key={work.src} onClick={() => setActiveWork(index)} aria-label={`${work.title}を大きく表示`}>
                <img src={work.src} alt="" /><span>{work.tag}</span>
              </button>
            ))}
          </div>
        </section>

        <section className="warning-section">
          <div className="warning-copy"><span>閲覧注意</span><h2>プロフィール画像が<br />ほぼ事故。</h2><p>本来は人間性を知ってもらうための写真です。人間性が伝わりすぎる可能性があります。</p><button onClick={() => setUnsealed(!unsealed)}>{unsealed ? "そっと封印する" : "封印を解く"}</button></div>
          <div className={`sealed-image ${unsealed ? "is-open" : ""}`}>
            <img src="/images/reimon-puzzle.jpg" alt={unsealed ? "パズル風に加工された青木玲門のプロフィール画像" : "封印されたプロフィール画像"} />
            {!unsealed && <button className="seal" onClick={() => setUnsealed(true)} aria-label="封印を解いてプロフィール画像を表示"><b>封</b><span>クリックで解禁</span></button>}
          </div>
        </section>

        <section className="paper-section one-to-one" id="one-to-one">
          <div className="section-kicker">HOW TO 1to1 WITH REIMON</div>
          <h2>青木玲門との1to1を<br /><em>成功させる方法。</em></h2>
          <div className="topic-cloud">
            {topics.map((topic, index) => <span key={topic} style={{ transform: `rotate(${index % 2 ? 2 : -2}deg)` }}>{topic}</span>)}
          </div>
          <div className="one-to-one-grid">
            <article><span>STEP 1</span><h3>とりあえず笑う</h3><p>最初の3分で一度笑っておくと、その後の話がスムーズです。</p></article>
            <article><span>STEP 2</span><h3>面白い話を振る</h3><p>急に目が輝きます。仕事の相談より先に企画が始まる場合があります。</p></article>
            <article><span>STEP 3</span><h3>最後は真面目に</h3><p>ふざけていますが、仕事と人間関係については意外と真剣です。</p></article>
          </div>
          <blockquote>「強い願望は、HENTAIを極めること。<br />ただし仕事は、びっくりするほど真面目。」</blockquote>
        </section>

        <section className="gains-section" aria-labelledby="gains-title">
          <div className="gains-heading">
            <span>BNI 1to1 CHARACTER FILE</span>
            <h2 id="gains-title" aria-label="G.A.I.N.S.">
              {"GAINS".split("").map((letter) => <b key={letter}>{letter}<i>.</i></b>)}
            </h2>
            <p>レイモンを構成する、5つの危険成分。</p>
          </div>
          <div className="gains-grid">
            {gains.map((gain) => (
              <article key={gain.letter} className={`gain-card gain-${gain.letter.toLowerCase()}`}>
                <div className="gain-letter" aria-hidden="true">{gain.letter}</div>
                <div className="gain-content">
                  <h3>{gain.title}<small>（{gain.japanese}）</small></h3>
                  <ul>{gain.items.map((item) => <li key={item}>{item}</li>)}</ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="evolution-section">
          <span className="next-badge">CURRENT MISSION</span>
          <p>青木玲門の、現在の使命。</p>
          <h2>人手不足対策<br /><strong>DXアドバイザー</strong></h2>
          <div className="evolution-line">人を増やす前に、無駄な仕事を減らす。</div>
          <p className="evolution-copy">システムありきではなく、まず業務を整理する。なくせる仕事・まとめられる仕事・自動化できる仕事を見つけ、必要な部分だけを現場で使える仕組みにします。</p>
          <a href="#top" className="evolution-button">まずは青木を理解してから ↑</a>
        </section>

        <footer>
          <p>© BORDERLESS / AOKI REIMON</p>
          <p>このサイトは真面目な自己紹介サイトです。たぶん。</p>
        </footer>
      </div>
    </main>
  );
}
