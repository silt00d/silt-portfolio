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
    "SILT는 내가 지나온 시간과 작업들이 차곡차곡 쌓여 만들어진 아카이브입니다.",
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

const textGroups = [
  {
    title: "메뉴 / 기본 정보",
    keys: [
      "brandName",
      "siteDescription",
      "targetEmail",
      "navFavoritesTitle",
      "navWorksTitle",
      "navMobileTitle",
      "overviewLabel",
      "allViewLabel",
      "backFolderLabel",
      "contactLabel",
      "contactFooterLabel",
      "contactFileLabel",
      "ctaText",
      "archiveFallbackLabel",
      "archiveFallbackMeta",
      "instagramLabel",
      "instagramUrl",
      "kakaoLabel",
      "kakaoUrl",
    ],
  },
  {
    title: "개요 패널",
    keys: [
      "overviewFileLabel",
      "overviewDocsTitle",
      "heroTitle",
      "heroLead",
      "overviewMetaMakerLabel",
      "overviewMetaMakerValue",
      "overviewMetaMeaningLabel",
      "overviewMetaMeaningValue",
      "overviewMetaWorkLabel",
      "overviewMetaWorkValue",
    ],
  },
  {
    title: "나에 대하여 팝업",
    keys: [
      "aboutModalTitle",
      "aboutFileLabel",
      "aboutTitle",
      "aboutLead",
      "aboutMakerLabel",
      "aboutMakerValue",
      "aboutWorkLabel",
      "aboutWorkValue",
    ],
  },
  {
    title: "견적 문의 팝업",
    keys: ["quoteModalTitle", "quoteFileLabel", "quoteTitle", "quoteLead", "quoteCtaText"],
  },
  {
    title: "상품소개서 문서",
    keys: ["productDocTitle", "productDocFileLabel", "productDocHeading", "productDocLead", "productDocEmpty", "productDocCta"],
  },
  {
    title: "문의 폼",
    keys: [
      "formNameLabel",
      "formNamePlaceholder",
      "formPhoneLabel",
      "formPhonePlaceholder",
      "formEmailLabel",
      "formEmailPlaceholder",
      "formTypeLabel",
      "formBudgetLabel",
      "formMessageLabel",
      "formMessagePlaceholder",
      "formSubmitText",
      "formStatusText",
      "formTypeOption1",
      "formTypeOption2",
      "formTypeOption3",
      "formTypeOption4",
      "formBudgetOption1",
      "formBudgetOption2",
      "formBudgetOption3",
      "formBudgetOption4",
    ],
  },
];

const textLabels = {
  brandName: "사이트 이름",
  siteDescription: "사이트 설명",
  targetEmail: "문의 받을 이메일",
  navFavoritesTitle: "왼쪽 섹션명 - 즐겨찾기",
  navWorksTitle: "왼쪽 섹션명 - 작업물",
  navMobileTitle: "왼쪽 섹션명 - 모바일",
  overviewLabel: "개요 이름",
  allViewLabel: "전체 보기 폴더 이름",
  backFolderLabel: "상위 폴더 버튼",
  contactLabel: "문의 이름",
  contactFooterLabel: "하단 문의 보조 문구",
  contactFileLabel: "문의 패널 라벨",
  ctaText: "문의 버튼 문구",
  archiveFallbackLabel: "이미지 없을 때 카드 이름",
  archiveFallbackMeta: "이미지 없을 때 카드 설명",
  instagramLabel: "인스타그램 문구",
  instagramUrl: "인스타그램 링크",
  kakaoLabel: "카카오톡 문구",
  kakaoUrl: "카카오톡 링크",
  overviewFileLabel: "개요 라벨",
  overviewDocsTitle: "개요 안 문서 그룹명",
  heroTitle: "개요 타이틀",
  heroLead: "개요 소개",
  overviewMetaMakerLabel: "메타 1 라벨",
  overviewMetaMakerValue: "메타 1 내용",
  overviewMetaMeaningLabel: "메타 2 라벨",
  overviewMetaMeaningValue: "메타 2 내용",
  overviewMetaWorkLabel: "메타 3 라벨",
  overviewMetaWorkValue: "메타 3 내용",
  aboutModalTitle: "팝업 파일명",
  aboutFileLabel: "팝업 라벨",
  aboutTitle: "팝업 제목",
  aboutLead: "팝업 본문",
  aboutMakerLabel: "소개 메타 1 라벨",
  aboutMakerValue: "소개 메타 1 내용",
  aboutWorkLabel: "소개 메타 2 라벨",
  aboutWorkValue: "소개 메타 2 내용",
  quoteModalTitle: "견적 팝업 파일명",
  quoteFileLabel: "견적 팝업 라벨",
  quoteTitle: "견적 팝업 제목",
  quoteLead: "견적 팝업 본문",
  quoteCtaText: "견적 팝업 버튼",
  productDocTitle: "상품소개서 파일명",
  productDocFileLabel: "상품소개서 라벨",
  productDocHeading: "상품소개서 제목",
  productDocLead: "상품소개서 본문",
  productDocEmpty: "상품소개서 없음 문구",
  productDocCta: "상품소개서 버튼",
  formNameLabel: "이름 라벨",
  formNamePlaceholder: "이름 예시",
  formPhoneLabel: "번호 라벨",
  formPhonePlaceholder: "번호 예시",
  formEmailLabel: "이메일 라벨",
  formEmailPlaceholder: "이메일 예시",
  formTypeLabel: "작업 선택 라벨",
  formBudgetLabel: "예산 선택 라벨",
  formMessageLabel: "메모 라벨",
  formMessagePlaceholder: "메모 예시",
  formSubmitText: "폼 버튼",
  formStatusText: "전송 후 문구",
  formTypeOption1: "작업 옵션 1",
  formTypeOption2: "작업 옵션 2",
  formTypeOption3: "작업 옵션 3",
  formTypeOption4: "작업 옵션 4",
  formBudgetOption1: "예산 옵션 1",
  formBudgetOption2: "예산 옵션 2",
  formBudgetOption3: "예산 옵션 3",
  formBudgetOption4: "예산 옵션 4",
};

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

const categoryStructureVersion = 2;
const categoryTextDefaults = {
  navFavoritesTitle: defaultSiteText.navFavoritesTitle,
  navWorksTitle: defaultSiteText.navWorksTitle,
  navMobileTitle: defaultSiteText.navMobileTitle,
  overviewLabel: defaultSiteText.overviewLabel,
  allViewLabel: defaultSiteText.allViewLabel,
};

