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
      "全国8つの地方厚生局が公開する「保険医療機関・保険薬局の指定一覧」を毎日自動で取得・構造化し、全国約22万施設（病院・診療所・歯科診療所・薬局）を検索できるREST APIとして提供します。",
    highlights: [
      "局ごとに異なるページ構造・ファイル形式（単一xlsx / 複数シート / 県別zip 等）を、個別のリゾルバと展開処理で吸収する取込パイプライン",
      "全角/半角・異体字（髙→高）・番地の「ー」と「-」の混在を正規化し、表記ゆれに強いあいまい検索",
      "新規指定・内容変更・廃止をイベントとして記録し、開業・廃止の時期を後から追跡可能",
      "FormRequest / API Resource から OpenAPI 仕様書を自動生成。PHPUnit・Pint・PHPStan（レベル8）をCIで実行",
    ],
    techStack: [
      "PHP 8.5",
      "Laravel 13",
      "MySQL 8.4",
      "Laravel Queue",
      "OpenAPI (Scramble)",
      "PHPUnit",
      "PHPStan",
      "Docker (Sail)",
      "GitHub Actions",
    ],
    links: [
      {
        label: "デモサイト",
        href: "https://tomonoriyoshida.github.io/medical-facility-frontend/",
      },
      {
        label: "API仕様書",
        href: "https://168-110-42-30.sslip.io/docs/api",
      },
      {
        label: "API（GitHub）",
        href: "https://github.com/TomonoriYoshida/medical-facility-master-api-laravel",
      },
      {
        label: "デモ用フロントエンド（GitHub）",
        href: "https://github.com/TomonoriYoshida/medical-facility-frontend",
      },
    ],
  },
  {
    name: "いま開いてる病院・薬局",
    summary:
      "現在地や駅名・住所から、いま開いている近くの病院・診療所・歯科・薬局を探せる一般向けのWebサイトです。上の医療施設マスタAPIを使い、APIと同じサーバーから配信しています。",
    highlights: [
      "厚生労働省「医療情報ネット」の診療時間と祝日データから、指定した日時に受付中の施設を絞り込み、「19:00まで」のように終了時刻を表示",
      "国土地理院の住所検索APIで駅名・住所を位置に変換し、同じ名前の候補は市区町村名と距離を添えて近い順に表示",
      "リストと地図（Leaflet・地理院タイル）の切り替え、紹介用のQRコード、ホーム画面への追加（Web App Manifest）に対応",
      "デジタル庁デザインシステム（DADS）の指針でアクセシビリティを見直し。利用者が探した位置は、紹介用のリンクやサーバーのアクセスログに残さない設計",
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
        label: "サイト",
        href: "https://168-110-42-30.sslip.io/",
      },
      {
        label: "GitHub",
        href: "https://github.com/TomonoriYoshida/open-clinic-finder",
      },
    ],
  },
];
