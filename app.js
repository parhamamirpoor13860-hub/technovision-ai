/**
 * TechnoVision AI — Interactive Application Logic & Bilingual i18n Engine
 */

// --- 1. Bilingual Translation Dictionaries ---
const translations = {
  fa: {
    // Nav
    brandTag: "نسخه سازمانی",
    navCapabilities: "قابلیت‌ها",
    navDemo: "استودیو تعاملی",
    navBenchmarks: "آزمون و عملکرد",
    navApi: "مستندات API",
    navContact: "ارتباط با ما",
    btnConsole: "ورود به کنسول",
    langToggle: "English",

    // Hero
    heroTag: "موتور هوش مصنوعی چندوجهی و بینایی ماشین سازمانی",
    heroTitle: "بینایی ماشین فوق‌پیشرفته برای صنایع و سیستم‌های هوشمند",
    heroSubtitle: "پلتفرم TechnoVision با پردازش بلادرنگ جریان‌های تصویری، مدل‌های فونداسیون بینایی را با تأخیر زیر ۱۰ میلی‌ثانیه برای کارخانه‌ها، رباتیک، خودروهای خودران و سامانه‌های نظارتی فراهم می‌کند.",
    btnTryDemo: "آزمایش استودیو آنلاین",
    btnReadDocs: "مشاهده مستندات فنی",
    trustAccuracy: "دقت تشخیص mAP",
    trustLatency: "میانگین تأخیر پردازش",
    trustFPS: "فریم در ثانیه (Edge)",
    trustEnterprises: "شرکت‌های فعال",

    // Hero Scanner
    liveEngine: "موتور در حال اجرا",
    feedPcb: "مدار الکترونیکی (QC)",
    feedAuto: "خودروی خودران",
    feedWarehouse: "لجستیک انبار",
    telModel: "مدل جاری",
    telLatency: "تأخیر استنتاج",
    telConfidence: "میانگین اطمینان",
    telThroughput: "توان عملیاتی",

    // Studio
    studioTag: "محیط آزمایشگاهی زنده",
    studioTitle: "استودیو تعاملی استنتاج بینایی ماشین",
    studioDesc: "بدون نیاز به نصب، مدل‌های مختلف پردازش تصویر را با پارامترهای متفاوت روی دیتای واقعی بیازمایید و پاسخ JSON و جعبه‌های تشخیص را مشاهده کنید.",
    taskDetection: "تشخیص اشیاء و قطعات",
    taskOcr: "استخراج متن و بارکد",
    taskDefect: "آنالیز نواقص صنعتی",
    labelConf: "آستانه اطمینان:",
    labelEngine: "شتاب‌دهنده:",
    tabObjects: "اشیاء شناسایی‌شده",
    tabJson: "خروجی JSON خام",
    btnCopy: "کپی JSON",
    btnCopied: "کپی شد!",

    // Capabilities
    capsTag: "معماری و توانمندی‌ها",
    capsTitle: "ساخته‌شده برای مقیاس‌پذیری و حساسیت صنعتی",
    capsDesc: "فناوری ما استانداردهای جدیدی در زمینه پایداری، سرعت و دقت در محیط‌های عملیاتی دشوار ارائه می‌دهد.",
    
    cap1Title: "بینایی لبه (Edge AI) فوق سریع",
    cap1Desc: "بهینه‌سازی‌شده برای سخت‌افزارهای کم‌مصرف نظیر Nvidia Jetson، رسپبری‌پای و پردازنده‌های NPU با شتاب‌دهی TensorRT.",
    cap1f1: "تأخیر کمتر از ۸ میلی‌ثانیه در استریم ۴K",
    cap1f2: "پشتیبانی کامل از WebAssembly و ONNX",

    cap2Title: "OCR هوشمند چندزبانه و فارسی",
    cap2Desc: "مجهز به مدل اختصاصی خوانش اسناد، پلاک‌ها و فاکتورهای پیچیده با دقت ۹۹.۶٪ برای زبان‌های فارسی، عربی و ۱۲۰ زبان دیگر.",
    cap2f1: "تشخیص متون دست‌نویس و مهرها",
    cap2f2: "استخراج ساختاریافته جدول و فیلدهای کلیدی",

    cap3Title: "کنترل کیفیت و نقص‌یابی صنعتی",
    cap3Desc: "تشخیص انواع خرابی‌های میکروسکوپی در خطوط تولید پیوسته نظیر بردهای الکترونیکی، جوشکاری و بسته‌بندی با سرعت ۳۰۰ قطعه در دقیقه.",
    cap3f1: "کاهش خطای انسانی تا ۹۸٪",
    cap3f2: "کالیبراسیون خودکار نور و زاویه دوربین",

    // Benchmarks
    benchTag: "ارزیابی عملکرد",
    benchTitle: "مقایسه سرعت و دقت در آزمون‌های بین‌المللی",
    benchDesc: "مدل پایه TechnoVision ViT-V4 در مقایسه با استانداردهای فعلی بازار، تا ۳.۴ برابر سرعت بالاتر و ۴۲٪ مصرف حافظه کمتری دارد.",
    benchMetricTitle: "شاخص دقت تشخیص (mAP @ 0.50)",
    legendTechno: "TechnoVision ViT-V4",
    legendYolo: "YOLOv10 / SAM",
    benchLabel1: "تشخیص اشیاء صنعتی (COCO-Hard)",
    benchLabel2: "متون چندزبانه و فارسی (ICDAR)",
    benchLabel3: "مسیریابی خودروی خودران (Waymo)",

    // API Terminal
    apiTag: "سادگی ادغام",
    apiTitle: "ادغام در سیستم شما تنها با چند سطر کد",
    apiDesc: "از طریق کتابخانه‌های رسمی در زبان‌های پایتون، نود، گو یا فراخوانی مستقیم REST و gRPC.",

    // CTA
    ctaTitle: "آماده هوشمندسازی سیستم‌های تصویری خود هستید؟",
    ctaDesc: "هم‌اکنون کلید تست رایگان دریافت کنید یا با کارشناسان فنی ما برای استقرار سازمانی جلسه بگذارید.",
    btnGetApiKey: "دریافت کلید API تست",
    btnContactSales: "درخواست مشاوره سازمانی",

    // Modal
    modalTitle: "دریافت آنی کلید API نسخه توسعه‌دهنده",
    fieldName: "نام و نام خانوادگی",
    fieldEmail: "ایمیل سازمانی",
    fieldCompany: "نام سازمان / استارتاپ",
    btnGenerateKey: "تولید کلید دسترسی رایگان",
    keyGeneratedNotice: "کلید API شما با موفقیت صادر شد (اعتبار ۳۰ روز):",

    // Footer
    footerDesc: "پیشگام در توسعه هوش مصنوعی ادراکی و بینایی ماشین صنعتی در مقیاس بین‌المللی.",
    footerProducts: "محصولات",
    footerResources: "منابع توسعه‌دهندگان",
    footerCompany: "شرکت",
    footerStatus: "وضعیت شبکه: ۹۹.۹۹٪ فعال و عملیاتی",
    footerRights: "تمامی حقوق برای TechnoVision AI محفوظ است."
  },

  en: {
    // Nav
    brandTag: "ENTERPRISE",
    navCapabilities: "Capabilities",
    navDemo: "Interactive Studio",
    navBenchmarks: "Benchmarks",
    navApi: "API Docs",
    navContact: "Contact",
    btnConsole: "Console",
    langToggle: "فارسی",

    // Hero
    heroTag: "Enterprise Multimodal Vision & Neural AI Engine",
    heroTitle: "Next-Generation Computer Vision for Intelligent Industry",
    heroSubtitle: "TechnoVision processes real-time visual feeds with sub-10ms latency, delivering foundation visual intelligence for smart manufacturing, robotics, autonomous vehicles, and automated inspection.",
    btnTryDemo: "Launch Online Studio",
    btnReadDocs: "API Documentation",
    trustAccuracy: "mAP Accuracy",
    trustLatency: "Average Latency",
    trustFPS: "Edge Inference FPS",
    trustEnterprises: "Enterprises Powered",

    // Hero Scanner
    liveEngine: "ENGINE OPERATIONAL",
    feedPcb: "Circuit Board (QC)",
    feedAuto: "Autonomous Vehicle",
    feedWarehouse: "Smart Logistics",
    telModel: "ACTIVE MODEL",
    telLatency: "INFERENCE TIME",
    telConfidence: "AVG CONFIDENCE",
    telThroughput: "THROUGHPUT",

    // Studio
    studioTag: "LIVE SANDBOX",
    studioTitle: "Interactive Neural Vision Studio",
    studioDesc: "Explore real-time image inference with zero setup. Adjust confidence thresholds, switch hardware accelerators, and inspect live structured JSON payloads.",
    taskDetection: "Object & Component Detection",
    taskOcr: "Intelligent OCR & Layout",
    taskDefect: "Industrial Anomaly Analysis",
    labelConf: "Confidence Threshold:",
    labelEngine: "Inference Engine:",
    tabObjects: "Detected Entities",
    tabJson: "Raw JSON Response",
    btnCopy: "Copy JSON",
    btnCopied: "Copied!",

    // Capabilities
    capsTag: "ARCHITECTURE & SOLUTIONS",
    capsTitle: "Engineered for Mission-Critical Performance",
    capsDesc: "Our architecture sets new benchmarks for robustness, ultra-low latency, and precision in harsh operational settings.",
    
    cap1Title: "Ultra-Fast Edge Vision",
    cap1Desc: "Optimized for energy-efficient edge processors including Nvidia Jetson, edge TPUs, and NPU accelerators with TensorRT pipelines.",
    cap1f1: "Sub-8ms latency on 4K streaming streams",
    cap1f2: "Full WebAssembly and ONNX Runtime support",

    cap2Title: "Multilingual OCR & Document Vision",
    cap2Desc: "Proprietary foundation OCR trained on complex documents, invoices, and license plates with 99.6% accuracy in Persian, Arabic, and 120+ languages.",
    cap2f1: "Handwriting & stamp segmentation",
    cap2f2: "Semantic key-value entity extraction",

    cap3Title: "Industrial QC & Anomaly Inspection",
    cap3Desc: "Detect microscopic defects on high-speed continuous assembly lines (SMT soldering, packaging, surface fractures) at 300 parts/min.",
    cap3f1: "Reduces human QA error by up to 98%",
    cap3f2: "Auto-calibrating ambient illumination",

    // Benchmarks
    benchTag: "PERFORMANCE BENCHMARKS",
    benchTitle: "Speed and Accuracy on Standard Testbeds",
    benchDesc: "TechnoVision ViT-V4 achieves up to 3.4x higher inference throughput and 42% lower memory footprint compared to legacy architectures.",
    benchMetricTitle: "Detection Accuracy (mAP @ 0.50)",
    legendTechno: "TechnoVision ViT-V4",
    legendYolo: "YOLOv10 / SAM",
    benchLabel1: "Industrial Components (COCO-Hard)",
    benchLabel2: "Multilingual & Persian OCR (ICDAR)",
    benchLabel3: "Autonomous Driving Perception (Waymo)",

    // API Terminal
    apiTag: "RAPID INTEGRATION",
    apiTitle: "Integrate into Your Pipeline in Minutes",
    apiDesc: "Available via official SDKs in Python, Node.js, Go, or high-throughput gRPC and REST endpoints.",

    // CTA
    ctaTitle: "Ready to Supercharge Your Vision Systems?",
    ctaDesc: "Claim your free development sandbox API key now or schedule a consultation with our enterprise solution architects.",
    btnGetApiKey: "Get Sandbox API Key",
    btnContactSales: "Talk to Sales",

    // Modal
    modalTitle: "Generate Developer Sandbox API Key",
    fieldName: "Full Name",
    fieldEmail: "Work Email",
    fieldCompany: "Company / Organization",
    btnGenerateKey: "Generate Free API Key",
    keyGeneratedNotice: "Your API Key is generated and ready (Valid for 30 days):",

    // Footer
    footerDesc: "Pioneering foundation computer vision models and neural perception systems for enterprise and edge.",
    footerProducts: "Products",
    footerResources: "Resources",
    footerCompany: "Company",
    footerStatus: "All Systems Operational 99.99%",
    footerRights: "All rights reserved. TechnoVision AI."
  }
};

