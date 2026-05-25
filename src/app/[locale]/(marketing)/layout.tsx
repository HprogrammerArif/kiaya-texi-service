import { getTranslations, setRequestLocale } from 'next-intl/server';
import { LocaleSwitcher } from '@/components/LocaleSwitcher';
import { Link } from '@/libs/I18nNavigation';
import { BaseTemplate } from '@/templates/BaseTemplate';

export default async function Layout(props: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await props.params;
  setRequestLocale(locale);
  const t = await getTranslations({
    locale,
    namespace: 'RootLayout',
  });

  return (
    <BaseTemplate
      centerNav={
        <>
          <li>
            <Link
              href="/"
              className="relative inline-block py-1.5 text-sm font-semibold text-slate-600 transition-colors duration-200 hover:text-slate-900 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-center after:scale-x-0 after:bg-slate-900 after:transition-transform after:duration-300 after:ease-out hover:after:scale-x-100"
            >
              {t('home_link')}
            </Link>
          </li>

          <li>
            <Link
              href="/#services"
              className="relative inline-block py-1.5 text-sm font-semibold text-slate-600 transition-colors duration-200 hover:text-slate-900 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-center after:scale-x-0 after:bg-slate-900 after:transition-transform after:duration-300 after:ease-out hover:after:scale-x-100"
            >
              {t('services_link')}
            </Link>
          </li>

          <li>
            <Link
              href="/#bookings"
              className="relative inline-block py-1.5 text-sm font-semibold text-slate-600 transition-colors duration-200 hover:text-slate-900 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-center after:scale-x-0 after:bg-slate-900 after:transition-transform after:duration-300 after:ease-out hover:after:scale-x-100"
            >
              {t('bookings_link')}
            </Link>
          </li>

          <li>
            <Link
              href="/#about"
              className="relative inline-block py-1.5 text-sm font-semibold text-slate-600 transition-colors duration-200 hover:text-slate-900 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-center after:scale-x-0 after:bg-slate-900 after:transition-transform after:duration-300 after:ease-out hover:after:scale-x-100"
            >
              {t('about_link')}
            </Link>
          </li>

          <li>
            <Link
              href="/#contact"
              className="relative inline-block py-1.5 text-sm font-semibold text-slate-600 transition-colors duration-200 hover:text-slate-900 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-center after:scale-x-0 after:bg-slate-900 after:transition-transform after:duration-300 after:ease-out hover:after:scale-x-100"
            >
              {t('contact_link')}
            </Link>
          </li>
        </>
      }

      rightNav={
        <>
          <li>
            <Link
              href="/#bookings"
              className="inline-block rounded-full bg-slate-950 px-5 py-2 text-sm font-bold text-white transition-all hover:bg-slate-800 active:scale-95 shadow-xs"
            >
              {t('book_now_link')}
            </Link>
          </li>

          <li>
            <LocaleSwitcher />
          </li>
        </>
      }
    >
      {props.children}
    </BaseTemplate>
  );
}
