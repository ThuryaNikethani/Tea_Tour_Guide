import type { LanguageCode } from "../i18n/languages";
import type { StationTranslation } from "./stations";

/**
 * Per-station, per-language text overrides.
 *
 * For the "nursery" station: `name`, `heroTagline`, and `sectionHeadings`
 * are REAL — extracted directly from the factory's own live site
 * (tea-tourism-guide.netlify.app) on 2026-08-19 by switching its language
 * picker. `sectionBodies` (the long paragraphs) were NOT on that site in
 * any language but English, so they're machine-translated (Claude,
 * 2026-08-18/19) — not reviewed by a native speaker or the factory.
 *
 * For the 7 manufacturing-process stations (plucking..packing, see
 * stations.ts): all text is machine-translated generic Ceylon tea-process
 * copy — deliberate supplementary content, same caveat as the English
 * original (`verified: false`).
 *
 * Don't treat any of this as print-ready for real visitors until a native
 * speaker has checked it — especially Sinhala/Tamil/Arabic/Chinese/Japanese,
 * and especially the technical nursery vocabulary (pH ranges, product names,
 * measurements).
 */
// Real, verified: name + heroTagline + sectionHeadings, extracted directly
// from the live factory site per language (same order as stations.ts).
const NURSERY_REAL: Record<Exclude<LanguageCode, "en">, { name: string; heroTagline: string; sectionHeadings: string[] }> = {
  zh: {
    name: "茶叶苗圃",
    heroTagline: "让我们一步一步了解如何种植健康的茶树。",
    sectionHeadings: ["场地选择", "苗圃准备", "苗圃土壤", "填充套管", "扦插准备", "扦插种植", "扦插种植后的护理", "移植的土地准备", "移植", "茶树品种", "TRI 3069", "TRI 3055", "TRI 4053"],
  },
  ja: {
    name: "茶の苗床",
    heroTagline: "健康な茶の木を植える方法を段階的に見ていきましょう。",
    sectionHeadings: ["敷地の選定", "苗床の準備", "苗床土", "スリーブの充填", "挿し木の準備", "挿し木を植える", "挿し木後の手入れ", "移植のための土地の準備", "移植", "茶の品種", "TRI 3069", "TRI 3055", "TRI 4053"],
  },
  es: {
    name: "Vivero de Té",
    heroTagline: "Echemos un vistazo paso a paso a cómo plantar una planta de té saludable.",
    sectionHeadings: ["Selección del Sitio", "Preparación del Vivero", "Suelo del Vivero", "Llenado de mangas", "Preparación de Esquejes", "Plantación de los Esquejes", "Cuidado después de plantar esquejes", "Preparación del Terreno para el Trasplante", "Trasplante", "Cultivares de Té", "TRI 3069", "TRI 3055", "TRI 4053"],
  },
  fr: {
    name: "Pépinière de Thé",
    heroTagline: "Examinons étape par étape comment planter un théier sain.",
    sectionHeadings: ["Sélection du Site", "Préparation de la Pépinière", "Sol de Pépinière", "Remplissage des manchons", "Préparation des Boutures", "Plantation des Boutures", "Soins après la plantation des boutures", "Préparation du Terrain pour le Repiquage", "Repiquage", "Cultivars de Thé", "TRI 3069", "TRI 3055", "TRI 4053"],
  },
  ru: {
    name: "Чайный питомник",
    heroTagline: "Давайте пошагово рассмотрим, как посадить здоровый чайный куст.",
    sectionHeadings: ["Выбор Места", "Подготовка Питомника", "Почва для Питомника", "Заполнение рукавов", "Подготовка Черенков", "Посадка Черенков", "Уход после посадки черенков", "Подготовка Земли для Пересадки", "Пересадка", "Культивары Чая", "TRI 3069", "TRI 3055", "TRI 4053"],
  },
  si: {
    name: "තේ තවාන",
    heroTagline: "නිරෝගී තේ පැළයක් සිටුවන ආකාරය පියවරෙන් පියවර බලමු.",
    sectionHeadings: ["ස්ථානය තෝරා ගැනීම", "තවාන සකස් කිරීම", "තවාන් පස", "පොලිතීන් බෑග් පිරවීම", "දඬු කැබලි සකස් කිරීම", "දඬු කැබලි සිටුවීම", "සිටුවීමෙන් පසු රැකවරණය", "සිටුවීම සඳහා ඉඩම් සකස් කිරීම", "ක්ෂේත්‍රයේ සිටුවීම", "තේ ප්‍රභේද", "TRI 3069", "TRI 3055", "TRI 4053"],
  },
  ar: {
    name: "مشتل الشاي",
    heroTagline: "دعونا نلقي نظرة خطوة بخطوة على كيفية زراعة نبات شاي صحي.",
    sectionHeadings: ["اختيار الموقع", "إعداد المشتل", "تربة المشتل", "تعبئة أكياس البوليثين", "إعداد العقل", "زراعة العقل", "العناية بعد الزراعة", "إعداد الأرض للزراعة", "الزراعة في الحقل", "أصناف الشاي", "TRI 3069", "TRI 3055", "TRI 4053"],
  },
  it: {
    name: "Vivaio del Tè",
    heroTagline: "Vediamo passo dopo passo come piantare una pianta di tè sana.",
    sectionHeadings: ["Scelta del Sito", "Preparazione del Vivaio", "Terreno del Vivaio", "Riempimento sacchetti", "Preparazione Talee", "Piantagione delle Talee", "Cura post-piantagione", "Preparazione Terreno", "Trapianto", "Cultivar di Tè", "TRI 3069", "TRI 3055", "TRI 4053"],
  },
  de: {
    name: "Tee-Baumschule",
    heroTagline: "Lassen Sie uns Schritt für Schritt anschauen, wie man eine gesunde Teepflanze pflanzt.",
    sectionHeadings: ["Standortwahl", "Vorbereitung der Baumschule", "Boden der Baumschule", "Füllen der Polyethylenbeutel", "Vorbereitung der Stecklinge", "Pflanzen von Stecklingen", "Pflege nach dem Pflanzen", "Landvorbereitung", "Umpflanzen ins Feld", "Teekultursorten", "TRI 3069", "TRI 3055", "TRI 4053"],
  },
  ta: {
    name: "தேயிலை நாற்றுமேடை",
    heroTagline: "ஆரோக்கியமான தேயிலை செடியை எவ்வாறு நடுவது என்பதை படிப்படியாகப் பார்ப்போம்.",
    sectionHeadings: ["இடத்தைத் தேர்ந்தெடுத்தல்", "நாற்றுமேடை தயாரித்தல்", "நாற்றுமேடை மண்", "பொலிதீன் பைகளை நிரப்புதல்", "தண்டு துண்டுகளைத் தயாரித்தல்", "தண்டு துண்டுகளை நடுதல்", "நடவுக்குப் பிந்தைய பராமரிப்பு", "நிலத்தைத் தயாரித்தல்", "வயல் நடவு", "தேயிலை வகைகள்", "TRI 3069", "TRI 3055", "TRI 4053"],
  },
};