const defaultState = {
  memo: "다음 업데이트: 실제 작업물 이미지 연결, 문의 수신 API 연동, 관리자 인증 추가.",
  heroTitle: "우주적인 블루 위에 작업을 켜켜이 쌓는 Silt.",
  heroLead: "디자인, 촬영, 마케팅을 통해 아름다움을 발견하고 연결하는 크리에이티브 스튜디오",
  aboutTitle: "SILT는 정시우라는 사람의 퇴적물입니다.",
  aboutLead:
    "SILT는 내가 지나온 시간과 작업들이 차곡차곡 쌓여 만들어진 아카이브입니다.",
  categoryStructureVersion,
  siteText: structuredClone(defaultSiteText),
  imageSlots: structuredClone(defaultImageSlots),
  documentSlots: structuredClone(defaultDocumentSlots),
  works: [
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
    },
  ],
  inquiries: [
    { name: "Sample Client", type: "3D / AI 디자인", date: "2026-05-31", status: "새 문의" },
    { name: "Label Project", type: "앨범커버", date: "2026-05-30", status: "검토중" },
  ],
};

let state = normalizeState(loadState());
let fileRecords = [];
let assetRecords = [];
let selectedWorkId = state.works[0]?.id || "";
let selectedWorkGroup = "project";
let selectedWorkDetailView = "folder";

const panels = document.querySelectorAll("[data-admin-panel]");
const navItems = document.querySelectorAll("[data-admin-tab]");
const adminPath = document.querySelector("#adminPath");
const toast = document.querySelector("#adminToast");

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function slugify(value, fallback) {
  return (
    String(value || fallback)
      .toLowerCase()
      .replace(/[^a-z0-9가-힣]+/g, "-")
      .replace(/^-+|-+$/g, "") || fallback
  );
}

function createUniqueWorkId(title, fallback) {
  const base = slugify(title, fallback);
  const existingIds = new Set(state.works.map((work) => work.id));
  let nextId = base;
  let count = 2;

  while (existingIds.has(nextId)) {
    nextId = `${base}-${count}`;
    count += 1;
  }

  return nextId;
}

function isDefaultWork(work) {
  return defaultState.works.some((defaultWork) => defaultWork.id === work.id);
}

function normalizeState(rawState) {
  const nextState = structuredClone(defaultState);
  Object.assign(nextState, rawState || {});
  const shouldMigrateCategoryText = rawState?.categoryStructureVersion !== categoryStructureVersion;
  nextState.siteText = {
    ...defaultSiteText,
    ...(rawState?.siteText || {}),
    heroTitle: rawState?.siteText?.heroTitle || rawState?.heroTitle || defaultSiteText.heroTitle,
    heroLead: rawState?.siteText?.heroLead || rawState?.heroLead || defaultSiteText.heroLead,
    aboutTitle: rawState?.siteText?.aboutTitle || rawState?.aboutTitle || defaultSiteText.aboutTitle,
    aboutLead: rawState?.siteText?.aboutLead || rawState?.aboutLead || defaultSiteText.aboutLead,
    ...(shouldMigrateCategoryText ? categoryTextDefaults : {}),
  };
  nextState.categoryStructureVersion = categoryStructureVersion;
  const savedSlots = rawState?.imageSlots || [];
  const savedSlotById = new Map(savedSlots.map((slot) => [slot.id, slot]));
  nextState.imageSlots = defaultImageSlots.map((slot) => ({ ...slot, ...(savedSlotById.get(slot.id) || {}) }));
  const savedDocumentSlots = rawState?.documentSlots || [];
  const savedDocumentSlotById = new Map(savedDocumentSlots.map((slot) => [slot.id, slot]));
  nextState.documentSlots = defaultDocumentSlots.map((slot) => ({
    ...slot,
    ...(savedDocumentSlotById.get(slot.id) || {}),
  }));
  const savedWorks = rawState?.works || [];
  const defaultIds = new Set(defaultState.works.map((work) => work.id));
  const savedById = new Map(
    savedWorks.map((work, index) => [work.id || slugify(work.title, `work-${index + 1}`), work]),
  );

  const normalizeWork = (work, index) => ({
    ...work,
    id: work.id || slugify(work.title, `work-${index + 1}`),
    kind: work.kind || "프로젝트 폴더",
    headline: work.headline || work.title || "",
    subtitle: work.subtitle || work.note || "",
    popupName: work.popupName || `${work.title || "작업물"} 상세`,
    thumbnailAssetId: work.thumbnailAssetId || "",
  });

  const mergedDefaults = defaultState.works.map((defaultWork, index) =>
    normalizeWork({ ...defaultWork, ...(savedById.get(defaultWork.id) || {}) }, index),
  );
  const customWorks = savedWorks
    .filter((work, index) => !defaultIds.has(work.id || slugify(work.title, `work-${index + 1}`)))
    .map(normalizeWork);

  nextState.works = [...mergedDefaults, ...customWorks];
  return nextState;
}

function loadState() {
  const saved = localStorage.getItem(storageKey);
  return saved ? JSON.parse(saved) : structuredClone(defaultState);
}

function persistState() {
  localStorage.setItem(storageKey, JSON.stringify(state));
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

async function readFiles() {
  const db = await openDb();
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(fileStoreName, "readonly");
    const request = transaction.objectStore(fileStoreName).getAll();
    request.onsuccess = () => resolve(request.result.sort((a, b) => b.createdAt - a.createdAt));
    request.onerror = () => reject(request.error);
  });
}

async function writeFile(record) {
  const db = await openDb();
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(fileStoreName, "readwrite");
    const request = transaction.objectStore(fileStoreName).put(record);
    request.onsuccess = () => resolve();
    request.onerror = () => reject(request.error);
  });
}

async function deleteFileRecord(id) {
  const db = await openDb();
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(fileStoreName, "readwrite");
    const request = transaction.objectStore(fileStoreName).delete(id);
    request.onsuccess = () => resolve();
    request.onerror = () => reject(request.error);
  });
}

async function readAssets() {
  const db = await openDb();
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(assetStoreName, "readonly");
    const request = transaction.objectStore(assetStoreName).getAll();
    request.onsuccess = () => resolve(request.result.sort((a, b) => b.updatedAt - a.updatedAt));
    request.onerror = () => reject(request.error);
  });
}

