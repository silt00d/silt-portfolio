const sectionLabels = {
  overview: "개요",
  design: "3D / AI 디자인",
  marketing: "마케팅",
  shooting: "촬영",
  contact: "문의하기",
  "project-jordan": "조던 코레오 컬렉션",
  "project-ap": "AP 알케미 앨범커버",
  "project-mystery": "계간미스터리 표지",
};

const stageViews = {
  overview: {
    title: "Silt",
    path: "개요",
    note: "시우시우의 작업이 Silt처럼 쌓여 만들어진 우주적 3D/AI/촬영 아카이브입니다.",
    groups: [
      {
        className: "intro-files",
        items: [
          { kind: "doc", icon: "rtf", label: "나에 대하여.rtf", modal: "about", root: true },
          { kind: "doc", icon: "pdf", label: "견적 문의.pdf", modal: "quote" },
          { kind: "doc", icon: "pdf", label: "상품소개서.pdf", modal: "product" },
        ],
      },
      {
        className: "folder-grid",
        items: [
          { kind: "folder", icon: "image-folder", label: "전체 보기", section: "overview", root: true },
          { kind: "folder", icon: "image-folder", label: "3D / AI 디자인", section: "design", root: true },
          { kind: "folder", icon: "image-folder", label: "마케팅", section: "marketing", root: true },
          { kind: "folder", icon: "image-folder", label: "촬영", section: "shooting", root: true },
        ],
      },
      {
        className: "folder-grid project-grid",
        items: [
          { kind: "folder", icon: "project-folder", label: "3D 렌더링", section: "design" },
          { kind: "folder", icon: "project-folder", label: "AI 캠페인", section: "marketing" },
          { kind: "folder", icon: "project-folder", label: "스튜디오 촬영", section: "shooting" },
          { kind: "folder", icon: "inbox-folder", label: "문의하기", section: "contact" },
        ],
      },
    ],
  },
  design: {
    title: "3D / AI 디자인",
    path: "Silt / 3D / AI 디자인",
    note: "깊은 블루의 SF 무드 위에 3D 렌더와 AI 비주얼을 지층처럼 쌓아갑니다.",
    groups: [
      {
        className: "intro-files",
        items: [
          { kind: "doc", icon: "rtf", label: "나에 대하여.rtf", modal: "about", root: true },
          { kind: "doc", icon: "pdf", label: "견적 문의.pdf", modal: "quote" },
          { kind: "doc", icon: "pdf", label: "상품소개서.pdf", modal: "product" },
        ],
      },
      {
        className: "folder-grid",
        items: [
          { kind: "folder", icon: "project-folder", label: "제품 렌더", section: "design" },
          { kind: "folder", icon: "image-folder", label: "AI 비주얼", section: "design" },
          { kind: "folder", icon: "project-folder", label: "키비주얼", section: "design" },
          { kind: "folder", icon: "image-folder", label: "상세페이지", section: "design" },
          { kind: "folder", icon: "inbox-folder", label: "디자인 문의", section: "contact" },
        ],
      },
    ],
  },
  marketing: {
    title: "마케팅",
    path: "Silt / 마케팅",
    note: "작은 실험을 쌓아 런칭 캠페인, 콘텐츠 캘린더, 광고 소재의 궤도를 만듭니다.",
    groups: [
      {
        className: "intro-files",
        items: [
          { kind: "doc", icon: "rtf", label: "나에 대하여.rtf", modal: "about", root: true },
          { kind: "doc", icon: "pdf", label: "견적 문의.pdf", modal: "quote" },
          { kind: "doc", icon: "pdf", label: "상품소개서.pdf", modal: "product" },
        ],
      },
      {
        className: "folder-grid",
        items: [
          { kind: "folder", icon: "project-folder", label: "AI 런칭", section: "marketing" },
          { kind: "folder", icon: "image-folder", label: "콘텐츠 캘린더", section: "marketing" },
          { kind: "folder", icon: "project-folder", label: "광고 소재", section: "marketing" },
          { kind: "folder", icon: "image-folder", label: "카피 실험", section: "marketing" },
          { kind: "folder", icon: "inbox-folder", label: "캠페인 문의", section: "contact" },
        ],
      },
    ],
  },
  shooting: {
    title: "촬영",
    path: "Silt / 촬영",
    note: "촬영 컷을 3D/AI 레이어 위에 쌓아 캠페인의 물성과 깊이로 연결합니다.",
    groups: [
      {
        className: "intro-files",
        items: [
          { kind: "doc", icon: "rtf", label: "나에 대하여.rtf", modal: "about", root: true },
          { kind: "doc", icon: "pdf", label: "견적 문의.pdf", modal: "quote" },
          { kind: "doc", icon: "pdf", label: "상품소개서.pdf", modal: "product" },
        ],
      },
      {
        className: "folder-grid",
        items: [
          { kind: "folder", icon: "image-folder", label: "제품컷", section: "shooting" },
          { kind: "folder", icon: "image-folder", label: "사용컷", section: "shooting" },
          { kind: "folder", icon: "project-folder", label: "공간컷", section: "shooting" },
          { kind: "folder", icon: "project-folder", label: "숏폼", section: "shooting" },
          { kind: "folder", icon: "inbox-folder", label: "촬영 문의", section: "contact" },
        ],
      },
    ],
  },
  contact: {
    title: "문의하기",
    path: "Silt / 문의하기",
    note: "프로젝트의 작은 단서들을 남기면, Silt가 하나의 작업 흐름으로 쌓아 정리합니다.",
    groups: [
      {
        className: "intro-files",
        items: [
          { kind: "doc", icon: "pdf", label: "견적 문의.pdf", modal: "quote" },
          { kind: "doc", icon: "rtf", label: "프로젝트 메모.rtf", section: "contact" },
        ],
      },
      {
        className: "folder-grid",
        items: [
          { kind: "folder", icon: "inbox-folder", label: "새 문의", section: "contact" },
          { kind: "folder", icon: "image-folder", label: "3D 디자인 의뢰", section: "design" },
          { kind: "folder", icon: "image-folder", label: "마케팅 의뢰", section: "marketing" },
          { kind: "folder", icon: "image-folder", label: "촬영 의뢰", section: "shooting" },
        ],
      },
    ],
  },
  "project-jordan": {
    title: "조던 코레오 컬렉션",
    path: "Silt / 작업물 / 조던 코레오 컬렉션",
    note: "움직임, 리듬, 스포츠웨어의 조형감을 SF적인 블루 레이어로 정리한 컬렉션 폴더입니다.",
    groups: [
      {
        className: "preview-grid",
        items: [
          { kind: "preview", label: "Key Visual 01", meta: "motion layer", variant: "orbit" },
          { kind: "preview", label: "Lookbook Frame", meta: "choreo cut", variant: "strata" },
          { kind: "preview", label: "Social Teaser", meta: "vertical crop", variant: "beam" },
          { kind: "preview", label: "Texture Study", meta: "fabric / light", variant: "grain" },
          { kind: "preview", label: "Campaign Still", meta: "hero asset", variant: "sphere" },
          { kind: "preview", label: "Motion Board", meta: "sequence", variant: "columns" },
        ],
      },
    ],
  },
  "project-ap": {
    title: "AP 알케미 앨범커버 작업",
    path: "Silt / 작업물 / AP 알케미 앨범커버 작업",
    note: "앨범의 금속성, 변환, 연금술적 이미지를 깊은 코발트와 유리 구체의 질감으로 쌓은 폴더입니다.",
    groups: [
      {
        className: "preview-grid",
        items: [
          { kind: "preview", label: "Cover Draft A", meta: "main cover", variant: "sphere" },
          { kind: "preview", label: "Cover Draft B", meta: "alt type", variant: "beam" },
          { kind: "preview", label: "Back Cover", meta: "track layer", variant: "strata" },
          { kind: "preview", label: "Type Detail", meta: "logo / title", variant: "orbit" },
          { kind: "preview", label: "Digital Thumbnail", meta: "platform crop", variant: "grain" },
          { kind: "preview", label: "Print Mockup", meta: "jacket", variant: "columns" },
        ],
      },
    ],
  },
  "project-mystery": {
    title: "계간미스터리 책 표지 커버 작업",
    path: "Silt / 작업물 / 계간미스터리 책 표지 커버 작업",
    note: "미스터리 장르의 어둠과 단서를 퇴적된 표면, 얇은 빛, 차가운 블루로 정리한 표지 폴더입니다.",
    groups: [
      {
        className: "preview-grid",
        items: [
          { kind: "preview", label: "Cover Direction", meta: "front cover", variant: "strata" },
          { kind: "preview", label: "Spine Study", meta: "book spine", variant: "columns" },
          { kind: "preview", label: "Back Cover", meta: "text field", variant: "grain" },
          { kind: "preview", label: "Title Lockup", meta: "typography", variant: "beam" },
          { kind: "preview", label: "Mood Image", meta: "case note", variant: "orbit" },
          { kind: "preview", label: "Print Preview", meta: "final check", variant: "sphere" },
        ],
      },
    ],
  },
};