// Machine-translated (Claude, 2026-08-18) — the live site never had these
// paragraphs in anything but English. Filled in one language at a time.
const NURSERY_BODIES: Partial<Record<Exclude<LanguageCode, "en">, string[]>> = {
  ta: [
    "இந்த இடம் நிலவும் காற்றிலிருந்து நன்கு பாதுகாக்கப்பட்டதாக இருக்க வேண்டும், அதே நேரத்தில் வளரும் செடிகள் சூரிய வெப்பத்தால் பயனடையும் வகையில் சூரிய ஒளிக்கு வெளிப்பட்டதாகவும் இருக்க வேண்டும். குளிர் பிரதேசங்களில் அதிகபட்ச சூரிய ஒளியைப் பெறும் இடத்தைத் தேர்ந்தெடுக்க வேண்டும், வெப்ப பிரதேசங்களில் முழு சூரிய வெப்பத்திலிருந்து சிறிதளவு பாதுகாப்பு அவசியம். மழைக்காலங்களில் வெள்ளத்திற்கு உட்படக்கூடிய அல்லது வறண்ட மாதங்களில் உறைபனிக்கு ஆளாகக்கூடிய தாழ்வான பகுதிகளைத் தவிர்க்க வேண்டும். ஒரு நல்ல நீர் ஆதாரத்திற்கு அருகில் இருப்பது அவசியமான நிபந்தனையாகும். அப்பகுதியின் மண் நன்கு நீர் வடியக்கூடியதாகவும் நொறுங்கக்கூடியதாகவும் இருக்க வேண்டும். ஈரப்பதமான வெப்பமண்டலப் பகுதிகளில் நன்கு நீர் வடியும் மண் பொதுவாக சிவப்பு நிறத்தில் இருக்கும். மேல்மண் மற்றும் அடிமண் இரண்டும் pH அளவுக்குச் சோதிக்கப்பட வேண்டும். 4.5 முதல் 5.8 வரையிலான pH ஏற்றுக்கொள்ளத்தக்கது, ஆனால் பொதுவாக ஏற்றுக்கொள்ளப்படும் உகந்த வரம்பு 4.5 முதல் 5.5 வரையாகும்.",
    "ஒரு நாற்றுமேடையை அமைக்க, மண் போக்குவரத்தைக் குறைக்கும் வகையில் பொருத்தமான பெருக்க இடத்திற்கு அருகில் அல்லது அதே இடத்தில் ஒரு இடத்தைத் தேர்ந்தெடுக்கவும். மேடைகள் தயாரிப்பதற்கு தட்டையான அல்லது மெதுவான சரிவுள்ள நிலத்தைத் தேர்ந்தெடுக்கவும். சரிவான நிலம் பயன்படுத்தப்பட்டால், மேடைகள் சமன்கோடுகளுக்கு இணையாக அமைக்கப்பட வேண்டும். ஒவ்வொரு மேடையும் 1.07 மீட்டர் (3.5 அடி) அகலமும், வசதியான நீளமும் கொண்டதாக இருக்க வேண்டும், இருபுறமும் ஒரு அடி பாதை இருக்க வேண்டும். மண்ணை 38 செ.மீ (15 அங்குலம்) ஆழத்திற்குத் தோண்டி, பின்னர் வடிகால் வசதிக்காக 5-7 செ.மீ (2-3 அங்குலம்) கற்கள் மற்றும் சிறு கற்களின் அடுக்கை அடிப்பகுதியில் நிரப்பி, பின்னர் மேடையை நிலமட்டத்திற்கு மேல் 15-23 செ.மீ (6-9 அங்குலம்) உயர்த்த மண்ணை நிரப்ப வேண்டும். எனினும், மணல் மண்ணுக்கு இந்த வடிகால் அடுக்கு தேவையில்லை. நீர் சரியாக ஓடுவதற்கு மேடையின் மேற்பரப்பு வடிகால்களை நோக்கி மெல்லிய சரிவைக் கொண்டிருக்க வேண்டும்.",
    "ஒரு நல்ல மண் ஊடகம் 4.5 முதல் 5.5 வரையிலான pH வரம்பைக் கொண்டிருக்க வேண்டும், பூச்சிகள் மற்றும் நோய்களிலிருந்து விடுபட்டதாக இருக்க வேண்டும், சரியான நீர் தேக்கும் திறனைக் கொண்டிருக்க வேண்டும், நல்ல வடிகாலையும் உறுதி செய்ய வேண்டும். மேலும், அது அதிக வளமானதாக இருக்கக் கூடாது, ஏனெனில் அதிகப்படியான வளம் சமநிலையற்ற செடி வளர்ச்சிக்கும் தரம் குறைவதற்கும் வழிவகுக்கும். பயன்படுத்துவதற்கு முன் எப்போதும் மேல்மண் மற்றும் அடிமண் இரண்டின் pH ஐயும் சோதிக்கவும், 5.5ஐ விட அதிகமான pH கொண்ட மண் பயன்படுத்தப்படாமல் இருப்பதை உறுதி செய்யவும். தேயிலை நாற்றுமேடைகளுக்குப் பொருத்தமான மண் ஊடகங்களில் குவாத்தமாலா அல்லது மானா மண், காட்டு மண், அடிமண் மற்றும் தேயிலை மண் ஆகியவை அடங்கும். இந்த மண் வகைகள் அவற்றின் நல்ல வடிகால், கரிமப் பொருள் அளவு மற்றும் தேயிலை செடிகளுடன் இணக்கத்திற்காகத் தேர்ந்தெடுக்கப்படுகின்றன, இது ஆரோக்கியமான நாற்று வளர்ச்சியை உறுதி செய்கிறது.",
    "தேயிலை நடவுக்கான நாற்றுமேடை பைகளைத் தயாரிக்க, கேஜ் 150 வெளிப்படையான, இரு பக்கமும் திறந்த பாலிதீன் உறைகளைப் பயன்படுத்தவும். நிலையான அளவு உயரம் 23 செ.மீ (9 அங்குலம்) மற்றும் அகலம் 10 செ.மீ (4 அங்குலம்) ஆகும். சரியான வடிகால் உறுதி செய்ய, ஒவ்வொரு உறையின் பக்கவாட்டிலும் 20-30 சிறிய துளைகளைப் போடவும். உறைகளை நிரப்பும்போது, மண் அதிகமாக இறுக்கமாகவோ அல்லது தளர்வாகவோ இல்லாமல் உறுதியாக அடைக்கப்பட்டிருப்பதை உறுதி செய்யவும், மேலும் நிலையான ஈரப்பதத்தை பராமரிக்கவும். நிரப்புவதற்கு முன் மண் உலர்ந்திருந்தால், அது முத்திரையிடப்பட்ட முனைகளிலிருந்து எளிதில் விழுந்துவிடும். உறைகளுக்குள் மண் உலர்ந்து போக அனுமதித்தால், பின்னர் மீண்டும் ஈரப்படுத்துவது மிகவும் கடினமாகிவிடும். நிரப்புவதற்கு முன், மண்ணிலிருந்து அனைத்து வேர்கள், கடினமான மண் கட்டிகள் மற்றும் கற்களை அகற்றவும்.",
    "தேயிலை கிளைநடவுக்கு, 4 வருடங்களுக்கு மேற்பட்ட தாய் புதர்களிலிருந்து, தாழ்வான நாட்டில் 3-4 மாதங்களும் மேட்டு நாட்டில் 6-8 மாதங்களும் வயதுடைய, ஆரோக்கியமான, வலுவாக வளரும் நேரான தளிர்களைத் தேர்ந்தெடுக்கவும். பூ மொட்டுகள் அல்லது பூச்சி மற்றும் நோய் அறிகுறிகளுடன் கூடிய தளிர்களை நிராகரிக்கவும். கடினமான மற்றும் மென்மையான முனைகளை அகற்றி அரை மரமான பகுதியைப் பயன்படுத்தி, ஒரு இலை மற்றும் ஒரு கக்க மொட்டுடன், 1-1.5 அங்குல நீளமுள்ள ஒற்றை முடிச்சு கிளைநடவுகளைத் தயாரிக்கவும். கிளைநடவுகளை நிழலில் எடுத்து, உடனடியாக தண்ணீரில் வைத்து, முடிச்சுக்கு மேலேயும் மொட்டுக்கு அருகில் முடிச்சுக்குக் கீழே 1-1.5 அங்குலத்திலும் மென்மையாகவும் சாய்வாகவும் வெட்ட வேண்டும்.",
    "நடவு செய்வதற்கு முன், மண்ணை மெதுவாக ஈரப்படுத்தி மென்மையாக அழுத்த வேண்டும். கிளைநடவின் தண்டை கட்டைவிரலுக்கும் ஆள்காட்டி விரலுக்கும் இடையில் பிடித்து, இலைக் கக்கம் வரை மண்ணில் நேராகச் செருக வேண்டும். சாய்வு முறை பரிந்துரைக்கப்படவில்லை.",
    "தேயிலை நாற்றுமேடைகளில், நடவு செய்த பிறகு நிழல் அளிப்பது வாடுவதையும் வெயில் எரிச்சலையும் தடுக்கவும் ஈரப்பதத்தைப் பராமரிக்கவும் மிகவும் முக்கியமானது. Gleichenia linearis பயன்படுத்தி குறைந்த நிழல் அளிக்கப்படுகிறது, அதிக நிழலுக்கு 1.8 மீ இரும்பு சட்டகத்தால் ஆதரிக்கப்படும் தேங்காய் நார் பாய்கள் அல்லது செயற்கை வலைகள் பயன்படுத்தப்படுகின்றன, இது அதிக செலவினும் நாற்றுமேடை நடவடிக்கைகளை மேம்படுத்துகிறது. நீர்ப்பாசனம் காலநிலை, மண், செடியின் வயது மற்றும் நிழல் ஆகியவற்றைப் பொறுத்தது, வறண்ட காலநிலையில் அடிக்கடியும் மழைக்காலங்களில் குறைவாகவும் நீர்ப்பாசனம் செய்யப்பட வேண்டும். அதிகப்படியான நீர்ப்பாசனம் பாசி மற்றும் நோய்களை ஏற்படுத்தும். வேர் தொடங்கிய பிறகு — தாழ்வான நாட்டில் 6-8 வாரங்களுக்குப் பிறகும் மேட்டு நாட்டில் 10-12 வாரங்களுக்குப் பிறகும் — T65 MAP அல்லது T65 DAP பயன்படுத்தி உரமிடல் தொடங்க வேண்டும். மாற்றி நடுவதற்கு முன், வயல் நிலைமைகளுக்குத் தயார்படுத்த 4-6 மாதங்களிலிருந்து படிப்படியாக நீர் மற்றும் நிழலைக் குறைப்பதன் மூலம் செடிகள் கடினப்படுத்தப்படுகின்றன.",
    "புதிய தேயிலை நடவுக்கு நிலம் தேர்ந்தெடுக்கும்போது, 50 செ.மீக்கு மேல் மண் ஆழமும் 20% க்கும் குறைவான பாறைத்தன்மையும் கொண்ட அலைவுரு, நன்கு வடிகாலமைந்த பகுதிகள் சிறந்தவை, அதேசமயம் செங்குத்தான, தட்டையான, அரிக்கப்பட்ட அல்லது நெல் வயல்கள் அல்லது ஓடைகளுக்கு அருகிலுள்ள பாறை நிறைந்த நிலங்களைத் தவிர்க்க வேண்டும். Poria நோய் தாக்கிய பகுதிகளில் குறிப்பாக, விஞ்ச் இயந்திரங்களைப் பயன்படுத்தி பழைய தாவரங்களை அகற்றுவதன் மூலம் நில தயாரிப்பு தொடங்குகிறது, தொடர்ந்து ஆழமாக உழுதல் மற்றும் நோய்த்தொற்று வேர்களை எரித்தல், ஹெக்டேருக்கு 1250 கிலோ டோலமைட் பயன்படுத்துதல், மிக உயரமான சரிவிலிருந்து தொடங்குதல் ஆகியவை செய்யப்பட வேண்டும். கனமழையின்போது வேலை செய்வதைத் தவிர்த்தல், சிறு பகுதிகளாக நிலத்தைத் தயாரித்தல், அரிப்பைக் குறைக்க உடனடியாக நடவு செய்தல் போன்ற மண் பாதுகாப்பு நடைமுறைகள் பின்பற்றப்பட வேண்டும். வளத்தை மேம்படுத்தவும், பூச்சி மற்றும் நோய்களைக் கட்டுப்படுத்தவும், முந்தைய பயிர்களிலிருந்து நச்சுகளை நீக்கவும், மண் அமைப்பை மேம்படுத்தவும், ஈரப்பதத்தைத் தக்கவைக்க மல்ச் வழங்கவும் 18-24 மாதங்கள் குவாத்தமாலா அல்லது மானா புல் வளர்ப்பதன் மூலம் மண் மறுசீரமைப்பு செய்யப்படுகிறது.",
    "தேயிலை நடவு பருவமழைக் காலத்தின் தொடக்கத்தில் தொடங்க வேண்டும், மறுசீரமைப்புப் புற்களை தரை மட்டத்தில் வெட்டி சமன்கோடு வரிசைகளில் வைத்து, அசல் புல் வரிசைகளுக்கு இடையில் 1.2 மீ x 0.6 மீ இடைவெளியில் தேயிலை நடப்படும். தத்துவார்த்த நடவு அடர்த்தி அதிகமாக இருக்கலாம் என்றாலும், வடிகால்கள், மேடைப்படி நிலங்கள், பாதைகள், சாலைகள் போன்ற நடைமுறை காரணிகள் எண்ணிக்கையைக் குறைக்கின்றன, எனவே ஹெக்டேருக்கு குறைந்தபட்சம் 11,000 செடிகள் (ஏக்கருக்கு 4,500 செடிகள்) அடர்த்தி பராமரிக்கப்பட வேண்டும். சமன்கோடுகளில் 'A' சட்டகம் அல்லது சாலை வரைவி பயன்படுத்தி குறிக்கப்பட்ட நடவு குழிகள் அல்லது அகழிகள், பரிந்துரைக்கப்பட்ட அளவுக்குத் தோண்டப்பட்டு, நடவுக்கு 2-3 வாரங்களுக்கு முன் உரம் அல்லது கரிமப் பொருட்களால் நிரப்பப்பட வேண்டும். 6-12 மாத வயதுடைய ஆரோக்கியமான, வலுவான தேயிலை செடிகள் பயன்படுத்தப்பட வேண்டும், நூற்புழு பரவலான பகுதிகளில் Furadan அல்லது Nemacur போன்ற நூற்புழு மருந்து (துளைக்கு 7 கிராம்) பயன்படுத்தப்பட வேண்டும். நடவு செய்த பிறகு, வெட்டப்பட்ட புற்கள் வரிசைகளுக்கு இடையே மல்ச்சாகப் பயன்படுத்தப்பட வேண்டும், காற்றிலிருந்து செடிகளைத் தாங்க கழிகள் பயன்படுத்தப்பட வேண்டும், மண் அரிப்பைக் குறைக்க Desmodium ovalifolium அல்லது Stylosanthus gracilis போன்ற தாழ்வான படரும் மூடுபயிர்கள் வளர்க்கப்படலாம்.",
    "TRI 4049 என்பது இலங்கை தேயிலை ஆராய்ச்சி நிறுவனத்தால் உருவாக்கப்பட்ட அதிக மகசூல் தரும் தேயிலை வகையாகும், இது நடுத்தர முதல் தாழ்வான உயரங்களுக்கு ஏற்றது. இது Camellia sinensis இன் தாவர இனப்பெருக்கம் செய்யப்பட்ட வகையாகும், வலுவான வளர்ச்சி, அடர் பச்சை இலைகள் மற்றும் பொதுவான நோய்களுக்கு எதிர்ப்புத்திறன் கொண்டதாக அறியப்படுகிறது. TRI 4049 CTC மற்றும் பாரம்பரிய தேயிலை இரண்டிற்கும் ஏற்ற பிரகாசமான, நறுமணமிக்க தேநீரை உற்பத்தி செய்கிறது, இது மறுநடவு மற்றும் வணிக சாகுபடிக்கு பிரபலமான தேர்வாக அமைகிறது.",
    "சில வரிசைகளுக்கு அப்பால், அடையாளப்படுத்தப்பட்ட இந்தச் செடி TRI 3069 ஆகும் — தேயிலை ஆராய்ச்சி நிறுவனத்தில் பதிவு செய்யப்பட்ட மற்றொரு வகையாகும், இந்த குறிப்பிட்ட மண்ணில் ஒவ்வொன்றும் எவ்வாறு செயல்படுகிறது என்பதை ஒப்பிட நாற்றுமேடையில் TRI 4049 உடன் இணைந்து வளர்க்கப்படுகிறது.",
    "TRI 3055 அதே சோதனை வரிசைகளில் உள்ளது. இங்குள்ள ஒவ்வொரு வகை நிலமும் தனித்தனியாக அடையாளமிடப்பட்டு கண்காணிக்கப்படுகிறது, இதன் மூலமே புகழை மட்டும் நம்பாமல், உண்மையிலேயே விரிவாக்கத்திற்கு தகுதியான வகைகள் எவை என்பதற்கான ஆதாரங்களை தொழிற்சாலை தானே உருவாக்குகிறது.",
    "இங்கே காட்டப்பட்டுள்ள வகை சோதனை நிலங்களை TRI 4053 நிறைவு செய்கிறது. பதிவு செய்யப்பட்ட பல வகைகளை தெளிவாக அடையாளமிட்டு அருகருகே வளர்ப்பது, ஒரு வகையை முழு வயலுக்கும் ஒதுக்குவதற்கு முன் இந்த தோட்டத்தில் வழக்கமான நடைமுறையாகும்.",
  ],
  si: [
    "ස්ථානය පවතින සුළඟින් හොඳින් ආරක්ෂා විය යුතුය. වර්ධනය වන පැළවලට හිරු එළියේ උණුසුමෙන් ප්‍රයෝජන ලැබෙන පරිදි හිරු එළියට නිරාවරණය විය යුතුය. සීතල ප්‍රදේශවල හිරු එළිය උපරිම කරගැනීමට ස්ථානය තෝරාගත යුතු අතර, උණුසුම් ප්‍රදේශවල සම්පූර්ණ හිරු රශ්මියෙන් යම් ආරක්ෂාවක් අත්‍යවශ්‍යය. වැසි කාලවලදී ගංවතුරට ලක්විය හැකි හෝ නියඟ මාසවලදී හිම වැටීමට ලක්විය හැකි පහත් ප්‍රදේශ මගහැරිය යුතුය. හොඳ ජල මූලාශ්‍රයකට ආසන්නව තිබීම අත්‍යවශ්‍ය කොන්දේසියකි. ප්‍රදේශයේ පස හොඳින් ජලය බැහැරවන සහ පහසුවෙන් කැඩෙන ස්වභාවයක් තිබිය යුතුය. තෙත් නිවර්තන කලාපවල හොඳින් ජලය බැහැරවන පස සාමාන්‍යයෙන් රතු පැහැයෙන් යුක්තය. උඩුපස සහ යටිපස යන දෙකෙහිම pH අගය පරීක්ෂා කළ යුතුය. 4.5 සිට 5.8 දක්වා pH අගයක් සුදුසු වන අතර, 4.5 සිට 5.5 දක්වා පරාසය වඩාත් සුදුසු ලෙස පිළිගැනේ.",
    "තවාන ස්ථාපිත කිරීම සඳහා, පස ප්‍රවාහනය අවම කිරීමට සුදුසු ප්‍රවර්ධන ස්ථානයකට ආසන්නව හෝ එහිම ස්ථානයක් තෝරාගන්න. පඳුරු පිළියෙළ කිරීම සඳහා සමතලා හෝ මඳක් බෑවුම් සහිත බිමක් තෝරාගන්න. බෑවුම් සහිත ඉඩමක් භාවිතා කරන්නේ නම්, කන්ටුර් රේඛා ඔස්සේ පඳුරු තැනිය යුතුය. සෑම පඳුරක්ම මීටර් 1.07ක් (අඩි 3.5) පළල විය යුතු අතර, ඕනෑම දිගකින් යුක්තව, දෙපැත්තේම අඩි එකක් පළල මාවතක් තිබිය යුතුය. සෙන්ටිමීටර් 38ක් (අඟල් 15) ගැඹුරට පස කැණීම කර, පසුව ජලය බැහැර කිරීම සඳහා සෙන්ටිමීටර් 5-7ක් (අඟල් 2-3) ගල් සහ කැට තට්ටුවකින් පත්තුව පුරවා, ඉන්පසු පස පුරවා පඳුර බිම් මට්ටමට වඩා සෙන්ටිමීටර් 15-23ක් (අඟල් 6-9) ඉහළට එසවිය යුතුය. කෙසේ වෙතත්, වැලි පස සඳහා මෙම ජලනිකාස තට්ටුව අවශ්‍ය නොවේ. නිසි ජල ප්‍රවාහයක් සඳහා පඳුරේ මතුපිට ජලනිකාස වලට යාබදව මඳ බෑවුමක් තිබිය යුතුය.",
    "හොඳ පස මාධ්‍යයක් 4.5 සිට 5.5 දක්වා pH පරාසයක් තිබිය යුතු අතර, පළිබෝධකයන්ගෙන් සහ රෝගවලින් තොර විය යුතුය, නිසි ජල රඳවා තබා ගැනීමේ හැකියාවක් තිබිය යුතු අතර, හොඳ ජලනිකාසයක් සහතික කළ යුතුය. ඊට අමතරව, එය අධික සාරවත් නොවිය යුතුය, මන්ද අධික සාරවත්බව අසමතුලිත පැළ වර්ධනයකට සහ අඩු තත්ත්වයකට තුඩු දිය හැකිය. භාවිතයට පෙර සැමවිටම උඩුපස සහ යටිපස යන දෙකෙහිම pH පරීක්ෂා කරන්න, 5.5ට වඩා වැඩි pH අගයක් සහිත පසක් භාවිතා නොකරන බව සහතික කරගන්න. තේ තවාන් සඳහා සුදුසු පස මාධ්‍ය අතරට ගෝතමාලා හෝ මානා පස, කැලෑ පස, යටිපස සහ තේ පස ඇතුළත් වේ. මෙම පස් තෝරා ගනු ලබන්නේ ඒවායේ හොඳ ජලනිකාසය, කාබනික අන්තර්ගතය සහ තේ පැළ සමඟ ගැළපීම නිසාය, එය නිරෝගී පැළ වර්ධනයක් සහතික කරයි.",
    "තේ වගාවේ තවාන් බෑග් සකස් කිරීම සඳහා, ගේජ් 150 විනිවිද පෙනෙන, දෙපැත්තම විවෘත පොලිතීන් බෑග් භාවිතා කරන්න. සම්මත ප්‍රමාණය උස සෙන්ටිමීටර් 23ක් (අඟල් 9) සහ පළල සෙන්ටිමීටර් 10කි (අඟල් 4). නිසි ජලනිකාසයක් සහතික කිරීමට, සෑම බෑගයකම දෙපැත්තේ කුඩා සිදුරු 20-30ක් පමණ සිදුරු කරන්න. බෑග් පිරවීමේදී, පස තදින් තලා තිබෙන නමුත් අධික ලෙස තද හෝ ලිහිල් නොවන බවට සහ අඛණ්ඩ තෙතමනයක් පවත්වා ගැනීමට වග බලා ගන්න. පිරවීමට පෙර පස වියළි නම්, එය මුද්‍රා තැබූ කෙළවරවලින් පහසුවෙන් ගැළවී වැටෙනු ඇත. බෑග් තුළ පස වියළීමට ඉඩ දීම පසුව නැවත තෙත් කිරීම ඉතා අපහසු කරයි. පිරවීමට පෙර, පසින් සියලුම මූල, තද පස් කැටි සහ ගල් ඉවත් කරන්න.",
    "තේ දඬු කැබලි සඳහා, වයස අවුරුදු 4කට වැඩි මව් පඳුරුවලින්, පහත් රටේ මාස 3-4ක් සහ ඉහළ රටේ මාස 6-8ක් වයසැති, නිරෝගී හා ක්‍රියාශීලීව වර්ධනය වන කෙළින් අංකුර තෝරාගන්න. මල් අංකුර හෝ පළිබෝධ හා රෝග ලක්ෂණ සහිත අංකුර ප්‍රතික්ෂේප කරන්න. තද සහ මෘදු කෙළවර ඉවත් කරමින් අර්ධ දැව කොටස භාවිතා කර, එක් කොළයක් සහ එක් කිහිලි අංකුරයක් සහිත, අඟල් 1-1.5ක් දිගැති තනි නාට දඬු කැබලි සකස් කරන්න. දඬු කැබලි සෙවණේ ලබාගෙන, වහාම ජලයේ තබා, පැහැදිලි හා ඇල කෝණයකින් කැපිය යුතුය — නාටයට ඉහළින් සහ අංකුරයට යාබදව නාටයට පහළින් අඟල් 1-1.5ක් තැන.",
    "සිටුවීමට පෙර, පස මඳක් තෙත් කර මෘදු ලෙස තද කළ යුතුය. දඬු කැබැල්ලේ කඳ මාපටැඟිල්ල සහ දබරැඟිල්ල අතර අල්ලාගෙන, කොළ කිහිල්ල දක්වා සිරස්ව පසට ඇතුල් කළ යුතුය. ඇල කිරීමේ ක්‍රමය නිර්දේශ නොකෙරේ.",
    "තේ තවානවල, සිටුවීමෙන් පසු සෙවණ සැපයීම මැලවීම, හිරු පිලුස්සීම වැළැක්වීමට සහ තෙතමනය පවත්වා ගැනීමට ඉතා වැදගත් වේ. අඩු සෙවණ Gleichenia linearis භාවිතයෙන් සපයනු ලබන අතර, ඉහළ සෙවණ සඳහා පොල් තන්තු පැදුරු හෝ මීටර් 1.8ක යකඩ රාමුවකින් සහාය දෙන කෘත්‍රිම දැල් යොදාගනු ලැබේ, එමගින් වියදම වැඩි වුවත් තවාන් කළමනාකරණය වැඩිදියුණු කරයි. ජල සම්පාදනය දේශගුණය, පස, පැළ වයස සහ සෙවණ මත රඳා පවතින අතර, වියළි කාලගුණයේ වැඩි වාරයක් සහ වැසි කාලවලදී අඩුවෙන් ජලය දිය යුතුය. අධික ජල සම්පාදනය පාසි සහ රෝග ඇතිවීමට හේතු විය හැක. පොහොර යෙදීම මූල ආරම්භයෙන් පසු — පහත් රටේ සති 6-8කට පසුව සහ ඉහළ රටේ සති 10-12කට පසුව — T65 MAP හෝ T65 DAP භාවිතයෙන් ආරම්භ කළ යුතුය. සිටුවීමට පෙර, පැළවල් ක්ෂේත්‍ර තත්ත්වයන්ට සූදානම් කිරීමට මාස 4-6න් පසුව ජලය හා සෙවණ ක්‍රමයෙන් අඩු කිරීමෙන් ශක්තිමත් කරනු ලැබේ.",
    "නව තේ වගාවක් සඳහා ඉඩම් තෝරාගැනීමේදී, පස් ගැඹුර සෙන්ටිමීටර් 50කට වඩා වැඩි සහ ගල් ප්‍රතිශතය 20%ට අඩු, එගිලෙන, හොඳින් ජලය බැහැරවන ප්‍රදේශ වඩාත් සුදුසුය, එහෙත් වී කුඹුරු හෝ ඇල මාර්ග අසල පිහිටි බෑවුම්, සමතලා, ඛාදනයට ලක්වූ හෝ ගල් සහිත ඉඩම් මගහැරිය යුතුය. ඉඩම් සකස් කිරීම ආරම්භ වන්නේ, විශේෂයෙන් Poria රෝගය ආසාදිත ප්‍රදේශවල, විස්තාරක යන්ත්‍ර භාවිතයෙන් පැරණි ශාක වර්ග ඉවත් කිරීමෙන් වන අතර, ඉන් අනතුරුව ගැඹුරු කැණීම සහ ආසාදිත මූල දහනය කිරීම, හෙක්ටයාරයකට කිලෝග්‍රෑම් 1250ක් ලෙස ඩොලමයිට් යෙදීම, උස්ම බෑවුමෙන් ආරම්භ කරමින් සිදු කරනු ලැබේ. අධික වැසි කාලවලදී වැඩ මගහැරීම, කුඩා කොටස්වලින් ඉඩම් සකස් කිරීම සහ ඛාදනය අවම කිරීමට වහාම සිටුවීම වැනි පස සංරක්ෂණ ක්‍රියාමාර්ග අනුගමනය කළ යුතුය. පස ප්‍රතිසංස්කරණය සිදු කරනු ලබන්නේ ගෝතමාලා හෝ මානා තණකොළ මාස 18-24ක් වගා කිරීමෙන් වන අතර, එමගින් සාරවත්බව වැඩි දියුණු කිරීම, පළිබෝධ හා රෝග පාලනය, පෙර භෝගවලින් විෂ ද්‍රව්‍ය ඉවත් කිරීම, පස් ව්‍යුහය වැඩිදියුණු කිරීම සහ තෙතමනය රඳවා ගැනීම සඳහා වසුන් සැපයීම සිදු කරයි.",
    "තේ සිටුවීම ග්‍රීෂ්ම ඍතුවේ මුල් භාගයේදී, ප්‍රතිසංස්කරණ තණකොළ බිම් මට්ටමින් කපා කන්ටුර් රේඛා ඔස්සේ පේළිවලට තැබීමෙන් ආරම්භ විය යුතු අතර, තේ මෙටර් 1.2 x 0.6ක පරතරයකින් මුල් තණකොළ පේළි අතර සිටුවනු ලැබේ. න්‍යායික සිටුවීමේ ඝනත්වය වැඩි විය හැකි වුවත්, ජලනිකාස, ටෙරස්, මාර්ග වැනි ප්‍රායෝගික සාධක ගණන අඩු කරන බැවින්, හෙක්ටයාරයකට පැළ 11,000ක් (අක්කරයකට පැළ 4,500ක්) අවම ඝනත්වයක් පවත්වා ගත යුතුය. කන්ටුර් රේඛා ඔස්සේ 'A' රාමුවක් හෝ මාර්ග සලකුණු කරන උපකරණයක් භාවිතයෙන් සලකුණු කරන ලද සිටුවීමේ වළවල් හෝ අගල්, නිර්දේශිත ප්‍රමාණයට කැණීම කර, සිටුවීමට සති 2-3කට පෙර කොම්පෝස්ට් හෝ කාබනික ද්‍රව්‍ය පුරවා තිබිය යුතුය. මාස 6-12ක් වයසැති නිරෝගී, ශක්තිමත් තේ පැළ භාවිතා කළ යුතු අතර, නෙමටෝඩා ව්‍යාප්ත ප්‍රදේශවල Furadan හෝ Nemacur වැනි නෙමටිසයිඩයක් (වළක් සඳහා ග්‍රෑම් 7) යෙදිය යුතුය. සිටුවීමෙන් පසු, කපන ලද තණකොළ පේළි අතර වසුනක් ලෙස භාවිතා කළ යුතු අතර, සුළඟට එරෙහිව පැළවලට සහාය දීමට කණු භාවිතා කළ යුතු අතර, පස ඛාදනය අඩු කිරීමට Desmodium ovalifolium හෝ Stylosanthus gracilis වැනි පහත් බඳින ආවරණ භෝග වගා කළ හැක.",
    "TRI 4049 යනු ශ්‍රී ලංකා තේ පර්යේෂණ ආයතනය විසින් සංවර්ධනය කරන ලද, මධ්‍යම සිට පහත් උස්මට වඩාත් සුදුසු, අධි අස්වැන්නක් ලබාදෙන තේ ප්‍රභේදයකි. එය Camellia sinensis හි ශාකීයව ප්‍රචාරණය කරන ලද ප්‍රභේදයක් වන අතර, ශක්තිමත් වර්ධනය, තද කොළ පැහැති කොළ සහ පොදු රෝගවලට ප්‍රතිරෝධය සඳහා ප්‍රසිද්ධය. TRI 4049 CTC සහ සම්ප්‍රදායික තේ යන දෙකටම සුදුසු දීප්තිමත්, සුවඳැති තේ රස නිපදවන අතර, එමගින් එය නැවත සිටුවීම සහ වාණිජ වගාව සඳහා ජනප්‍රිය තේරීමක් බවට පත් වේ.",
    "පේළි කිහිපයකින් ඔබ්බෙන් ලකුණු කර ඇති මෙම පැළය TRI 3069 වේ — තේ පර්යේෂණ ආයතනයේ ලියාපදිංචි වූ තවත් ප්‍රභේදයක් වන අතර, මෙම විශේෂිත පසෙහි එක් එක් ප්‍රභේදය කෙසේ වර්ධනය වේදැයි සංසන්දනය කිරීමට තවානේදී TRI 4049 සමඟ එකට සිටුවා ඇත.",
    "TRI 3055 ද එම පරීක්ෂණ පේළිවලම වේ. මෙහි සෑම ප්‍රභේද කොටසක්ම වෙන වෙනම ලකුණු කර නිරීක්ෂණය කරනු ලබන අතර, කීර්තියක් මත පමණක් රඳා නොසිට, ඇත්තටම පුළුල් කිරීමට වටින ප්‍රභේද මොනවාදැයි කර්මාන්තශාලාව තමන්ගේම සාක්ෂි ගොඩනගා ගන්නේ එලෙසිනි.",
    "මෙහි දැක්වෙන ප්‍රභේද පරීක්ෂණ කොටස් අවසන් වන්නේ TRI 4053 ප්‍රභේදයෙනි. ලියාපදිංචි ප්‍රභේද කිහිපයක් පැහැදිලිව ලකුණු කර එකට වගා කිරීම, කුඹුරක් සම්පූර්ණයෙන් එක් ප්‍රභේදයකට යොදවීමට පෙර වතුයායේ සම්මත පිළිවෙතකි.",
  ],
  ar: [
    "يجب أن يكون الموقع محميًا جيدًا من الرياح السائدة، مع تعرضه لأشعة الشمس حتى تستفيد النباتات النامية من دفئها. في المناطق الباردة، ينبغي اختيار موقع يزيد من التعرض لأشعة الشمس، بينما في المناطق الحارة يكون بعض التظليل من حرارة الشمس الكاملة أمرًا ضروريًا. يجب تجنب المناطق المنخفضة المعرضة للفيضانات أثناء الأمطار أو لخطر الصقيع خلال الأشهر الجافة. القرب من مصدر مياه جيد شرط أساسي. يجب أن تكون تربة المنطقة جيدة الصرف وسهلة التفتت. عادةً ما تكون التربة جيدة الصرف في المناطق الاستوائية الرطبة ذات لون مائل للحمرة. يجب فحص درجة الحموضة (pH) لكل من التربة السطحية والتربة تحت السطحية. تعتبر درجة الحموضة بين 4.5 و5.8 مقبولة، لكن النطاق الأمثل المتعارف عليه عمومًا هو من 4.5 إلى 5.5.",
    "لإنشاء مشتل، اختر موقعًا قريبًا من موقع تكاثر مناسب أو عليه مباشرة لتقليل نقل التربة. اختر أرضًا مستوية أو منحدرة بلطف لتجهيز الأحواض. في حال استخدام أرض منحدرة، يجب إنشاء الأحواض على طول خطوط الكنتور. يجب أن يكون عرض كل حوض 1.07 متر (3.5 قدم) وبطول مناسب، مع ممر بعرض 30 سم على كل جانب. احفر التربة حتى عمق 38 سم (15 بوصة)، ثم املأ القاع بطبقة من الحصى والحجارة بسمك 5-7 سم (2-3 بوصة) لتحسين الصرف، تليها طبقة تربة لرفع الحوض 15-23 سم (6-9 بوصة) فوق مستوى الأرض. ومع ذلك، لا تُحتاج طبقة الصرف في التربة الرملية. يجب أن يكون سطح الحوض مائلًا قليلًا باتجاه قنوات الصرف لضمان تدفق المياه بشكل جيد.",
    "يجب أن يكون للوسط الزراعي الجيد درجة حموضة تتراوح بين 4.5 و5.5، وأن يكون خاليًا من الآفات والأمراض، وأن يتمتع بقدرة مناسبة على الاحتفاظ بالمياه، ويضمن صرفًا جيدًا. كذلك يجب ألا يكون خصبًا أكثر من اللازم، لأن الخصوبة الزائدة قد تؤدي إلى نمو غير متوازن للنبات وانخفاض الجودة. اختبر دائمًا درجة حموضة كل من التربة السطحية وتحت السطحية قبل الاستخدام، مع التأكد من عدم استخدام تربة تتجاوز درجة حموضتها 5.5. بالنسبة لمشاتل الشاي، تشمل الأوساط الزراعية المناسبة تربة غواتيمالا أو مانا، وتربة الغابات، والتربة تحت السطحية، وتربة مزارع الشاي. تُختار هذه الأتربة لصرفها الجيد ومحتواها العضوي وتوافقها مع نباتات الشاي، مما يضمن نموًا صحيًا للشتلات.",
    "لتحضير أكياس المشتل في زراعة الشاي، استخدم أكمام بولي إيثيلين شفافة مقاس 150، مفتوحة من الجانبين. الحجم القياسي هو 23 سم (9 بوصة) ارتفاعًا و10 سم (4 بوصات) عرضًا. لضمان صرف جيد، اثقب حوالي 20-30 ثقبًا صغيرًا على جانبي كل كم. عند ملء الأكمام، تأكد من رص التربة بإحكام دون أن تكون قاسية جدًا أو رخوة جدًا، مع الحفاظ على رطوبة ثابتة. إذا كانت التربة جافة قبل الملء، فستسقط بسهولة من الأكمام المغلقة عند الطرفين. وإذا تُركت التربة داخل الأكمام لتجف، سيكون من الصعب جدًا ترطيبها مرة أخرى لاحقًا. قبل الملء، أزل جميع الجذور والكتل الترابية الصلبة والحجارة من التربة.",
    "لعقل الشاي، اختر أفرعًا صحية قوية النمو ومنتصبة من شجيرات أمهات يزيد عمرها عن 4 سنوات، بعمر 3-4 أشهر في المناطق المنخفضة و6-8 أشهر في المناطق المرتفعة. استبعد الأفرع التي تحمل براعم زهرية أو علامات آفات وأمراض. استخدم الجزء شبه الخشبي بإزالة الطرفين الصلب واللين، وجهّز عقلًا أحادية العقدة بورقة واحدة وبرعم إبطي واحد بطول 1-1.5 بوصة. يجب أخذ العقل في الظل، ووضعها فورًا في الماء، وقطعها بشكل ناعم ومائل — فوق العقدة مباشرة وبمقدار 1-1.5 بوصة أسفل العقدة بالقرب من البرعم.",
    "قبل الزراعة، يجب ترطيب التربة قليلًا وضغطها برفق. يُمسك ساق العقلة بين الإبهام والسبابة وتُدخل عموديًا في التربة حتى إبط الورقة. لا يُفضل استخدام طريقة الزراعة المائلة.",
    "في مشاتل الشاي، يُعد التظليل بعد الزراعة أمرًا بالغ الأهمية لمنع الذبول وحروق الشمس والحفاظ على الرطوبة. يوفَّر التظليل المنخفض باستخدام نبات Gleichenia linearis، بينما يشمل التظليل المرتفع حصائر ألياف جوز الهند أو الشباك الاصطناعية المدعومة بإطار حديدي ارتفاعه 1.8 متر، مما يحسّن عمليات المشتل رغم التكلفة الأعلى. يعتمد الري على المناخ والتربة وعمر النبات ودرجة التظليل، مع ري أكثر تكرارًا في الطقس الجاف وأقل في فترات الأمطار. يمكن أن يتسبب الري الزائد في نمو الطحالب والأمراض. يجب أن يبدأ التسميد بعد بدء تكوّن الجذور — بعد 6-8 أسابيع في المناطق المنخفضة و10-12 أسبوعًا في المناطق المرتفعة — باستخدام T65 MAP أو T65 DAP. قبل الزراعة في الحقل، يتم تصليب النباتات بتقليل الري والتظليل تدريجيًا بدءًا من الشهر 4-6، لتهيئتها لظروف الحقل.",
    "عند اختيار أرض لزراعة شاي جديدة، تُعد المناطق المتموجة جيدة الصرف ذات عمق تربة يزيد عن 50 سم ونسبة صخور أقل من 20% مثالية، بينما يجب تجنب الأراضي شديدة الانحدار أو المستوية أو المتآكلة أو الصخرية القريبة من حقول الأرز أو الجداول. يبدأ إعداد الأرض بإزالة الغطاء النباتي القديم، خاصة في المناطق المصابة بمرض Poria، باستخدام آلات الرفع، يليه الحرث العميق وحرق الجذور المصابة، وتطبيق الدولوميت بمعدل 1250 كجم/هكتار، بدءًا من أعلى منحدر. يجب اتباع ممارسات حفظ التربة، مثل تجنب العمل أثناء الأمطار الغزيرة، وتجهيز الأرض على شكل قطع صغيرة، والزراعة فورًا للحد من التآكل. يتم إصلاح التربة عن طريق زراعة عشب غواتيمالا أو مانا لمدة 18-24 شهرًا لتحسين الخصوبة، ومكافحة الآفات والأمراض، والتخلص من السموم من المحاصيل السابقة، وتحسين بنية التربة، وتوفير غطاء للاحتفاظ بالرطوبة.",
    "يجب أن تبدأ زراعة الشاي في بداية موسم الرياح الموسمية، بقطع أعشاب الإصلاح عند مستوى الأرض ووضعها على طول الصفوف وفق خطوط الكنتور، مع زراعة الشاي بين صفوف العشب الأصلية بمسافة 1.2 م × 0.6 م. ورغم أن الكثافة النظرية للزراعة قد تكون أعلى، فإن عوامل عملية مثل قنوات الصرف والمدرجات والممرات والطرق تقلل هذا العدد، لذا يجب الحفاظ على كثافة لا تقل عن 11,000 نبتة/هكتار (4,500 نبتة/فدان). يجب حفر حفر أو خنادق الزراعة، المحددة باستخدام إطار على شكل \"A\" أو جهاز تتبع الطرق على طول خطوط الكنتور، بالحجم الموصى به وملؤها بالسماد أو المواد العضوية قبل 2-3 أسابيع من الزراعة. يجب استخدام شتلات شاي صحية وقوية عمرها 6-12 شهرًا، وفي المناطق الموبوءة بالنيماتودا، يجب استخدام مبيد نيماتودا مثل Furadan أو Nemacur (7 جم/حفرة). بعد الزراعة، يجب استخدام قصاصات العشب كغطاء بين الصفوف، واستخدام أوتاد لدعم النباتات ضد الرياح، ويمكن زراعة محاصيل غطاء زاحفة منخفضة مثل Desmodium ovalifolium أو Stylosanthus gracilis للحد من تآكل التربة.",
    "صنف TRI 4049 هو صنف شاي عالي الإنتاجية طوره معهد أبحاث الشاي في سريلانكا، وهو مثالي للارتفاعات المتوسطة إلى المنخفضة. وهو صنف من نبات الكاميليا الصينية (Camellia sinensis) يُكاثَر خضريًا، ويُعرف بنموه القوي وأوراقه الخضراء الداكنة ومقاومته للأمراض الشائعة. ينتج TRI 4049 نكهات زاهية وعطرية مناسبة لكل من شاي CTC والشاي التقليدي، مما يجعله خيارًا شائعًا لإعادة الزراعة والزراعة التجارية.",
    "على بعد بضعة صفوف، هذا النبات الموسوم هو TRI 3069 — صنف آخر مسجل لدى معهد أبحاث الشاي، يُزرع جنبًا إلى جنب مع TRI 4049 حتى يتمكن المشتل من مقارنة أداء كل منهما في هذه التربة تحديدًا قبل زراعته على نطاق واسع.",
    "يقع TRI 3055 في نفس صفوف التجربة. كل قطعة من الأصناف هنا موسومة ومتابَعة بشكل فردي، وهذه هي الطريقة التي يبني بها المصنع أدلته الخاصة على الأصناف التي تستحق التوسع فعلًا، بدلًا من الاعتماد على السمعة وحدها.",
    "يُكمل TRI 4053 قطع تجربة الأصناف الظاهرة هنا. الحفاظ على عدة أصناف مسجلة تنمو جنبًا إلى جنب، وكل منها موسوم بوضوح، ممارسة معتادة في المزرعة قبل تخصيص صنف لحقل كامل.",
  ],
  it: [
    "Il sito dovrebbe essere ben riparato dal vento prevalente, pur essendo esposto al sole in modo che le piante in crescita possano beneficiare del suo calore. Nelle zone fredde, il sito dovrebbe essere scelto per massimizzare l'esposizione al sole, mentre nelle zone calde è essenziale un certo riparo dal calore intenso del sole. Bisogna evitare le aree basse soggette ad allagamenti durante le piogge o a gelate durante i mesi secchi. La vicinanza a una buona fonte d'acqua è un requisito fondamentale. Il suolo della zona dovrebbe avere un buon drenaggio ed essere friabile. I terreni ben drenati nei tropici umidi sono generalmente di colore rossastro. Sia il terreno superficiale che il sottosuolo dovrebbero essere testati per il pH. Un pH tra 4,5 e 5,8 è accettabile, ma l'intervallo ottimale generalmente riconosciuto è tra 4,5 e 5,5.",
    "Per stabilire un vivaio, scegliere una posizione vicina o all'interno di un sito di propagazione adatto per ridurre al minimo il trasporto del terreno. Selezionare un terreno pianeggiante o leggermente in pendenza per la preparazione delle aiuole. Se si utilizza un terreno in pendenza, le aiuole devono essere costruite seguendo le curve di livello. Ogni aiuola dovrebbe essere larga 1,07 metri (3,5 piedi) e di lunghezza a piacere, con un sentiero di un piede su ciascun lato. Scavare il terreno fino a una profondità di 38 cm (15 pollici), quindi riempire il fondo con uno strato di 5-7 cm (2-3 pollici) di ghiaia e pietre per il drenaggio, seguito da terreno per sollevare l'aiuola di 15-23 cm (6-9 pollici) sopra il livello del suolo. Tuttavia, lo strato di drenaggio non è necessario per i terreni sabbiosi. La superficie dell'aiuola dovrebbe avere una leggera pendenza verso i canali di scolo per un corretto deflusso dell'acqua.",
    "Un buon substrato dovrebbe avere un pH compreso tra 4,5 e 5,5, essere privo di parassiti e malattie, possedere un'adeguata capacità di trattenere l'acqua e garantire un buon drenaggio. Inoltre, non dovrebbe essere troppo fertile, poiché una fertilità eccessiva può portare a una crescita squilibrata delle piante e a una qualità ridotta. Testare sempre il pH sia del terreno superficiale che del sottosuolo prima dell'uso, assicurandosi di non utilizzare terreno con un pH superiore a 5,5. Per i vivai di tè, i substrati adatti includono terra del Guatemala o Mana, terra di giungla, sottosuolo e terra da piantagione di tè. Questi terreni vengono scelti per il loro buon drenaggio, il contenuto organico e la compatibilità con le piante di tè, garantendo una crescita sana delle piantine.",
    "Per preparare i sacchetti da vivaio nella coltivazione del tè, utilizzare manicotti in polietilene trasparente di calibro 150, aperti su entrambi i lati. La dimensione standard è di 23 cm (9 pollici) di altezza e 10 cm (4 pollici) di larghezza. Per garantire un drenaggio adeguato, praticare circa 20-30 piccoli fori sui lati di ciascun manicotto. Durante il riempimento dei manicotti, assicurarsi che il terreno sia compattato saldamente ma non troppo duro o troppo sciolto, e mantenere un'umidità costante. Se il terreno è secco prima del riempimento, cadrà facilmente dai manicotti sigillati. Se si lascia asciugare il terreno all'interno dei manicotti, sarà molto difficile reidratarlo in seguito. Prima del riempimento, rimuovere tutte le radici, le zolle dure e le pietre dal terreno.",
    "Per le talee di tè, selezionare germogli sani, eretti e vigorosi provenienti da piante madri di oltre 4 anni, con un'età di 3-4 mesi nelle zone basse e 6-8 mesi nelle zone alte. Scartare i germogli con boccioli o segni di parassiti e malattie. Utilizzare la parte semi-legnosa rimuovendo le estremità dure e morbide, e preparare talee a nodo singolo con una foglia e una gemma ascellare, lunghe 1-1,5 pollici. Le talee devono essere prelevate all'ombra, poste immediatamente in acqua e tagliate in modo netto e obliquo — appena sopra il nodo e 1-1,5 pollici sotto il nodo vicino alla gemma.",
    "Prima della semina, il terreno dovrebbe essere leggermente inumidito e delicatamente pressato. Lo stelo della talea dovrebbe essere tenuto tra pollice e indice e inserito verticalmente nel terreno fino all'ascella della foglia. Il metodo obliquo non è consigliato.",
    "Nei vivai di tè, l'ombreggiatura dopo la semina è fondamentale per prevenire l'appassimento, le scottature solari e mantenere l'umidità. L'ombra bassa è fornita dalla Gleichenia linearis, mentre l'ombra alta prevede stuoie di cocco o reti sintetiche sostenute da una struttura in ferro di 1,8 m, che migliora la gestione del vivaio nonostante i costi più elevati. L'irrigazione dipende dal clima, dal terreno, dall'età della pianta e dall'ombreggiatura, con annaffiature più frequenti nei periodi secchi e meno frequenti in quelli piovosi. Un'irrigazione eccessiva può causare muschio e malattie. La concimazione dovrebbe iniziare dopo l'inizio della radicazione — 6-8 settimane nelle zone basse e 10-12 settimane nelle zone alte — utilizzando T65 MAP o T65 DAP. Prima del trapianto, le piante vengono irrobustite riducendo gradualmente acqua e ombra a partire dai 4-6 mesi, per prepararle alle condizioni di campo.",
    "Nella scelta del terreno per una nuova piantagione di tè, sono ideali le aree ondulate e ben drenate, con una profondità del suolo superiore a 50 cm e una pietrosità inferiore al 20%, evitando terreni ripidi, piatti, erosi o pietrosi vicino a risaie o corsi d'acqua. La preparazione del terreno inizia con la rimozione della vecchia vegetazione, in particolare nelle aree infette dalla malattia di Poria, utilizzando verricelli, seguita da una profonda aratura e dalla bruciatura delle radici infette, dall'applicazione di dolomite a 1250 kg/ha, iniziando dal pendio più alto. Devono essere seguite pratiche di conservazione del suolo, come evitare di lavorare durante piogge intense, preparare il terreno in piccoli blocchi e piantare immediatamente per ridurre l'erosione. Il risanamento del suolo si effettua coltivando erba del Guatemala o Mana per 18-24 mesi per migliorare la fertilità, controllare parassiti e malattie, eliminare le tossine delle colture precedenti, migliorare la struttura del suolo e fornire pacciamatura per trattenere l'umidità.",
    "La piantumazione del tè dovrebbe iniziare all'inizio della stagione dei monsoni, tagliando le erbe di risanamento a livello del suolo e disponendole lungo file secondo le curve di livello, con il tè piantato tra le file d'erba originali a una distanza di 1,2 m × 0,6 m. Sebbene la densità teorica delle piante possa essere maggiore, fattori pratici come canali di scolo, terrazze, sentieri e strade ne riducono il numero, quindi si dovrebbe mantenere una densità minima di 11.000 piante/ha (4.500 piante/acro). Le buche o i solchi di semina, contrassegnati con un telaio a \"A\" o un tracciatore stradale lungo le curve di livello, devono essere scavati alla dimensione consigliata e riempiti con compost o materia organica 2-3 settimane prima della semina. Devono essere utilizzate piante di tè sane e vigorose di 6-12 mesi, e nelle aree infestate da nematodi va applicato un nematocida come Furadan o Nemacur (7 g/buca). Dopo la semina, gli sfalci d'erba dovrebbero essere usati come pacciame tra le file, si dovrebbero usare tutori per sostenere le piante contro il vento, e colture di copertura basse e striscianti come Desmodium ovalifolium o Stylosanthus gracilis possono essere coltivate per ridurre l'erosione del suolo.",
    "TRI 4049 è una cultivar di tè ad alta resa sviluppata dal Tea Research Institute dello Sri Lanka, ideale per altitudini medio-basse. È una varietà di Camellia sinensis propagata vegetativamente, nota per la sua crescita vigorosa, le foglie verde scuro e la resistenza alle malattie comuni. TRI 4049 produce infusi brillanti e aromatici, adatti sia al tè CTC che a quello ortodosso, il che lo rende una scelta popolare per il reimpianto e la coltivazione commerciale.",
    "Qualche fila più in là, questa pianta contrassegnata è il TRI 3069 — un'altra cultivar registrata presso l'Istituto di Ricerca sul Tè, coltivata accanto al TRI 4049 in modo che il vivaio possa confrontare come si comporta ciascuna su questo particolare terreno prima di piantarle su larga scala.",
    "Il TRI 3055 si trova nelle stesse file di prova. Ogni appezzamento di cultivar qui è etichettato e monitorato singolarmente, ed è così che la fabbrica costruisce le proprie prove su quali varietà valga davvero la pena espandere, invece di affidarsi solo alla reputazione.",
    "Il TRI 4053 completa gli appezzamenti di prova delle cultivar mostrati qui. Tenere diverse varietà registrate a crescere fianco a fianco, ciascuna chiaramente etichettata, è prassi comune nella tenuta prima di destinare una cultivar a un intero campo.",
  ],
  de: [
    "Der Standort sollte gut vor dem vorherrschenden Wind geschützt sein und gleichzeitig der Sonne ausgesetzt sein, damit die wachsenden Pflanzen von ihrer Wärme profitieren können. In kalten Gebieten sollte ein Standort gewählt werden, der die Sonneneinstrahlung maximiert, während in heißen Gebieten ein gewisser Schutz vor der vollen Sonnenhitze unerlässlich ist. Tiefliegende Gebiete, die während der Regenzeit überflutungsgefährdet sind oder in den Trockenmonaten von Frost bedroht sind, sollten vermieden werden. Die Nähe zu einer guten Wasserquelle ist Voraussetzung. Der Boden vor Ort sollte gut durchlässig und krümelig sein. Gut durchlässige Böden in den feuchten Tropen sind meist rötlich gefärbt. Sowohl der Ober- als auch der Unterboden sollten auf den pH-Wert getestet werden. Ein pH-Wert zwischen 4,5 und 5,8 ist akzeptabel, wobei der allgemein anerkannte optimale Bereich bei 4,5 bis 5,5 liegt.",
    "Zur Anlage einer Baumschule sollte ein Standort in der Nähe oder direkt an einem geeigneten Vermehrungsort gewählt werden, um den Bodentransport zu minimieren. Für die Beetvorbereitung sollte flaches oder leicht abfallendes Gelände gewählt werden. Bei Hanglage sollten die Beete entlang der Höhenlinien angelegt werden. Jedes Beet sollte 1,07 Meter (3,5 Fuß) breit und beliebig lang sein, mit einem 30 cm breiten Pfad auf jeder Seite. Der Boden wird bis zu einer Tiefe von 38 cm (15 Zoll) ausgehoben, danach wird der Boden mit einer 5–7 cm (2–3 Zoll) dicken Schicht aus Schutt und Steinen zur Entwässerung gefüllt, gefolgt von Erde, um das Beet 15–23 cm (6–9 Zoll) über das Bodenniveau anzuheben. Bei sandigen Böden ist diese Drainageschicht jedoch nicht erforderlich. Die Oberfläche des Beetes sollte ein leichtes Gefälle zu den Abflussrinnen aufweisen, um einen ordnungsgemäßen Wasserabfluss zu gewährleisten.",
    "Ein gutes Substrat sollte einen pH-Wert zwischen 4,5 und 5,5 haben, frei von Schädlingen und Krankheiten sein, eine angemessene Wasserhaltekapazität besitzen und eine gute Drainage gewährleisten. Zudem sollte es nicht zu fruchtbar sein, da übermäßige Fruchtbarkeit zu unausgewogenem Pflanzenwachstum und geringerer Qualität führen kann. Testen Sie vor der Verwendung stets den pH-Wert von Ober- und Unterboden und stellen Sie sicher, dass kein Boden mit einem pH-Wert über 5,5 verwendet wird. Für Tee-Baumschulen eignen sich Guatemala- oder Mana-Erde, Dschungelerde, Unterboden und Teeplantagenerde. Diese Böden werden wegen ihrer guten Drainage, ihres organischen Gehalts und ihrer Verträglichkeit mit Teepflanzen ausgewählt, was ein gesundes Wachstum der Sämlinge gewährleistet.",
    "Zur Vorbereitung der Anzuchtbeutel im Teeanbau werden transparente, an beiden Seiten offene Polyethylenhülsen der Stärke 150 verwendet. Die Standardgröße beträgt 23 cm (9 Zoll) Höhe und 10 cm (4 Zoll) Breite. Um eine ausreichende Drainage zu gewährleisten, sollten etwa 20–30 kleine Löcher an den Seiten jeder Hülse angebracht werden. Beim Befüllen der Hülsen sollte die Erde fest, aber nicht zu hart oder zu locker verdichtet werden, wobei eine gleichmäßige Feuchtigkeit beizubehalten ist. Ist die Erde vor dem Befüllen trocken, fällt sie leicht aus den an den Enden verschlossenen Hülsen heraus. Trocknet die Erde in den Hülsen aus, lässt sie sich später nur sehr schwer wieder befeuchten. Vor dem Befüllen sollten alle Wurzeln, harten Erdklumpen und Steine aus der Erde entfernt werden.",
    "Für Teestecklinge werden gesunde, kräftig wachsende, aufrechte Triebe von über 4 Jahre alten Mutterbüschen ausgewählt, im Tiefland 3–4 Monate und im Hochland 6–8 Monate alt. Triebe mit Blütenknospen oder Anzeichen von Schädlingen und Krankheiten sind auszusortieren. Verwendet wird der halbverholzte Teil, wobei das harte und das weiche Ende entfernt werden; es werden Einknoten-Stecklinge mit einem Blatt und einer Achselknospe von 1–1,5 Zoll Länge vorbereitet. Die Stecklinge sollten im Schatten geschnitten, sofort in Wasser gelegt und glatt und schräg geschnitten werden — direkt oberhalb des Knotens und 1–1,5 Zoll unterhalb des Knotens nahe der Knospe.",
    "Vor dem Pflanzen sollte der Boden leicht befeuchtet und sanft angedrückt werden. Der Stiel des Stecklings wird zwischen Daumen und Zeigefinger gehalten und senkrecht bis zur Blattachsel in den Boden eingeführt. Die Schrägpflanzung wird nicht empfohlen.",
    "In Tee-Baumschulen ist die Beschattung nach dem Pflanzen entscheidend, um Welken und Sonnenbrand zu verhindern und die Feuchtigkeit zu erhalten. Leichte Beschattung erfolgt mit Gleichenia linearis, während starke Beschattung Kokosmatten oder synthetische Netze umfasst, die von einem 1,8 m hohen Eisenrahmen getragen werden — trotz höherer Kosten verbessert dies den Baumschulbetrieb. Die Bewässerung richtet sich nach Klima, Boden, Pflanzenalter und Beschattung, mit häufigerer Bewässerung bei trockenem Wetter und selteneren in Regenperioden. Übermäßiges Gießen kann Moos und Krankheiten verursachen. Die Düngung sollte nach Beginn der Wurzelbildung beginnen — 6–8 Wochen im Tiefland und 10–12 Wochen im Hochland — mit T65 MAP oder T65 DAP. Vor der Verpflanzung werden die Pflanzen abgehärtet, indem Wasser und Beschattung ab dem 4.–6. Monat schrittweise reduziert werden, um sie auf Feldbedingungen vorzubereiten.",
    "Bei der Auswahl von Land für neue Teeplantagen sind wellige, gut durchlässige Flächen mit einer Bodentiefe von mehr als 50 cm und weniger als 20 % Steinanteil ideal, während steile, flache, erodierte oder steinige Flächen in der Nähe von Reisfeldern oder Bächen vermieden werden sollten. Die Landvorbereitung beginnt mit der Entfernung der alten Vegetation, insbesondere in von der Poria-Krankheit befallenen Gebieten, mittels Seilwinden, gefolgt von tiefem Umgraben und Verbrennen infizierter Wurzeln, dem Ausbringen von Dolomit mit 1250 kg/ha, beginnend am höchsten Hang. Bodenschutzmaßnahmen müssen befolgt werden, wie das Vermeiden von Arbeiten bei starkem Regen, die Vorbereitung des Landes in kleinen Blöcken und sofortiges Pflanzen zur Reduzierung der Erosion. Die Bodensanierung erfolgt durch den Anbau von Guatemala- oder Mana-Gras über 18–24 Monate, um die Fruchtbarkeit zu verbessern, Schädlinge und Krankheiten zu bekämpfen, Toxine aus Vorkulturen zu beseitigen, die Bodenstruktur zu verbessern und Mulch zur Feuchtigkeitsspeicherung bereitzustellen.",
    "Die Teepflanzung sollte zu Beginn der Monsunzeit beginnen, indem Regenerationsgras bodennah geschnitten und entlang der Höhenlinien in Reihen gelegt wird, wobei der Tee zwischen den ursprünglichen Grasreihen mit einem Abstand von 1,2 m × 0,6 m gepflanzt wird. Obwohl die theoretische Pflanzendichte höher sein könnte, verringern praktische Faktoren wie Gräben, Terrassen, Wege und Straßen die Anzahl, sodass eine Mindestdichte von 11.000 Pflanzen/ha (4.500 Pflanzen/Acre) beibehalten werden sollte. Pflanzlöcher oder -gräben, die mit einem A-Rahmen oder Wegmarkierer entlang der Höhenlinien markiert werden, müssen in der empfohlenen Größe ausgehoben und 2–3 Wochen vor der Pflanzung mit Kompost oder organischem Material gefüllt werden. Es sollten gesunde, kräftige, 6–12 Monate alte Teepflanzen verwendet werden, und in nematodenbefallenen Gebieten sollte ein Nematizid wie Furadan oder Nemacur (7 g/Loch) angewendet werden. Nach dem Pflanzen sollten Grasschnittreste als Mulch zwischen den Reihen verwendet werden, Pfähle sollten die Pflanzen gegen Wind stützen, und niedrig kriechende Deckfrüchte wie Desmodium ovalifolium oder Stylosanthus gracilis können zur Verringerung der Bodenerosion angebaut werden.",
    "TRI 4049 ist eine ertragsstarke Teesorte, die vom Tea Research Institute of Sri Lanka entwickelt wurde und sich ideal für mittlere bis niedrige Höhenlagen eignet. Es handelt sich um eine vegetativ vermehrte Sorte von Camellia sinensis, bekannt für kräftiges Wachstum, dunkelgrüne Blätter und Widerstandsfähigkeit gegen verbreitete Krankheiten. TRI 4049 liefert helle, aromatische Aufgüsse, die sowohl für CTC- als auch für orthodoxen Tee geeignet sind, was sie zu einer beliebten Wahl für Nachpflanzungen und den kommerziellen Anbau macht.",
    "Ein paar Reihen weiter steht diese beschilderte Pflanze: TRI 3069 — eine weitere beim Tea Research Institute registrierte Sorte, die neben TRI 4049 gepflanzt wird, damit die Baumschule vergleichen kann, wie sich jede Sorte auf genau diesem Boden entwickelt, bevor eine davon großflächig ausgepflanzt wird.",
    "TRI 3055 steht in denselben Testreihen. Jede Sortenparzelle hier ist einzeln markiert und wird verfolgt — so sammelt die Fabrik ihre eigenen Belege dafür, welche Sorten sich wirklich lohnen auszuweiten, statt sich nur auf den Ruf zu verlassen.",
    "TRI 4053 rundet die hier gezeigten Sorten-Testparzellen ab. Mehrere registrierte Sorten nebeneinander wachsen zu lassen, jede deutlich beschildert, ist auf dem Anwesen gängige Praxis, bevor eine Sorte einem ganzen Feld zugewiesen wird.",
  ],
  ru: [
    "Участок должен быть хорошо защищён от преобладающих ветров и в то же время открыт солнцу, чтобы развивающиеся растения могли получать пользу от его тепла. В холодных районах следует выбирать место с максимальной инсоляцией, тогда как в жарких районах необходима некоторая защита от палящего солнца. Следует избегать низинных участков, подверженных затоплению во время дождей или заморозкам в засушливые месяцы. Обязательным условием является близость к хорошему источнику воды. Почва участка должна хорошо дренироваться и быть рыхлой. Хорошо дренированные почвы во влажных тропиках обычно имеют красноватый оттенок. И верхний, и нижний слои почвы следует проверить на pH. Значение pH от 4,5 до 5,8 допустимо, но оптимальным считается диапазон от 4,5 до 5,5.",
    "При закладке питомника выбирайте место рядом с подходящим участком размножения или непосредственно на нём, чтобы минимизировать перевозку почвы. Для подготовки грядок выбирайте ровный или слегка наклонный участок. При использовании склона грядки следует располагать вдоль горизонталей. Каждая грядка должна быть шириной 1,07 м (3,5 фута) и произвольной длины, с проходом шириной в один фут с каждой стороны. Выкопайте почву на глубину 38 см (15 дюймов), затем заполните дно слоем щебня и камней толщиной 5–7 см (2–3 дюйма) для дренажа, после чего досыпьте почву, чтобы поднять грядку на 15–23 см (6–9 дюймов) над уровнем земли. Однако для песчаных почв дренажный слой не требуется. Поверхность грядки должна иметь небольшой уклон в сторону дренажных канав для нормального стока воды.",
    "Хороший грунт для питомника должен иметь pH в диапазоне от 4,5 до 5,5, быть свободным от вредителей и болезней, обладать надлежащей влагоёмкостью и хорошим дренажем. Кроме того, он не должен быть слишком плодородным, поскольку избыточное плодородие может привести к несбалансированному росту растений и снижению качества. Всегда проверяйте pH верхнего и нижнего слоёв почвы перед использованием, следя за тем, чтобы не использовалась почва с pH выше 5,5. Для чайных питомников подходящими видами грунта являются гватемальская или мана-почва, лесная почва, подпочва и чайная почва. Эти почвы выбираются за хороший дренаж, содержание органики и совместимость с чайными растениями, что обеспечивает здоровый рост саженцев.",
    "Для подготовки пакетов питомника при выращивании чая используйте прозрачные полиэтиленовые рукава калибра 150 с открытыми с двух сторон. Стандартный размер — высота 23 см (9 дюймов) и ширина 10 см (4 дюйма). Для обеспечения надлежащего дренажа проделайте около 20–30 небольших отверстий по бокам каждого рукава. При заполнении рукавов следите за тем, чтобы почва была плотно утрамбована, но не слишком твёрдой или рыхлой, и поддерживайте равномерную влажность. Если почва перед заполнением сухая, она легко высыпется из запечатанных концов рукава. Если почва внутри рукава пересохнет, впоследствии её будет очень трудно снова увлажнить. Перед заполнением удалите из почвы все корни, твёрдые комья и камни.",
    "Для чайных черенков выбирайте здоровые, энергично растущие прямостоячие побеги с материнских кустов старше 4 лет, возрастом 3–4 месяца в низменных районах и 6–8 месяцев в высокогорных. Отбраковывайте побеги с цветочными почками или признаками вредителей и болезней. Используйте полуодревесневшую часть побега, удаляя твёрдый и мягкий концы, и подготавливайте однокоренные черенки с одним листом и одной пазушной почкой длиной 1–1,5 дюйма. Черенки следует срезать в тени, немедленно помещать в воду и делать срез гладким и косым — чуть выше узла и на 1–1,5 дюйма ниже узла возле почки.",
    "Перед посадкой почву следует слегка увлажнить и аккуратно уплотнить. Стебель черенка нужно держать между большим и указательным пальцами и вертикально вставлять в почву до пазухи листа. Наклонный способ посадки не рекомендуется.",
    "В чайных питомниках затенение после посадки крайне важно для предотвращения увядания, солнечных ожогов и поддержания влажности. Лёгкое затенение обеспечивается растением Gleichenia linearis, тогда как для сильного затенения используются кокосовые маты или синтетические сетки на железном каркасе высотой 1,8 м, что улучшает работу питомника, несмотря на более высокую стоимость. Полив зависит от климата, почвы, возраста растений и степени затенения: в засушливую погоду он должен быть более частым, а в дождливые периоды — реже. Избыточный полив может привести к появлению мха и болезней. Внесение удобрений следует начинать после начала укоренения — через 6–8 недель в низменных районах и 10–12 недель в высокогорных — с использованием T65 MAP или T65 DAP. Перед пересадкой растения закаляют, постепенно сокращая полив и затенение начиная с 4–6 месяцев, чтобы подготовить их к полевым условиям.",
    "При выборе земли под новую чайную плантацию идеальны холмистые, хорошо дренированные участки с глубиной почвы более 50 см и каменистостью менее 20%, тогда как крутых, ровных, эродированных или каменистых участков вблизи рисовых полей или ручьёв следует избегать. Подготовка земли начинается с удаления старой растительности, особенно на участках, поражённых болезнью Poria, с помощью лебёдок, затем проводится глубокое рыхление и сжигание заражённых корней, внесение доломита из расчёта 1250 кг/га, начиная с самого высокого склона. Необходимо соблюдать меры по сохранению почвы: избегать работ во время сильных дождей, готовить землю небольшими участками и сразу же высаживать растения для снижения эрозии. Восстановление почвы проводится путём выращивания гватемальской или мана-травы в течение 18–24 месяцев для повышения плодородия, борьбы с вредителями и болезнями, устранения токсинов от предыдущих культур, улучшения структуры почвы и обеспечения мульчирования для удержания влаги.",
    "Посадку чая следует начинать в начале сезона муссонов, срезая восстановительную траву на уровне земли и укладывая её вдоль рядов по горизонталям, при этом чай высаживается между исходными рядами травы с расстоянием 1,2 м × 0,6 м. Хотя теоретическая плотность посадки может быть выше, практические факторы — дренажные канавы, террасы, дорожки и дороги — уменьшают это число, поэтому следует поддерживать минимальную плотность 11 000 растений/га (4500 растений/акр). Посадочные ямы или траншеи, размеченные с помощью А-образной рамы или дорожного трассировщика вдоль горизонталей, должны быть выкопаны рекомендуемого размера и заполнены компостом или органическим веществом за 2–3 недели до посадки. Следует использовать здоровые, крепкие чайные растения возрастом 6–12 месяцев, а в районах, заражённых нематодами, применять нематицид, такой как Фурадан или Немакур (7 г на лунку). После посадки скошенную траву следует использовать в качестве мульчи между рядами, для защиты растений от ветра — использовать колья, а для снижения эрозии почвы можно выращивать низкорослые почвопокровные культуры, такие как Desmodium ovalifolium или Stylosanthus gracilis.",
    "TRI 4049 — высокоурожайный сорт чая, выведенный Институтом чая Шри-Ланки, идеально подходящий для средних и низких высот. Это вегетативно размножаемая разновидность Camellia sinensis, известная энергичным ростом, тёмно-зелёными листьями и устойчивостью к распространённым болезням. TRI 4049 даёт яркие, ароматные настои, подходящие как для чая CTC, так и для ортодоксального чая, что делает его популярным выбором для пересадки и промышленного выращивания.",
    "Через несколько рядов растёт помеченное табличкой растение — TRI 3069, ещё один зарегистрированный Институтом чая сорт, посаженный рядом с TRI 4049, чтобы питомник мог сравнить, как каждый из них ведёт себя именно на этой почве, прежде чем высаживать в промышленных масштабах.",
    "TRI 3055 растёт в тех же испытательных рядах. Каждый участок с сортом здесь помечен и отслеживается отдельно — именно так фабрика накапливает собственные данные о том, какие сорта действительно стоит расширять, а не полагается только на репутацию.",
    "TRI 4053 завершает показанные здесь испытательные участки сортов. Выращивание нескольких зарегистрированных сортов бок о бок, каждый с чёткой маркировкой, — стандартная практика на плантации перед тем, как отдать под один сорт целое поле.",
  ],
  fr: [
    "Le site doit être bien protégé du vent dominant, tout en étant exposé au soleil afin que les jeunes plants bénéficient de sa chaleur. Dans les régions froides, il convient de choisir un emplacement qui maximise l'ensoleillement, tandis que dans les régions chaudes, une certaine protection contre la chaleur intense du soleil est essentielle. Il faut éviter les zones basses sujettes aux inondations pendant les pluies ou au gel pendant les mois secs. La proximité d'une bonne source d'eau est indispensable. Le sol de la région doit être bien drainé et friable. Les sols bien drainés des tropiques humides sont généralement de couleur rougeâtre. La couche supérieure et le sous-sol doivent tous deux être testés pour le pH. Un pH compris entre 4,5 et 5,8 est acceptable, mais la plage optimale généralement admise se situe entre 4,5 et 5,5.",
    "Pour établir une pépinière, choisissez un emplacement proche ou situé sur un site de propagation adapté afin de minimiser le transport de terre. Sélectionnez un terrain plat ou en légère pente pour la préparation des planches. Si un terrain en pente est utilisé, les planches doivent être construites en suivant les courbes de niveau. Chaque planche doit mesurer 1,07 mètre (3,5 pieds) de large et avoir une longueur adaptée, avec une allée de 30 cm de chaque côté. Creusez le sol sur une profondeur de 38 cm (15 pouces), puis remplissez le fond d'une couche de 5 à 7 cm (2 à 3 pouces) de gravats et de pierres pour le drainage, suivie de terre pour surélever la planche de 15 à 23 cm (6 à 9 pouces) au-dessus du niveau du sol. Cependant, la couche de drainage n'est pas nécessaire pour les sols sableux. La surface de la planche doit présenter une légère pente vers les drains pour assurer un bon écoulement de l'eau.",
    "Un bon substrat doit avoir un pH compris entre 4,5 et 5,5, être exempt de nuisibles et de maladies, posséder une bonne capacité de rétention d'eau et assurer un bon drainage. De plus, il ne doit pas être trop fertile, car un excès de fertilité peut entraîner une croissance déséquilibrée et une qualité réduite. Testez toujours le pH de la couche supérieure et du sous-sol avant utilisation, en veillant à ne pas utiliser de sol dont le pH dépasse 5,5. Pour les pépinières de thé, les substrats adaptés comprennent la terre du Guatemala ou de Mana, la terre de jungle, le sous-sol et la terre de plantation de thé. Ces sols sont choisis pour leur bon drainage, leur teneur en matière organique et leur compatibilité avec les plants de thé, garantissant une croissance saine des semis.",
    "Pour préparer les sacs de pépinière dans la culture du thé, utilisez des manchons en polyéthylène transparent de calibre 150, ouverts des deux côtés. La taille standard est de 23 cm (9 pouces) de hauteur et 10 cm (4 pouces) de largeur. Pour assurer un bon drainage, percez environ 20 à 30 petits trous sur les côtés de chaque manchon. Lors du remplissage, veillez à ce que la terre soit tassée fermement, sans être trop dure ni trop meuble, et maintenez une humidité constante. Si la terre est sèche avant le remplissage, elle tombera facilement des manchons scellés. Laisser sécher la terre à l'intérieur des manchons rendra sa réhumidification très difficile par la suite. Avant le remplissage, retirez toutes les racines, mottes dures et pierres de la terre.",
    "Pour les boutures de thé, sélectionnez des pousses saines et vigoureuses, bien droites, provenant de théiers mères âgés de plus de 4 ans, de 3 à 4 mois dans les basses terres et de 6 à 8 mois dans les hautes terres. Rejetez les pousses portant des boutons floraux ou présentant des signes de nuisibles ou de maladies. Utilisez la partie semi-lignifiée en retirant les extrémités dures et tendres, et préparez des boutures à un seul nœud avec une feuille et un bourgeon axillaire, longues de 1 à 1,5 pouce. Les boutures doivent être prélevées à l'ombre, placées immédiatement dans l'eau, et coupées de façon nette et en biais — juste au-dessus du nœud et à 1–1,5 pouce en dessous du nœud, près du bourgeon.",
    "Avant la plantation, le sol doit être légèrement humidifié et légèrement tassé. La tige de la bouture doit être tenue entre le pouce et l'index et insérée verticalement dans le sol jusqu'à l'aisselle de la feuille. La méthode inclinée n'est pas recommandée.",
    "Dans les pépinières de thé, l'ombrage après la plantation est essentiel pour prévenir le flétrissement, les brûlures du soleil et maintenir l'humidité. Un ombrage léger est assuré par le Gleichenia linearis, tandis qu'un ombrage plus dense fait appel à des nattes de coco ou des filets synthétiques soutenus par une structure en fer de 1,8 m, ce qui améliore la gestion de la pépinière malgré un coût plus élevé. L'arrosage dépend du climat, du sol, de l'âge des plants et de l'ombrage, avec un arrosage plus fréquent par temps sec et moins fréquent pendant les périodes pluvieuses. Un arrosage excessif peut provoquer l'apparition de mousse et de maladies. L'application d'engrais doit commencer après l'initiation racinaire — 6 à 8 semaines dans les basses terres et 10 à 12 semaines dans les hautes terres — en utilisant du T65 MAP ou du T65 DAP. Avant la transplantation, les plants sont endurcis en réduisant progressivement l'eau et l'ombrage à partir de 4 à 6 mois, afin de les préparer aux conditions de plein champ.",
    "Lors du choix d'un terrain pour une nouvelle plantation de thé, les zones vallonnées et bien drainées, avec une profondeur de sol supérieure à 50 cm et moins de 20 % de rocaille, sont idéales, tandis que les terrains escarpés, plats, érodés ou rocailleux proches des rizières ou des cours d'eau doivent être évités. La préparation du terrain commence par l'élimination de l'ancienne végétation, en particulier dans les zones touchées par la maladie de Poria, à l'aide de treuils, suivie d'un labour profond et du brûlage des racines infectées, de l'application de dolomie à raison de 1250 kg/ha, en commençant par la pente la plus haute. Des pratiques de conservation des sols doivent être respectées, comme éviter de travailler pendant les fortes pluies, préparer le terrain par petits blocs et planter immédiatement pour réduire l'érosion. La réhabilitation du sol se fait en cultivant de l'herbe du Guatemala ou de Mana pendant 18 à 24 mois afin d'améliorer la fertilité, de lutter contre les nuisibles et les maladies, d'éliminer les toxines des cultures précédentes, d'améliorer la structure du sol et de fournir un paillis pour retenir l'humidité.",
    "La plantation du thé doit débuter au début de la saison des moussons, en coupant les herbes de réhabilitation au ras du sol et en les plaçant le long des rangées en courbes de niveau, le thé étant planté entre les rangées d'herbe d'origine, avec un espacement de 1,2 m × 0,6 m. Bien que la densité théorique de plantation puisse être plus élevée, des facteurs pratiques comme les drains, les terrasses, les sentiers et les routes réduisent ce nombre, si bien qu'une densité minimale de 11 000 plants/ha (4 500 plants/acre) doit être maintenue. Les trous ou tranchées de plantation, marqués à l'aide d'un cadre en « A » ou d'un traceur de route le long des courbes de niveau, doivent être creusés à la taille recommandée et remplis de compost ou de matière organique 2 à 3 semaines avant la plantation. Des plants de thé sains et vigoureux âgés de 6 à 12 mois doivent être utilisés, et dans les zones infestées de nématodes, un nématicide tel que le Furadan ou le Nemacur (7 g/trou) doit être appliqué. Après la plantation, les résidus d'herbe coupée doivent servir de paillis entre les rangées, des tuteurs doivent être utilisés pour soutenir les plants contre le vent, et des cultures de couverture rampantes basses comme le Desmodium ovalifolium ou le Stylosanthus gracilis peuvent être cultivées pour réduire l'érosion des sols.",
    "Le TRI 4049 est un cultivar de thé à haut rendement développé par l'Institut de recherche sur le thé du Sri Lanka, idéal pour les altitudes moyennes à basses. Il s'agit d'une variété de Camellia sinensis multipliée végétativement, reconnue pour sa croissance vigoureuse, ses feuilles vert foncé et sa résistance aux maladies courantes. Le TRI 4049 produit des liqueurs vives et aromatiques, adaptées aussi bien au thé CTC qu'au thé orthodoxe, ce qui en fait un choix populaire pour la replantation et la culture commerciale.",
    "Quelques rangs plus loin, cette plante étiquetée est le TRI 3069 — un autre cultivar enregistré auprès de l'Institut de Recherche sur le Thé, planté aux côtés du TRI 4049 afin que la pépinière puisse comparer le comportement de chacun sur ce sol particulier avant toute plantation à grande échelle.",
    "Le TRI 3055 se trouve dans les mêmes rangées d'essai. Chaque parcelle de cultivar y est étiquetée et suivie individuellement, ce qui permet à l'usine de constituer ses propres preuves sur les variétés qui méritent vraiment d'être développées, plutôt que de se fier à la seule réputation.",
    "Le TRI 4053 complète les parcelles d'essai de cultivars illustrées ici. Faire pousser côte à côte plusieurs variétés enregistrées, chacune clairement étiquetée, est une pratique courante sur le domaine avant d'engager un cultivar sur un champ entier.",
  ],
  es: [
    "El emplazamiento debe estar bien protegido del viento predominante y, al mismo tiempo, expuesto al sol para que las plantas en desarrollo se beneficien de su calidez. En zonas frías conviene elegir un lugar que maximice la exposición solar, mientras que en zonas cálidas es esencial cierta protección frente al calor intenso del sol. Deben evitarse las zonas bajas propensas a inundaciones durante las lluvias o a heladas durante los meses secos. Es imprescindible estar cerca de una buena fuente de agua. El suelo de la zona debe tener buen drenaje y ser friable. Los suelos bien drenados en los trópicos húmedos suelen ser de color rojizo. Tanto la capa superior como la subyacente deben analizarse para determinar el pH. Un pH entre 4,5 y 5,8 es aceptable, aunque el rango óptimo generalmente aceptado es de 4,5 a 5,5.",
    "Para establecer un vivero, elija una ubicación cercana o dentro de un sitio de propagación adecuado, a fin de minimizar el transporte de tierra. Seleccione un terreno plano o con pendiente suave para la preparación de los semilleros. Si se utiliza terreno inclinado, los semilleros deben construirse siguiendo las curvas de nivel. Cada semillero debe tener 1,07 metros (3,5 pies) de ancho y una longitud conveniente, con un sendero de un pie a cada lado. Excave el suelo hasta una profundidad de 38 cm (15 pulgadas) y luego rellene el fondo con una capa de 5–7 cm (2–3 pulgadas) de grava y piedras para el drenaje, seguida de tierra hasta elevar el semillero entre 15 y 23 cm (6–9 pulgadas) sobre el nivel del suelo. Sin embargo, esta capa de drenaje no es necesaria en suelos arenosos. La superficie del semillero debe tener una ligera pendiente hacia los desagües para permitir un flujo de agua adecuado.",
    "Un buen sustrato debe tener un pH de entre 4,5 y 5,5, estar libre de plagas y enfermedades, poseer una adecuada capacidad de retención de agua y garantizar un buen drenaje. Además, no debe ser demasiado fértil, ya que el exceso de fertilidad puede provocar un crecimiento desequilibrado y una menor calidad de la planta. Analice siempre el pH tanto de la capa superior como de la subyacente antes de usarlas, asegurándose de no utilizar suelos con un pH superior a 5,5. Para los viveros de té, los sustratos adecuados incluyen tierra de Guatemala o Mana, tierra de bosque, subsuelo y tierra de plantación de té. Estos suelos se eligen por su buen drenaje, contenido orgánico y compatibilidad con las plantas de té, lo que garantiza un crecimiento saludable de las plántulas.",
    "Para preparar las bolsas de vivero en el cultivo de té, utilice mangas de polietileno transparente calibre 150, abiertas por ambos lados. El tamaño estándar es de 23 cm (9 pulgadas) de altura y 10 cm (4 pulgadas) de ancho. Para garantizar un drenaje adecuado, perfore entre 20 y 30 pequeños orificios en los laterales de cada manga. Al llenar las mangas, asegúrese de que la tierra quede compactada firmemente, sin quedar demasiado dura ni demasiado suelta, y mantenga una humedad constante. Si la tierra está seca antes de llenarlas, se caerá fácilmente de las mangas selladas en los extremos. Si se deja secar la tierra dentro de las mangas, será muy difícil volver a humedecerla después. Antes de llenar, retire todas las raíces, terrones duros y piedras de la tierra.",
    "Para los esquejes de té, seleccione brotes erectos, sanos y de crecimiento vigoroso, de arbustos madre de más de 4 años de edad, con 3–4 meses en zonas bajas y 6–8 meses en zonas altas. Descarte los brotes con botones florales o signos de plagas y enfermedades. Utilice la parte semi-leñosa, eliminando los extremos duros y blandos, y prepare esquejes de un solo nudo con una hoja y una yema axilar, de 1–1,5 pulgadas de longitud. Los esquejes deben tomarse a la sombra, colocarse en agua inmediatamente y cortarse de forma suave y en diagonal, justo por encima del nudo y a 1–1,5 pulgadas por debajo del nudo, cerca de la yema.",
    "Antes de plantar, el suelo debe humedecerse ligeramente y presionarse con suavidad. El tallo del esqueje debe sostenerse entre el pulgar y el índice e insertarse verticalmente en el suelo hasta la axila de la hoja. No se recomienda el método inclinado.",
    "En los viveros de té, el sombreado tras la plantación es fundamental para evitar el marchitamiento, las quemaduras solares y mantener la humedad. La sombra baja se proporciona con Gleichenia linearis, mientras que la sombra alta emplea esteras de fibra de coco o mallas sintéticas sostenidas por un marco de hierro de 1,8 m, lo que mejora las operaciones del vivero pese a su mayor costo. El riego depende del clima, el suelo, la edad de la planta y la sombra, siendo más frecuente en épocas secas y menos en épocas lluviosas. El exceso de riego puede provocar musgo y enfermedades. La aplicación de fertilizante debe comenzar tras el inicio del enraizamiento —6–8 semanas en zonas bajas y 10–12 semanas en zonas altas— utilizando T65 MAP o T65 DAP. Antes del trasplante, las plantas se endurecen reduciendo gradualmente el riego y la sombra a partir de los 4–6 meses, para prepararlas para las condiciones de campo.",
    "Al seleccionar terreno para nuevas plantaciones de té, son ideales las áreas onduladas y bien drenadas, con una profundidad de suelo superior a 50 cm y menos del 20 % de pedregosidad, evitando terrenos empinados, planos, erosionados o pedregosos cerca de arrozales o arroyos. La preparación del terreno comienza retirando la vegetación antigua, especialmente en zonas afectadas por la enfermedad de Poria, mediante máquinas de cabrestante, seguido de un laboreo profundo y la quema de raíces infectadas, la aplicación de dolomita a razón de 1250 kg/ha, comenzando desde la pendiente más alta. Deben seguirse prácticas de conservación del suelo, como evitar trabajar durante lluvias fuertes, preparar el terreno en bloques pequeños y plantar de inmediato para reducir la erosión. La rehabilitación del suelo se realiza cultivando pasto Guatemala o Mana durante 18–24 meses para mejorar la fertilidad, controlar plagas y enfermedades, eliminar toxinas de cultivos anteriores, mejorar la estructura del suelo y proporcionar cobertura para retener la humedad.",
    "La plantación de té debe comenzar a principios de la temporada de monzones, cortando a ras de suelo los pastos de rehabilitación y colocándolos en hileras siguiendo las curvas de nivel, con el té plantado entre las hileras de pasto originales, con un espaciado de 1,2 m × 0,6 m. Aunque la densidad teórica de plantas podría ser mayor, factores prácticos como desagües, terrazas, senderos y caminos reducen el número, por lo que debe mantenerse una densidad mínima de 11.000 plantas/ha (4.500 plantas/acre). Los hoyos o zanjas de plantación, marcados con un marco en «A» o un trazador de caminos siguiendo las curvas de nivel, deben cavarse con el tamaño recomendado y rellenarse con compost o materia orgánica 2–3 semanas antes de la plantación. Deben usarse plantas de té sanas y vigorosas de 6–12 meses, y en zonas infestadas de nematodos debe aplicarse un nematicida como Furadan o Nemacur (7 g/hoyo). Después de plantar, los recortes de pasto deben usarse como acolchado entre hileras, se deben usar estacas para sostener las plantas contra el viento, y pueden cultivarse cultivos de cobertura rastreros bajos como Desmodium ovalifolium o Stylosanthus gracilis para reducir la erosión del suelo.",
    "TRI 4049 es un cultivar de té de alto rendimiento desarrollado por el Instituto de Investigación del Té de Sri Lanka, ideal para elevaciones medias y bajas. Es una variedad de Camellia sinensis propagada vegetativamente, conocida por su crecimiento vigoroso, hojas de un verde intenso y resistencia a enfermedades comunes. TRI 4049 produce licores brillantes y aromáticos, adecuados tanto para té CTC como ortodoxo, lo que lo convierte en una opción popular para la replantación y el cultivo comercial.",
    "Unas filas más allá, esta planta señalizada es TRI 3069, otro cultivar registrado por el Instituto de Investigación del Té, sembrado junto a TRI 4049 para que el vivero pueda comparar cómo se comporta cada uno en este suelo en particular antes de plantarlos a gran escala.",
    "TRI 3055 se encuentra en las mismas filas de ensayo. Cada parcela de cultivar aquí está etiquetada y monitoreada individualmente, que es como la fábrica reúne sus propias pruebas sobre qué variedades realmente vale la pena expandir, en lugar de guiarse solo por la reputación.",
    "TRI 4053 completa las parcelas de ensayo de cultivares que se ven aquí. Mantener varias variedades registradas creciendo una junto a otra, cada una claramente etiquetada, es una práctica habitual en la finca antes de destinar un cultivar a un campo completo.",
  ],
  ja: [
    "苗床の場所は、卓越風から十分に守られている一方で日光が当たり、生育中の苗木が太陽の温かさの恩恵を受けられる場所を選ぶべきです。寒冷地では日照を最大限に確保できる場所を選び、暑い地域では強い日差しを遮る工夫が必要です。雨季に冠水しやすい低地や、乾季に霜害を受けやすい場所は避けてください。良質な水源の近くであることも必須条件です。その土地の土壌は排水性が良く、崩れやすい性質を持つべきです。湿潤な熱帯地域で排水の良い土壌は通常赤みを帯びています。表土・下層土ともにpH（酸性度）を検査する必要があります。pH4.5〜5.8であれば問題ありませんが、一般的には4.5〜5.5が最適とされています。",
    "苗床を設ける際は、土壌の運搬を最小限に抑えるため、適した繁殖場所の近くまたはその場所自体を選びます。畝の準備には平坦地または緩やかな傾斜地を選定してください。傾斜地を利用する場合は、等高線に沿って畝を作ります。各畝の幅は1.07メートル（3.5フィート）とし、長さは任意で、両側に幅30センチ（1フィート）の通路を設けます。土壌を38センチ（15インチ）の深さまで掘り、底部に排水用として5〜7センチ（2〜3インチ）厚の砂利や石を敷き、その上に土を盛って地面より15〜23センチ（6〜9インチ）高くします。ただし、砂質土壌の場合はこの排水層は不要です。畝の表面は排水溝に向けてわずかに傾斜させ、水はけを良くします。",
    "良質な育苗用土壌はpH4.5〜5.5の範囲にあり、病害虫がなく、適切な保水力と排水性を備えている必要があります。また、肥沃すぎると生育のバランスが崩れ、品質低下につながるため、過度な肥沃さは避けるべきです。使用前には必ず表土・下層土のpHを検査し、pH5.5を超える土壌は使用しないようにしてください。茶苗床に適した土壌としては、グアテマラ土またはマナ土、ジャングル土、下層土、茶園土などが挙げられます。これらの土壌は排水性が良く、有機質を含み、茶樹との相性が良いため選ばれており、健全な苗の生育を保証します。",
    "茶苗の育苗袋を準備する際は、150ゲージの透明で両端が開いたポリエチレンスリーブを使用します。標準サイズは高さ23センチ（9インチ）、幅10センチ（4インチ）です。排水性を確保するため、各スリーブの側面に20〜30個の小さな穴を開けます。土を詰める際は、硬すぎず緩すぎない程度にしっかりと詰め、湿り気を均一に保つようにします。詰める前の土が乾燥していると、密封された部分から簡単にこぼれ落ちてしまいます。また、スリーブ内の土が乾燥してしまうと、後から再び湿らせるのが非常に困難になります。詰める前に、根、硬い土塊、石などをすべて取り除いてください。",
    "茶の挿し木には、樹齢4年以上の健全な母樹から、勢いよく直立して伸びる新梢を選びます。低地では樹齢3〜4か月、高地では6〜8か月の枝を用います。花芽が付いているものや病害虫の兆候があるものは除外してください。半木質化した部分を使用し、硬い部分と柔らかい部分の両端を取り除いて、葉1枚と腋芽1つを持つ長さ1〜1.5インチの単節挿し穂を作ります。挿し穂は日陰で採取し、直ちに水に浸け、節のすぐ上と、芽の下1〜1.5インチの位置で滑らかに斜めに切断します。",
    "植え付け前には土壌を軽く湿らせ、軽く押さえておきます。挿し穂の茎を親指と人差し指で挟み、葉腋まで垂直に土中に挿し込みます。斜め挿しの方法は推奨されません。",
    "茶苗床では、植え付け後の遮光が萎凋や日焼けを防ぎ、湿度を保つために非常に重要です。低い遮光にはウラジロ（Gleichenia linearis）を用い、高い遮光にはヤシ繊維マットや合成ネットを1.8メートルの鉄製フレームで支える方法があり、コストは高くなるものの苗床の管理が向上します。灌水は気候、土壌、樹齢、遮光の程度によって異なり、乾燥した時期にはより頻繁に、雨季には控えめに行います。過剰な灌水は苔の発生や病気の原因となります。施肥は発根後——低地では6〜8週間後、高地では10〜12週間後——にT65 MAPまたはT65 DAPを用いて開始します。移植前には、4〜6か月頃から灌水と遮光を徐々に減らし、圃場条件に適応させます。",
    "新規の茶園用地を選定する際は、起伏があり排水が良く、土壌の深さが50センチ以上で岩石含有率が20%未満の土地が理想的で、急傾斜地、平坦地、侵食地、水田や小川に近い岩石の多い土地は避けるべきです。整地はまず、特にPoria病に感染した区域を対象にウィンチ機で古い植生を除去し、続いて深耕を行い、感染した根を焼却し、ドロマイトを1250kg/haの割合で施用し、最も高い斜面から作業を始めます。豪雨時の作業を避ける、小区画に分けて整地する、侵食を減らすためにすぐに植え付けを行うなど、土壌保全対策を遵守する必要があります。土壌の改良は、グアテマラ草またはマナ草を18〜24か月栽培することで行われ、肥沃度の向上、病害虫の防除、前作物からの毒素除去、土壌構造の改善、保水のための被覆材の提供に役立ちます。",
    "茶の植え付けはモンスーン期の初めに、改良用の草を地際で刈り取り、等高線に沿った畝に配置することから始めます。茶は元の草の畝の間に、1.2メートル×0.6メートルの間隔で植えられます。理論上の植栽密度はより高くなる場合がありますが、排水路、テラス、通路、道路といった実際的な要因により本数が減るため、最低でも11,000株/ha（4,500株/エーカー）の密度を維持する必要があります。植え穴または植え溝は、等高線に沿って「A」フレームや道路トレーサーを用いて印を付け、推奨サイズに掘り下げ、植え付けの2〜3週間前に堆肥や有機物を詰めます。健全で樹齢6〜12か月の丈夫な茶苗を使用し、線虫が多い地域ではフラダンやネマキュアなどの殺線虫剤（1穴あたり7g）を施用します。植え付け後は、刈った草を畝間の敷き草として利用し、支柱で苗を風から守り、土壌侵食を減らすためにデスモディウム・オバリフォリウムやスティロサンテス・グラシリスなどの低く這うカバークロップを植えることもあります。",
    "TRI 4049は、スリランカ茶業研究所が開発した高収量の茶品種で、中低標高地域に適しています。カメリア・シネンシス（Camellia sinensis）の栄養繁殖品種であり、旺盛な生育、濃い緑色の葉、そして一般的な病害への耐性で知られています。TRI 4049は明るく香り高い水色の紅茶を生み出し、CTC製法・オーソドックス製法のいずれにも適しているため、改植や商業栽培において人気の高い選択肢となっています。",
    "数列先に立てられた札にはTRI 3069とあります——これもスリランカ茶業研究所に登録された品種で、TRI 4049と並べて植えることで、この土壌でそれぞれがどう育つかを苗床で比較しています。",
    "TRI 3055も同じ試験列に植えられています。ここではすべての品種区画が個別に札を付けて記録されており、こうして工場は評判だけに頼らず、実際に拡大栽培する価値のある品種を自らのデータで見極めています。",
    "写真の試験区画の最後を飾るのがTRI 4053です。複数の登録品種をそれぞれ札を付けて並べて育てるのは、本格的に畑へ植える前にこの農園で行われている標準的なやり方です。",
  ],
  zh: [
    "苗圃场地应能很好地遮挡盛行风，同时又能充分接受阳光照射，使幼苗从阳光的温暖中受益。在气候寒冷的地区应尽量选择向阳的场地，而在炎热地区则需要一定的遮荫以避免强烈日晒。应避免选择雨季容易积水或旱季易受霜冻影响的低洼地带。附近要有良好的水源。当地土壤应具有良好的排水性和疏松性。热带湿润地区排水良好的土壤通常呈红色。表土和底土都应检测酸碱度（pH值），pH值在4.5至5.8之间均可接受，但普遍认为4.5至5.5是最理想的范围。",
    "建立苗圃时，应选择靠近或位于适宜繁殖场地的位置，以减少土壤运输量。苗床应选在平地或缓坡地。若使用坡地，苗床应沿等高线修建。每个苗床宽度应为1.07米（3.5英尺），长度不限，两侧各留一英尺宽的步道。挖掘土壤至38厘米（15英寸）深，底部铺设5-7厘米（2-3英寸）厚的碎石层以利排水，再填土使苗床高出地面15-23厘米（6-9英寸）。但沙质土壤则无需铺设排水层。苗床表面应朝排水沟方向略微倾斜，以利水流通畅。",
    "优质的育苗土壤应具有4.5至5.5的pH值，不含病虫害，具备良好的保水能力和排水性。此外，土壤肥力不宜过高，否则会导致植株生长失衡、品质下降。使用前应始终检测表土和底土的pH值，确保不使用pH值超过5.5的土壤。适合茶树苗圃的土壤包括危地马拉土或马纳土、林地土、底土和茶园土。这些土壤因排水良好、有机质含量适中且与茶树相容而被选用，可确保幼苗健康生长。",
    "制作茶苗育苗袋时，应使用规格为150号的透明双面开口聚乙烯套管。标准尺寸为高23厘米（9英寸）、宽10厘米（4英寸）。为确保排水良好，应在套管两侧打20-30个小孔。填土时应确保土壤压实但不过硬或过松，并保持湿度均匀。若填装前土壤过干，容易从密封处松脱掉出。若套管内土壤变干，之后很难重新湿润。填土前应清除土壤中所有根系、硬土块和石块。",
    "选取茶树插穗时，应从4年以上的健壮母树上选取生长旺盛的直立新梢，低地茶园选3-4个月龄的枝条，高地茶园选6-8个月龄的枝条。应剔除带花蕾或有病虫害迹象的枝条。使用半木质化部位，去除过硬和过嫩的两端，制作带一叶一腋芽、长1-1.5英寸的单节插穗。剪取应在阴凉处进行，剪后立即浸入水中，切口应平滑呈斜面——芽上方紧贴节位，芽下方1-1.5英寸处切断。",
    "种植前应将土壤轻轻湿润并压实。用拇指和食指夹住插穗茎部，垂直插入土壤直至叶腋处。不建议采用斜插法。",
    "在茶苗圃中，种植后的遮荫至关重要，可防止萎蔫和日灼，并维持湿度。低位遮荫使用海金沙（Gleichenia linearis），高位遮荫则使用椰壳纤维网或合成网，配合1.8米高的铁架支撑，虽然成本较高，但能改善苗圃管理效果。浇水频率取决于气候、土壤、植株年龄和遮荫程度，旱季应增加浇水，雨季则减少。浇水过多会导致苔藓滋生和病害。施肥应在生根后开始——低地茶园为6-8周后，高地茶园为10-12周后——使用T65 MAP或T65 DAP肥料。移栽前，应从4-6个月起逐渐减少浇水和遮荫，以使植株适应大田环境。",
    "选择新茶园用地时，应优先选择起伏、排水良好、土层深度超过50厘米且岩石含量低于20%的地块，避免选择陡坡、平地、侵蚀严重或靠近稻田、溪流的多石地块。整地首先使用绞盘机清除旧植被，尤其是感染紫纹羽病的区域，随后深翻并烧毁感染根系，施用白云石粉1250公斤/公顷，并从最高坡处开始作业。必须遵循水土保持措施，如避免在暴雨期间作业、分小块整地并尽快种植以减少水土流失。土壤修复通过种植危地马拉草或马纳草18-24个月来实现，以提高土壤肥力、防治病虫害、消除前作毒素、改善土壤结构并提供覆盖以保持水分。",
    "茶树种植应在季风季节初期开始，先齐地割除修复用草，并沿等高线行摆放，茶苗种植于原有草行之间，株行距为1.2米×0.6米。虽然理论种植密度可能更高，但受排水沟、梯田、道路等实际因素影响，应保持最低种植密度为11,000株/公顷（4,500株/英亩）。种植穴或种植沟应沿等高线用\"A\"字架或道路定线仪标记，按规定尺寸挖掘，并在种植前2-3周填入堆肥或有机质。应使用6-12个月龄、生长健壮的茶苗，在线虫多发区域应施用福拉丹（Furadan）或涕灭威（Nemacur）等杀线虫剂（每穴7克）。种植后应使用割下的草作行间覆盖物，并用支柱支撑幼苗防风，还可种植山蚂蝗或宽叶山蚂蝗等低矮匍匐覆盖作物以减少水土流失。",
    "TRI 4049是由斯里兰卡茶叶研究所培育的高产茶树品种，适合中低海拔地区种植。它是山茶（Camellia sinensis）的无性繁殖品种，以生长旺盛、叶色深绿、抗病性强而著称。TRI 4049可制成滋味明亮、香气浓郁的茶汤，适用于CTC工艺和传统工艺茶叶生产，是补植和商业种植的热门选择。",
    "几行之外，这株挂牌的茶树是TRI 3069——另一个斯里兰卡茶叶研究所登记的品种，与TRI 4049种植在一起，以便苗圃比较两者在这片土壤上的表现，再决定是否大规模种植。",
    "TRI 3055也种植在同一片试验区内。这里每一株茶苗品种都单独挂牌记录，工厂正是借此积累自己的数据，判断哪些品种真正值得推广，而不仅仅依赖名声。",
    "TRI 4053是这片试验区中的最后一个品种。让多个登记品种并排种植、逐一挂牌，是茶园在正式大面积种植某一品种之前的标准做法。",
  ],
};


