import type { LocalePrefixMode } from 'next-intl/routing';

/** Locale prefix strategy for next-intl routing. */
const localePrefix: LocalePrefixMode = 'as-needed';

// FIXME: Replace 'MyApp' with your project name before shipping
export const AppConfig = {
  name: 'Kaiya Taxi',
  logo: '/assets/logo/kaiyaLogoBlack.svg',
  i18n: {
    locales: ['en', 'ja', 'fr', 'zh', 'ko', 'th', 'vi'],
    defaultLocale: 'en',
    localePrefix,
  },
  /** Toggle marketing features without touching component code. */
  features: {
    /** Booking guide pill + modal + auto-popup toast. Temporarily disabled; set to true to re-enable. */
    bookingGuide: false,
    /** Copyable promo code strip shown above the hero booking form. */
    promoCode: true,
  },
  /** Voucher code customers enter in the "Voucher Code" field at the booking payment step. */
  promoCode: 'WONDERFULKAIYA',
};
