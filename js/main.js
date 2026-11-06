/**
 * TechnoVision AI - Portfolio & Resume of Parham Amirpoor
 * Interactive Features & Dynamics
 */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initNavbar();
  initStatsCounter();
  initSkillsFilter();
  initProjects();
  initTerminal();
  initModals();
  initContactForm();
  initClipboard();
});

/* ===================================================================
   1. Theme Management (Dark / Light Theme)
   =================================================================== */
function initTheme() {
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  const themeIcon = document.getElementById('theme-icon');
  
  // Check persisted theme or default to dark
  const savedTheme = localStorage.getItem('technovision-theme') || 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('technovision-theme', newTheme);
      updateThemeIcon(newTheme);
      showToast(newTheme === 'dark' ? 'حالت شب فعال شد' : 'حالت روز فعال شد', 'info');
    });
  }

  function updateThemeIcon(theme) {
    if (!themeIcon) return;
    if (theme === 'dark') {
      themeIcon.innerHTML = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`;
    } else {
      themeIcon.innerHTML = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`;
    }
  }
}

/* ===================================================================
   2. Navbar Scroll, Mobile Drawer & Scroll-Spy
   =================================================================== */
function initNavbar() {
  const navbar = document.querySelector('.navbar');
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const navLinks = document.getElementById('nav-links');
  const navItems = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    // Scroll-Spy
    let currentSection = '';
    const scrollPos = window.scrollY + 120;

    sections.forEach(sec => {
      const secTop = sec.offsetTop;
      const secHeight = sec.offsetHeight;
      if (scrollPos >= secTop && scrollPos < secTop + secHeight) {
        currentSection = sec.getAttribute('id');
      }
    });

    navItems.forEach(item => {
      item.classList.remove('active');
      if (item.getAttribute('href') === `#${currentSection}`) {
        item.classList.add('active');
      }
    });
  });

  // Mobile drawer toggle
  if (hamburgerBtn && navLinks) {
    hamburgerBtn.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });

    // Close when clicking any nav item
    navItems.forEach(item => {
      item.addEventListener('click', () => {
        navLinks.classList.remove('active');
      });
    });
  }
}

/* ===================================================================
   3. Animated Numbers / Stats Counter
   =================================================================== */
function initStatsCounter() {
  const statsElements = document.querySelectorAll('.stat-number[data-target]');
  if (!statsElements.length) return;

  let animated = false;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !animated) {
        animated = true;
        statsElements.forEach(el => {
          const target = parseFloat(el.getAttribute('data-target'));
          const prefix = el.getAttribute('data-prefix') || '';
          const suffix = el.getAttribute('data-suffix') || '';
          const isDecimal = target % 1 !== 0;
          let current = 0;
          const duration = 1500;
          const stepTime = 30;
          const totalSteps = duration / stepTime;
          const increment = target / totalSteps;

          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              current = target;
              clearInterval(timer);
            }
            el.textContent = `${prefix}${isDecimal ? current.toFixed(1) : Math.floor(current)}${suffix}`;
          }, stepTime);
        });
      }
    });
  }, { threshold: 0.3 });

  const heroSection = document.querySelector('.hero-section');
  if (heroSection) observer.observe(heroSection);
}

/* ===================================================================
   4. Skills Matrix & Real-time Search
   =================================================================== */
function initSkillsFilter() {
  const filterBtns = document.querySelectorAll('.skills-filter-tabs .filter-btn');
  const searchInput = document.getElementById('skills-search');
  const skillCards = document.querySelectorAll('.skill-card');

  function applyFilter() {
    const activeCategory = document.querySelector('.skills-filter-tabs .filter-btn.active')?.dataset.category || 'all';
    const query = searchInput ? searchInput.value.trim().toLowerCase() : '';

    skillCards.forEach(card => {
      const cardCategory = card.dataset.category || '';
      const cardName = card.dataset.name ? card.dataset.name.toLowerCase() : '';
      const cardTags = card.dataset.tags ? card.dataset.tags.toLowerCase() : '';

      const matchesCategory = activeCategory === 'all' || cardCategory === activeCategory;
      const matchesSearch = query === '' || cardName.includes(query) || cardTags.includes(query);

      if (matchesCategory && matchesSearch) {
        card.style.display = 'flex';
      } else {
        card.style.display = 'none';
      }
    });
  }

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      applyFilter();
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', applyFilter);
  }
}

/* ===================================================================
   5. Projects Filtering & Project Details Data
   =================================================================== */
