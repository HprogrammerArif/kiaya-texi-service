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
};