// --- 2. Interactive Vision Feeds & Detection Data ---
const visionFeeds = {
  pcb: {
    img: "assets/images/demo_pcb.jpg",
    model: "TV-ViT-SMT v4.2",
    latency: "7.8 ms",
    confidence: "99.2%",
    throughput: "128 FPS",
    boxes: [
      { top: "39%", left: "28%", width: "17%", height: "23%", label: "AURORA-X1 [99.8%]", type: "chip", name: "AURORA-X1 Processor", conf: 0.998 },
      { top: "33%", left: "46%", width: "15%", height: "21%", label: "SPARK-CORE [98.9%]", type: "chip", name: "SPARK-CORE Co-Processor", conf: 0.989 },
      { top: "45%", left: "57%", width: "16%", height: "24%", label: "NEXUS-V [99.1%]", type: "chip", name: "NEXUS-V Neural Switch", conf: 0.991 },
      { top: "59%", left: "39%", width: "18%", height: "25%", label: "QUANTUM-IO [99.4%]", type: "chip", name: "QUANTUM-IO Controller", conf: 0.994 },
      { top: "27%", left: "67%", width: "8%", height: "12%", label: "WARN: Solder Bridging [97.3%]", type: "defect", name: "Solder Bridging (QC Warning)", conf: 0.973 }
    ]
  },
  auto: {
    img: "assets/images/demo_auto.jpg",
    model: "TV-DrivePerception v3.8",
    latency: "9.2 ms",
    confidence: "98.7%",
    throughput: "110 FPS",
    boxes: [
      { top: "48%", left: "22%", width: "9%", height: "14%", label: "Autonomous Shuttle [99.1%]", type: "vehicle", name: "Autonomous Transit Pod", conf: 0.991 },
      { top: "49%", left: "32%", width: "8%", height: "12%", label: "Transit Bus [98.6%]", type: "vehicle", name: "Electric Bus (Lead)", conf: 0.986 },
      { top: "50%", left: "56%", width: "8%", height: "13%", label: "Vehicle [99.3%]", type: "vehicle", name: "Passenger Sedan #4", conf: 0.993 },
      { top: "50%", left: "73%", width: "4%", height: "14%", label: "Pedestrian [97.8%]", type: "vehicle", name: "Sidewalk Pedestrian", conf: 0.978 },
      { top: "44%", left: "81%", width: "16%", height: "25%", label: "Light Rail Tram [99.5%]", type: "vehicle", name: "Urban Tramway", conf: 0.995 }
    ]
  },
  warehouse: {
    img: "assets/images/demo_warehouse.jpg",
    model: "TV-LogisticsNav v2.9",
    latency: "6.9 ms",
    confidence: "99.4%",
    throughput: "145 FPS",
    boxes: [
      { top: "77%", left: "28%", width: "15%", height: "18%", label: "AGV-Bot #14 [99.6%]", type: "robot", name: "Autonomous Robot Unit #14", conf: 0.996 },
      { top: "72%", left: "44%", width: "13%", height: "18%", label: "AGV-Bot #08 [99.2%]", type: "robot", name: "Heavy Cargo AGV #08", conf: 0.992 },
      { top: "75%", left: "63%", width: "14%", height: "18%", label: "AGV-Bot #22 [99.5%]", type: "robot", name: "Bin Carrier Bot #22", conf: 0.995 },
      { top: "51%", left: "91%", width: "5%", height: "22%", label: "Warehouse Staff [98.1%]", type: "robot", name: "Certified Operator Zone", conf: 0.981 },
      { top: "39%", left: "28%", width: "36%", height: "28%", label: "Conveyor Line A [99.9%]", type: "robot", name: "High-Speed Sortation S-Line", conf: 0.999 }
    ]
  }
};