const projectsDatabase = {
  'technovision-ai': {
    title: 'TechnoVision AI Studio',
    subtitle: 'پلتفرم بینایی کامپیوتر و پردازش تصویر بلادرنگ',
    icon: '👁️',
    tech: ['Python', 'PyTorch', 'OpenCV', 'FastAPI', 'WebSocket', 'Docker'],
    metrics: 'دقت تشخیص ۹۸.۴٪ با لتنسی کمتر از ۳۵ میلی‌ثانیه',
    architecture: `
      <p>این سامانه یک راهکار یکپارچه جهت تحلیل فریم‌های ویدیویی و استخراج ویژگی‌های معنایی به صورت بلادرنگ است. با بهره‌گیری از مدل‌های مدرن استنتاجی و فریم‌ورک عمیق PyTorch، خط لوله پردازش به صورت توزیع‌شده اجرا می‌شود.</p>
      <h5 style="margin-top:16px; margin-bottom:8px; color:var(--text-primary); font-weight:700;">دستاوردهای کلیدی:</h5>
      <ul style="padding-right:20px; line-height:1.9;">
        <li>کاهش تأخیر تحلیل تصویر به کمتر از ۳۵ میلی‌ثانیه با بهینه‌سازی خطوط پردازش ناهمگام (Async Pipeline).</li>
        <li>پشتیبانی از پروتکل‌های ارتباطی WebSocket جهت ارسال بی‌درنگ مختصات اشیاء و طبقه‌بندی رویدادها.</li>
        <li>معماری مبتنی بر کانتینرهای Docker برای استقرار آسان در سرورهای ابری و شتاب‌دهنده‌های GPU.</li>
      </ul>
    `,
    github: 'https://github.com/parhamamirpoor13860-hub/technovision-ai',
    demo: 'https://parhamamirpoor13860-hub.github.io/technovision-ai/'
  },
  'persian-nlp': {
    title: 'موتور پردازش زبان طبیعی و جستجوی معنایی فارسی',
    subtitle: 'تحلیل احساسات، خلاصه‌سازی و تطبیق معنایی متون فارسی',
    icon: '📝',
    tech: ['Python', 'Transformers', 'FastAPI', 'Faiss', 'Vector DB', 'NLP'],
    metrics: 'پردازش بیش از ۱۲۰۰ درخواست متنی در دقیقه با دقت ۹۶٪',
    architecture: `
      <p>سیستم پردازش معنایی برای پایگاه‌های متنی فارسی که قادر است فراتر از کلیدواژه‌ها، مفاهیم و ارتباطات پنهان جملات را بر اساس بردارهای امبدینگ کشف کند.</p>
      <h5 style="margin-top:16px; margin-bottom:8px; color:var(--text-primary); font-weight:700;">دستاوردهای کلیدی:</h5>
      <ul style="padding-right:20px; line-height:1.9;">
        <li>تطبیق و پیش‌پردازش کاراکترهای عربی/فارسی، ریشه‌یابی و پاک‌سازی داده‌های حجیم متنی.</li>
        <li>شاخص‌بندی میلیونی بردارها با Faiss برای جستجوی شباهت کسینوسی در کسر ثانیه.</li>
        <li>ماژول هوشمند خلاصه‌سازی متون طولانی با حفظ پیوستگی مفهومی متن.</li>
      </ul>
    `,
    github: 'https://github.com/parhamamirpoor13860-hub/technovision-ai',
    demo: 'https://parhamamirpoor13860-hub.github.io/technovision-ai/'
  },
  'microservices-core': {
    title: 'معماری میکروسرویس غیرهمگام با امنیت بالا',
    subtitle: 'هسته توسعه مقیاس‌پذیر و پایدار برای سامانه‌های پرترافیک',
    icon: '⚡',
    tech: ['Python', 'FastAPI', 'PostgreSQL', 'Redis', 'JWT', 'AsyncIO'],
    metrics: 'تاب‌آوری ۹۹.۹۹٪ با زمان پاسخگویی میانگین ۲۴ میلی‌ثانیه',
    architecture: `
      <p>چارچوب طراحی شده برای ارائه سرویس‌های با ترافیک بالا همراه با سیستم صف Taskهای پس‌زمینه، مکانیزم کش چندلایه‌ای و احراز هویت بدون وضعیت (Stateless JWT).</p>
      <h5 style="margin-top:16px; margin-bottom:8px; color:var(--text-primary); font-weight:700;">دستاوردهای کلیدی:</h5>
      <ul style="padding-right:20px; line-height:1.9;">
        <li>یکپارچه‌سازی پایگاه داده PostgreSQL با ORM مدرن به همراه Connection Pooling بهینه.</li>
        <li>کش هوشمند با Redis و کاهش بار درخواست‌های تکراری تا ۷۰ درصد.</li>
        <li>پوشش آزمون‌های واحد و یکپارچه‌سازی خودکار با تست‌های CI/CD در GitHub Actions.</li>
      </ul>
    `,
    github: 'https://github.com/parhamamirpoor13860-hub/technovision-ai',
    demo: 'https://parhamamirpoor13860-hub.github.io/technovision-ai/'
  },
  'code-reviewer': {
    title: 'ربات هوشمند بازبینی کد گیت‌هاب',
    subtitle: 'تحلیل خودکار کیفیت کد، آسیب‌پذیری‌های امنیتی و پیشنهاد بهینه‌سازی',
    icon: '🤖',
    tech: ['Node.js', 'GitHub API', 'OpenAI API', 'TypeScript', 'Webhooks'],
    metrics: 'بررسی بیش از ۵۰۰ پول‌ریکوئست با تشخیص هوشمند الگوهای ضعیف',
    architecture: `
      <p>ابزاری متصل به وب‌هوک‌های گیت‌هاب که با ایجاد پول‌ریکوئست جدید، ساختار کدهای تغییر یافته را تحلیل کرده و نکات اصلاحی را در قالب کامنت‌های دقیق در فایل مربوطه ثبت می‌کند.</p>
      <h5 style="margin-top:16px; margin-bottom:8px; color:var(--text-primary); font-weight:700;">دستاوردهای کلیدی:</h5>
      <ul style="padding-right:20px; line-height:1.9;">
        <li>کاهش خطاهای ناشی از عدم رعایت اصول Clean Code و امنیتی پیش از ادغام کدها.</li>
        <li>طراحی پرامپت‌های مهندسی‌شده ساخت‌یافته جهت ارائه فیدبک‌های کاربردی و بدون توهم.</li>
        <li>سرعت عملکرد بالا با معماری Serverless و کمترین هزینه منابع.</li>
      </ul>
    `,
    github: 'https://github.com/parhamamirpoor13860-hub/technovision-ai',
    demo: 'https://parhamamirpoor13860-hub.github.io/technovision-ai/'
  }
};