const storageKey = "silt-admin-state";
const dbName = "silt-admin-library";
const fileStoreName = "files";
const assetStoreName = "assets";
const dbVersion = 2;

const defaultSiteText = {
  brandName: "Silt",
  siteDescription: "디자인, 촬영, 마케팅을 통해 아름다움을 발견하고 연결하는 Silt 크리에이티브 스튜디오",
  navFavoritesTitle: "서비스",
  navWorksTitle: "대표 작업물",
  navMobileTitle: "모바일",
  overviewLabel: "홈",
  allViewLabel: "Silt 전체",
  backFolderLabel: "상위 폴더",
  contactLabel: "문의하기",
  contactFooterLabel: "Project Inquiry",
  instagramLabel: "인스타그램",
  instagramUrl: "https://www.instagram.com/",
  kakaoLabel: "카카오톡",
  kakaoUrl: "https://open.kakao.com/",
  targetEmail: "hello@yourstudio.kr",
  heroTitle: "우주적인 블루 위에 작업을 켜켜이 쌓는 Silt.",
  heroLead: "디자인, 촬영, 마케팅을 통해 아름다움을 발견하고 연결하는 크리에이티브 스튜디오",
  overviewFileLabel: "Silt Overview",
  overviewDocsTitle: "문서",
  overviewMetaMakerLabel: "만든 사람",
  overviewMetaMakerValue: "정시우",
  overviewMetaMeaningLabel: "의미",
  overviewMetaMeaningValue: "작은 입자가 쌓여 지층이 되듯, 작업이 쌓여 브랜드의 우주적 표면이 됩니다.",
  overviewMetaWorkLabel: "작업",
  overviewMetaWorkValue: "3D 키비주얼, AI 콘텐츠, 제품/공간 촬영",
  ctaText: "문의하기",
  contactFileLabel: "Inquiry Mailbox",
  archiveFallbackLabel: "Archive Preview",
  archiveFallbackMeta: "ready",
  aboutModalTitle: "나에 대하여.rtf",
  aboutFileLabel: "About Silt",
  aboutTitle: "SILT는 정시우라는 사람의 퇴적물입니다.",
  aboutLead:
    "SILT는 단순한 디자인 포트폴리오가 아닌, 내가 지나온 시간과 작업들이 차곡차곡 쌓여 만들어진 아카이브입니다.",
  aboutMakerLabel: "만든 사람",
  aboutMakerValue: "정시우",
  aboutWorkLabel: "주요 작업",
  aboutWorkValue: "3D 키비주얼, AI 캠페인, 제품/공간/숏폼 촬영",
  quoteModalTitle: "견적 문의.pdf",
  quoteFileLabel: "Project Inquiry",
  quoteTitle: "프로젝트 문의를 남겨주세요.",
  quoteLead: "이름, 번호, 문의내용을 남기면 메일 앱으로 문의 내용이 정리됩니다.",
  quoteCtaText: "문의 보내기",
  productDocTitle: "상품소개서.pdf",
  productDocFileLabel: "Silt Profile",
  productDocHeading: "Silt 상품소개서",
  productDocLead: "관리자에서 업로드한 PDF 상품소개서를 열거나 저장할 수 있습니다.",
  productDocEmpty: "아직 업로드된 상품소개서 PDF가 없습니다.",
  productDocCta: "상품소개서 열기",
  formNameLabel: "이름",
  formNamePlaceholder: "홍길동",
  formPhoneLabel: "번호",
  formPhonePlaceholder: "010-0000-0000",
  formEmailLabel: "이메일",
  formEmailPlaceholder: "hello@example.com",
  formTypeLabel: "필요한 작업",
  formBudgetLabel: "예산 범위",
  formMessageLabel: "문의내용",
  formMessagePlaceholder: "브랜드 상황, 일정, 필요한 산출물을 적어주세요.",
  formSubmitText: "문의 보내기",
  formStatusText: "메일 앱으로 문의 내용을 옮겼습니다.",
  formTypeOption1: "3D / AI 디자인",
  formTypeOption2: "마케팅 캠페인",
  formTypeOption3: "촬영 / 숏폼",
  formTypeOption4: "통합 패키지",
  formBudgetOption1: "100만원 이하",
  formBudgetOption2: "100만원 - 300만원",
  formBudgetOption3: "300만원 - 700만원",
  formBudgetOption4: "700만원 이상",
};