// --- 3. Code Snippets for API Section ---
const codeSnippets = {
  python: `import technovision as tv

# Initialize client with sandbox API key
client = tv.Client(api_key="tv_live_9a7d2e8bf1c4", accelerator="tensorrt")

# Perform real-time multi-modal analysis
response = client.vision.detect(
    image="https://technovision.ai/sample.jpg",
    tasks=["object_detection", "ocr_multilingual", "anomaly_qc"],
    confidence_threshold=0.85
)

for entity in response.entities:
    print(f"Detected: {entity.label} | Confidence: {entity.confidence:.2%}")
    print(f"Bounding Box: {entity.bbox.to_dict()}")`,

  curl: `curl -X POST https://api.technovision.ai/v1/vision/inference \\
  -H "Authorization: Bearer tv_live_9a7d2e8bf1c4" \\
  -H "Content-Type: application/json" \\
  -d '{
    "image_url": "https://technovision.ai/sample.jpg",
    "tasks": ["object_detection", "anomaly_qc"],
    "confidence_threshold": 0.85,
    "model": "tv-vit-smt-v4"
  }'`,

  node: `import { TechnoVision } from '@technovision/sdk';

const tv = new TechnoVision({ apiKey: 'tv_live_9a7d2e8bf1c4' });

async function inspectFeed() {
  const result = await tv.vision.detect({
    image: 'https://technovision.ai/sample.jpg',
    tasks: ['object_detection', 'ocr_multilingual'],
    confidence: 0.85
  });

  console.log('Inference latency:', result.telemetry.latency_ms, 'ms');
  console.log('Entities detected:', result.entities.length);
}

inspectFeed();`,

  go: `package main

import (
    "context"
    "fmt"
    "github.com/technovision-ai/sdk-go"
)

func main() {
    client := technovision.NewClient("tv_live_9a7d2e8bf1c4")
    
    resp, err := client.Vision.Detect(context.Background(), &technovision.DetectRequest{
        ImageURL:   "https://technovision.ai/sample.jpg",
        Confidence: 0.85,
    })
    if err != nil {
        panic(err)
    }

    fmt.Printf("Detected %d entities in %s\\n", len(resp.Entities), resp.Latency)
}`
};