// Machine-translated (Claude, 2026-08-18) generic Ceylon tea-process copy —
// same caveat as the English original (see stations.ts `verified: false`).
const PLACEHOLDER_TRANSLATIONS: Partial<Record<Exclude<LanguageCode, "en">, Record<string, StationTranslation>>> = {
  si: {
    plucking: {
      name: "නෙළීම",
      description: "සෑම කොළයක්ම ආරම්භ වන්නේ තේ වත්තෙනි, එහිදී නෙළන්නන් සෑම අංකුරයකින්ම අංකුරය සහ මෘදු කොළ දෙකක් අතින් නෙළා ගනී. මෙම සියුම් නෙළීමේ ප්‍රමිතිය නිසාය ලංකා තේවලට එහි සියුම් ලක්ෂණය ලැබෙන්නේ — රළු කොළ පඳුරේම තබා යයි.",
      keyPoints: "යොදාගන්නේ නවතම වර්ධනය පමණි. අතින් නෙළීම පඳුර ආරක්ෂා කරන අතර, රසායනික ද්‍රව්‍ය වැඩිම සාන්ද්‍රණයක් සහිත කොළ තෝරාගනී, එය මෙම තත්ත්ව මට්ටමින් යන්ත්‍ර වලට අනුකරණය කළ නොහැක.",
      duration: "කොළ දිනපතා, වසර පුරාම නෙළනු ලබන අතර, නැවුම්ව තබා ගැනීම සඳහා පැය කිහිපයක් ඇතුළත කර්මාන්තශාලාවට ගෙන යනු ලැබේ.",
    },
    withering: {
      name: "මැලවීම",
      description: "නැවුම් කොළ දිගු තට්ටු ඔස්සේ තුනී ලෙස පතුරුවා තබනු ලැබේ, එහිදී වාතය කොළ හරහා ගමන් කරමින් තෙතමනය ක්‍රමයෙන් ඉවත් කරයි. කොළය මෘදු හා නම්‍යශීලී වන අතර, පොඩි නොවී රෝල් කිරීමට සූදානම් වේ.",
      keyPoints: "මැලවීම කොළය පුරා තෙතමනය සමාන කරන අතර, ස්වාභාවික එන්සයිම වලට පසුව තේවල සුවඳ හා වර්ණය නිර්මාණය කරන රසායනික වෙනස්කම් ආරම්භ කිරීමට ඉඩ සලසයි.",
      duration: "මෙම අදියර සාමාන්‍යයෙන් තෙතමනය සහ වාතාශ්‍රය මත පදනම්ව පැය 12 සිට 17 දක්වා ගතවේ.",
    },
    rolling: {
      name: "රෝල් කිරීම",
      description: "මැලවුණු කොළ රෝල් යන්ත්‍ර හරහා ගමන් කරන අතර, එය කොළයේ සෛල බිත්ති ඇඹරී බිඳ දමා, එහි ගැබ්ව ඇති යුෂ හා තෙල් නිදහස් කරයි. මෙහිදී කොළයේ හැඩය සහ තේවල ශක්තිය සකස් වේ.",
      keyPoints: "සෛල බිත්ති බිඳ දැමීම එන්සයිම ඔක්සිජනයට නිරාවරණය කරයි, එමගින් ඔක්සිකරණය ආරම්භ කරයි. කොළ රෝල් කරන ශක්තිය සහ කාලය අවසන් තේවල ශක්තිය සහ පෙනුම හැඩගස්වයි.",
      duration: "රෝල් කිරීම සාමාන්‍යයෙන් මිනිත්තු 45 සිට පැයක් දක්වා, බොහෝ විට කිහිප වතාවක් සිදු කෙරේ.",
    },
    fermentation: {
      name: "පැසවීම (ඔක්සිකරණය)",
      description: "රෝල් කරන ලද කොළ සිසිල්, තෙත් කාමරයක පතුරුවා ඔක්සිකරණය වීමට තබනු ලැබේ. කොළ පැහැ කොළ ක්‍රමයෙන් තඹ පැහැති දුඹුරු පැහැයට හැරෙන අතර, කළු තේ හා සම්බන්ධ වර්ණය, ශරීරය සහ සුවඳ වර්ධනය කරයි.",
      keyPoints: "රසය සඳහා වඩාත්ම වැදගත් පියවර මෙයයි. කාලය නිවැරදිව තීරණය කළ යුතුය — ඉතා අඩු නම් තේ තුනී වන අතර, ඉතා වැඩි නම් එය පැතලි හා අහඹු වේ.",
      duration: "ඔක්සිකරණය සමීපව පාලනය කරනු ලබන අතර සාමාන්‍යයෙන් පැය 1.5 සිට 3 දක්වා පවතී.",
    },
    drying: {
      name: "වියලීම (පිලුස්සීම)",
      description: "ඔක්සිකරණය වූ කොළ උණුසුම් වාතාශ්‍රය සහිත වියලනවලින් ගමන් කරන අතර, ඒවා ක්ෂණිකව ඔක්සිකරණය නවත්වා තේවල ලක්ෂණය රඳවා ගනී. අනෙක් පැත්තෙන් පිටවෙන්නේ හුරුපුරුදු කළු, කරකෙළින් තේ කොළයයි.",
      keyPoints: "පිලුස්සීම නිවැරදි මොහොතේදීම රසායනික වෙනස්කම් නවත්වන අතර තෙතමනය 2-3% පමණට අඩු කරයි, එය ගබඩා කිරීම හා ප්‍රවාහනය අතරතුර තේ නැවුම්ව තබා ගැනීමට අත්‍යවශ්‍ය වේ.",
      duration: "කොළ ප්‍රවේශමෙන් පාලනය කළ උෂ්ණත්වවලදී මිනිත්තු 20ක් පමණ තුළ වියලනය හරහා ගමන් කරයි.",
    },
    sorting: {
      name: "වර්ග කිරීම හා ශ්‍රේණිගත කිරීම",
      description: "වියළි තේ, කොළයේ ප්‍රමාණය සහ හැඩය අනුව Orange Pekoe, Broken Orange Pekoe සහ Dust වැනි ශ්‍රේණි වලට වෙන් කරන පබල දැල් මාලාවක් හරහා පෙරනු ලැබේ.",
      keyPoints: "ශ්‍රේණිගත කිරීම තත්ත්වය පිළිබඳව නොව, බ්‍රුවින් කාලය හා ශක්තියට බලපාන කොළ අංශුවල ප්‍රමාණය පිළිබඳව වේ — කර්මාන්තශාලා විවිධ වෙළඳපොළවලට හා පෙරීමේ විලාසයන්ට තේ ගැලපෙන්නේ මෙසේය.",
      duration: "වර්ග කිරීම යන්ත්‍ර මත අඛණ්ඩව ක්‍රියාත්මක වන අතර, එක් කණ්ඩායමකට මිනිත්තු 30 සිට 45 දක්වා ගතවේ.",
    },
    packing: {
      name: "පැක් කිරීම",
      description: "ශ්‍රේණිගත කළ තේ බර කරනු ලබන අතර, තත්ත්වය සඳහා රස බලා, තෙතමන-සුරක්ෂිත ඇසුරුම් හෝ තේ පෙට්ටිවලට මුද්‍රා තබනු ලැබේ, මෙම කර්මාන්තශාලාවේ සිට ලොව පුරා කෝප්ප වෙත ගමන් කිරීමට සූදානම්ව.",
      keyPoints: "වායු නොගමන් ඇසුරුම තේ තෙතමනයෙන් සහ ගඳ සුවඳවලින් ආරක්ෂා කරන අතර, ක්‍රියාවලියේ සෑම පෙර අදියරකදීම ප්‍රවේශමෙන් ගොඩනගන ලද රසය රඳවා ගනී.",
      duration: "අවසාන කණ්ඩායම ශ්‍රේණිගත කරන දිනයේම පැක් කර නැව්ගත කිරීමට සූදානම් වේ.",
    },
  },
  ta: {
    plucking: {
      name: "பறித்தல்",
      description: "ஒவ்வொரு இலையும் தேயிலைத் தோட்டத்தில் தொடங்குகிறது, அங்கு பறிப்பவர்கள் ஒவ்வொரு தளிரிலிருந்தும் மொட்டையும் இரண்டு மென்மையான இலைகளையும் கையால் பறிக்கின்றனர். இந்த நுட்பமான பறிப்பு தரமே இலங்கை தேயிலைக்கு அதன் நுண்ணிய தன்மையை அளிக்கிறது — கரடுமுரடான இலைகள் புதரிலேயே விடப்படுகின்றன.",
      keyPoints: "மிக இளம் வளர்ச்சி மட்டுமே பயன்படுத்தப்படுகிறது. கையால் பறிப்பது புதரைப் பாதுகாக்கிறது, அதிக சுவை கூறுகள் கொண்ட இலைகளைத் தேர்ந்தெடுக்கிறது — இந்த தரத்தில் இயந்திரங்களால் நகலெடுக்க முடியாதது.",
      duration: "இலைகள் தினமும், ஆண்டு முழுவதும் பறிக்கப்பட்டு, புத்துணர்ச்சியாக இருக்க சில மணி நேரங்களில் தொழிற்சாலைக்கு விரைந்து கொண்டு செல்லப்படுகின்றன.",
    },
    withering: {
      name: "வதங்கல்",
      description: "புதிய இலைகள் நீண்ட தொட்டிகளில் மெல்லிய அடுக்காக பரப்பப்படுகின்றன, அதன் வழியாக காற்று செலுத்தப்பட்டு ஈரப்பதத்தை படிப்படியாக நீக்குகிறது. இலை மென்மையாகவும் நெகிழக்கூடியதாகவும் மாறி, உடையாமல் உருட்டுவதற்குத் தயாராகிறது.",
      keyPoints: "வதங்கல் இலை முழுவதும் ஈரப்பதத்தை சமன்படுத்துகிறது, மேலும் இயற்கை நொதிகள் பின்னர் தேயிலையின் நறுமணத்தையும் நிறத்தையும் உருவாக்கும் வேதியியல் மாற்றங்களைத் தொடங்க அனுமதிக்கிறது.",
      duration: "இந்த நிலை பொதுவாக ஈரப்பதம் மற்றும் காற்றோட்டத்தைப் பொறுத்து 12 முதல் 17 மணி நேரம் வரை எடுக்கும்.",
    },
    rolling: {
      name: "உருட்டுதல்",
      description: "வதங்கிய இலைகள் உருட்டும் இயந்திரங்கள் வழியாகச் செல்கின்றன, அவை இலையின் செல் சுவர்களை முறுக்கி உடைத்து, அதனுள் பூட்டப்பட்ட சாறுகளையும் எண்ணெய்களையும் வெளியிடுகின்றன. இங்குதான் இலையின் வடிவமும் தேயிலையின் வலிமையும் உருவாகின்றன.",
      keyPoints: "செல் சுவர்களை உடைப்பது நொதிகளை ஆக்ஸிஜனுக்கு வெளிப்படுத்தி, ஆக்சிஜனேற்றத்தைத் தொடங்குகிறது. இலை எவ்வளவு கடினமாகவும் நீண்ட நேரமும் உருட்டப்படுகிறது என்பது இறுதி தேயிலையின் வலிமையையும் தோற்றத்தையும் தீர்மானிக்கிறது.",
      duration: "உருட்டுதல் பொதுவாக 45 நிமிடங்கள் முதல் ஒரு மணி நேரம் வரை, பெரும்பாலும் பல முறை நடைபெறும்.",
    },
    fermentation: {
      name: "நொதித்தல் (ஆக்சிஜனேற்றம்)",
      description: "உருட்டப்பட்ட இலை குளிர்ந்த, ஈரப்பதமான அறையில் பரப்பப்பட்டு ஆக்சிஜனேற்றமடைய விடப்படுகிறது. பச்சை இலை படிப்படியாக செம்பு நிற பழுப்பு நிறமாக மாறி, கருப்பு தேயிலையுடன் தொடர்புடைய நிறம், வலிமை மற்றும் நறுமணத்தை உருவாக்குகிறது.",
      keyPoints: "சுவைக்கு இது மிக முக்கியமான படி. நேரம் துல்லியமாக மதிப்பிடப்பட வேண்டும் — மிகக் குறைவாக இருந்தால் தேயிலை மெலிதாகவும், அதிகமாக இருந்தால் தட்டையாகவும் மந்தமாகவும் மாறும்.",
      duration: "ஆக்சிஜனேற்றம் நெருக்கமாகக் கண்காணிக்கப்படுகிறது, பொதுவாக 1.5 முதல் 3 மணி நேரம் வரை நீடிக்கும்.",
    },
    drying: {
      name: "உலர்த்துதல் (சுடுதல்)",
      description: "ஆக்சிஜனேற்றமடைந்த இலை சூடான காற்று உலர்த்திகள் வழியாகச் சென்று, ஆக்சிஜனேற்றத்தை உடனடியாக நிறுத்தி தேயிலையின் தன்மையை பூட்டுகிறது. மறுமுனையில் வெளிவருவது நமக்குப் பரிச்சயமான கருப்பு, மொறுமொறுப்பான தேயிலை இலையாகும்.",
      keyPoints: "சுடுதல் சரியான நேரத்தில் வேதியியல் மாற்றங்களை நிறுத்தி, ஈரப்பதத்தை சுமார் 2-3% ஆகக் குறைக்கிறது, இது சேமிப்பு மற்றும் ஏற்றுமதியின் போது தேயிலை புத்துணர்ச்சியாக இருக்க அவசியமானது.",
      duration: "இலை கவனமாகக் கட்டுப்படுத்தப்பட்ட வெப்பநிலைகளில் சுமார் 20 நிமிடங்களில் உலர்த்தியின் வழியாகச் செல்கிறது.",
    },
    sorting: {
      name: "வகைப்படுத்தல் மற்றும் தரப்படுத்தல்",
      description: "உலர்ந்த தேயிலை, இலையின் அளவு மற்றும் வடிவத்தின் அடிப்படையில் Orange Pekoe, Broken Orange Pekoe, Dust போன்ற தரங்களாகப் பிரிக்கும் வலைச் சல்லடைகள் தொடர் வழியாக சல்லடை போடப்படுகிறது.",
      keyPoints: "தரப்படுத்தல் என்பது தரத்தைப் பற்றியதைக் காட்டிலும் இலைத் துகள் அளவைப் பற்றியது, இது காய்ச்சும் நேரத்தையும் வலிமையையும் பாதிக்கிறது — தொழிற்சாலைகள் வெவ்வேறு சந்தைகளுக்கும் காய்ச்சும் முறைகளுக்கும் தேயிலையை பொருத்துவது இப்படித்தான்.",
      duration: "வகைப்படுத்தல் இயந்திரங்களில் தொடர்ச்சியாக நடைபெறுகிறது, ஒரு தொகுதிக்கு சுமார் 30 முதல் 45 நிமிடங்கள் ஆகும்.",
    },
    packing: {
      name: "பொதிசெய்தல்",
      description: "தரப்படுத்தப்பட்ட தேயிலை நிறுக்கப்பட்டு, தரத்தைச் சரிபார்க்க சுவைபார்க்கப்பட்டு, ஈரப்பத எதிர்ப்பு பொதிகள் அல்லது தேயிலை பெட்டிகளில் மூடப்பட்டு, இந்த தொழிற்சாலையிலிருந்து உலகெங்கிலும் உள்ள கோப்பைகளுக்குச் செல்லத் தயாராக இருக்கிறது.",
      keyPoints: "காற்று புகா பொதிசெய்தல் தேயிலையை ஈரப்பதம் மற்றும் வாசனைகளிலிருந்து பாதுகாக்கிறது, செயல்முறையின் ஒவ்வொரு முந்தைய கட்டத்திலும் கவனமாக உருவாக்கப்பட்ட சுவையைப் பாதுகாக்கிறது.",
      duration: "இறுதித் தொகுதி தரப்படுத்தப்பட்ட அன்றே பொதிசெய்யப்பட்டு அனுப்புதலுக்குத் தயாராகிறது.",
    },
  },
  it: {
    plucking: {
      name: "Raccolta",
      description: "Ogni foglia inizia il suo percorso nel giardino del tè, dove i raccoglitori colgono a mano il germoglio e due foglie tenere da ogni ramoscello. Questo standard di raccolta fine è ciò che conferisce al tè di Ceylon il suo carattere delicato — le foglie più grossolane vengono lasciate sull'arbusto.",
      keyPoints: "Viene utilizzata solo la crescita più giovane. La raccolta manuale protegge l'arbusto e seleziona le foglie con la più alta concentrazione di composti aromatici, qualcosa che le macchine non possono replicare a questo livello di qualità.",
      duration: "Le foglie vengono raccolte quotidianamente, tutto l'anno, e portate rapidamente in fabbrica entro poche ore per rimanere fresche.",
    },
    withering: {
      name: "Appassimento",
      description: "Le foglie fresche vengono stese in strati sottili su lunghe vasche attraverso cui viene fatta passare aria, eliminando gradualmente l'umidità. La foglia diventa flessibile e malleabile, pronta per l'arrotolamento senza rompersi.",
      keyPoints: "L'appassimento uniforma l'umidità in tutta la foglia e permette agli enzimi naturali di avviare i cambiamenti chimici che in seguito creeranno l'aroma e il colore del tè.",
      duration: "Questa fase dura in genere dalle 12 alle 17 ore, a seconda dell'umidità e della circolazione dell'aria.",
    },
    rolling: {
      name: "Arrotolamento",
      description: "Le foglie appassite passano attraverso macchine arrotolatrici che torcono e rompono le pareti cellulari della foglia, rilasciando i succhi e gli oli racchiusi al loro interno. È qui che si formano la forma della foglia e la forza del tè.",
      keyPoints: "La rottura delle pareti cellulari espone gli enzimi all'ossigeno, avviando l'ossidazione. Quanto forte e quanto a lungo viene arrotolata la foglia determina la forza e l'aspetto finale del tè.",
      duration: "L'arrotolamento dura solitamente dai 45 minuti a un'ora, spesso in più passaggi.",
    },
    fermentation: {
      name: "Fermentazione (Ossidazione)",
      description: "La foglia arrotolata viene stesa in una stanza fresca e umida e lasciata ossidare. La foglia verde diventa gradualmente di un colore bruno ramato mentre sviluppa il colore, il corpo e l'aroma associati al tè nero.",
      keyPoints: "Questo è il passaggio più importante per il sapore. Il tempo deve essere valutato con precisione — troppo poco e il tè risulta debole, troppo e diventa piatto e opaco.",
      duration: "L'ossidazione è controllata attentamente e dura generalmente dalle 1,5 alle 3 ore.",
    },
    drying: {
      name: "Essiccazione (Tostatura)",
      description: "La foglia ossidata passa attraverso essiccatori ad aria calda che arrestano istantaneamente l'ossidazione e fissano il carattere del tè. Ciò che esce dall'altra parte è la nota foglia di tè nera e croccante.",
      keyPoints: "La tostatura ferma i cambiamenti chimici nel momento esatto e riduce l'umidità a circa il 2-3%, il che è essenziale affinché il tè rimanga fresco durante la conservazione e la spedizione.",
      duration: "La foglia passa attraverso l'essiccatore in circa 20 minuti a temperature accuratamente controllate.",
    },
    sorting: {
      name: "Selezione e Classificazione",
      description: "Il tè essiccato viene setacciato attraverso una serie di setacci a maglie che lo separano per dimensione e forma della foglia in gradi come Orange Pekoe, Broken Orange Pekoe e Dust.",
      keyPoints: "La classificazione non riguarda tanto la qualità quanto la dimensione delle particelle della foglia, che influisce sul tempo di infusione e sulla forza — è così che le fabbriche adattano il tè a diversi mercati e stili di preparazione.",
      duration: "La selezione avviene in modo continuo tramite macchinari e richiede circa 30-45 minuti per lotto.",
    },
    packing: {
      name: "Confezionamento",
      description: "Il tè classificato viene pesato, degustato per verificarne la qualità e sigillato in confezioni a prova di umidità o casse da tè, pronto per viaggiare da questa fabbrica alle tazze di tutto il mondo.",
      keyPoints: "Il confezionamento ermetico protegge il tè dall'umidità e dagli odori, preservando il sapore costruito con cura in ogni fase precedente del processo.",
      duration: "Il lotto finale viene confezionato e pronto per la spedizione lo stesso giorno in cui viene classificato.",
    },
  },
  ar: {
    plucking: {
      name: "القطاف",
      description: "تبدأ كل ورقة رحلتها في حديقة الشاي، حيث يقوم القطّافون بقطف البرعم وورقتين طريتين يدويًا من كل غصن. هذا المعيار الدقيق للقطاف هو ما يمنح شاي سيلان طابعه الرقيق — إذ تُترك الأوراق الأكثر خشونة على الشجيرة.",
      keyPoints: "لا يُستخدم سوى النمو الأحدث. القطف اليدوي يحمي الشجيرة ويختار الأوراق ذات أعلى تركيز من مركبات النكهة، وهو أمر لا يمكن للآلات محاكاته عند هذا المستوى من الجودة.",
      duration: "تُقطف الأوراق يوميًا على مدار العام، وتُنقل بسرعة إلى المصنع خلال ساعات للحفاظ على نضارتها.",
    },
    withering: {
      name: "الذبول",
      description: "تُفرش الأوراق الطازجة بطبقة رقيقة على أحواض طويلة يُمرَّر عبرها الهواء، مما يزيل الرطوبة تدريجيًا. تصبح الورقة مرنة وطيّعة، جاهزة للف دون أن تتكسر.",
      keyPoints: "يوازن الذبول الرطوبة عبر الورقة ويسمح للإنزيمات الطبيعية ببدء التغيرات الكيميائية التي ستشكل لاحقًا نكهة الشاي ولونه.",
      duration: "تستغرق هذه المرحلة عادة من 12 إلى 17 ساعة، حسب الرطوبة وتدفق الهواء.",
    },
    rolling: {
      name: "اللف",
      description: "تمر الأوراق الذابلة عبر آلات اللف التي تلوي وتكسر جدران خلايا الورقة، مما يحرر العصائر والزيوت المحبوسة بداخلها. هنا يتشكل شكل الورقة وقوة الشاي.",
      keyPoints: "كسر جدران الخلايا يعرّض الإنزيمات للأكسجين، مما يبدأ عملية الأكسدة. تحدد شدة ومدة اللف قوة الشاي النهائي ومظهره.",
      duration: "يستمر اللف عادة من 45 دقيقة إلى ساعة، وغالبًا على عدة مراحل.",
    },
    fermentation: {
      name: "التخمير (الأكسدة)",
      description: "تُفرش الأوراق الملفوفة في غرفة باردة ورطبة وتُترك لتتأكسد. تتحول الورقة الخضراء تدريجيًا إلى لون بني نحاسي مع تطور اللون والقوام والنكهة المرتبطة بالشاي الأسود.",
      keyPoints: "هذه هي الخطوة الأهم لتحديد النكهة. يجب ضبط التوقيت بدقة — فإذا كان قصيرًا جدًا يصبح الشاي خفيفًا، وإذا طال أكثر من اللازم يصبح باهتًا وباردًا.",
      duration: "تُراقَب الأكسدة عن كثب وتستمر عادة من 1.5 إلى 3 ساعات.",
    },
    drying: {
      name: "التجفيف (التحميص)",
      description: "تمر الورقة المؤكسدة عبر مجففات الهواء الساخن التي توقف الأكسدة فورًا وتحافظ على طابع الشاي. وما يخرج في النهاية هو ورقة الشاي السوداء المقرمشة المعروفة.",
      keyPoints: "يوقف التحميص التغيرات الكيميائية في اللحظة المناسبة تمامًا ويقلل الرطوبة إلى حوالي 2-3%، وهو أمر أساسي لبقاء الشاي طازجًا أثناء التخزين والشحن.",
      duration: "تمر الورقة عبر المجفف في حوالي 20 دقيقة عند درجات حرارة مضبوطة بعناية.",
    },
    sorting: {
      name: "الفرز والتصنيف",
      description: "يُغربل الشاي المجفف عبر سلسلة من المناخل التي تفصله حسب حجم وشكل الورقة إلى درجات مثل Orange Pekoe وBroken Orange Pekoe وDust.",
      keyPoints: "التصنيف لا يتعلق بالجودة بقدر ما يتعلق بحجم جزيئات الورقة، مما يؤثر على وقت التخمير والقوة — وهذه هي الطريقة التي تطابق بها المصانع الشاي مع الأسواق وأساليب التحضير المختلفة.",
      duration: "يعمل الفرز باستمرار على الآلات ويستغرق حوالي 30 إلى 45 دقيقة لكل دفعة.",
    },
    packing: {
      name: "التعبئة",
      description: "يُوزن الشاي المصنَّف ويُذاق للتحقق من جودته، ثم يُختم في عبوات مقاومة للرطوبة أو صناديق شاي، جاهزًا للانتقال من هذا المصنع إلى الأكواب حول العالم.",
      keyPoints: "التعبئة المحكمة تحمي الشاي من الرطوبة والروائح، وتحافظ على النكهة التي تشكّلت بعناية عبر كل مرحلة سابقة من العملية.",
      duration: "يُعبَّأ الدفعة النهائية وتكون جاهزة للشحن في نفس يوم تصنيفها.",
    },
  },
  ru: {
    plucking: {
      name: "Сбор листьев",
      description: "Каждый лист начинает свой путь в чайном саду, где сборщики вручную собирают почку и два нежных листа с каждого побега. Именно этот стандарт тонкого сбора придаёт цейлонскому чаю его деликатный характер — более грубые листья остаются на кусте.",
      keyPoints: "Используется только самая молодая поросль. Ручной сбор бережёт куст и позволяет отобрать листья с наивысшей концентрацией вкусовых веществ — то, что машины не могут повторить на таком уровне качества.",
      duration: "Листья собираются ежедневно круглый год и в течение нескольких часов доставляются на фабрику, чтобы сохранить свежесть.",
    },
    withering: {
      name: "Завяливание",
      description: "Свежие листья тонким слоем раскладываются на длинных желобах, через которые продувается воздух, постепенно удаляющий влагу. Лист становится мягким и податливым, готовым к скручиванию без повреждений.",
      keyPoints: "Завяливание выравнивает влажность по всему листу и позволяет природным ферментам начать химические изменения, которые впоследствии создадут аромат и цвет чая.",
      duration: "Этот этап обычно занимает от 12 до 17 часов в зависимости от влажности и циркуляции воздуха.",
    },
    rolling: {
      name: "Скручивание",
      description: "Завяленный лист проходит через скручивающие машины, которые скручивают и разрушают клеточные стенки листа, высвобождая заключённые в них соки и масла. Именно здесь формируются форма листа и крепость чая.",
      keyPoints: "Разрушение клеточных стенок открывает доступ кислорода к ферментам, запуская окисление. От силы и продолжительности скручивания зависят крепость и внешний вид готового чая.",
      duration: "Скручивание обычно длится от 45 минут до часа, часто в несколько проходов.",
    },
    fermentation: {
      name: "Ферментация (окисление)",
      description: "Скрученный лист раскладывают в прохладном влажном помещении и оставляют окисляться. Зелёный лист постепенно приобретает медно-коричневый оттенок, развивая цвет, насыщенность и аромат, характерные для чёрного чая.",
      keyPoints: "Это самый важный этап для формирования вкуса. Время нужно определять точно — если недостаточно, чай получится слабым, если слишком долго — плоским и невыразительным.",
      duration: "Окисление тщательно контролируется и обычно длится от 1,5 до 3 часов.",
    },
    drying: {
      name: "Сушка (обжарка)",
      description: "Окислённый лист проходит через сушилки горячего воздуха, которые мгновенно останавливают окисление и закрепляют характер чая. На выходе получается знакомый чёрный, хрустящий чайный лист.",
      keyPoints: "Обжарка останавливает химические изменения в нужный момент и снижает влажность примерно до 2–3%, что необходимо для сохранения свежести чая при хранении и транспортировке.",
      duration: "Лист проходит через сушилку примерно за 20 минут при тщательно контролируемой температуре.",
    },
    sorting: {
      name: "Сортировка и калибровка",
      description: "Высушенный чай просеивается через серию сит, разделяющих его по размеру и форме листа на сорта, такие как Orange Pekoe, Broken Orange Pekoe и Dust.",
      keyPoints: "Сортировка касается не столько качества, сколько размера частиц листа, что влияет на время заваривания и крепость — так фабрики подбирают чай под разные рынки и способы заваривания.",
      duration: "Сортировка проводится непрерывно на оборудовании и занимает примерно 30–45 минут на партию.",
    },
    packing: {
      name: "Упаковка",
      description: "Отсортированный чай взвешивают, дегустируют для проверки качества и запечатывают во влагонепроницаемую упаковку или чайные ящики, готовые к отправке с этой фабрики в чашки по всему миру.",
      keyPoints: "Герметичная упаковка защищает чай от влаги и посторонних запахов, сохраняя вкус, тщательно сформированный на всех предыдущих этапах процесса.",
      duration: "Финальная партия упаковывается и готова к отправке в тот же день, когда проходит сортировку.",
    },
  },
  de: {
    plucking: {
      name: "Pflücken",
      description: "Jedes Blatt beginnt im Teegarten, wo Pflückerinnen und Pflücker die Knospe und zwei zarte Blätter von jedem Trieb von Hand pflücken. Dieser feine Pflückstandard verleiht Ceylon-Tee seinen zarten Charakter — gröbere Blätter bleiben am Strauch.",
      keyPoints: "Es wird nur der jüngste Wuchs verwendet. Handpflücken schützt den Strauch und wählt die Blätter mit der höchsten Konzentration an Aromastoffen aus — etwas, das Maschinen auf diesem Qualitätsniveau nicht nachbilden können.",
      duration: "Die Blätter werden das ganze Jahr über täglich gepflückt und innerhalb weniger Stunden zur Fabrik gebracht, um frisch zu bleiben.",
    },
    withering: {
      name: "Welken",
      description: "Frische Blätter werden dünn auf langen Trögen ausgebreitet, durch die Luft geleitet wird, die stetig Feuchtigkeit entzieht. Das Blatt wird welk und geschmeidig und ist bereit zum Rollen, ohne zu zerbrechen.",
      keyPoints: "Das Welken gleicht die Feuchtigkeit im Blatt aus und lässt natürliche Enzyme die chemischen Veränderungen beginnen, die später Aroma und Farbe des Tees erzeugen.",
      duration: "Diese Phase dauert je nach Luftfeuchtigkeit und Luftzirkulation typischerweise 12 bis 17 Stunden.",
    },
    rolling: {
      name: "Rollen",
      description: "Welkes Blatt durchläuft Rollmaschinen, die die Zellwände des Blattes verdrehen und aufbrechen und so die darin eingeschlossenen Säfte und Öle freisetzen. Hier entstehen die Form des Blattes und die Kraft des Tees.",
      keyPoints: "Das Aufbrechen der Zellwände setzt Enzyme dem Sauerstoff aus und leitet die Oxidation ein. Wie stark und wie lange das Blatt gerollt wird, bestimmt Stärke und Aussehen des fertigen Tees.",
      duration: "Das Rollen dauert meist 45 Minuten bis eine Stunde, oft in mehreren Durchgängen.",
    },
    fermentation: {
      name: "Fermentation (Oxidation)",
      description: "Gerolltes Blatt wird in einem kühlen, feuchten Raum ausgebreitet und zur Oxidation stehen gelassen. Das grüne Blatt verfärbt sich allmählich kupferbraun, während sich Farbe, Körper und Aroma des Schwarztees entwickeln.",
      keyPoints: "Dies ist der wichtigste Schritt für den Geschmack. Das Timing muss präzise beurteilt werden — zu wenig, und der Tee ist dünn, zu viel, und er wird flach und fade.",
      duration: "Die Oxidation wird eng überwacht und dauert im Allgemeinen 1,5 bis 3 Stunden.",
    },
    drying: {
      name: "Trocknen (Darren)",
      description: "Das oxidierte Blatt durchläuft Heißlufttrockner, die die Oxidation sofort stoppen und den Charakter des Tees festhalten. Am anderen Ende kommt das bekannte schwarze, knackige Teeblatt heraus.",
      keyPoints: "Das Darren stoppt die chemischen Veränderungen genau im richtigen Moment und reduziert die Feuchtigkeit auf etwa 2–3 %, was für die Frischhaltung des Tees bei Lagerung und Versand unerlässlich ist.",
      duration: "Das Blatt durchläuft den Trockner bei sorgfältig kontrollierten Temperaturen in etwa 20 Minuten.",
    },
    sorting: {
      name: "Sortieren & Klassifizieren",
      description: "Getrockneter Tee wird durch eine Reihe von Siebnetzen gesiebt, die ihn nach Blattgröße und -form in Sorten wie Orange Pekoe, Broken Orange Pekoe und Dust einteilen.",
      keyPoints: "Beim Sortieren geht es weniger um Qualität als um die Partikelgröße des Blatts, die Brühzeit und Stärke beeinflusst — so passen Fabriken den Tee an verschiedene Märkte und Zubereitungsarten an.",
      duration: "Das Sortieren läuft kontinuierlich auf Maschinen und dauert etwa 30 bis 45 Minuten pro Charge.",
    },
    packing: {
      name: "Verpacken",
      description: "Sortierter Tee wird gewogen, zur Qualitätsprüfung verkostet und in feuchtigkeitsdichte Verpackungen oder Teekisten versiegelt, bereit, von dieser Fabrik aus in Tassen auf der ganzen Welt zu gelangen.",
      keyPoints: "Luftdichte Verpackung schützt den Tee vor Feuchtigkeit und Gerüchen und bewahrt den Geschmack, der in jeder vorherigen Phase des Prozesses sorgfältig aufgebaut wurde.",
      duration: "Die letzte Charge wird noch am Tag der Klassifizierung verpackt und versandbereit gemacht.",
    },
  },
  es: {
    plucking: {
      name: "Recolección",
      description: "Cada hoja comienza en el jardín de té, donde los recolectores recogen a mano el brote y dos hojas tiernas de cada brote. Este estándar de recolección fina es lo que le da al té de Ceilán su carácter delicado — las hojas más gruesas se dejan en el arbusto.",
      keyPoints: "Solo se utiliza el crecimiento más joven. La recolección manual protege el arbusto y selecciona las hojas con mayor concentración de compuestos de sabor, algo que las máquinas no pueden replicar a este nivel de calidad.",
      duration: "Las hojas se recolectan a diario, durante todo el año, y se llevan rápidamente a la fábrica en cuestión de horas para mantenerse frescas.",
    },
    withering: {
      name: "Marchitado",
      description: "Las hojas frescas se extienden en capas finas sobre largos canales por los que se hace circular aire, eliminando gradualmente la humedad. La hoja se vuelve flexible y maleable, lista para el enrollado sin quebrarse.",
      keyPoints: "El marchitado uniforma la humedad en toda la hoja y permite que las enzimas naturales comiencen los cambios químicos que más tarde crearán el aroma y el color del té.",
      duration: "Esta etapa suele durar de 12 a 17 horas, dependiendo de la humedad y la circulación de aire.",
    },
    rolling: {
      name: "Enrollado",
      description: "Las hojas marchitas pasan por máquinas enrolladoras que retuercen y rompen las paredes celulares de la hoja, liberando los jugos y aceites encerrados en su interior. Aquí es donde se forman la forma de la hoja y la fuerza del té.",
      keyPoints: "Al romper las paredes celulares, las enzimas quedan expuestas al oxígeno, iniciando la oxidación. La intensidad y duración del enrollado determinan la fuerza y el aspecto final del té.",
      duration: "El enrollado suele durar entre 45 minutos y una hora, a menudo en varias pasadas.",
    },
    fermentation: {
      name: "Fermentación (Oxidación)",
      description: "La hoja enrollada se extiende en una sala fresca y húmeda y se deja oxidar. La hoja verde se va tornando de un color cobrizo a medida que desarrolla el color, cuerpo y aroma propios del té negro.",
      keyPoints: "Este es el paso más importante para el sabor. El tiempo debe calcularse con precisión — muy poco y el té queda ligero, demasiado y se vuelve plano y sin vida.",
      duration: "La oxidación se controla estrechamente y generalmente dura entre 1,5 y 3 horas.",
    },
    drying: {
      name: "Secado (Tostado)",
      description: "La hoja oxidada pasa por secadoras de aire caliente que detienen la oxidación al instante y fijan el carácter del té. Lo que sale al otro extremo es la conocida hoja de té negra y crujiente.",
      keyPoints: "El tostado detiene los cambios químicos en el momento exacto y reduce la humedad a aproximadamente un 2-3%, algo esencial para que el té se mantenga fresco durante el almacenamiento y el transporte.",
      duration: "La hoja pasa por el secador en unos 20 minutos, a temperaturas cuidadosamente controladas.",
    },
    sorting: {
      name: "Clasificación y Graduación",
      description: "El té seco se tamiza a través de una serie de cribas de malla que lo separan por tamaño y forma de la hoja en grados como Orange Pekoe, Broken Orange Pekoe y Dust.",
      keyPoints: "La clasificación no tiene tanto que ver con la calidad como con el tamaño de la partícula de la hoja, lo que afecta el tiempo de infusión y la fuerza — así es como las fábricas ajustan el té a distintos mercados y estilos de preparación.",
      duration: "La clasificación se realiza de forma continua con maquinaria y tarda entre 30 y 45 minutos por lote.",
    },
    packing: {
      name: "Empaquetado",
      description: "El té clasificado se pesa, se cata para verificar su calidad y se sella en envases a prueba de humedad o cajas de té, listo para viajar desde esta fábrica hasta tazas de todo el mundo.",
      keyPoints: "El envasado hermético protege el té de la humedad y los olores, preservando el sabor que se construyó cuidadosamente a lo largo de cada etapa anterior del proceso.",
      duration: "El lote final se empaqueta y queda listo para su despacho el mismo día en que se clasifica.",
    },
  },
  fr: {
    plucking: {
      name: "Cueillette",
      description: "Chaque feuille commence dans le jardin de thé, où les cueilleurs prélèvent à la main le bourgeon et deux jeunes feuilles de chaque pousse. Cette norme de cueillette fine est ce qui donne au thé de Ceylan son caractère délicat — les feuilles plus grossières restent sur le buisson.",
      keyPoints: "Seule la pousse la plus jeune est utilisée. La cueillette manuelle protège le buisson et sélectionne les feuilles à la plus forte concentration de composés aromatiques, ce que les machines ne peuvent reproduire à ce niveau de qualité.",
      duration: "Les feuilles sont cueillies quotidiennement, toute l'année, et acheminées à l'usine en quelques heures pour rester fraîches.",
    },
    withering: {
      name: "Flétrissage",
      description: "Les feuilles fraîches sont étalées en fine couche sur de longs bacs à travers lesquels de l'air est aspiré, éliminant progressivement l'humidité. La feuille devient souple et malléable, prête pour le roulage sans se briser.",
      keyPoints: "Le flétrissage uniformise l'humidité dans la feuille et permet aux enzymes naturelles d'amorcer les changements chimiques qui créeront plus tard l'arôme et la couleur du thé.",
      duration: "Cette étape dure généralement de 12 à 17 heures, selon l'humidité et la circulation de l'air.",
    },
    rolling: {
      name: "Roulage",
      description: "Les feuilles flétries passent dans des machines à rouler qui tordent et brisent les parois cellulaires de la feuille, libérant les jus et huiles qui y sont enfermés. C'est là que se forment la forme de la feuille et la force du thé.",
      keyPoints: "La rupture des parois cellulaires expose les enzymes à l'oxygène, déclenchant l'oxydation. L'intensité et la durée du roulage déterminent la force et l'aspect final du thé.",
      duration: "Le roulage dure généralement de 45 minutes à une heure, souvent en plusieurs passages.",
    },
    fermentation: {
      name: "Fermentation (Oxydation)",
      description: "La feuille roulée est étalée dans une pièce fraîche et humide et laissée à oxyder. La feuille verte devient progressivement brun cuivré à mesure qu'elle développe la couleur, le corps et l'arôme associés au thé noir.",
      keyPoints: "C'est l'étape la plus importante pour la saveur. Le minutage doit être jugé avec précision — trop peu et le thé est fade, trop et il devient plat et terne.",
      duration: "L'oxydation est étroitement contrôlée et dure généralement de 1,5 à 3 heures.",
    },
    drying: {
      name: "Séchage (Torréfaction)",
      description: "La feuille oxydée passe dans des séchoirs à air chaud qui arrêtent instantanément l'oxydation et figent le caractère du thé. Ce qui en ressort est la feuille de thé noire et croustillante bien connue.",
      keyPoints: "La torréfaction arrête les changements chimiques au moment exact et réduit l'humidité à environ 2-3 %, ce qui est essentiel pour que le thé reste frais pendant le stockage et l'expédition.",
      duration: "La feuille passe dans le séchoir en environ 20 minutes, à des températures soigneusement contrôlées.",
    },
    sorting: {
      name: "Triage et Classification",
      description: "Le thé séché est tamisé à travers une série de tamis qui le séparent par taille et forme de feuille en catégories telles que Orange Pekoe, Broken Orange Pekoe et Dust.",
      keyPoints: "Le classement concerne moins la qualité que la taille des particules de feuille, ce qui affecte le temps d'infusion et la force — c'est ainsi que les usines adaptent le thé à différents marchés et styles d'infusion.",
      duration: "Le triage s'effectue en continu sur des machines et prend environ 30 à 45 minutes par lot.",
    },
    packing: {
      name: "Emballage",
      description: "Le thé classé est pesé, dégusté pour en vérifier la qualité, puis scellé dans un emballage étanche à l'humidité ou des caisses à thé, prêt à voyager de cette usine jusqu'aux tasses du monde entier.",
      keyPoints: "L'emballage hermétique protège le thé de l'humidité et des odeurs, préservant la saveur soigneusement élaborée à chaque étape précédente du processus.",
      duration: "Le lot final est emballé et prêt à être expédié le jour même de son classement.",
    },
  },
  zh: {
    plucking: {
      name: "采摘",
      description: "每一片茶叶都始于茶园，采摘工人从每根新梢上手工采摘一芽两叶。这种精细的采摘标准正是锡兰茶细腻风味的关键所在——较粗老的叶片会被留在茶树上。",
      keyPoints: "只使用最嫩的新梢。手工采摘既保护茶树，又能挑选出风味物质浓度最高的叶片，这是机器在这种品质水平上无法替代的。",
      duration: "茶叶全年每日采摘，并在数小时内送往工厂以保持新鲜。",
    },
    withering: {
      name: "萎凋",
      description: "新鲜茶叶被薄薄地摊放在长长的萎凋槽中，空气持续穿过茶叶带走水分。叶片逐渐变得柔软有韧性，可以进行揉捻而不会破碎。",
      keyPoints: "萎凋使叶片水分均匀分布，并使天然酶开始引发日后形成茶叶香气和色泽的化学变化。",
      duration: "此阶段通常需要12至17小时，具体取决于湿度和通风情况。",
    },
    rolling: {
      name: "揉捻",
      description: "萎凋后的茶叶通过揉捻机，扭转并破坏叶片的细胞壁，释放出锁在其中的汁液和精油。茶叶的外形和茶汤的浓度就在此阶段形成。",
      keyPoints: "破坏细胞壁使酶暴露于氧气中，从而引发氧化。揉捻的力度和时长决定了成品茶的浓度和外观。",
      duration: "揉捻通常持续45分钟到一小时，往往需要多次进行。",
    },
    fermentation: {
      name: "发酵（氧化）",
      description: "揉捻后的茶叶被摊放在凉爽潮湿的房间中进行氧化。绿色的叶片逐渐变成古铜色，形成红茶特有的色泽、口感和香气。",
      keyPoints: "这是决定风味最关键的一步。时间把控必须精准——氧化不足茶汤会寡淡，氧化过度则会使茶汤变得平淡无味。",
      duration: "氧化过程受到严格控制，通常持续1.5至3小时。",
    },
    drying: {
      name: "干燥（烘焙）",
      description: "氧化后的茶叶通过热风干燥机，瞬间停止氧化并锁住茶叶的特质。出来的便是我们熟悉的乌黑、干脆的茶叶。",
      keyPoints: "烘焙在恰当的时刻停止化学变化，并将水分降至约2-3%，这对茶叶在储存和运输过程中保持新鲜至关重要。",
      duration: "茶叶在精确控温下通过烘干机大约需要20分钟。",
    },
    sorting: {
      name: "分级筛选",
      description: "干燥后的茶叶经过一系列筛网筛选，按叶片大小和形状分为橙黄白毫、碎橙黄白毫、茶末等级别。",
      keyPoints: "分级主要关乎叶片颗粒大小，而非品质本身，这会影响冲泡时间和浓度——工厂借此为不同市场和冲泡方式匹配合适的茶叶。",
      duration: "分级在机器上连续进行，每批大约需要30至45分钟。",
    },
    packing: {
      name: "包装",
      description: "分级后的茶叶经过称重和品质品鉴，密封装入防潮包装或茶箱，准备从工厂运往世界各地的茶杯中。",
      keyPoints: "密封包装可防止茶叶受潮和串味，保留此前每个工序精心塑造出的风味。",
      duration: "最后一批茶叶在分级当天即可完成包装，准备发货。",
    },
  },
  ja: {
    plucking: {
      name: "摘採",
      description: "すべての茶葉は茶園から始まります。摘み手が各新梢から芽と柔らかい葉2枚を手摘みします。この繊細な摘採基準こそが、セイロンティー特有の繊細な風味を生み出します——硬い葉は木に残されます。",
      keyPoints: "最も若い新芽のみが使用されます。手摘みは茶樹を保護し、風味成分の濃度が最も高い葉を選び取ります。これはこの品質レベルでは機械には再現できません。",
      duration: "茶葉は一年を通して毎日摘まれ、鮮度を保つため数時間以内に工場へ運ばれます。",
    },
    withering: {
      name: "萎凋",
      description: "生葉は長い萎凋槽に薄く広げられ、空気が通されて水分が徐々に取り除かれます。葉は次第にしなやかになり、崩れることなく揉捻できる状態になります。",
      keyPoints: "萎凋は葉全体の水分を均一にし、天然の酵素が、後に紅茶の香りと色を生み出す化学変化を始めるきっかけとなります。",
      duration: "この工程には通常、湿度と通風にもよりますが12〜17時間かかります。",
    },
    rolling: {
      name: "揉捻",
      description: "萎凋した茶葉は揉捻機にかけられ、葉の細胞壁がねじられて破壊され、内部に閉じ込められていた液汁と油分が放出されます。ここで茶葉の形と紅茶の濃さが形作られます。",
      keyPoints: "細胞壁が破壊されることで酵素が酸素にさらされ、酸化が始まります。どれだけ強く、どれだけ長く揉むかが、最終的な紅茶の濃さと外観を決定します。",
      duration: "揉捻は通常45分から1時間ほど行われ、複数回に分けて行われることが多いです。",
    },
    fermentation: {
      name: "発酵（酸化）",
      description: "揉捻された茶葉は涼しく湿度の高い部屋に広げられ、酸化させられます。緑色の葉は次第に銅色がかった茶色に変わり、紅茶特有の色、コク、香りを発達させます。",
      keyPoints: "これは風味にとって最も重要な工程です。タイミングは正確に見極める必要があります——短すぎると水っぽくなり、長すぎると平板で鈍い味になります。",
      duration: "酸化は厳密に管理され、通常1.5〜3時間続きます。",
    },
    drying: {
      name: "乾燥（火入れ）",
      description: "酸化した茶葉は熱風乾燥機を通り、酸化を瞬時に止めて紅茶の特性を閉じ込めます。出てくるのは、おなじみの黒く、パリッとした茶葉です。",
      keyPoints: "火入れはまさに適切な瞬間に化学変化を止め、水分を約2〜3%まで減らします。これは保管・輸送中に紅茶の鮮度を保つために不可欠です。",
      duration: "茶葉は厳密に管理された温度で、約20分かけて乾燥機を通過します。",
    },
    sorting: {
      name: "選別・格付け",
      description: "乾燥した茶葉は一連の網目ふるいにかけられ、葉の大きさや形によってオレンジペコー、ブロークンオレンジペコー、ダストなどの等級に分けられます。",
      keyPoints: "格付けは品質そのものというより、葉の粒の大きさに関するもので、これが抽出時間や濃さに影響します——こうして工場は異なる市場や淹れ方に合わせて紅茶を仕分けます。",
      duration: "選別は機械で連続的に行われ、1バッチあたり約30〜45分かかります。",
    },
    packing: {
      name: "梱包",
      description: "格付けされた茶葉は計量され、品質を確認するために試飲された後、防湿包装や茶箱に密封され、この工場から世界中のカップへと旅立つ準備が整います。",
      keyPoints: "気密包装は茶葉を湿気やにおいから守り、それまでの工程で丁寧に作り上げられた風味を保ちます。",
      duration: "最終ロットは格付けされた当日のうちに梱包され、出荷準備が整います。",
    },
  },
};

export const STATION_TRANSLATIONS: Record<string, Partial<Record<LanguageCode, StationTranslation>>> = {
  nursery: Object.fromEntries(
    (Object.keys(NURSERY_REAL) as Exclude<LanguageCode, "en">[]).map((lang) => [
      lang,
      { ...NURSERY_REAL[lang], sectionBodies: NURSERY_BODIES[lang] },
    ])
  ),
};

for (const lang of Object.keys(PLACEHOLDER_TRANSLATIONS) as Exclude<LanguageCode, "en">[]) {
  for (const stationId of Object.keys(PLACEHOLDER_TRANSLATIONS[lang]!)) {
    STATION_TRANSLATIONS[stationId] ??= {};
    STATION_TRANSLATIONS[stationId][lang] = PLACEHOLDER_TRANSLATIONS[lang]![stationId];
  }
}