async function writeAsset(record) {
  const db = await openDb();
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(assetStoreName, "readwrite");
    const request = transaction.objectStore(assetStoreName).put(record);
    request.onsuccess = () => resolve();
    request.onerror = () => reject(request.error);
  });
}

function fileToDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = () => reject(reader.error);
    reader.readAsDataURL(file);
  });
}

function findAsset(assetId) {
  return assetRecords.find((asset) => asset.id === assetId);
}

function renderAssetPreview(assetId, label = "이미지 없음") {
  const asset = findAsset(assetId);
  if (!asset) {
    return `<span>${escapeHtml(label)}</span>`;
  }
  return `<img src="${asset.dataUrl}" alt="" />`;
}

function renderDocumentPreview(assetId, label = "PDF 없음") {
  const asset = findAsset(assetId);
  if (!asset) {
    return `<span>${escapeHtml(label)}</span>`;
  }

  return `
    <span class="file-kind">PDF</span>
    <small>${escapeHtml(asset.originalName || asset.title)}</small>
  `;
}

async function createAssetFromFile(file, role, targetId, title) {
  const dataUrl = await fileToDataUrl(file);
  const record = {
    id: `${role}-${targetId}-${Date.now()}-${crypto.randomUUID()}`,
    role,
    targetId,
    title: title || file.name.replace(/\.[^.]+$/, ""),
    originalName: file.name,
    mimeType: file.type || "image/*",
    dataUrl,
    updatedAt: Date.now(),
  };
  await writeAsset(record);
  return record;
}

async function createAssetFromRecord(record, work) {
  const asset = {
    id: `work-cover-${record.id}-${Date.now()}`,
    role: "work-thumbnail-file",
    targetId: record.id,
    title: `${work.title} 대표 이미지`,
    originalName: record.originalName || record.title,
    mimeType: record.mimeType || "image/*",
    dataUrl: record.dataUrl,
    updatedAt: Date.now(),
  };
  await writeAsset(asset);
  return asset;
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("is-visible");
  window.setTimeout(() => toast.classList.remove("is-visible"), 1800);
}

function selectWork(workId) {
  collectWorks();
  collectWorkFileEdits();
  selectedWorkId = workId;
  selectedWorkDetailView = "folder";
  const work = state.works.find((item) => item.id === workId);
  if (work) {
    selectedWorkGroup = getWorkGroup(work);
  }
  renderWorks();
}

function selectWorkGroup(group) {
  collectWorks();
  collectWorkFileEdits();
  selectedWorkGroup = group === "service" ? "service" : "project";
  selectedWorkDetailView = "folder";
  const firstWork = state.works.find((work) => getWorkGroup(work) === selectedWorkGroup);
  selectedWorkId = firstWork?.id || selectedWorkId;
  renderWorks();
}

function getWorkGroup(work) {
  return work.kind === "서비스 카테고리" ? "service" : "project";
}

function isInActivePanel(element) {
  const panel = element.closest(".admin-panel");
  return !panel || panel.classList.contains("is-active");
}

function setTab(tab) {
  collectWorks();
  collectWorkFileEdits();
  collectFileEdits();
  const label = {
    dashboard: "대시보드",
    works: "폴더 관리",
    files: "파일",
    assets: "이미지",
    inquiries: "문의",
    content: "메뉴 / 문구",
  }[tab];

  navItems.forEach((item) => item.classList.toggle("is-active", item.dataset.adminTab === tab));
  panels.forEach((panel) => panel.classList.toggle("is-active", panel.dataset.adminPanel === tab));
  adminPath.textContent = `Silt Admin / ${label}`;
}

function renderDashboard() {
  document.querySelector("#workCount").textContent = state.works.length;
  document.querySelector("#inquiryCount").textContent = state.inquiries.length;
  document.querySelector("#fileCount").textContent = fileRecords.length;
  document.querySelector("#recentWorks").innerHTML = state.works
    .map(
      (work) => `
        <div>
          <strong>${escapeHtml(work.title)}</strong>
          <small>${escapeHtml(work.kind)} · ${escapeHtml(work.category)} · ${escapeHtml(work.status)} · 파일 ${countFilesForWork(work.id)}</small>
        </div>
      `,
    )
    .join("");
}

function renderFields() {
  document.querySelectorAll("[data-field]").forEach((field) => {
    field.value = state[field.dataset.field] || "";
  });
}

function collectFields() {
  document.querySelectorAll("[data-field]").forEach((field) => {
    state[field.dataset.field] = field.value;
  });
}

function renderSiteText() {
  const editor = document.querySelector("#siteTextEditor");
  if (!editor) return;

  editor.innerHTML = textGroups
    .map(
      (group) => `
        <article class="copy-card">
          <h2>${escapeHtml(group.title)}</h2>
          <div class="admin-grid two compact">
            ${group.keys
              .map((key) => {
                const value = state.siteText[key] ?? "";
                const isLong = value.length > 54 || key.toLowerCase().includes("lead") || key.toLowerCase().includes("description");
                return `
                  <label class="admin-field ${isLong ? "wide" : ""}">
                    <span>${escapeHtml(textLabels[key] || key)}</span>
                    ${
                      isLong
                        ? `<textarea data-site-text="${escapeHtml(key)}" rows="4">${escapeHtml(value)}</textarea>`
                        : `<input data-site-text="${escapeHtml(key)}" value="${escapeHtml(value)}" />`
                    }
                  </label>
                `;
              })
              .join("")}
          </div>
        </article>
      `,
    )
    .join("");
}

function collectSiteText() {
  document.querySelectorAll("[data-site-text]").forEach((field) => {
    state.siteText[field.dataset.siteText] = field.value;
  });
  state.heroTitle = state.siteText.heroTitle;
  state.heroLead = state.siteText.heroLead;
  state.aboutTitle = state.siteText.aboutTitle;
  state.aboutLead = state.siteText.aboutLead;
}

function countFilesForWork(workId) {
  return fileRecords.filter((file) => file.workId === workId).length;
}

function getFilesForWork(workId) {
  return fileRecords
    .filter((file) => file.workId === workId)
    .sort((a, b) => getFileOrder(a) - getFileOrder(b));
}

function getFileOrder(record) {
  const order = Number(record.sortOrder);
  if (Number.isFinite(order)) return order;
  const createdAt = Number(record.createdAt);
  return Number.isFinite(createdAt) ? createdAt : Number.MAX_SAFE_INTEGER;
}

