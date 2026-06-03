import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Link } from '@/libs/I18nNavigation';
import { AppConfig } from '@/utils/AppConfig';

/**
 * Root layout shell for all marketing pages.
 * Renders a sticky navbar, main content area, and footer.
 * @param props Layout slot props: leftNav, centerNav, rightNav, and page children
 * @returns React.ReactNode representing the full page shell
 */
export const BaseTemplate = (props: {
  leftNav?: React.ReactNode;
  centerNav?: React.ReactNode;
  rightNav?: React.ReactNode;
  children: React.ReactNode;
}) => {
  const t = useTranslations('Footer');

  return (
    <div className="flex min-h-screen flex-col bg-white text-gray-900 antialiased">
      {/* ── Sticky Navbar ── */}
      <header className="sticky top-0 z-50 border-b border-gray-100 bg-white backdrop-blur-md">
        <div className="relative mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo / app name */}
          <div className="flex items-center gap-4 md:gap-8">
            <Link href="/" className="transition-transform hover:scale-105 active:scale-100">
              <Image
                src={AppConfig.logo}
                alt="Kiaya Taxi Logo"
                width={160}
                height={34}
                className="h-auto w-24 sm:w-32 lg:w-40"
              />
            </Link>

            {props.leftNav && (
              <nav aria-label="Left navigation">
                <ul className="hidden items-center gap-6 text-sm font-medium text-gray-600 sm:flex">
                  {props.leftNav}
                </ul>
              </nav>
            )}
          </div>

          {/* Center-side nav */}
          {props.centerNav && (
            <nav
              aria-label="Center navigation "
              className="absolute left-1/2 -translate-x-1/2 transform"
            >
              <ul className="hidden items-center gap-4 lg:gap-6 text-sm font-medium text-gray-600 sm:flex">
                {props.centerNav}
              </ul>
            </nav>
          )}

          {/* Right-side nav (auth links + locale switcher) */}
          <nav aria-label="Right navigation">
            <ul className="flex items-center gap-2 lg:gap-4 text-sm font-medium text-gray-600">
              {props.rightNav}
            </ul>
          </nav>
        </div>
      </header>

      {/* ── Page content ── */}
      <main className="flex-1">{props.children}</main>

      {/* ── Footer ── */}
      <footer className="border-t border-slate-900 bg-slate-950 text-slate-400">
        <div className="mx-auto max-w-7xl px-4 pt-16 pb-8 sm:px-6 lg:px-8 lg:py-20">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-4">
            {/* Column 1: Brand & About */}
            <div className="flex flex-col items-start gap-5">
              {/* Logo */}
              <div className="flex items-center gap-3">
                <Image
                  src="/assets/logo/kaiyaLogoWhite.svg"
                  alt="Kiaya Taxi Logo"
                  width={150}
                  height={35}
                 
                />
                
              </div>
              {/* Description */}
              <p className="max-w-xs text-sm leading-relaxed text-slate-400">{t('about_text')}</p>
              {/* Social Icons */}
              <div className="mt-2 flex items-center gap-3">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="transition-transform hover:scale-105 active:scale-95"
                >
                  <Image
                    src="/assets/icons/instagram.svg"
                    alt="Instagram"
                    width={36}
                    height={36}
                    className="h-9 w-9 rounded-full shadow-sm"
                  />
                </a>

                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="transition-transform hover:scale-105 active:scale-95"
                >
                  <Image
                    src="/assets/icons/linkedin.svg"
                    alt="LinkedIn"
                    width={36}
                    height={36}
                    className="h-9 w-9 rounded-full shadow-sm"
                  />
                </a>

                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook"
                  className="transition-transform hover:scale-105 active:scale-95"
                >
                  <Image
                    src="/assets/icons/facebook.svg"
                    alt="Facebook"
                    width={36}
                    height={36}
                    className="h-9 w-9 rounded-full shadow-sm"
                  />
                </a>
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div className="flex flex-col items-start gap-5">
              <h3 className="text-xs font-bold tracking-widest text-white uppercase">
                {t('heading_quick_links')}
              </h3>
              <ul className="flex flex-col items-start gap-3 text-sm">
                <li>
                  <Link
                    href="/#services"
                    className="group flex items-center gap-2 text-slate-400 transition-colors hover:text-white"
                  >
                    <span className="text-slate-600 transition-colors group-hover:text-white">
                      &gt;
                    </span>
                    {t('link_services')}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#about"
                    className="group flex items-center gap-2 text-slate-400 transition-colors hover:text-white"
                  >
                    <span className="text-slate-600 transition-colors group-hover:text-white">
                      &gt;
                    </span>
                    {t('link_about')}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#contact"
                    className="group flex items-center gap-2 text-slate-400 transition-colors hover:text-white"
                  >
                    <span className="text-slate-600 transition-colors group-hover:text-white">
                      &gt;
                    </span>
                    {t('link_contact')}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Legal */}
            <div className="flex flex-col items-start gap-5">
              <h3 className="text-xs font-bold tracking-widest text-white uppercase">
                {t('heading_legal')}
              </h3>
              <ul className="flex flex-col items-start gap-3 text-sm">
                <li>
                  <Link
                    href="/privacy"
                    className="group flex items-center gap-2 text-slate-400 transition-colors hover:text-white"
                  >
                    <span className="text-slate-600 transition-colors group-hover:text-white">
                      &gt;
                    </span>
                    {t('link_privacy')}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms"
                    className="group flex items-center gap-2 text-slate-400 transition-colors hover:text-white"
                  >
                    <span className="text-slate-600 transition-colors group-hover:text-white">
                      &gt;
                    </span>
                    {t('link_terms')}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/disclosure"
                    className="group flex items-center gap-2 text-slate-400 transition-colors hover:text-white"
                  >
                    <span className="text-slate-600 transition-colors group-hover:text-white">
                      &gt;
                    </span>
                    {t('link_disclosure')}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 4: Contact */}
            <div className="flex flex-col items-start gap-5">
              <h3 className="text-xs font-bold tracking-widest text-white uppercase">
                {t('heading_contact')}
              </h3>
              <ul className="flex flex-col items-start gap-3.5 text-sm text-slate-400">
                <li className="flex items-center gap-3">
                  <svg
                    className="mt-0.5 h-4 w-4 shrink-0 text-slate-500"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <a
                    href={`tel:${t('contact_phone').replaceAll(/\s+/gu, '')}`}
                    className="transition-colors hover:text-white"
                  >
                    {t('contact_phone')}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <svg
                    className="mt-0.5 h-4 w-4 shrink-0 text-slate-500"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                  <a
                    href={`mailto:${t('contact_email')}`}
                    className="break-all transition-colors hover:text-white"
                  >
                    {t('contact_email')}
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <svg
                    className="mt-0.5 h-4 w-4 shrink-0 text-slate-500"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <span>{t('contact_address')}</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom border copyright bar */}
          <div className="mt-8 border-t border-slate-800 pt-8 flex flex-col  items-center justify-center gap-3 text-xs text-slate-500">
            <span>
              © {new Date().getFullYear()}{' '}
              <span className="font-semibold text-slate-400">{AppConfig.name}</span>. All rights
              reserved.
            </span>

            {/* WhatsApp */}
            <a
              href="https://wa.me/818082938862"
              target="_blank"
              rel="noreferrer"
              aria-label="Chat on WhatsApp"
              className="flex items-center gap-2 text-slate-400 transition-opacity hover:opacity-80"
            >
              {/* Branded WhatsApp icon */}
              <svg
                className="h-5 w-5 shrink-0"
                viewBox="0 0 24 24"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Green circle background */}
                <circle cx="12" cy="12" r="12" fill="#25D366" />
                {/* White WhatsApp handset / bubble mark */}
                <path
                  fill="#fff"
                  d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347Zm-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884Zm8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"
                />
              </svg>
              <span>+81 80-8293-8862</span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};