// --- 4. Application State ---
let currentLang = localStorage.getItem('tv_lang') || 'fa';
let currentTheme = localStorage.getItem('tv_theme') || 'dark';
let activeFeedKey = 'pcb';
let activeTaskType = 'detection';
let currentConfidenceThreshold = 0.85;

// --- 5. DOM Initialization ---
document.addEventListener('DOMContentLoaded', () => {
  initLanguage();
  initTheme();
  initScannerFeed();
  initStudioControls();
  initApiTerminal();
  initModal();
});

// --- Language Switcher ---
function initLanguage() {
  applyLanguage(currentLang);

  const langBtn = document.getElementById('langToggleBtn');
  if (langBtn) {
    langBtn.addEventListener('click', () => {
      currentLang = currentLang === 'fa' ? 'en' : 'fa';
      localStorage.setItem('tv_lang', currentLang);
      applyLanguage(currentLang);
    });
  }
}

function applyLanguage(lang) {
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'fa' ? 'rtl' : 'ltr';

  const dict = translations[lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });

  // Update dynamic scanner / studio text
  updateScannerHUD();
  updateStudioInspector();
}

// --- Theme Switcher ---
function initTheme() {
  document.documentElement.setAttribute('data-theme', currentTheme);
  updateThemeIcon();

  const themeBtn = document.getElementById('themeToggleBtn');
  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
      localStorage.setItem('tv_theme', currentTheme);
      document.documentElement.setAttribute('data-theme', currentTheme);
      updateThemeIcon();
    });
  }
}