function nextFileOrder(workId) {
  const orders = fileRecords
    .filter((file) => file.workId === workId)
    .map((file) => Number(file.sortOrder))
    .filter(Number.isFinite);
  return orders.length ? Math.max(...orders) + 1 : getFilesForWork(workId).length + 1;
}

async function normalizeWorkFileOrder(workId) {
  const siblings = getFilesForWork(workId);
  let changed = false;
  siblings.forEach((record, index) => {
    if (Number(record.sortOrder) !== index + 1) {
      record.sortOrder = index + 1;
      changed = true;
    }
  });
  if (changed) {
    await Promise.all(siblings.map(writeFile));
  }
  return siblings.length;
}

function addWork(kind) {
  collectFields();
  collectSiteText();
  collectWorks();

  const isService = kind === "서비스 카테고리";
  const count = state.works.filter((work) => work.kind === kind).length + 1;
  const title = isService ? `새 서비스 폴더 ${count}` : `새 작업물 폴더 ${count}`;
  const id = createUniqueWorkId(title, isService ? `service-${count}` : `project-${count}`);

  state.works.push({
    id,
    kind,
    title,
    headline: isService ? "새 서비스의 대제목을 입력하세요." : "새 작업물의 대제목을 입력하세요.",
    subtitle: "소제목 또는 작업 범위를 입력하세요.",
    popupName: `${title} 상세`,
    category: isService ? "Service" : "Portfolio",
    status: "공개",
    note: "폴더 내부 설명을 입력하세요.",
    thumbnailAssetId: "",
  });

  selectedWorkId = id;
  selectedWorkGroup = isService ? "service" : "project";
  persistState();
  renderWorks();
  renderFileControls();
  renderDashboard();
  showToast(`${title}를 추가했습니다.`);
}

function deleteWork(index) {
  collectWorks();
  const work = state.works[index];
  if (!work) return;

  if (isDefaultWork(work)) {
    showToast("기본 폴더는 삭제 대신 상태를 비공개로 바꿔 숨길 수 있습니다.");
    return;
  }

  state.works.splice(index, 1);
  if (selectedWorkId === work.id) {
    selectedWorkId = state.works[Math.max(0, index - 1)]?.id || state.works[0]?.id || "";
  }
  persistState();
  renderWorks();
  renderFileControls();
  renderFiles();
  renderDashboard();
  showToast(`${work.title} 폴더를 삭제했습니다.`);
}

function renderWorkCard(work, index) {
  if (selectedWorkDetailView === "files") {
    return renderWorkFilePanel(work, index);
  }

  const defaultFolder = isDefaultWork(work);
  return `
    <article class="work-editor-card detailed folder-detail" data-work-index="${index}">
      <div class="admin-preview">${renderAssetPreview(work.thumbnailAssetId, "썸네일 없음")}</div>
      <div class="work-card-head">
        <div>
          <small>Folder Settings</small>
          <strong>${escapeHtml(work.title)}</strong>
        </div>
        <div class="work-pills">
          <span class="status-pill">${escapeHtml(work.kind)}</span>
          <span class="status-pill">파일 ${countFilesForWork(work.id)}</span>
        </div>
      </div>
      <div class="thumb-controls">
        <label class="admin-button ghost file-button">
          썸네일 바꾸기
          <input type="file" accept="image/*" data-work-thumb="${index}" />
        </label>
        <button class="admin-button ghost" type="button" data-remove-work-thumb="${index}">비우기</button>
        <button class="admin-button" type="button" data-work-detail-view="files">내부 이미지 관리 →</button>
        <button class="admin-button ghost danger" type="button" data-delete-work="${index}" ${defaultFolder ? "disabled" : ""}>
          폴더 삭제
        </button>
      </div>
      <label class="admin-field">
        <span>폴더 이름</span>
        <input data-work-field="title" value="${escapeHtml(work.title)}" />
      </label>
      <label class="admin-field">
        <span>대제목</span>
        <input data-work-field="headline" value="${escapeHtml(work.headline)}" />
      </label>
      <label class="admin-field">
        <span>소제목</span>
        <textarea data-work-field="subtitle" rows="5">${escapeHtml(work.subtitle)}</textarea>
      </label>
      <label class="admin-field">
        <span>팝업 이름</span>
        <input data-work-field="popupName" value="${escapeHtml(work.popupName)}" />
      </label>
      <div class="admin-grid two compact">
        <label class="admin-field">
          <span>구분</span>
          <select data-work-field="kind">
            <option ${work.kind === "서비스 카테고리" ? "selected" : ""}>서비스 카테고리</option>
            <option ${work.kind === "프로젝트 폴더" ? "selected" : ""}>프로젝트 폴더</option>
          </select>
        </label>
        <label class="admin-field">
          <span>분류</span>
          <input data-work-field="category" value="${escapeHtml(work.category)}" />
        </label>
      </div>
      <div class="admin-grid two compact">
        <label class="admin-field">
          <span>상태</span>
          <select data-work-field="status">
            <option ${work.status === "공개" ? "selected" : ""}>공개</option>
            <option ${work.status === "비공개" ? "selected" : ""}>비공개</option>
            <option ${work.status === "준비중" ? "selected" : ""}>준비중</option>
          </select>
        </label>
      </div>
      <label class="admin-field">
        <span>작업 메모</span>
        <textarea data-work-field="note" rows="10">${escapeHtml(work.note)}</textarea>
      </label>
    </article>
  `;
}

function renderRatioOptions(selectedRatio) {
  return ["4:5", "1:1", "16:9", "9:16", "3:2"]
    .map((ratio) => `<option value="${ratio}" ${selectedRatio === ratio ? "selected" : ""}>${ratio}</option>`)
    .join("");
}

function getAdminRatioClass(ratio) {
  const value = String(ratio || "4:5");
  if (value === "16:9") return "ratio-wide";
  if (value === "1:1") return "ratio-square";
  if (value === "9:16") return "ratio-vertical";
  if (value === "3:2") return "ratio-photo";
  return "ratio-portrait";
}