const workSectionMap = {
  design: "design",
  marketing: "marketing",
  shooting: "shooting",
  jordan: "project-jordan",
  "ap-alchemy": "project-ap",
  "quarterly-mystery": "project-mystery",
};

const defaultWorks = [
  {
    id: "design",
    kind: "서비스 카테고리",
    title: "3D / AI 디자인",
    headline: "3D 렌더와 AI 비주얼을 브랜드 표면으로 쌓는 카테고리",
    subtitle: "제품 렌더, AI 이미지 확장, 키비주얼, 상세페이지 소재",
    popupName: "3D / AI 디자인 상세",
    category: "Service",
    status: "공개",
    note: "깊은 블루의 SF 무드 위에 3D 렌더와 AI 비주얼을 지층처럼 쌓아갑니다.",
    thumbnailAssetId: "",
  },
  {
    id: "marketing",
    kind: "서비스 카테고리",
    title: "마케팅",
    headline: "작은 실험을 쌓아 캠페인의 궤도를 만드는 카테고리",
    subtitle: "런칭 캠페인, 콘텐츠 캘린더, 광고 소재, 카피 실험",
    popupName: "마케팅 상세",
    category: "Service",
    status: "공개",
    note: "작은 실험을 쌓아 런칭 캠페인, 콘텐츠 캘린더, 광고 소재의 궤도를 만듭니다.",
    thumbnailAssetId: "",
  },
  {
    id: "shooting",
    kind: "서비스 카테고리",
    title: "촬영",
    headline: "촬영 컷을 3D/AI 레이어와 연결하는 카테고리",
    subtitle: "제품컷, 사용컷, 공간컷, 숏폼 촬영",
    popupName: "촬영 상세",
    category: "Service",
    status: "공개",
    note: "촬영 컷을 3D/AI 레이어 위에 쌓아 캠페인의 물성과 깊이로 연결합니다.",
    thumbnailAssetId: "",
  },
  {
    id: "jordan",
    kind: "프로젝트 폴더",
    title: "조던 코레오 컬렉션",
    headline: "움직임을 레이어로 쌓은 컬렉션",
    subtitle: "스포츠웨어, 리듬, 조형적 컷을 SF 블루 톤으로 정리",
    popupName: "조던 코레오 컬렉션 상세",
    category: "3D / Campaign",
    status: "공개",
    note: "움직임과 스포츠웨어의 조형감을 블루 레이어로 정리한 컬렉션.",
    thumbnailAssetId: "",
  },
  {
    id: "ap-alchemy",
    kind: "프로젝트 폴더",
    title: "AP 알케미 앨범커버 작업",
    headline: "앨범의 금속성과 변환감을 담은 커버",
    subtitle: "유리 구체, 연금술적 표면, 코발트 블루 레이어",
    popupName: "AP 알케미 앨범커버 상세",
    category: "Album Cover",
    status: "공개",
    note: "금속성, 변환, 연금술 이미지를 유리 구체와 퇴적 표면으로 구성.",
    thumbnailAssetId: "",
  },
  {
    id: "quarterly-mystery",
    kind: "프로젝트 폴더",
    title: "계간미스터리 책 표지 커버 작업",
    headline: "미스터리 장르를 차가운 단서처럼 쌓은 표지",
    subtitle: "어둠, 단서, 퇴적 표면, 얇은 빛의 표지 시스템",
    popupName: "계간미스터리 표지 상세",
    category: "Book Cover",
    status: "공개",
    note: "미스터리 장르의 어둠과 단서를 차가운 블루로 정리한 표지.",
    thumbnailAssetId: "",
  },
];

const defaultImageSlots = [
  { id: "banner", title: "홈 배너 이미지", description: "홈 상단 Current Work 배너에 들어가는 이미지", assetId: "" },
  { id: "about", title: "나에 대하여 이미지", description: "나에 대하여 팝업 상단에 들어가는 이미지", assetId: "" },
  { id: "overview", title: "개요 오른쪽 프리뷰", description: "개요 패널 상단의 대표 이미지", assetId: "" },
  { id: "design", title: "3D / AI 디자인 프리뷰", description: "디자인 카테고리 오른쪽 패널 이미지", assetId: "" },
  { id: "marketing", title: "마케팅 프리뷰", description: "마케팅 카테고리 오른쪽 패널 이미지", assetId: "" },
  { id: "shooting", title: "촬영 프리뷰", description: "촬영 카테고리 오른쪽 패널 이미지", assetId: "" },
  { id: "contact", title: "문의하기 프리뷰", description: "문의하기 패널 상단 이미지", assetId: "" },
];

const defaultDocumentSlots = [
  { id: "productIntro", title: "상품소개서 PDF", description: "홈 문서 영역의 상품소개서 버튼에 연결되는 PDF", assetId: "" },
];

const defaultAboutImageSrc = "./assets/about.png";

const aboutParagraphs = [
  "SILT는 단순한 디자인 포트폴리오가 아닌, 내가 지나온 시간과 작업들이 차곡차곡 쌓여 만들어진 아카이브입니다. 작은 아이디어 하나, 한 장의 사진, 하나의 브랜드와 프로젝트까지. 모든 흔적들이 퇴적물처럼 쌓여 지금의 SILT를 만들었습니다.",
  "우리는 그래픽 디자인, 촬영, 마케팅을 중심으로 작업합니다.",
  "가장 아름다운 형태를 발견하고, 가장 좋은 구도로 기록하며, 그 아름다움을 더 많은 사람들에게 닿게 만드는 일을 합니다. 눈에 보이는 결과물은 디자인과 사진일 수 있지만, 결국 우리가 만드는 것은 사람의 시선을 움직이는 경험입니다.",
  "좋은 디자인은 보기 좋은 것을 넘어 기억에 남아야 하고, 좋은 사진은 순간을 넘어 감정을 담아야 하며, 좋은 마케팅은 누군가에게 자연스럽게 닿아야 한다고 믿습니다.",
  "SILT는 그런 과정을 기록하고 쌓아가는 공간입니다.",
  "그리고 어쩌면 SILT는, 정시우라는 사람이 세상을 바라보는 방식 그 자체일지도 모릅니다.",
];

