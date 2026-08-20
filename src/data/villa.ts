import type { LanguageCode } from "../i18n/languages";

export interface VillaTranslation {
  name: string;
  tagline: string;
  body: string;
  comingSoon: string;
}

const VILLA_EN: VillaTranslation = {
  name: "Kurunduwaththa Villa",
  tagline: "A stay on the tea estate at Kurunduwatta, Pitigala",
  body: "Set right on the tea estate grounds, Kurunduwaththa Villa offers a place to stay surrounded by the same gardens you've just walked through. Full details on rooms, amenities, and booking are coming soon — enquire directly using the contact details below.",
  comingSoon: "Coming Soon",
};

const VILLA_TRANSLATIONS: Partial<Record<Exclude<LanguageCode, "en">, VillaTranslation>> = {
  zh: {
    name: "Kurunduwaththa Villa",
    tagline: "位于皮蒂加拉库伦杜瓦塔茶园庄园内的住宿",
    body: "库伦杜瓦塔别墅坐落在茶园庄园内，让您置身于刚刚游览过的同一片茶园之中。客房、设施及预订的详细信息即将公布——如需咨询，请直接使用下方联系方式。",
    comingSoon: "即将推出",
  },
  ja: {
    name: "Kurunduwaththa Villa",
    tagline: "ピティガラ、クルンドゥワッタの茶園内に佇む滞在先",
    body: "クルンドゥワッタ・ヴィラは茶園の敷地内にあり、先ほど巡られたのと同じ茶畑に囲まれてお過ごしいただけます。客室・設備・ご予約に関する詳細は近日公開予定です。お問い合わせは下記の連絡先まで直接お願いいたします。",
    comingSoon: "近日公開",
  },
  es: {
    name: "Kurunduwaththa Villa",
    tagline: "Una estancia en la finca de té en Kurunduwatta, Pitigala",
    body: "Ubicada justo en los terrenos de la finca de té, la Villa Kurunduwaththa ofrece un lugar para hospedarse rodeado de los mismos jardines que acaba de recorrer. Pronto se publicarán los detalles completos sobre habitaciones, comodidades y reservas — consulte directamente usando los datos de contacto a continuación.",
    comingSoon: "Próximamente",
  },
  fr: {
    name: "Kurunduwaththa Villa",
    tagline: "Un séjour sur la plantation de thé à Kurunduwatta, Pitigala",
    body: "Située directement sur le domaine de la plantation de thé, la Villa Kurunduwaththa offre un lieu de séjour entouré des mêmes jardins que vous venez de parcourir. Les détails complets sur les chambres, les équipements et les réservations seront bientôt disponibles — renseignez-vous directement grâce aux coordonnées ci-dessous.",
    comingSoon: "Bientôt disponible",
  },
  ru: {
    name: "Kurunduwaththa Villa",
    tagline: "Проживание на чайной плантации в Курундувате, Питигала",
    body: "Вилла Курундувата расположена прямо на территории чайной плантации и предлагает проживание среди тех же садов, которые вы только что прошли. Подробности о номерах, удобствах и бронировании появятся в ближайшее время — для уточнения обращайтесь напрямую по контактным данным ниже.",
    comingSoon: "Скоро открытие",
  },
  si: {
    name: "Kurunduwaththa Villa",
    tagline: "පිටිගල, කුරුඳුවත්තේ තේ වත්තේ නවාතැනක්",
    body: "කුරුඳුවත්ත විලා තේ වත්තේ භූමිය තුළම පිහිටා ඇති අතර, ඔබ මේ වන විටත් ගමන් කළ එම උයන් අතරමැදම නවාතැන් ගැනීමට අවස්ථාව සලසයි. කාමර, පහසුකම්, සහ වෙන් කර ගැනීම පිළිබඳ සම්පූර්ණ විස්තර ඉක්මනින් එකතු කරනු ලැබේ — පහත සම්බන්ධතා විස්තර භාවිතා කර සෘජුවම විමසන්න.",
    comingSoon: "ඉක්මනින්",
  },
  ar: {
    name: "Kurunduwaththa Villa",
    tagline: "إقامة في مزرعة الشاي في كورونداواتا، بيتيغالا",
    body: "تقع فيلا كورونداواثا مباشرة داخل أراضي مزرعة الشاي، وتوفر مكانًا للإقامة محاطًا بنفس الحدائق التي زرتها للتو. ستُنشر التفاصيل الكاملة حول الغرف والمرافق والحجز قريبًا — يرجى الاستفسار مباشرة باستخدام بيانات الاتصال أدناه.",
    comingSoon: "قريبًا",
  },
  it: {
    name: "Kurunduwaththa Villa",
    tagline: "Un soggiorno nella tenuta da tè a Kurunduwatta, Pitigala",
    body: "Situata proprio all'interno della tenuta da tè, Villa Kurunduwaththa offre un soggiorno circondato dagli stessi giardini che avete appena visitato. I dettagli completi su camere, servizi e prenotazioni saranno disponibili a breve — per informazioni, contattateci direttamente ai recapiti qui sotto.",
    comingSoon: "Prossimamente",
  },
  de: {
    name: "Kurunduwaththa Villa",
    tagline: "Ein Aufenthalt auf der Teeplantage in Kurunduwatta, Pitigala",
    body: "Direkt auf dem Gelände der Teeplantage gelegen, bietet die Kurunduwaththa Villa einen Aufenthalt inmitten derselben Gärten, die Sie gerade durchwandert haben. Vollständige Informationen zu Zimmern, Ausstattung und Buchung folgen in Kürze — wenden Sie sich für Anfragen direkt an die untenstehenden Kontaktdaten.",
    comingSoon: "Demnächst",
  },
  ta: {
    name: "Kurunduwaththa Villa",
    tagline: "பிட்டிகல, குருந்துவத்தையில் உள்ள தேயிலை தோட்டத்தில் தங்குமிடம்",
    body: "தேயிலை தோட்ட நிலத்திலேயே அமைந்துள்ள குருந்துவத்தை வில்லா, நீங்கள் இப்போது கடந்து வந்த அதே தோட்டங்களால் சூழப்பட்ட தங்குமிடத்தை வழங்குகிறது. அறைகள், வசதிகள், முன்பதிவு பற்றிய முழு விவரங்கள் விரைவில் சேர்க்கப்படும் — கீழே உள்ள தொடர்பு விவரங்களைப் பயன்படுத்தி நேரடியாக விசாரிக்கவும்.",
    comingSoon: "விரைவில்",
  },
};

export function localizeVilla(lang: LanguageCode): VillaTranslation {
  if (lang === "en") return VILLA_EN;
  return VILLA_TRANSLATIONS[lang] ?? VILLA_EN;
}