function initProjects() {
  const filterBtns = document.querySelectorAll('.projects-filter-bar .filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const category = btn.dataset.category || 'all';
      projectCards.forEach(card => {
        const cardCat = card.dataset.category || '';
        if (category === 'all' || cardCat === category) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // Project Detail Trigger
  const detailButtons = document.querySelectorAll('[data-project-trigger]');
  detailButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const projectId = btn.dataset.projectTrigger;
      const data = projectsDatabase[projectId];
      if (data) {
        openProjectModal(data);
      }
    });
  });
}

function openProjectModal(data) {
  const modal = document.getElementById('project-detail-modal');
  const titleEl = document.getElementById('project-modal-title');
  const bodyEl = document.getElementById('project-modal-body');
  const githubLink = document.getElementById('project-modal-github');
  const demoLink = document.getElementById('project-modal-demo');

  if (!modal || !data) return;

  titleEl.innerHTML = `${data.icon} ${data.title}`;
  
  const techPills = data.tech.map(t => `<span class="tech-tag">${t}</span>`).join('');
  
  bodyEl.innerHTML = `
    <div style="margin-bottom:16px;">
      <span class="project-metric-badge">${data.metrics}</span>
      <p style="margin-top:10px; font-weight:600; color:var(--text-primary); font-size:1.05rem;">${data.subtitle}</p>
    </div>
    <div class="project-tech-stack" style="margin-bottom:20px;">${techPills}</div>
    <div class="project-architecture">${data.architecture}</div>
  `;

  if (githubLink) githubLink.href = data.github;
  if (demoLink) demoLink.href = data.demo;

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

/* ===================================================================
   6. Interactive Developer Console / Terminal
   =================================================================== */
function initTerminal() {
  const inputEl = document.getElementById('terminal-input');
  const outputEl = document.getElementById('terminal-output');
  const chips = document.querySelectorAll('.quick-cmd-chip');

  if (!inputEl || !outputEl) return;

  const commands = {
    help: () => `
      <div class="term-line term-cyan">دستورات قابل استفاده در کنسول:</div>
      <div class="term-line"><span class="term-highlight">skills</span>    - لیست مهارت‌ها و پشته فناوری</div>
      <div class="term-line"><span class="term-highlight">projects</span>  - پروژه‌های برتر و معماری آنها</div>
      <div class="term-line"><span class="term-highlight">about</span>     - بیوگرافی و خلاصه‌ای از پرهام امیرپور</div>
      <div class="term-line"><span class="term-highlight">contact</span>   - اطلاعات مستقیم تماس و شبکه‌ها</div>
      <div class="term-line"><span class="term-highlight">resume</span>    - باز کردن پیش‌نمایش و دانلود رزومه</div>
      <div class="term-line"><span class="term-highlight">tech</span>      - فناوری‌های مورد استفاده در این وب‌سایت</div>
      <div class="term-line"><span class="term-highlight">quote</span>     - نقل‌قول فنی الهام‌بخش</div>
      <div class="term-line"><span class="term-highlight">clear</span>     - پاک‌سازی کنسول</div>
    `,
    skills: () => `
      <div class="term-line term-success">Core Tech Stack:</div>
      <div class="term-line">- <b>Languages:</b> Python, JavaScript/TypeScript, SQL, C++</div>
      <div class="term-line">- <b>AI & Data:</b> PyTorch, OpenCV, Transformers, Scikit-Learn, Faiss</div>
      <div class="term-line">- <b>Backend & Web:</b> FastAPI, Node.js, AsyncIO, RESTful APIs, Modern CSS</div>
      <div class="term-line">- <b>DevOps:</b> Docker, Linux, Git, GitHub Actions CI/CD</div>
    `,
    projects: () => `
      <div class="term-line term-success">Featured Engineering Projects:</div>
      <div class="term-line">1. <b>TechnoVision AI Studio</b> - Realtime Computer Vision & Pattern Detection</div>
      <div class="term-line">2. <b>Persian NLP Engine</b> - Semantic Vector Search & Text Processing</div>
      <div class="term-line">3. <b>Microservices Core</b> - High-throughput Async Backend Architecture</div>
      <div class="term-line">4. <b>GitHub Code Reviewer</b> - Automated Intelligent PR Audit Bot</div>
    `,
    about: () => `
      <div class="term-line">پرهام امیرپور (Parham Amirpoor)</div>
      <div class="term-line term-cyan">توسعه‌دهنده نرم‌افزار و پژوهشگر هوش مصنوعی</div>
      <div class="term-line">علاقه‌مند به خلق سیستم‌های با کارایی فوق‌العاده، یادگیری عمیق، و تجربه کاربری تمیز و مدرن.</div>
    `,
    contact: () => `
      <div class="term-line term-success">ارتباط مستقیم:</div>
      <div class="term-line">📧 Email: parhamamirpoor13860@gmail.com</div>
      <div class="term-line">🐙 GitHub: https://github.com/parhamamirpoor13860-hub</div>
      <div class="term-line">🚀 Website: https://parhamamirpoor13860-hub.github.io/technovision-ai/</div>
    `,
    resume: () => {
      openResumeModal();
      return '<div class="term-line term-success">پنجره پیش‌نمایش و چاپ رزومه باز شد...</div>';
    },
    tech: () => `
      <div class="term-line term-cyan">این وب‌سایت با معماری زیر ساخته شده است:</div>
      <div class="term-line">- ساختار: HTML5 معنایی با پشتیبانی کامل از RTL</div>
      <div class="term-line">- استایل: Vanilla CSS سفارشی بر اساس متغیرهای تم روز/شب</div>
      <div class="term-line">- فونت: وزیرمتن (Vazirmatn) + JetBrains Mono</div>
      <div class="term-line">- منطق: جاوااسکریپت ماژولار و بدون وابستگی سنگین</div>
      <div class="term-line">- میزبانی: GitHub Pages بر روی سرورهای جهانی گیت‌هاب</div>
    `,
    quote: () => {
      const quotes = [
        '"Simplicity is prerequisite for reliability." — Edsger W. Dijkstra',
        '"First, solve the problem. Then, write the code." — John Johnson',
        '"The best way to predict the future is to invent it." — Alan Kay'
      ];
      return `<div class="term-line term-highlight">${quotes[Math.floor(Math.random() * quotes.length)]}</div>`;
    },
    sudo: () => '<div class="term-line" style="color:#ef4444;">دسترسی روت غیرمجاز است! اما می‌توانید از دستور help استفاده کنید ;)</div>',
    clear: () => {
      outputEl.innerHTML = '';
      return '';
    }
  };

  function executeCommand(rawCmd) {
    const cmd = rawCmd.trim().toLowerCase();
    if (!cmd) return;

    // Echo user line
    const userLine = document.createElement('div');
    userLine.className = 'term-line';
    userLine.innerHTML = `<span class="term-prompt">parham@technovision:~$</span> <span style="color:#ffffff;">${escapeHtml(rawCmd)}</span>`;
    outputEl.appendChild(userLine);

    if (commands[cmd]) {
      const result = commands[cmd]();
      if (result) {
        const resDiv = document.createElement('div');
        resDiv.innerHTML = result;
        outputEl.appendChild(resDiv);
      }
    } else {
      const errLine = document.createElement('div');
      errLine.className = 'term-line';
      errLine.style.color = '#f87171';
      errLine.innerHTML = `دستور ناشناخته: "${escapeHtml(rawCmd)}". برای مشاهده راهنما دستور <span class="term-highlight">help</span> را وارد نمایید.`;
      outputEl.appendChild(errLine);
    }

    // Scroll to bottom
    const termBody = document.querySelector('.terminal-body');
    if (termBody) termBody.scrollTop = termBody.scrollHeight;
  }

  inputEl.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const val = inputEl.value;
      inputEl.value = '';
      executeCommand(val);
    }
  });

  chips.forEach(chip => {
    chip.addEventListener('click', () => {
      const cmd = chip.dataset.cmd;
      if (cmd) {
        executeCommand(cmd);
      }
    });
  });
}

