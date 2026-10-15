// All copy for the page, in both languages. Structure must stay identical between `en` and `es`.

export type Lang = 'en' | 'es';

const email = 'aidacarbajofernandez@gmail.com';
const linkedin = 'https://www.linkedin.com/in/aida-carbajo';
const cv = '/cv/Aida_Carbajo_CV_QA.pdf';
const appStore = 'https://apps.apple.com/app/id6797331911';

export const portrait = { src: '/images/aida-tenerife.jpg', w: 1200, h: 1500 };

export const story = {
  video: { en: '/media/aida-story-en.mp4', es: '/media/aida-story.mp4' },
  poster: { en: '/media/aida-story-en-poster.jpg', es: '/media/aida-story-poster.jpg' },
  photo: { src: '/images/aida-skydive.jpg', w: 1120, h: 1400 },
};

export const links = { email, mailto: `mailto:${email}`, linkedin, cv, appStore };

export const packvalet = {
  icon: '/images/packvalet/icon.png',
  poster: { src: '/images/packvalet/poster.jpg', w: 991, h: 1400 },
  shots: [1, 2, 3].map((n) => ({ src: `/images/packvalet/screenshot-${n}.jpg`, w: 600, h: 1298 })),
};

const en = {
  lang: 'en' as Lang,
  title: 'Aida Carbajo, QA Engineer and web developer',
  description:
    'ISTQB-certified QA Engineer. Automated tests that run before every release, manual testing of new apps, and websites built from scratch.',
  otherLang: { label: 'Español', short: 'ES', href: '/es/' },
  nav: { services: 'Services', story: 'About', app: 'PackValet', contact: 'Contact', cv: 'CV' },
  hero: {
    first: 'Aida',
    second: 'Carbajo',
    role: 'QA Engineer & web developer',
    portraitAlt: 'Aida Carbajo smiling by the sea, below tall cliffs',
    checklist: 'Pre-launch checklist',
    checklistFor: 'Your product',
    items: [
      { id: 'services', label: 'Automated tests' },
      { id: 'services', label: 'Manual testing' },
      { id: 'services', label: 'Website' },
      { id: 'app', label: 'Mobile app' },
    ],
    response: 'Checked',
    cleared: 'Cleared for launch',
    action: 'Let’s talk',
  },
  services: {
    heading: 'What I check for you',
    strips: [
      { code: 'TST', name: 'Automated tests', what: 'A test repo for your frontend and backend that runs before every release to production.', tools: 'Playwright · REST-assured · CI/CD' },
      { code: 'MAN', name: 'Manual testing', what: 'Your new web or mobile app, tested end to end like a real user would.', tools: 'Exploratory · Regression · E2E' },
      { code: 'WEB', name: 'Websites', what: 'The website for your company or service, designed and built from scratch.', tools: 'Design · Build · Launch' },
      { code: 'APP', name: 'Mobile apps', what: 'iOS apps, from the idea to the App Store.', tools: 'iOS · App Store' },
    ],
  },
  log: {
    heading: 'Logbook',
    note: 'Professional QA since 2022, currently QA Engineer at adidas. ISTQB certified.',
    columns: ['Period', 'Entry', 'Result'],
    rows: [
      { when: '2025–', entry: 'Playwright framework built from scratch on Jenkins CI/CD, replacing a legacy Selenium suite (63 scenarios)', value: null, prefix: '3 h → 40 min', suffix: '' },
      { when: '2025–', entry: 'Defects reported and triaged leading a full frontend migration with 3 developers', value: 350, prefix: '', suffix: '+' },
      { when: '2025–', entry: 'AI-assisted defect-reporting tools I built, now used department-wide', value: 2, prefix: '', suffix: ' tools' },
      { when: '2025–', entry: 'Presented those tools at adidas HQ to the whole project, directors included', value: null, prefix: 'HQ', suffix: '' },
      { when: '2025–', entry: 'Core platform once covered by ~16 testers, now by a team of 5', value: null, prefix: '16 → 5', suffix: '' },
      { when: '2022–2025', entry: 'Defects reported and tracked in JIRA with reproducible steps', value: 250, prefix: '', suffix: '+' },
      { when: '2022–2025', entry: 'Undocumented attribute-cascade flow found during a backend migration, mapped so it could be tested', value: null, prefix: 'Found', suffix: '' },
      { when: '2023', entry: 'ISTQB Certified Tester, Foundation Level', value: null, prefix: 'CTFL', suffix: '' },
      { when: 'Own app', entry: 'PackValet: designed, built, tested and shipped solo', value: null, prefix: 'iOS', suffix: '' },
    ],
    totalLabel: 'Defects reported and tracked',
    total: 600,
  },
  story: {
    heading: 'Who I am',
    text: 'My story in 45 seconds: a promise I made myself, my work in QA at adidas, and how PackValet was born.',
    sound: 'Watch with sound',
    mute: 'Mute',
    videoLabel: 'Video: Aida tells her story',
    photoAlt: 'Aida skydiving in tandem below a small plane, against a blue sky',
  },
  app: {
    heading: 'PackValet, live on iOS',
    text: 'My first app: designed, built, tested and shipped by me. It writes your packing list from the weather, the trip and what you forgot last time.',
    action: 'See it on the App Store',
    posterAlt: 'PackValet launch poster: a fortune cookie with “It’s your lucky day” and a QR code to the App Store',
    shotAlt: [
      'PackValet home screen with upcoming trips',
      'Choosing the trip type in PackValet',
      'A tailored trip to Thailand in PackValet',
    ],
  },
  check: {
    heading: 'Pre-flight check',
    text: 'A QA portfolio should pass its own tests. Run 12 real checks on the page you are reading, right now.',
    action: 'Run the check',
    again: 'Run again',
    running: 'Running…',
    summary: '{passed} of {total} passed in {ms} ms',
    passed: 'Checked',
    failed: 'Failed',
    pending: 'Pending',
    noscript: 'The check needs JavaScript.',
    items: {
      lang: 'Language declared',
      h1: 'One main heading',
      order: 'Headings in order',
      alt: 'Images have alt text',
      dims: 'Images reserve their space',
      names: 'Links and buttons named',
      anchors: 'In-page links land',
      target: 'Buttons at least 44 px',
      contrast: 'WCAG AA contrast',
      overflow: 'No sideways scroll',
      hreflang: 'Translation linked',
      speed: 'Loaded under 3 s',
    },
  },
  contact: {
    heading: 'Ready for launch?',
    text: 'Tell me what you are building and when you want to launch.',
    action: 'Email me',
    rows: [
      { label: 'Email', value: email, href: `mailto:${email}` },
      { label: 'LinkedIn', value: 'linkedin.com/in/aida-carbajo', href: linkedin },
      { label: 'Based', value: 'Remote from Spain', href: null },
      { label: 'Languages', value: 'English, Spanish, Catalan', href: null },
    ],
  },
  footer: {
    links: { linkedin: 'LinkedIn', email: 'Email', cv: 'Download CV', app: 'PackValet' },
    rights: '© 2026 Aida Carbajo',
  },
  skip: 'Skip to content',
};