function updateThemeIcon() {
  const icon = document.getElementById('themeIcon');
  if (!icon) return;
  if (currentTheme === 'light') {
    icon.innerHTML = '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>'; // Moon icon
  } else {
    icon.innerHTML = '<circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>'; // Sun icon
  }
}

// --- Hero Scanner Viewport ---
function initScannerFeed() {
  const chips = document.querySelectorAll('.feed-chip');
  chips.forEach(chip => {
    chip.addEventListener('click', (e) => {
      chips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      activeFeedKey = chip.getAttribute('data-feed');
      renderScannerFeed(activeFeedKey);
    });
  });

  renderScannerFeed(activeFeedKey);
}

function renderScannerFeed(feedKey) {
  const feed = visionFeeds[feedKey];
  if (!feed) return;

  const imgEl = document.getElementById('scannerImg');
  const overlay = document.getElementById('scannerOverlay');

  if (imgEl) imgEl.src = feed.img;
  if (overlay) {
    overlay.innerHTML = '';
    feed.boxes.forEach(box => {
      const bEl = document.createElement('div');
      bEl.className = `bbox bbox-${box.type}`;
      bEl.style.top = box.top;
      bEl.style.left = box.left;
      bEl.style.width = box.width;
      bEl.style.height = box.height;

      const label = document.createElement('span');
      label.className = 'bbox-label';
      label.textContent = box.label;
      bEl.appendChild(label);

      overlay.appendChild(bEl);
    });
  }

  updateScannerHUD();
}