function renderWorkFilePanel(work, index) {
  const records = getFilesForWork(work.id);
  const fileMarkup = records.length
    ? records
        .map((record, fileIndex) => {
          const preview = record.mimeType.startsWith("image/")
            ? `<img src="${escapeHtml(record.dataUrl)}" alt="" />`
            : `<span class="file-kind">${escapeHtml(record.mimeType.includes("pdf") ? "PDF" : "FILE")}</span>`;
          const isCover = work.thumbnailAssetId && assetRecords.some((asset) => asset.id === work.thumbnailAssetId && asset.targetId === record.id);
          const ratio = record.layoutRatio || "4:5";
          return `
            <article class="work-file-card detailed ${getAdminRatioClass(ratio)}" data-work-file-id="${escapeHtml(record.id)}">
              <span class="work-file-order">${String(fileIndex + 1).padStart(2, "0")}</span>
              <div class="work-file-preview">${preview}</div>
              <div class="work-file-fields">
                <div class="work-file-title-row">
                  <strong>${escapeHtml(record.title || record.originalName)}</strong>
                  <span>${escapeHtml(ratio)}</span>
                </div>
                <div class="admin-grid two compact">
                  <label class="admin-field">
                    <span>이미지 제목</span>
                    <input data-work-file-field="title" value="${escapeHtml(record.title || "")}" />
                  </label>
                  <label class="admin-field">
                    <span>팝업 이름</span>
                    <input data-work-file-field="popupName" value="${escapeHtml(record.popupName || "")}" />
                  </label>
                </div>
                <label class="admin-field">
                  <span>소제목</span>
                  <textarea data-work-file-field="subtitle" rows="3">${escapeHtml(record.subtitle || "")}</textarea>
                </label>
                <div class="admin-grid three compact">
                  <label class="admin-field">
                    <span>노출 비율</span>
                    <select data-work-file-field="layoutRatio">${renderRatioOptions(ratio)}</select>
                  </label>
                  <label class="admin-field">
                    <span>분류</span>
                    <input data-work-file-field="category" value="${escapeHtml(record.category || "")}" />
                  </label>
                  <label class="admin-field">
                    <span>상태</span>
                    <select data-work-file-field="status">
                      <option ${record.status === "공개" ? "selected" : ""}>공개</option>
                      <option ${record.status === "비공개" ? "selected" : ""}>비공개</option>
                      <option ${record.status === "준비중" ? "selected" : ""}>준비중</option>
                    </select>
                  </label>
                </div>
              </div>
              <div class="work-file-actions">
                <button class="admin-button ghost" type="button" data-work-file-move="${escapeHtml(record.id)}" data-direction="up" ${fileIndex === 0 ? "disabled" : ""}>앞으로</button>
                <button class="admin-button ghost" type="button" data-work-file-move="${escapeHtml(record.id)}" data-direction="down" ${fileIndex === records.length - 1 ? "disabled" : ""}>뒤로</button>
                <button class="admin-button ghost" type="button" data-work-file-cover="${escapeHtml(record.id)}">${isCover ? "대표 이미지" : "대표로"}</button>
                <button class="admin-button ghost danger" type="button" data-work-file-delete="${escapeHtml(record.id)}">삭제</button>
              </div>
            </article>
          `;
        })
        .join("")
    : `
      <div class="work-file-empty">
        <strong>아직 연결된 이미지가 없습니다.</strong>
        <span>이 폴더 내부에 보여줄 이미지를 바로 추가할 수 있습니다.</span>
      </div>
    `;

  return `
    <article class="work-editor-card work-file-panel detail-page" data-work-index="${index}">
      <div class="work-file-heading">
        <div>
          <button class="admin-button ghost inline-back" type="button" data-work-detail-view="folder">← 폴더 기본 정보</button>
          <strong>${escapeHtml(work.title)} 내부 이미지</strong>
          <span>비율을 16:9로 바꾸면 해당 이미지는 한 줄을 넓게 차지하고, 나머지 이미지는 아래 블럭으로 쌓입니다.</span>
        </div>
        <label class="admin-button file-button">
          이미지 추가
          <input type="file" multiple accept="image/*" data-work-file-upload="${index}" />
        </label>
      </div>
      <div class="work-file-grid">
        ${fileMarkup}
      </div>
    </article>
  `;
}

function renderWorkListItem(work, index) {
  const active = work.id === selectedWorkId ? " is-active" : "";
  return `
    <button class="work-list-item${active}" type="button" data-select-work="${escapeHtml(work.id)}">
      <span class="mini-icon folder-mini" aria-hidden="true"></span>
      <strong>${escapeHtml(work.title)}</strong>
      <small>${escapeHtml(work.category || work.kind)} · 파일 ${countFilesForWork(work.id)}</small>
      <em>${escapeHtml(work.status || "공개")}</em>
    </button>
  `;
}

function renderWorks() {
  const indexedWorks = state.works.map((work, index) => ({ work, index }));
  if (!indexedWorks.some(({ work }) => work.id === selectedWorkId && getWorkGroup(work) === selectedWorkGroup)) {
    selectedWorkId = indexedWorks.find(({ work }) => getWorkGroup(work) === selectedWorkGroup)?.work.id || indexedWorks[0]?.work.id || "";
  }
  const selectedEntry = indexedWorks.find(({ work }) => work.id === selectedWorkId) || indexedWorks[0];
  const groups = [
    {
      key: "project",
      title: "대표 작업물",
      description: "실제 포트폴리오로 보여줄 프로젝트 폴더입니다.",
      items: indexedWorks.filter(({ work }) => work.kind !== "서비스 카테고리"),
    },
    {
      key: "service",
      title: "서비스",
      description: "사이트 왼쪽 서비스 섹션과 개요 화면의 서비스 폴더입니다.",
      items: indexedWorks.filter(({ work }) => work.kind === "서비스 카테고리"),
    },
  ];
  const activeGroup = groups.find((group) => group.key === selectedWorkGroup) || groups[0];

  const tabsMarkup = groups
    .map(
      (group) => `
        <button class="work-group-tab${group.key === selectedWorkGroup ? " is-active" : ""}" type="button" data-work-group="${group.key}">
          <span>${escapeHtml(group.title)}</span>
          <small>${group.items.length}</small>
        </button>
      `,
    )
    .join("");

  const listMarkup = `
    <section class="work-list-section">
      <div class="work-list-heading">
        <strong>${escapeHtml(activeGroup.title)}</strong>
        <span>${activeGroup.items.length}</span>
      </div>
      <div class="work-list-items">
        ${activeGroup.items.map(({ work, index }) => renderWorkListItem(work, index)).join("")}
      </div>
    </section>
  `;

  document.querySelector("#workEditor").innerHTML = `
    <section class="work-create-bar">
      <div>
        <strong>새 폴더 만들기</strong>
        <span>선택한 탭에 맞춰 서비스 또는 대표 작업물 폴더를 추가합니다.</span>
      </div>
      <div class="work-create-actions">
        <button class="admin-button" type="button" data-add-work="${selectedWorkGroup === "service" ? "서비스 카테고리" : "프로젝트 폴더"}">
          ${selectedWorkGroup === "service" ? "서비스 폴더 추가" : "작업물 폴더 추가"}
        </button>
      </div>
    </section>
    <nav class="work-group-tabs" aria-label="폴더 유형">
      ${tabsMarkup}
    </nav>
    <section class="work-manager-layout">
      <aside class="work-folder-list" aria-label="폴더 목록">
        ${listMarkup}
      </aside>
      <section class="work-detail-panel" aria-label="선택한 폴더 상세 편집">
        ${
          selectedEntry
            ? renderWorkCard(selectedEntry.work, selectedEntry.index)
            : `<article class="admin-card empty-library"><strong>관리할 폴더가 없습니다.</strong></article>`
        }
      </section>
    </section>
  `;
}

