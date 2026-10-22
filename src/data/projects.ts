export type ProjectLink = {
  label: string;
  href: string;
};

export type Project = {
  name: string;
  summary: string;
  highlights: string[];
  techStack: string[];
  links: ProjectLink[];
  /** Shown instead of a demo link while the project has no public deployment. */
  demoStatus?: string;
};

export const projects: Project[] = [
  {
    name: "医療施設マスタAPI",
    summary:
      "全国8つの地方厚生局が別々の形式で公開している「保険医療機関・保険薬局の指定一覧」を毎日自動で集め、厚生労働省・デジタル庁・国土交通省など5つの省庁の公開データと照合して、全国約22万施設（病院・診療所・歯科診療所・薬局）を一つのREST APIにまとめました。企画・設計・実装から、本番サーバーの運用まで一人で担当しています。",
    highlights: [
      "ページの作りもファイル形式（xlsx・複数シート・県別zip など）も局ごとに違う公開データを、毎日自動で取り込み。新規指定・内容変更・廃止も履歴として残し、開業や廃止の時期をあとから追える",
      "出どころの違う7種類の公開データを施設ごとに照合し、診療時間・フリガナ・ホームページ・電子処方箋への対応までを一つの施設情報にまとめる。電子処方箋の対応状況は、厚生労働省のリストから毎週更新",
      "「髙」と「高」、全角と半角、番地の「ー」と「-」といった表記のゆれを吸収し、探している施設に届く検索を実現",
      "住所だけでは位置が分からない施設も、3種類の公開データを精度の高い順に組み合わせて地図上の位置を特定（番地レベルまで絞れたのは9割以上）。診療時間・祝日のデータも加え、「いま開いている近くの施設」を返せる",
      "検索だけでなく、全国の変化の一覧、市区町村・診療科目ごとの施設数の集計、都道府県ごとの一括ダウンロード（CSV / JSON Lines）も用意し、ほかのシステムへの組み込みや分析にも使える",
      "本番サーバーでは、稼働の監視、毎日のバックアップ、不審なアクセスの遮断、データベース権限の最小化、重い検索の自動打ち切りなどを整備。使っているライブラリやPHPに新しい版が出ると、自動で検知して更新を提案する",
      "仕様書（OpenAPI）はコードから自動生成。書式チェック・静的解析（PHPStan レベル8）・テスト・秘密情報の混入チェックを、変更のたびにCIで実行",
    ],
    techStack: [
      "PHP 8.5",
      "Laravel 13",
      "MySQL 8.4",
      "Laravel Queue",
      "OpenAPI (Scramble)",
      "PHPUnit",
      "PHPStan",
      "Docker",
      "Caddy",
      "GitHub Actions",
    ],
    links: [
      {
        label: "デモ画面",
        href: "https://tomonoriyoshida.github.io/medical-facility-frontend/",
      },
      {
        label: "API仕様書",
        href: "https://168-110-42-30.sslip.io/docs/api",
      },
      {
        label: "GitHub（API）",
        href: "https://github.com/TomonoriYoshida/medical-facility-master-api-laravel",
      },
      {
        label: "GitHub（デモ画面）",
        href: "https://github.com/TomonoriYoshida/medical-facility-frontend",
      },
    ],
  },
  {
    name: "いま開いてる病院・薬局",
    summary:
      "現在地や駅名・住所を入れると、いま開いている近くの病院・診療所・歯科・薬局が近い順に見つかる、一般の方向けのWebサイトです。医療施設マスタAPIの使い道を示す実例として、画面のデザインから公開までを一人で作りました。",
    highlights: [
      "診療時間と祝日のデータから、指定した日時に受付している施設だけを表示。「19:00まで」のように、あと何時まで開いているかも分かる。フリガナ・ホームページや、電子処方箋に対応しているかも確認できる",
      "駅名・住所で探せる。同じ名前の候補には市区町村名と距離を添え、選び間違いを防ぐ",
      "リストと地図の切り替え、知人に教えるためのQRコード、スマートフォンのホーム画面への追加に対応",
      "デジタル庁のデザインシステムの指針で、読みやすさと操作のしやすさを見直し。利用者が探した場所は、共有用のリンクやサーバーのアクセスログに残さない設計",
    ],
    techStack: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS 4",
      "TanStack Query",
      "OpenAPI (openapi-typescript)",
      "Leaflet",
      "Caddy",
    ],
    links: [
      {
        label: "公開サイト",
        href: "https://168-110-42-30.sslip.io/",
      },
      {
        label: "GitHub",
        href: "https://github.com/TomonoriYoshida/open-clinic-finder",
      },
    ],
  },
];