function updateScannerHUD() {
  const feed = visionFeeds[activeFeedKey];
  if (!feed) return;

  const telModelVal = document.getElementById('telModelVal');
  const telLatencyVal = document.getElementById('telLatencyVal');
  const telConfVal = document.getElementById('telConfVal');
  const telThroughputVal = document.getElementById('telThroughputVal');

  if (telModelVal) telModelVal.textContent = feed.model;
  if (telLatencyVal) telLatencyVal.textContent = feed.latency;
  if (telConfVal) telConfVal.textContent = feed.confidence;
  if (telThroughputVal) telThroughputVal.textContent = feed.throughput;
}

// --- Interactive Studio & Inspector ---
function initStudioControls() {
  const taskBtns = document.querySelectorAll('.task-btn');
  taskBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      taskBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeTaskType = btn.getAttribute('data-task');
      updateStudioInspector();
    });
  });

  const confSlider = document.getElementById('confSlider');
  const confDisplay = document.getElementById('confDisplay');
  if (confSlider && confDisplay) {
    confSlider.addEventListener('input', (e) => {
      currentConfidenceThreshold = parseFloat(e.target.value) / 100;
      confDisplay.textContent = `${e.target.value}%`;
      updateStudioInspector();
    });
  }

  // Inspector tab toggle
  const tabEntities = document.getElementById('tabEntities');
  const tabJson = document.getElementById('tabJson');
  const panelEntities = document.getElementById('panelEntities');
  const panelJson = document.getElementById('panelJson');

  if (tabEntities && tabJson && panelEntities && panelJson) {
    tabEntities.addEventListener('click', () => {
      tabEntities.classList.add('active');
      tabJson.classList.remove('active');
      panelEntities.style.display = 'block';
      panelJson.style.display = 'none';
    });

    tabJson.addEventListener('click', () => {
      tabJson.classList.add('active');
      tabEntities.classList.remove('active');
      panelEntities.style.display = 'none';
      panelJson.style.display = 'block';
    });
  }

  // Copy JSON Button
  const copyBtn = document.getElementById('copyJsonBtn');
  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      const jsonText = document.getElementById('jsonViewArea')?.textContent;
      if (jsonText) {
        navigator.clipboard.writeText(jsonText).then(() => {
          const dict = translations[currentLang];
          copyBtn.textContent = dict.btnCopied || "Copied!";
          setTimeout(() => {
            copyBtn.textContent = dict.btnCopy || "Copy JSON";
          }, 2000);
        });
      }
    });
  }

  updateStudioInspector();
}