function renderImageSlots() {
  const editor = document.querySelector("#imageSlotEditor");
  if (!editor) return;

  editor.innerHTML = state.imageSlots
    .map(
      (slot) => `
        <article class="asset-card" data-image-slot-card="${escapeHtml(slot.id)}">
          <div class="asset-preview">${renderAssetPreview(slot.assetId, "이미지 없음")}</div>
          <div class="asset-card-body">
            <strong>${escapeHtml(slot.title)}</strong>
            <small>${escapeHtml(slot.description)}</small>
            <div class="asset-actions">
              <label class="admin-button ghost file-button">
                이미지 바꾸기
                <input type="file" accept="image/*" data-image-slot="${escapeHtml(slot.id)}" />
              </label>
              <button class="admin-button ghost" type="button" data-remove-image-slot="${escapeHtml(slot.id)}">비우기</button>
            </div>
          </div>
        </article>
      `,
    )
    .join("");
}

function renderDocumentSlots() {
  const editor = document.querySelector("#documentSlotEditor");
  if (!editor) return;

  editor.innerHTML = state.documentSlots
    .map(
      (slot) => `
        <article class="asset-card document-card" data-document-slot-card="${escapeHtml(slot.id)}">
          <div class="asset-preview document-preview">${renderDocumentPreview(slot.assetId, "PDF 없음")}</div>
          <div class="asset-card-body">
            <strong>${escapeHtml(slot.title)}</strong>
            <small>${escapeHtml(slot.description)}</small>
            <div class="asset-actions">
              <label class="admin-button ghost file-button">
                PDF 바꾸기
                <input type="file" accept="application/pdf,.pdf" data-document-slot="${escapeHtml(slot.id)}" />
              </label>
              <button class="admin-button ghost" type="button" data-remove-document-slot="${escapeHtml(slot.id)}">비우기</button>
            </div>
          </div>
        </article>
      `,
    )
    .join("");
}

function collectWorks() {
  document.querySelectorAll("[data-work-index]").forEach((card) => {
    if (!isInActivePanel(card)) return;
    const index = Number(card.dataset.workIndex);
    card.querySelectorAll("[data-work-field]").forEach((field) => {
      state.works[index][field.dataset.workField] = field.value;
    });
  });
}

function collectWorkFileEdits() {
  document.querySelectorAll("[data-work-file-id]").forEach((card) => {
    if (!isInActivePanel(card)) return;
    const record = fileRecords.find((item) => item.id === card.dataset.workFileId);
    if (!record) return;
    card.querySelectorAll("[data-work-file-field]").forEach((field) => {
      record[field.dataset.workFileField] = field.value;
    });
  });
}

function renderFileControls() {
  const workOptions = state.works
    .map((work) => `<option value="${escapeHtml(work.id)}">${escapeHtml(work.title)}</option>`)
    .join("");

  const filterOptions = [
    '<option value="all">전체 카테고리 / 작업물</option>',
    ...state.works.map((work) => `<option value="${escapeHtml(work.id)}">${escapeHtml(work.title)}</option>`),
  ].join("");

  document.querySelector("#fileWork").innerHTML = workOptions;
  const filter = document.querySelector("#fileFilter");
  const previousValue = filter.value || "all";
  filter.innerHTML = filterOptions;
  filter.value = [...filter.options].some((option) => option.value === previousValue) ? previousValue : "all";
}

function renderFiles() {
  const filterValue = document.querySelector("#fileFilter").value || "all";
  const visibleFiles =
    filterValue === "all" ? fileRecords : fileRecords.filter((record) => record.workId === filterValue);
  const library = document.querySelector("#fileLibrary");

  if (!visibleFiles.length) {
    library.innerHTML = `
      <div class="empty-library">
        <strong>아직 업로드된 파일이 없습니다.</strong>
        <span>파일을 선택하고 대제목, 소제목, 팝업 이름을 입력해 추가하세요.</span>
      </div>
    `;
    renderDashboard();
    return;
  }

  library.innerHTML = visibleFiles
    .map((record) => {
      const work = state.works.find((item) => item.id === record.workId);
      const preview = record.mimeType.startsWith("image/")
        ? `<img src="${record.dataUrl}" alt="" />`
        : `<span class="file-kind">${escapeHtml(record.mimeType.includes("pdf") ? "PDF" : "FILE")}</span>`;

      return `
        <article class="file-card" data-file-id="${escapeHtml(record.id)}">
          <div class="file-preview">${preview}</div>
          <div class="file-card-body">
            <strong>${escapeHtml(record.title)}</strong>
            <small>${escapeHtml(record.subtitle || record.originalName)}</small>
            <span>${escapeHtml(work?.title || "미지정")} · ${escapeHtml(record.status)}</span>
          </div>
          <details>
            <summary>파일 정보 수정</summary>
            <label class="admin-field">
              <span>대제목</span>
              <input data-file-field="title" value="${escapeHtml(record.title)}" />
            </label>
            <label class="admin-field">
              <span>소제목</span>
              <input data-file-field="subtitle" value="${escapeHtml(record.subtitle)}" />
            </label>
            <label class="admin-field">
              <span>팝업 이름</span>
              <input data-file-field="popupName" value="${escapeHtml(record.popupName)}" />
            </label>
            <div class="admin-grid two compact">
              <label class="admin-field">
                <span>연결 카테고리 / 작업물</span>
                <select data-file-field="workId">
                  ${state.works
                    .map(
                      (item) =>
                        `<option value="${escapeHtml(item.id)}" ${record.workId === item.id ? "selected" : ""}>${escapeHtml(item.title)}</option>`,
                    )
                    .join("")}
                </select>
              </label>
              <label class="admin-field">
                <span>상태</span>
                <select data-file-field="status">
                  <option ${record.status === "공개" ? "selected" : ""}>공개</option>
                  <option ${record.status === "비공개" ? "selected" : ""}>비공개</option>
                  <option ${record.status === "준비중" ? "selected" : ""}>준비중</option>
                </select>
              </label>
            </div>
            <label class="admin-field">
              <span>분류</span>
              <input data-file-field="category" value="${escapeHtml(record.category)}" />
            </label>
            <div class="file-actions">
              <button class="admin-button ghost" type="button" data-file-delete="${escapeHtml(record.id)}">삭제</button>
            </div>
          </details>
        </article>
      `;
    })
    .join("");

  renderDashboard();
}