const categoryStructureVersion = 2;
const categoryTextDefaults = {
  navFavoritesTitle: defaultSiteText.navFavoritesTitle,
  navWorksTitle: defaultSiteText.navWorksTitle,
  navMobileTitle: defaultSiteText.navMobileTitle,
  overviewLabel: defaultSiteText.overviewLabel,
  allViewLabel: defaultSiteText.allViewLabel,
};

let targetEmail = defaultSiteText.targetEmail;
let managedState = {};
let managedFiles = [];
let managedAssets = [];
let activeSection = "overview";
let backStack = [];
let forwardStack = [];
let viewMode = "grid";
let sortMode = "default";
let searchQuery = "";
let previewOpen = false;
const panels = document.querySelectorAll("[data-panel]");
const currentPath = document.querySelector("#currentPath");
const stageContent = document.querySelector("#stageContent");
const browserLayout = document.querySelector(".browser-layout");
const modalLayer = document.querySelector("#modalLayer");
const modalTitle = document.querySelector("#modalTitle");
const modalBody = document.querySelector("#modalBody");

const modalContent = {
  about: {
    title: "나에 대하여.rtf",
    body: `
      <article class="doc-preview">
        <p class="file-label">About Silt</p>
        <h2>SILT는 정시우라는 사람의 퇴적물입니다.</h2>
        <p class="lead">SILT는 내가 지나온 시간과 작업들이 차곡차곡 쌓여 만들어진 아카이브입니다.</p>
        <dl class="modal-meta">
          <div>
            <dt>만든 사람</dt>
            <dd>정시우</dd>
          </div>
          <div>
            <dt>주요 작업</dt>
            <dd>3D 키비주얼, AI 캠페인, 제품/공간/숏폼 촬영</dd>
          </div>
        </dl>
      </article>
    `,
  },
  quote: {
    title: "견적 문의.pdf",
    body: `
      <article class="doc-preview">
        <p class="file-label">Project Inquiry</p>
        <h2>쌓아야 할 작업의 범위와 일정을 알려주세요.</h2>
        <p class="lead">
          아래 버튼을 누르면 문의하기 폴더로 이동합니다. 이름, 이메일, 작업 종류, 예산 범위를
          남기면 메일 앱으로 문의 내용이 정리됩니다.
        </p>
        <div class="quote-summary">
          <span>3D / AI 디자인</span>
          <span>마케팅</span>
          <span>촬영 / 숏폼</span>
          <span>통합 패키지</span>
        </div>
        <button class="primary-action modal-route" type="button" data-section="contact">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M22 2L11 13" />
            <path d="M22 2l-7 20-4-9-9-4z" />
          </svg>
          문의하기 열기
        </button>
      </article>
    `,
  },
  product: {
    title: "상품소개서.pdf",
    body: `
      <article class="doc-preview">
        <p class="file-label">Silt Profile</p>
        <h2>Silt 상품소개서</h2>
        <p class="lead">상품소개서 PDF를 준비 중입니다.</p>
      </article>
    `,
  },
};

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function text(key) {
  return defaultSiteText[key] ?? "";
}

function getPublicWorks() {
  const savedById = new Map((managedState.works || []).map((work) => [work.id, work]));
  return defaultWorks.map((work) => {
    const saved = savedById.get(work.id) || {};
    return {
      ...work,
      status: saved.status || work.status,
      thumbnailAssetId: saved.thumbnailAssetId || work.thumbnailAssetId,
    };
  });
}

function getWorkSection(work) {
  return workSectionMap[work.id] || `work-${work.id}`;
}

function getSectionWork(section) {
  return getPublicWorks().find((work) => getWorkSection(work) === section);
}

function findAsset(assetId) {
  return managedAssets.find((asset) => asset.id === assetId);
}

function getSlotAsset(slotId) {
  const slot = (managedState.imageSlots || []).find((item) => item.id === slotId);
  return slot?.assetId ? findAsset(slot.assetId) : null;
}

function getDocumentAsset(slotId) {
  const slot = (managedState.documentSlots || []).find((item) => item.id === slotId);
  return slot?.assetId ? findAsset(slot.assetId) : null;
}

function getWorkThumbnail(section) {
  const work = getSectionWork(section);
  return work?.thumbnailAssetId ? findAsset(work.thumbnailAssetId) : null;
}

function getFileOrder(record) {
  const order = Number(record.sortOrder);
  if (Number.isFinite(order)) return order;
  const createdAt = Number(record.createdAt);
  return Number.isFinite(createdAt) ? createdAt : Number.MAX_SAFE_INTEGER;
}

function getPreviewRatioClass(ratio) {
  const value = String(ratio || "4:5");
  if (value === "16:9") return "ratio-wide";
  if (value === "1:1") return "ratio-square";
  if (value === "9:16") return "ratio-vertical";
  if (value === "3:2") return "ratio-photo";
  return "ratio-portrait";
}

function getFilesForWork(workId) {
  return managedFiles
    .filter(
      (record) => record.workId === workId && record.status !== "비공개" && record.mimeType?.startsWith("image/"),
    )
    .sort((a, b) => getFileOrder(a) - getFileOrder(b));
}

function getItemSearchText(item) {
  return [item.label, item.title, item.meta, item.note].filter(Boolean).join(" ").toLowerCase();
}

function prepareItems(items) {
  const query = searchQuery.trim().toLowerCase();
  let nextItems = query ? items.filter((item) => getItemSearchText(item).includes(query)) : [...items];
  if (sortMode === "name") {
    nextItems = [...nextItems].sort((a, b) => String(a.label || a.title || "").localeCompare(String(b.label || b.title || ""), "ko"));
  }
  return nextItems;
}

function openDb() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(dbName, dbVersion);
    request.onupgradeneeded = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains(fileStoreName)) {
        db.createObjectStore(fileStoreName, { keyPath: "id" });
      }
      if (!db.objectStoreNames.contains(assetStoreName)) {
        db.createObjectStore(assetStoreName, { keyPath: "id" });
      }
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