export type Content = typeof en;

const es: Content = {
  lang: 'es',
  title: 'Aida Carbajo, QA Engineer y desarrolladora web',
  description:
    'QA Engineer con certificación ISTQB. Tests automatizados antes de cada subida a producción, testing manual de apps nuevas y páginas web desde cero.',
  otherLang: { label: 'English', short: 'EN', href: '/' },
  nav: { services: 'Servicios', story: 'Quién soy', app: 'PackValet', contact: 'Contacto', cv: 'CV' },
  hero: {
    first: 'Aida',
    second: 'Carbajo',
    role: 'QA Engineer y desarrolladora web',
    portraitAlt: 'Aida Carbajo sonriendo junto al mar, bajo unos acantilados',
    checklist: 'Checklist de lanzamiento',
    checklistFor: 'Tu producto',
    items: [
      { id: 'services', label: 'Tests automatizados' },
      { id: 'services', label: 'Testing manual' },
      { id: 'services', label: 'Página web' },
      { id: 'app', label: 'App móvil' },
    ],
    response: 'Comprobado',
    cleared: 'Listo para despegar',
    action: 'Hablemos',
  },
  services: {
    heading: 'Lo que reviso por ti',
    strips: [
      { code: 'TST', name: 'Tests automatizados', what: 'Un repo de tests de frontend y backend que se ejecuta antes de cada subida a producción.', tools: 'Playwright · REST-assured · CI/CD' },
      { code: 'MAN', name: 'Testing manual', what: 'Tu nueva app web o móvil, probada de principio a fin como la usaría un usuario real.', tools: 'Exploratorio · Regresión · E2E' },
      { code: 'WEB', name: 'Páginas web', what: 'La web de tu empresa o servicio, diseñada y desarrollada desde cero.', tools: 'Diseño · Desarrollo · Lanzamiento' },
      { code: 'APP', name: 'Apps móviles', what: 'Apps de iOS, de la idea al App Store.', tools: 'iOS · App Store' },
    ],
  },
  log: {
    heading: 'Cuaderno de vuelo',
    note: 'QA profesional desde 2022, ahora QA Engineer en adidas. Certificación ISTQB.',
    columns: ['Periodo', 'Entrada', 'Resultado'],
    rows: [
      { when: '2025–', entry: 'Framework de Playwright creado desde cero sobre Jenkins CI/CD, sustituyendo una suite heredada de Selenium (63 escenarios)', value: null, prefix: '3 h → 40 min', suffix: '' },
      { when: '2025–', entry: 'Defectos reportados y priorizados liderando una migración frontend completa con 3 desarrolladores', value: 350, prefix: '', suffix: '+' },
      { when: '2025–', entry: 'Herramientas con IA para reportar defectos creadas por mí, hoy usadas en todo el departamento', value: 2, prefix: '', suffix: ' herramientas' },
      { when: '2025–', entry: 'Presentadas en la sede de adidas a todo el proyecto, dirección incluida', value: null, prefix: 'HQ', suffix: '' },
      { when: '2025–', entry: 'Plataforma central que antes cubrían ~16 testers, hoy un equipo de 5', value: null, prefix: '16 → 5', suffix: '' },
      { when: '2022–2025', entry: 'Defectos reportados y seguidos en JIRA con pasos reproducibles', value: 250, prefix: '', suffix: '+' },
      { when: '2022–2025', entry: 'Flujo de cascada de atributos sin documentar descubierto en una migración backend y mapeado para poder probarlo', value: null, prefix: 'Hallado', suffix: '' },
      { when: '2023', entry: 'ISTQB Certified Tester, Foundation Level', value: null, prefix: 'CTFL', suffix: '' },
      { when: 'App propia', entry: 'PackValet: diseñada, programada, probada y publicada por mí', value: null, prefix: 'iOS', suffix: '' },
    ],
    totalLabel: 'Defectos reportados y seguidos',
    total: 600,
  },
  story: {
    heading: 'Quién soy',
    text: 'Mi historia en 45 segundos: una promesa que me hice, mi trabajo de QA en adidas y cómo nació PackValet.',
    sound: 'Ver con sonido',
    mute: 'Silenciar',
    videoLabel: 'Vídeo: Aida cuenta su historia',
    photoAlt: 'Aida saltando en paracaídas en tándem bajo una avioneta, con el cielo azul',
  },
  app: {
    heading: 'PackValet, ya en iOS',
    text: 'Mi primera app: diseñada, programada, probada y publicada por mí. Prepara tu lista de equipaje según el clima, el viaje y lo que olvidaste la última vez.',
    action: 'Verla en el App Store',
    posterAlt: 'Póster de lanzamiento de PackValet: una galleta de la suerte con “Es tu día de suerte” y un QR al App Store',
    shotAlt: [
      'Pantalla de inicio de PackValet con los próximos viajes',
      'Elección del tipo de viaje en PackValet',
      'Un viaje a Tailandia personalizado en PackValet',
    ],
  },
  check: {
    heading: 'Revisión pre-vuelo',
    text: 'Un portfolio de QA debería pasar sus propios tests. Ejecuta ahora 12 comprobaciones reales sobre la página que estás leyendo.',
    action: 'Ejecutar la revisión',
    again: 'Ejecutar otra vez',
    running: 'Ejecutando…',
    summary: '{passed} de {total} superadas en {ms} ms',
    passed: 'Comprobado',
    failed: 'Fallido',
    pending: 'Pendiente',
    noscript: 'La revisión necesita JavaScript.',
    items: {
      lang: 'Idioma declarado',
      h1: 'Un único titular principal',
      order: 'Encabezados en orden',
      alt: 'Imágenes con texto alternativo',
      dims: 'Imágenes reservan su espacio',
      names: 'Enlaces y botones con nombre',
      anchors: 'Enlaces internos funcionan',
      target: 'Botones de 44 px o más',
      contrast: 'Contraste WCAG AA',
      overflow: 'Sin scroll lateral',
      hreflang: 'Traducción enlazada',
      speed: 'Carga en menos de 3 s',
    },
  },
  contact: {
    heading: '¿Listo para despegar?',
    text: 'Cuéntame qué estás construyendo y cuándo quieres lanzarlo.',
    action: 'Escríbeme',
    rows: [
      { label: 'Email', value: email, href: `mailto:${email}` },
      { label: 'LinkedIn', value: 'linkedin.com/in/aida-carbajo', href: linkedin },
      { label: 'Base', value: 'En remoto desde España', href: null },
      { label: 'Idiomas', value: 'Español, catalán, inglés', href: null },
    ],
  },
  footer: {
    links: { linkedin: 'LinkedIn', email: 'Email', cv: 'Descargar CV', app: 'PackValet' },
    rights: '© 2026 Aida Carbajo',
  },
  skip: 'Saltar al contenido',
};

export const content: Record<Lang, Content> = { en, es };