function collectFileEdits() {
  document.querySelectorAll("[data-file-id]").forEach((card) => {
    if (!isInActivePanel(card)) return;
    const record = fileRecords.find((item) => item.id === card.dataset.fileId);
    if (!record) return;
    card.querySelectorAll("[data-file-field]").forEach((field) => {
      record[field.dataset.fileField] = field.value;
    });
  });
}

function renderInquiries() {
  document.querySelector("#inquiryList").innerHTML = state.inquiries
    .map(
      (inquiry) => `
        <article class="inquiry-item">
          <div>
            <strong>${escapeHtml(inquiry.name)}</strong>
            <small>${escapeHtml(inquiry.type)} · ${escapeHtml(inquiry.date)}</small>
          </div>
          <span class="status-pill">${escapeHtml(inquiry.status)}</span>
        </article>
      `,
    )
    .join("");
}

async function handleFileUpload(event) {
  event.preventDefault();
  const files = Array.from(document.querySelector("#fileInput").files || []);
  if (!files.length) {
    showToast("파일을 먼저 선택하세요.");
    return;
  }

  const titleBase = document.querySelector("#fileTitle").value.trim();
  const subtitle = document.querySelector("#fileSubtitle").value.trim();
  const popupName = document.querySelector("#filePopupName").value.trim();
  const workId = document.querySelector("#fileWork").value;
  const category = document.querySelector("#fileCategory").value.trim();
  const status = document.querySelector("#fileStatus").value;

  for (const [index, file] of files.entries()) {
    const dataUrl = await fileToDataUrl(file);
    const title = titleBase || file.name.replace(/\.[^.]+$/, "");
    const record = {
      id: `${Date.now()}-${index}-${crypto.randomUUID()}`,
      title: files.length > 1 ? `${title} ${index + 1}` : title,
      subtitle,
      popupName: popupName || title,
      workId,
      category,
      status,
      layoutRatio: "4:5",
      originalName: file.name,
      mimeType: file.type || "application/octet-stream",
      size: file.size,
      createdAt: Date.now(),
      dataUrl,
    };
    await writeFile(record);
  }

  document.querySelector("#fileUploadForm").reset();
  await refreshFiles();
  showToast(`${files.length}개 파일을 추가했습니다.`);
}

async function handleWorkFileUpload(input) {
  collectWorks();
  const index = Number(input.dataset.workFileUpload);
  const work = state.works[index];
  const files = Array.from(input.files || []);
  if (!work || !files.length) return;

  await normalizeWorkFileOrder(work.id);
  const firstOrder = nextFileOrder(work.id);
  for (const [fileIndex, file] of files.entries()) {
    const dataUrl = await fileToDataUrl(file);
    const title = file.name.replace(/\.[^.]+$/, "");
    const record = {
      id: `${Date.now()}-${fileIndex}-${crypto.randomUUID()}`,
      title,
      subtitle: work.title,
      popupName: `${work.title} 이미지`,
      workId: work.id,
      category: work.category || work.kind,
      status: "공개",
      layoutRatio: "4:5",
      originalName: file.name,
      mimeType: file.type || "application/octet-stream",
      size: file.size,
      createdAt: Date.now(),
      sortOrder: firstOrder + fileIndex,
      dataUrl,
    };
    await writeFile(record);
  }

  input.value = "";
  selectedWorkId = work.id;
  await refreshFiles();
  showToast(`${work.title}에 이미지 ${files.length}개를 추가했습니다.`);
}

async function moveWorkFile(fileId, direction) {
  const current = fileRecords.find((record) => record.id === fileId);
  if (!current) return;

  const siblings = getFilesForWork(current.workId);
  const index = siblings.findIndex((record) => record.id === fileId);
  const targetIndex = direction === "up" ? index - 1 : index + 1;
  const target = siblings[targetIndex];
  if (!target) return;

  siblings.forEach((record, orderIndex) => {
    record.sortOrder = orderIndex + 1;
  });

  const currentOrder = current.sortOrder;
  current.sortOrder = target.sortOrder;
  target.sortOrder = currentOrder;
  await Promise.all(siblings.map(writeFile));
  await refreshFiles();
  showToast("이미지 순서를 바꿨습니다.");
}

async function setWorkCoverFromFile(fileId) {
  collectWorks();
  const record = fileRecords.find((item) => item.id === fileId);
  const work = state.works.find((item) => item.id === record?.workId);
  if (!record || !work) return;

  const asset = await createAssetFromRecord(record, work);
  work.thumbnailAssetId = asset.id;
  persistState();
  await refreshAssets();
  showToast(`${work.title} 대표 이미지를 지정했습니다.`);
}

async function refreshFiles() {
  fileRecords = await readFiles();
  renderFileControls();
  renderFiles();
  renderWorks();
  renderDashboard();
}

async function refreshAssets() {
  assetRecords = await readAssets();
  renderWorks();
  renderImageSlots();
  renderDocumentSlots();
}

async function handleWorkThumbnailUpload(input) {
  collectWorks();
  const index = Number(input.dataset.workThumb);
  const file = input.files?.[0];
  const work = state.works[index];
  if (!file || !work) return;

  const asset = await createAssetFromFile(file, "work-thumbnail", work.id, `${work.title} 썸네일`);
  work.thumbnailAssetId = asset.id;
  persistState();
  await refreshAssets();
  showToast(`${work.title} 썸네일을 바꿨습니다.`);
}

async function handleImageSlotUpload(input) {
  const slotId = input.dataset.imageSlot;
  const file = input.files?.[0];
  const slot = state.imageSlots.find((item) => item.id === slotId);
  if (!file || !slot) return;

  const asset = await createAssetFromFile(file, "site-image", slot.id, slot.title);
  slot.assetId = asset.id;
  persistState();
  await refreshAssets();
  showToast(`${slot.title} 이미지를 바꿨습니다.`);
}