async function readStore(storeName) {
  const db = await openDb();
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(storeName, "readonly");
    const request = transaction.objectStore(storeName).getAll();
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

function loadManagedState() {
  try {
    return JSON.parse(localStorage.getItem(storageKey) || "{}");
  } catch {
    return {};
  }
}

function normalizeManagedState(rawState) {
  const shouldMigrateCategoryText = rawState.categoryStructureVersion !== categoryStructureVersion;
  const savedWorks = rawState.works || [];
  const savedById = new Map(savedWorks.map((work) => [work.id, work]));
  const defaultIds = new Set(defaultWorks.map((work) => work.id));
  const mergedWorks = [
    ...defaultWorks.map((work) => ({ ...work, ...(savedById.get(work.id) || {}) })),
    ...savedWorks.filter((work) => !defaultIds.has(work.id)),
  ];
  const savedSlots = rawState.imageSlots || [];
  const savedSlotById = new Map(savedSlots.map((slot) => [slot.id, slot]));
  const savedDocumentSlots = rawState.documentSlots || [];
  const savedDocumentSlotById = new Map(savedDocumentSlots.map((slot) => [slot.id, slot]));

  return {
    ...rawState,
    siteText: {
      ...defaultSiteText,
      ...(rawState.siteText || {}),
      heroTitle: rawState.siteText?.heroTitle || rawState.heroTitle || defaultSiteText.heroTitle,
      heroLead: rawState.siteText?.heroLead || rawState.heroLead || defaultSiteText.heroLead,
      aboutTitle: rawState.siteText?.aboutTitle || rawState.aboutTitle || defaultSiteText.aboutTitle,
      aboutLead: rawState.siteText?.aboutLead || rawState.aboutLead || defaultSiteText.aboutLead,
      ...(shouldMigrateCategoryText ? categoryTextDefaults : {}),
    },
    categoryStructureVersion,
    works: mergedWorks,
    imageSlots: defaultImageSlots.map((slot) => ({ ...slot, ...(savedSlotById.get(slot.id) || {}) })),
    documentSlots: defaultDocumentSlots.map((slot) => ({ ...slot, ...(savedDocumentSlotById.get(slot.id) || {}) })),
  };
}

function makeSvgIcon() {
  return `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M22 2L11 13" />
      <path d="M22 2l-7 20-4-9-9-4z" />
    </svg>
  `;
}

function renderTile(item) {
  const root = item.root ? ' data-root="true"' : "";
  const label = escapeHtml(item.label);

  if (item.kind === "banner") {
    const section = item.section ? ` data-section="${escapeHtml(item.section)}"` : "";
    const image = item.imageUrl ? `<img src="${escapeHtml(item.imageUrl)}" alt="" />` : "";
    return `
      <button class="home-work-banner" type="button"${section}>
        ${image ? `<span class="banner-image" aria-hidden="true">${image}</span>` : ""}
        <span class="banner-kicker">${escapeHtml(item.label || "Current Work")}</span>
        <strong>${escapeHtml(item.title || "")}</strong>
        <small>${escapeHtml(item.meta || "")}</small>
      </button>
    `;
  }

  if (item.kind === "doc") {
    const modal = item.modal ? ` data-modal="${item.modal}"` : "";
    const section = item.section ? ` data-section="${item.section}"` : "";
    return `
      <button class="file-tile" type="button"${section}${modal}${root}>
        <span class="doc-icon ${item.icon}" aria-hidden="true"></span>
        <span>${label}</span>
      </button>
    `;
  }

  if (item.kind === "preview") {
    const image = item.imageUrl ? `<img src="${escapeHtml(item.imageUrl)}" alt="" />` : "";
    const ratioClass = getPreviewRatioClass(item.ratio);
    const imageTrigger = item.imageId ? ` data-image-modal="${escapeHtml(item.imageId)}"` : "";
    const tagName = item.imageId ? "button" : "article";
    return `
      <${tagName} class="preview-tile ${item.variant} ${ratioClass}"${item.imageId ? ' type="button"' : ""}${imageTrigger}>
        <span class="preview-thumb${item.imageUrl ? " has-image" : ""}" aria-hidden="true">${image}</span>
        <strong>${label}</strong>
        <small>${escapeHtml(item.meta)}</small>
      </${tagName}>
    `;
  }

  const thumbnail = getWorkThumbnail(item.section);
  const thumbImage = thumbnail ? `<img class="folder-thumb" src="${escapeHtml(thumbnail.dataUrl)}" alt="" />` : "";

  return `
    <button class="folder-tile" type="button" data-section="${item.section}"${root}>
      <span class="folder-icon ${item.icon}${thumbnail ? " has-thumb" : ""}" aria-hidden="true">${thumbImage}</span>
      <span>${label}</span>
    </button>
  `;
}

function renderStage(section) {
  const view = stageViews[section] || stageViews.overview;
  const parentSection = view.parent || "overview";
  const backButton =
    section === "overview"
      ? ""
      : `
        <button class="back-folder" type="button" data-section="${escapeHtml(parentSection)}">
          <span class="mini-icon folder-mini" aria-hidden="true"></span>
          ${escapeHtml(text("backFolderLabel"))}
        </button>
      `;

  const groups = view.groups
    .map((group, index) => {
      const items = prepareItems(group.items);
      if (!items.length) return "";
      const divider = index === 0 ? "" : '<div class="divider" aria-hidden="true"></div>';
      const title = group.title ? `<p class="stage-group-title">${escapeHtml(group.title)}</p>` : "";
      return `
        ${divider}
        ${title}
        <div class="${group.className}">
          ${items.map(renderTile).join("")}
        </div>
      `;
    })
    .join("");

  stageContent.classList.remove("stage-transition");
  stageContent.classList.toggle("is-list-view", viewMode === "list");
  stageContent.innerHTML = `
    <div class="folder-header">
      <div class="folder-heading">
        <p class="folder-path">
          <span class="mini-icon folder-mini" aria-hidden="true"></span>
          ${escapeHtml(view.path)}
        </p>
        <h3>${escapeHtml(view.title)}</h3>
        <p class="folder-note">${escapeHtml(view.note)}</p>
      </div>
      ${backButton}
    </div>
    ${groups || `<div class="empty-state"><strong>검색 결과가 없습니다.</strong><span>다른 단어로 다시 찾아보세요.</span></div>`}
  `;
  void stageContent.offsetWidth;
  stageContent.classList.add("stage-transition");
}

function buildPreviewItems(work, fallbackItems = []) {
  const records = getFilesForWork(work.id);
  if (!records.length) {
    return fallbackItems;
  }

  return records.map((record) => ({
    kind: "preview",
    imageId: record.id,
    label: record.title || record.originalName || "Untitled",
    meta: record.subtitle || record.category || record.originalName || "",
    variant: "custom",
    ratio: record.layoutRatio || "4:5",
    imageUrl: record.dataUrl,
  }));
}

function buildProjectFolderItems(projectWorks) {
  return projectWorks.map((work) => ({
    kind: "folder",
    icon: "project-folder",
    label: work.title,
    section: getWorkSection(work),
  }));
}

function getPinnedServiceDocs() {
  return [
    { kind: "doc", icon: "rtf", label: text("aboutModalTitle"), modal: "about", root: true },
    { kind: "doc", icon: "pdf", label: text("quoteModalTitle"), modal: "quote" },
    { kind: "doc", icon: "pdf", label: text("productDocTitle"), modal: "product" },
  ];
}

function updateStageViewsFromManagedState() {
  const works = getPublicWorks().filter((work) => work.status !== "비공개");
  const serviceWorks = works.filter((work) => work.kind === "서비스 카테고리");
  const projectWorks = works.filter((work) => work.kind !== "서비스 카테고리");
  const featuredWork = projectWorks[0] || serviceWorks[0];
  const bannerAsset = getSlotAsset("banner");

  sectionLabels.overview = text("overviewLabel");
  sectionLabels.contact = text("contactLabel");

  stageViews.overview.title = text("brandName");
  stageViews.overview.path = text("overviewLabel");
  stageViews.overview.note = text("heroLead");
  stageViews.overview.groups = [
    {
      className: "home-banner-grid",
      items: [
        {
          kind: "banner",
          label: "Current Work",
          title: featuredWork?.title || "Silt Studio Archive",
          meta: featuredWork?.subtitle || "3D, AI, shooting, campaign layers in progress",
          section: featuredWork ? getWorkSection(featuredWork) : "design",
          imageUrl: bannerAsset?.dataUrl || "",
        },
      ],
    },
    {
      title: text("overviewDocsTitle"),
      className: "intro-files",
      items: [
        { kind: "doc", icon: "rtf", label: text("aboutModalTitle"), modal: "about", root: true },
        { kind: "doc", icon: "pdf", label: text("quoteModalTitle"), modal: "quote" },
        { kind: "doc", icon: "pdf", label: text("productDocTitle"), modal: "product" },
      ],
    },
    {
      title: text("navFavoritesTitle"),
      className: "folder-grid",
      items: [
        { kind: "folder", icon: "image-folder", label: text("allViewLabel"), section: "overview", root: true },
        ...serviceWorks.map((work) => ({
          kind: "folder",
          icon: "image-folder",
          label: work.title,
          section: getWorkSection(work),
          root: true,
        })),
      ],
    },
    {
      title: text("navWorksTitle"),
      className: "folder-grid project-grid",
      items: projectWorks.map((work) => ({
        kind: "folder",
        icon: "project-folder",
        label: work.title,
        section: getWorkSection(work),
      })),
    },
  ];

  works.forEach((work) => {
    const section = getWorkSection(work);
    sectionLabels[section] = work.title;
    const existingView = stageViews[section];
    const fallbackItems = existingView?.groups?.find((group) => group.className === "preview-grid")?.items || [];
    const previewItems = buildPreviewItems(work, fallbackItems);

    if (existingView && work.kind === "서비스 카테고리") {
      existingView.title = work.title;
      existingView.path = `${text("brandName")} / ${work.title}`;
      existingView.note = work.note || work.subtitle || work.headline;
      existingView.groups = [
        {
          title: text("overviewDocsTitle"),
          className: "intro-files",
          items: getPinnedServiceDocs(),
        },
        {
          title: text("navWorksTitle"),
          className: "folder-grid project-grid",
          items: buildProjectFolderItems(projectWorks),
        },
      ];
      return;
    }

    const pathGroup = work.kind === "서비스 카테고리" ? text("navFavoritesTitle") : text("navWorksTitle");

    stageViews[section] = {
      title: work.title,
      path: `${text("brandName")} / ${pathGroup} / ${work.title}`,
      note: work.note || work.subtitle || work.headline,
      groups: [
        {
          className: "preview-grid",
          items: previewItems.length
            ? previewItems
            : [
                { kind: "preview", label: work.headline || work.title, meta: work.subtitle || work.category, variant: "strata" },
                { kind: "preview", label: text("archiveFallbackLabel"), meta: work.note || text("archiveFallbackMeta"), variant: "sphere" },
              ],
        },
      ],
    };
  });

}

function renderSidebar() {
  const favoriteNav = document.querySelector(".side-nav:not(.work-nav):not(.social-nav)");
  const workNav = document.querySelector(".work-nav");
  const socialNav = document.querySelector(".social-nav");
  const sidebarContactBar = document.querySelector(".sidebar-contact-bar");
  const works = getPublicWorks().filter((work) => work.status !== "비공개");
  const serviceWorks = works.filter((work) => work.kind === "서비스 카테고리");
  const projectWorks = works.filter((work) => work.kind !== "서비스 카테고리");

  favoriteNav.innerHTML = `
    <p class="nav-kicker">${escapeHtml(text("brandName"))}</p>
    <button class="nav-item is-active" type="button" data-section="overview">
      <span class="mini-icon folder-mini" aria-hidden="true"></span>
      <span>${escapeHtml(text("overviewLabel"))}</span>
    </button>
    <p class="nav-kicker">${escapeHtml(text("navFavoritesTitle"))}</p>
    ${serviceWorks
      .map(
        (work) => `
          <button class="nav-item" type="button" data-section="${getWorkSection(work)}">
            <span class="mini-icon folder-mini" aria-hidden="true"></span>
            <span>${escapeHtml(work.title)}</span>
          </button>
        `,
      )
      .join("")}
  `;

  workNav.innerHTML = `
    <p class="nav-kicker">${escapeHtml(text("navWorksTitle"))}</p>
    ${projectWorks
      .map(
        (work) => `
          <button class="nav-item" type="button" data-section="${getWorkSection(work)}">
            <span class="mini-icon folder-mini" aria-hidden="true"></span>
            <span>${escapeHtml(work.title)}</span>
          </button>
        `,
      )
      .join("")}
  `;

  socialNav.innerHTML = `
    <p class="nav-kicker">${escapeHtml(text("navMobileTitle"))}</p>
    <a class="nav-item" href="${escapeHtml(text("instagramUrl"))}" target="_blank" rel="noreferrer">
      <span>${escapeHtml(text("instagramLabel"))}</span>
    </a>
    <a class="nav-item" href="${escapeHtml(text("kakaoUrl"))}" target="_blank" rel="noreferrer">
      <span>${escapeHtml(text("kakaoLabel"))}</span>
    </a>
  `;

  if (sidebarContactBar) {
    sidebarContactBar.innerHTML = `
      <button class="sidebar-contact-button" type="button" data-modal="quote">
        <span>${escapeHtml(text("contactLabel"))}</span>
        <small>${escapeHtml(text("contactFooterLabel"))}</small>
      </button>
    `;
  }
}

function renderManagedImage(slotId) {
  const asset = getSlotAsset(slotId);
  if (!asset) return "";
  return `
    <div class="managed-panel-image">
      <img src="${asset.dataUrl}" alt="" />
    </div>
  `;
}

function renderInquiryForm(id = "inquiryForm") {
  return `
    <form class="contact-form inquiry-form" id="${escapeHtml(id)}" data-inquiry-form>
      <label>
        ${escapeHtml(text("formNameLabel"))}
        <input name="name" type="text" autocomplete="name" placeholder="${escapeHtml(text("formNamePlaceholder"))}" required />
      </label>
      <label>
        ${escapeHtml(text("formPhoneLabel"))}
        <input name="phone" type="tel" autocomplete="tel" placeholder="${escapeHtml(text("formPhonePlaceholder"))}" required />
      </label>
      <label class="full">
        ${escapeHtml(text("formMessageLabel"))}
        <textarea name="message" rows="6" placeholder="${escapeHtml(text("formMessagePlaceholder"))}" required></textarea>
      </label>
      <button class="primary-action" type="submit">
        ${makeSvgIcon()}
        ${escapeHtml(text("formSubmitText"))}
      </button>
      <p class="form-status" data-inquiry-status role="status" aria-live="polite"></p>
    </form>
  `;
}

function renderServicePanel(section) {
  const work = getSectionWork(section);
  const panel = document.querySelector(`[data-panel="${section}"]`);
  if (!work || !panel) return;

  panel.innerHTML = `
    ${renderManagedImage(section)}
    <p class="file-label">${escapeHtml(work.category || work.title)}</p>
    <h2>${escapeHtml(work.headline || work.title)}</h2>
    <p class="lead">${escapeHtml(work.subtitle || work.note || "")}</p>
    <ul class="check-list">
      <li>${escapeHtml(work.note || work.subtitle || work.headline || work.title)}</li>
    </ul>
  `;
}

function renderContactPanel() {
  const panel = document.querySelector('[data-panel="contact"]');
  const work = getSectionWork("contact");

  panel.innerHTML = `
    ${renderManagedImage("contact")}
    <p class="file-label">${escapeHtml(text("contactFileLabel"))}</p>
    <h2>${escapeHtml(work?.headline || "새 프로젝트를 보내주세요.")}</h2>
    ${renderInquiryForm("contactForm")}
  `;
}

function applyManagedContent() {
  targetEmail = text("targetEmail");
  document.title = text("brandName");
  document.querySelector('meta[name="description"]')?.setAttribute("content", text("siteDescription"));
  document.querySelector(".window-title strong").textContent = text("brandName");
  const aboutImage = getSlotAsset("about");
  const productDoc = getDocumentAsset("productIntro");

  modalContent.about.title = text("aboutModalTitle");
  modalContent.about.body = `
    <article class="doc-preview">
      ${
        aboutImage
          ? `<figure class="about-modal-image"><img src="${escapeHtml(aboutImage.dataUrl)}" alt="" /></figure>`
          : `<figure class="about-modal-image"><img src="${escapeHtml(defaultAboutImageSrc)}" alt="SILT 소개 이미지" /></figure>`
      }
      <p class="file-label">${escapeHtml(text("aboutFileLabel"))}</p>
      <h2>${escapeHtml(text("aboutTitle"))}</h2>
      <div class="about-copy">
        ${aboutParagraphs.map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join("")}
      </div>
      <dl class="modal-meta">
        <div><dt>${escapeHtml(text("aboutMakerLabel"))}</dt><dd>${escapeHtml(text("aboutMakerValue"))}</dd></div>
        <div><dt>${escapeHtml(text("aboutWorkLabel"))}</dt><dd>${escapeHtml(text("aboutWorkValue"))}</dd></div>
      </dl>
    </article>
  `;

  modalContent.quote.title = text("quoteModalTitle");
  modalContent.quote.body = `
    <article class="doc-preview">
      <p class="file-label">${escapeHtml(text("quoteFileLabel"))}</p>
      <h2>${escapeHtml(text("quoteTitle"))}</h2>
      <p class="lead">${escapeHtml(text("quoteLead"))}</p>
      ${renderInquiryForm("quoteInquiryForm")}
    </article>
  `;

  modalContent.product.title = text("productDocTitle");
  modalContent.product.body = `
    <article class="doc-preview">
      <p class="file-label">${escapeHtml(text("productDocFileLabel"))}</p>
      <h2>${escapeHtml(text("productDocHeading"))}</h2>
      <p class="lead">${escapeHtml(productDoc ? text("productDocLead") : text("productDocEmpty"))}</p>
      ${
        productDoc
          ? `<a class="primary-action product-pdf-action" href="${escapeHtml(productDoc.dataUrl)}" download="${escapeHtml(productDoc.originalName || text("productDocTitle"))}" target="_blank" rel="noreferrer">
              ${makeSvgIcon()}
              ${escapeHtml(text("productDocCta"))}
            </a>`
          : ""
      }
    </article>
  `;

  const overview = document.querySelector('[data-panel="overview"]');
  const overviewImage = getSlotAsset("overview");
  if (overview) {
    const previewImage = overview.querySelector(".preview-image");
    if (previewImage && overviewImage) {
      previewImage.innerHTML = `<img src="${overviewImage.dataUrl}" alt="" />`;
      previewImage.classList.add("has-managed-image");
    }
    overview.querySelector(".file-label").textContent = text("overviewFileLabel");
    overview.querySelector("h1").textContent = text("heroTitle");
    overview.querySelector(".lead").textContent = text("heroLead");
    const metaItems = overview.querySelectorAll(".meta-list div");
    const meta = [
      ["overviewMetaMakerLabel", "overviewMetaMakerValue"],
      ["overviewMetaMeaningLabel", "overviewMetaMeaningValue"],
      ["overviewMetaWorkLabel", "overviewMetaWorkValue"],
    ];
    metaItems.forEach((item, index) => {
      item.querySelector("dt").textContent = text(meta[index][0]);
      item.querySelector("dd").textContent = text(meta[index][1]);
    });
    const overviewAction = overview.querySelector(".primary-action");
    if (overviewAction) {
      overviewAction.innerHTML = `${makeSvgIcon()}${escapeHtml(text("ctaText"))}`;
    }
  }

  ["design", "marketing", "shooting"].forEach(renderServicePanel);
  renderContactPanel();
}

function updateToolbarState() {
  document.querySelector('[data-toolbar-action="back"]')?.toggleAttribute("disabled", !backStack.length);
  document.querySelector('[data-toolbar-action="forward"]')?.toggleAttribute("disabled", !forwardStack.length);
  document.querySelector('[data-toolbar-action="sort"]')?.classList.toggle("is-selected", sortMode === "name");
  document.querySelector('[data-toolbar-action="info"]')?.classList.toggle("is-selected", previewOpen);
  browserLayout?.classList.toggle("is-preview-open", previewOpen);
  document.querySelectorAll("[data-view-mode]").forEach((button) => {
    button.classList.toggle("is-selected", button.dataset.viewMode === viewMode);
  });
}

function setSection(section, options = {}) {
  const nextSection = sectionLabels[section] ? section : "overview";
  if (!options.fromHistory && nextSection !== activeSection) {
    backStack.push(activeSection);
    forwardStack = [];
  }
  activeSection = nextSection;

  renderStage(nextSection);

  document.querySelectorAll("[data-section]").forEach((item) => {
    const canBeActive = item.classList.contains("nav-item") || item.dataset.root === "true";
    const isParent = stageViews[nextSection]?.parent === item.dataset.section;
    item.classList.toggle("is-active", canBeActive && (item.dataset.section === nextSection || isParent));
  });

  panels.forEach((panel) => {
    const hasPanel = document.querySelector(`[data-panel="${nextSection}"]`);
    const activePanel = hasPanel ? nextSection : "overview";
    panel.classList.toggle("is-active", panel.dataset.panel === activePanel);
  });

  currentPath.textContent = sectionLabels[nextSection];
  updateToolbarState();
}

document.addEventListener("click", (event) => {
  const imageTrigger = event.target.closest("[data-image-modal]");
  if (imageTrigger) {
    event.preventDefault();
    openImagePreview(imageTrigger.dataset.imageModal);
    return;
  }

  const modalTrigger = event.target.closest("[data-modal]");
  if (modalTrigger) {
    event.preventDefault();
    openModal(modalTrigger.dataset.modal);
    return;
  }

  const trigger = event.target.closest("[data-section]");

  if (!trigger || trigger.tagName === "A") {
    return;
  }

  event.preventDefault();
  setSection(trigger.dataset.section);
});

function openModal(type) {
  const content = modalContent[type];

  if (!content) {
    return;
  }

  modalLayer.classList.remove("is-image-modal");
  modalTitle.textContent = content.title;
  modalBody.innerHTML = content.body;
  modalLayer.classList.add("is-open");
  modalLayer.setAttribute("aria-hidden", "false");
  document.body.classList.add("has-modal");
}

function openImagePreview(fileId) {
  const record = managedFiles.find((item) => item.id === fileId);
  if (!record?.dataUrl) return;

  modalLayer.classList.add("is-image-modal");
  modalTitle.textContent = record.popupName || record.title || record.originalName || "Preview";
  modalBody.innerHTML = `
    <article class="image-preview-modal">
      <figure>
        <img src="${escapeHtml(record.dataUrl)}" alt="${escapeHtml(record.title || record.originalName || "")}" />
      </figure>
      <div>
        <p class="file-label">${escapeHtml(record.category || "Preview")}</p>
        <h2>${escapeHtml(record.title || record.originalName || "Untitled")}</h2>
        <p>${escapeHtml(record.subtitle || "")}</p>
      </div>
    </article>
  `;
  modalLayer.classList.add("is-open");
  modalLayer.setAttribute("aria-hidden", "false");
  document.body.classList.add("has-modal");
}

function closeModal() {
  modalLayer.classList.remove("is-open");
  modalLayer.classList.remove("is-image-modal");
  modalLayer.setAttribute("aria-hidden", "true");
  document.body.classList.remove("has-modal");
}

modalLayer.addEventListener("click", (event) => {
  const shouldClose = event.target === modalLayer || event.target.closest(".modal-close, .modal-close-dot");
  const route = event.target.closest(".modal-route");

  if (route) {
    closeModal();
    setSection(route.dataset.section);
    return;
  }

  if (shouldClose) {
    closeModal();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && modalLayer.classList.contains("is-open")) {
    closeModal();
  }
});

document.querySelectorAll(".toolbar .icon-button").forEach((button) => {
  button.addEventListener("click", (event) => {
    if (button.disabled) return;
    button.animate(
      [
        { transform: "scale(0.96)" },
        { transform: "scale(1)" },
      ],
      { duration: 130, easing: "ease-out" },
    );

    const action = button.dataset.toolbarAction;
    if (action === "back") {
      const previous = backStack.pop();
      if (previous) {
        forwardStack.push(activeSection);
        setSection(previous, { fromHistory: true });
      }
      return;
    }

    if (action === "forward") {
      const next = forwardStack.pop();
      if (next) {
        backStack.push(activeSection);
        setSection(next, { fromHistory: true });
      }
      return;
    }

    if (action === "sort") {
      sortMode = sortMode === "name" ? "default" : "name";
      renderStage(activeSection);
      updateToolbarState();
      return;
    }

    if (action === "info") {
      previewOpen = !previewOpen;
      updateToolbarState();
      return;
    }

    if (button.dataset.viewMode) {
      viewMode = button.dataset.viewMode;
      renderStage(activeSection);
      updateToolbarState();
    }
  });
});

document.querySelector("#siteSearch")?.addEventListener("input", (event) => {
  searchQuery = event.target.value;
  renderStage(activeSection);
});

document.addEventListener("submit", (event) => {
  const form = event.target.closest("[data-inquiry-form]");
  if (!form) return;

  event.preventDefault();
  const formData = new FormData(form);
  const name = formData.get("name");
  const phone = formData.get("phone");
  const message = formData.get("message");
  const formStatus = form.querySelector("[data-inquiry-status]");

  const subject = `[프로젝트 문의] ${name}`;
  const body = [`이름: ${name}`, `번호: ${phone}`, "", "문의내용:", message].join("\n");
  const mailto = `mailto:${targetEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  if (formStatus) {
    formStatus.textContent = text("formStatusText");
  }
  window.location.href = mailto;
});

async function boot() {
  managedState = normalizeManagedState(loadManagedState());
  try {
    [managedFiles, managedAssets] = await Promise.all([readStore(fileStoreName), readStore(assetStoreName)]);
  } catch {
    managedFiles = [];
    managedAssets = [];
  }
  updateStageViewsFromManagedState();
  renderSidebar();
  applyManagedContent();
  setSection(activeSection);
}

function playIntro() {
  const intro = document.querySelector("#introLayer");
  if (!intro) return;

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  window.setTimeout(
    () => {
      document.body.classList.remove("is-intro-running");
      intro.setAttribute("aria-hidden", "true");
    },
    reduceMotion ? 540 : 3000,
  );
}

const themeStorageKey = "silt-theme-choice";

function applyTheme() {
  document.body.dataset.theme = "light";
  localStorage.setItem(themeStorageKey, "light");
}

applyTheme();
playIntro();
boot();