function escapeHtml(str) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

/* ===================================================================
   7. Modals (Resume & General)
   =================================================================== */
function initModals() {
  // Close buttons
  const closeBtns = document.querySelectorAll('[data-modal-close]');
  closeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const modals = document.querySelectorAll('.modal-backdrop');
      modals.forEach(m => m.classList.remove('active'));
      document.body.style.overflow = '';
    });
  });

  // Backdrop click to close
  const modals = document.querySelectorAll('.modal-backdrop');
  modals.forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  });

  // ESC key to close
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      modals.forEach(m => m.classList.remove('active'));
      document.body.style.overflow = '';
    }
  });

  // Resume trigger buttons
  const resumeTriggers = document.querySelectorAll('[data-resume-trigger]');
  resumeTriggers.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openResumeModal();
    });
  });

  // Resume Print Button
  const printBtn = document.getElementById('print-resume-btn');
  if (printBtn) {
    printBtn.addEventListener('click', () => {
      window.print();
    });
  }
}

function openResumeModal() {
  const modal = document.getElementById('resume-modal');
  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

/* ===================================================================
   8. Clipboard Copy Functionality
   =================================================================== */
function initClipboard() {
  const copyButtons = document.querySelectorAll('[data-copy-target]');
  copyButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetText = btn.dataset.copyTarget;
      if (targetText) {
        navigator.clipboard.writeText(targetText).then(() => {
          showToast(`«${targetText}» با موفقیت کپی شد!`, 'success');
          const originalText = btn.textContent;
          btn.textContent = 'کپی شد!';
          setTimeout(() => {
            btn.textContent = originalText;
          }, 2000);
        }).catch(() => {
          showToast('امکان دسترسی به کلیپ‌بورد میسر نشد', 'info');
        });
      }
    });
  });
}