async function handleDocumentSlotUpload(input) {
  const slotId = input.dataset.documentSlot;
  const file = input.files?.[0];
  const slot = state.documentSlots.find((item) => item.id === slotId);
  if (!file || !slot) return;

  if (file.type && file.type !== "application/pdf") {
    showToast("PDF 파일만 업로드할 수 있습니다.");
    input.value = "";
    return;
  }

  const asset = await createAssetFromFile(file, "site-document", slot.id, slot.title);
  slot.assetId = asset.id;
  persistState();
  await refreshAssets();
  showToast(`${slot.title}를 바꿨습니다.`);
}

navItems.forEach((item) => {
  item.addEventListener("click", () => setTab(item.dataset.adminTab));
});

document.querySelector(".admin-content").addEventListener("click", (event) => {
  const jumpButton = event.target.closest("[data-admin-jump]");
  if (!jumpButton) return;
  setTab(jumpButton.dataset.adminJump);
});

document.querySelector("#saveData").addEventListener("click", async () => {
  collectFields();
  collectSiteText();
  collectWorks();
  collectWorkFileEdits();
  collectFileEdits();
  persistState();
  await Promise.all(fileRecords.map(writeFile));
  await refreshFiles();
  showToast("저장했습니다.");
});

document.querySelector("#resetData").addEventListener("click", async () => {
  state = structuredClone(defaultState);
  selectedWorkId = state.works[0]?.id || "";
  selectedWorkDetailView = "folder";
  localStorage.removeItem(storageKey);
  persistState();
  renderAll();
  showToast("문구와 작업물을 초기화했습니다.");
});

document.querySelector("#fileUploadForm").addEventListener("submit", handleFileUpload);
document.querySelector("#fileFilter").addEventListener("change", renderFiles);
document.querySelector("#fileLibrary").addEventListener("click", async (event) => {
  const deleteButton = event.target.closest("[data-file-delete]");
  if (!deleteButton) return;
  await deleteFileRecord(deleteButton.dataset.fileDelete);
  await refreshFiles();
  showToast("파일을 삭제했습니다.");
});

document.querySelector("#workEditor").addEventListener("change", async (event) => {
  const fileInput = event.target.closest("[data-work-file-upload]");
  if (fileInput) {
    await handleWorkFileUpload(fileInput);
    return;
  }

  const input = event.target.closest("[data-work-thumb]");
  if (!input) return;
  await handleWorkThumbnailUpload(input);
});

document.querySelector("#workEditor").addEventListener("click", async (event) => {
  const detailViewButton = event.target.closest("[data-work-detail-view]");
  if (detailViewButton) {
    collectWorks();
    collectWorkFileEdits();
    selectedWorkDetailView = detailViewButton.dataset.workDetailView === "files" ? "files" : "folder";
    renderWorks();
    return;
  }

  const groupButton = event.target.closest("[data-work-group]");
  if (groupButton) {
    selectWorkGroup(groupButton.dataset.workGroup);
    return;
  }

  const addButton = event.target.closest("[data-add-work]");
  if (addButton) {
    addWork(addButton.dataset.addWork);
    selectedWorkDetailView = "folder";
    return;
  }

  const selectButton = event.target.closest("[data-select-work]");
  if (selectButton) {
    selectWork(selectButton.dataset.selectWork);
    return;
  }

  const deleteButton = event.target.closest("[data-delete-work]");
  if (deleteButton) {
    deleteWork(Number(deleteButton.dataset.deleteWork));
    return;
  }

  const fileMoveButton = event.target.closest("[data-work-file-move]");
  if (fileMoveButton) {
    collectWorkFileEdits();
    await moveWorkFile(fileMoveButton.dataset.workFileMove, fileMoveButton.dataset.direction);
    return;
  }

  const fileCoverButton = event.target.closest("[data-work-file-cover]");
  if (fileCoverButton) {
    collectWorkFileEdits();
    await setWorkCoverFromFile(fileCoverButton.dataset.workFileCover);
    return;
  }

  const fileDeleteButton = event.target.closest("[data-work-file-delete]");
  if (fileDeleteButton) {
    await deleteFileRecord(fileDeleteButton.dataset.workFileDelete);
    await refreshFiles();
    showToast("폴더 내부 파일을 삭제했습니다.");
    return;
  }

  const button = event.target.closest("[data-remove-work-thumb]");
  if (!button) return;
  const index = Number(button.dataset.removeWorkThumb);
  const work = state.works[index];
  if (!work) return;
  work.thumbnailAssetId = "";
  persistState();
  await refreshAssets();
  showToast(`${work.title} 썸네일을 비웠습니다.`);
});

document.querySelector("#imageSlotEditor").addEventListener("change", async (event) => {
  const input = event.target.closest("[data-image-slot]");
  if (!input) return;
  await handleImageSlotUpload(input);
});

document.querySelector("#imageSlotEditor").addEventListener("click", async (event) => {
  const button = event.target.closest("[data-remove-image-slot]");
  if (!button) return;
  const slot = state.imageSlots.find((item) => item.id === button.dataset.removeImageSlot);
  if (!slot) return;
  slot.assetId = "";
  persistState();
  await refreshAssets();
  showToast(`${slot.title} 이미지를 비웠습니다.`);
});

document.querySelector("#documentSlotEditor")?.addEventListener("change", async (event) => {
  const input = event.target.closest("[data-document-slot]");
  if (!input) return;
  await handleDocumentSlotUpload(input);
});

document.querySelector("#documentSlotEditor")?.addEventListener("click", async (event) => {
  const button = event.target.closest("[data-remove-document-slot]");
  if (!button) return;
  const slot = state.documentSlots.find((item) => item.id === button.dataset.removeDocumentSlot);
  if (!slot) return;
  slot.assetId = "";
  persistState();
  await refreshAssets();
  showToast(`${slot.title}를 비웠습니다.`);
});

function renderAll() {
  renderDashboard();
  renderFields();
  renderSiteText();
  renderWorks();
  renderImageSlots();
  renderDocumentSlots();
  renderFileControls();
  renderFiles();
  renderInquiries();
}

async function boot() {
  [fileRecords, assetRecords] = await Promise.all([readFiles(), readAssets()]);
  renderAll();
}

boot();