function updateStudioInspector() {
  const feed = visionFeeds[activeFeedKey];
  if (!feed) return;

  const studioImg = document.getElementById('studioImg');
  if (studioImg) studioImg.src = feed.img;

  const filteredBoxes = feed.boxes.filter(b => b.conf >= currentConfidenceThreshold);

  // Update Studio Overlay Boxes
  const studioOverlay = document.getElementById('studioOverlay');
  if (studioOverlay) {
    studioOverlay.innerHTML = '';
    filteredBoxes.forEach(box => {
      const bEl = document.createElement('div');
      bEl.className = `bbox bbox-${box.type}`;
      bEl.style.top = box.top;
      bEl.style.left = box.left;
      bEl.style.width = box.width;
      bEl.style.height = box.height;

      const label = document.createElement('span');
      label.className = 'bbox-label';
      label.textContent = box.label;
      bEl.appendChild(label);

      studioOverlay.appendChild(bEl);
    });
  }

  // Update Entities List
  const entitiesList = document.getElementById('entitiesList');
  if (entitiesList) {
    entitiesList.innerHTML = '';
    if (filteredBoxes.length === 0) {
      entitiesList.innerHTML = `<li style="color:var(--text-muted); padding:10px 0;">No entities match threshold (${(currentConfidenceThreshold * 100).toFixed(0)}%)</li>`;
    } else {
      filteredBoxes.forEach(box => {
        const li = document.createElement('li');
        li.className = 'detection-row';
        li.innerHTML = `
          <div class="detection-name">
            <span class="det-badge" style="background:${box.type === 'defect' ? '#F43F5E' : box.type === 'chip' ? '#38BDF8' : '#10B981'}"></span>
            ${box.name}
          </div>
          <div class="confidence-bar">
            <span>${(box.conf * 100).toFixed(1)}%</span>
            <div class="progress-track">
              <div class="progress-fill" style="width:${(box.conf * 100)}%"></div>
            </div>
          </div>
        `;
        entitiesList.appendChild(li);
      });
    }
  }

  // Update JSON View
  const jsonViewArea = document.getElementById('jsonViewArea');
  if (jsonViewArea) {
    const payload = {
      status: "success",
      timestamp: new Date().toISOString(),
      model: feed.model,
      engine: "TensorRT-FP16",
      telemetry: {
        latency_ms: parseFloat(feed.latency),
        fps: parseInt(feed.throughput),
        memory_mb: 138.4
      },
      detections_count: filteredBoxes.length,
      detections: filteredBoxes.map(b => ({
        entity: b.name,
        confidence: b.conf,
        bounding_box: {
          top: b.top,
          left: b.left,
          width: b.width,
          height: b.height
        }
      }))
    };
    jsonViewArea.textContent = JSON.stringify(payload, null, 2);
  }
}

// --- API Code Terminal ---
function initApiTerminal() {
  const tabs = document.querySelectorAll('.lang-tab');
  const codeEl = document.getElementById('terminalCode');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const lang = tab.getAttribute('data-code');
      if (codeSnippets[lang] && codeEl) {
        codeEl.textContent = codeSnippets[lang];
      }
    });
  });

  if (codeEl) {
    codeEl.textContent = codeSnippets.python;
  }
}

// --- Modal Popup Logic ---
function initModal() {
  const modal = document.getElementById('apiKeyModal');
  const openBtns = document.querySelectorAll('.open-modal-btn');
  const closeBtn = document.getElementById('closeModalBtn');
  const form = document.getElementById('keyRequestForm');
  const resultBox = document.getElementById('keyResultBox');
  const generatedKeySpan = document.getElementById('generatedKeySpan');

  openBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      if (modal) modal.classList.add('open');
    });
  });

  if (closeBtn && modal) {
    closeBtn.addEventListener('click', () => {
      modal.classList.remove('open');
    });
  }

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('open');
      }
    });
  }

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      // Generate a realistic secure API key token
      const randomHex = Array.from({length: 24}, () => Math.floor(Math.random() * 16).toString(16)).join('');
      const fakeKey = `tv_live_${randomHex}`;
      
      if (generatedKeySpan) generatedKeySpan.textContent = fakeKey;
      if (resultBox) resultBox.classList.add('visible');
    });
  }
}