/* ===================================================================
   9. Contact Form Validation & Submission
   =================================================================== */
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nameInput = document.getElementById('contact-name');
    const emailInput = document.getElementById('contact-email');
    const subjectInput = document.getElementById('contact-subject');
    const messageInput = document.getElementById('contact-message');
    const submitBtn = form.querySelector('button[type="submit"]');

    if (!nameInput.value.trim() || !emailInput.value.trim() || !messageInput.value.trim()) {
      showToast('لطفاً فیلدهای الزامی را تکمیل نمایید.', 'info');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value.trim())) {
      showToast('لطفاً یک آدرس ایمیل معتبر وارد کنید.', 'info');
      return;
    }

    // Visual loading state
    const originalBtnText = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = `<span>در حال ارسال پیام...</span>`;

    setTimeout(() => {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalBtnText;
      showToast('پیام شما با موفقیت ارسال شد. به زودی با شما در تماس خواهم بود!', 'success');
      form.reset();
    }, 1200);
  });
}

/* ===================================================================
   10. Toast Notification System
   =================================================================== */
function showToast(message, type = 'success') {
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  const icon = type === 'success' 
    ? `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>`
    : `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#06b6d4" stroke-width="2.5"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>`;

  toast.innerHTML = `${icon}<span>${message}</span>`;
  container.appendChild(toast);

  // Trigger animation
  requestAnimationFrame(() => {
    toast.classList.add('show');
  });

  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => {
      toast.remove();
    }, 300);
  }, 4000);
}
