import { useTranslations } from 'next-intl';

import { Link } from '@/libs/I18nNavigation';
import { AppConfig } from '@/utils/AppConfig';

/**
 * Root layout shell for all marketing pages.
 * Renders a sticky navbar, main content area, and footer.
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
      <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/60 backdrop-blur-md">
        <div className="relative mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo / app name */}
          <div className="flex items-center gap-8">
            <span className="text-lg font-extrabold tracking-wider text-slate-950 uppercase">
              {AppConfig.name}
            </span>
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
            <nav aria-label="Center navigation" className="absolute left-1/2 -translate-x-1/2 transform">
              <ul className="hidden items-center gap-6 text-sm font-medium text-gray-600 sm:flex">
                {props.centerNav}
              </ul>
            </nav>
          )}

          {/* Right-side nav (auth links + locale switcher) */}
          <nav aria-label="Right navigation">
            <ul className="flex items-center gap-4 text-sm font-medium text-gray-600">
              {props.rightNav}
            </ul>
          </nav>
        </div>
      </header>

      {/* ── Page content ── */}
      <main className="flex-1">{props.children}</main>

      {/* ── Footer ── */}
      <footer className="border-t border-slate-900 bg-slate-950 text-slate-400">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-4">
            {/* Column 1: Brand & About */}
            <div className="flex flex-col gap-5">
              {/* Logo */}
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-slate-950 shadow-xs">
                  <svg
                    className="h-6 w-6 text-slate-950"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
                    <circle cx="7" cy="17" r="2" />
                    <path d="M9 17h6" />
                    <circle cx="17" cy="17" r="2" />
                  </svg>
                </div>
                <span className="text-xl font-bold tracking-tight text-white lowercase">
                  kiaya taxi
                </span>
              </div>
              {/* Description */}
              <p className="max-w-xs text-sm leading-relaxed text-slate-400">
                {t('about_text')}
              </p>
              {/* Social Icons */}
              <div className="mt-2 flex items-center gap-3">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-tr from-amber-400 via-pink-500 to-purple-600 text-white transition-transform hover:scale-105 active:scale-95 shadow-sm"
                >
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </a>

                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-[#0a66c2] text-white transition-transform hover:scale-105 active:scale-95 shadow-sm"
                >
                  <svg className="h-4.5 w-4.5 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>

                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-[#1877f2] text-white transition-transform hover:scale-105 active:scale-95 shadow-sm"
                >
                  <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div className="flex flex-col gap-5">
              <h3 className="text-xs font-bold tracking-widest text-white uppercase">
                {t('heading_quick_links')}
              </h3>
              <ul className="flex flex-col gap-3 text-sm">
                <li>
                  <Link
                    href="/#services"
                    className="group flex items-center gap-2 text-slate-400 transition-colors hover:text-white"
                  >
                    <span className="text-slate-600 transition-colors group-hover:text-white">&gt;</span>
                    {t('link_services')}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#about"
                    className="group flex items-center gap-2 text-slate-400 transition-colors hover:text-white"
                  >
                    <span className="text-slate-600 transition-colors group-hover:text-white">&gt;</span>
                    {t('link_about')}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#contact"
                    className="group flex items-center gap-2 text-slate-400 transition-colors hover:text-white"
                  >
                    <span className="text-slate-600 transition-colors group-hover:text-white">&gt;</span>
                    {t('link_contact')}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Legal */}
            <div className="flex flex-col gap-5">
              <h3 className="text-xs font-bold tracking-widest text-white uppercase">
                {t('heading_legal')}
              </h3>
              <ul className="flex flex-col gap-3 text-sm">
                <li>
                  <Link
                    href="/privacy"
                    className="group flex items-center gap-2 text-slate-400 transition-colors hover:text-white"
                  >
                    <span className="text-slate-600 transition-colors group-hover:text-white">&gt;</span>
                    {t('link_privacy')}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms"
                    className="group flex items-center gap-2 text-slate-400 transition-colors hover:text-white"
                  >
                    <span className="text-slate-600 transition-colors group-hover:text-white">&gt;</span>
                    {t('link_terms')}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/disclosure"
                    className="group flex items-center gap-2 text-slate-400 transition-colors hover:text-white"
                  >
                    <span className="text-slate-600 transition-colors group-hover:text-white">&gt;</span>
                    {t('link_disclosure')}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 4: Contact */}
            <div className="flex flex-col gap-5">
              <h3 className="text-xs font-bold tracking-widest text-white uppercase">
                {t('heading_contact')}
              </h3>
              <ul className="flex flex-col gap-3.5 text-sm text-slate-400">
                <li className="flex items-start gap-3">
                  <svg
                    className="mt-0.5 h-4 w-4 text-slate-500 shrink-0"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <a href={`tel:${t('contact_phone').replace(/\s+/g, '')}`} className="hover:text-white transition-colors">
                    {t('contact_phone')}
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <svg
                    className="mt-0.5 h-4 w-4 text-slate-500 shrink-0"
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
                  <a href={`mailto:${t('contact_email')}`} className="hover:text-white transition-colors break-all">
                    {t('contact_email')}
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <svg
                    className="mt-0.5 h-4 w-4 text-slate-500 shrink-0"
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
          <div className="mt-12 border-t border-slate-900 pt-6 text-center text-xs text-slate-500">
            <span>
              © {new Date().getFullYear()} <span className="font-semibold text-slate-400">{AppConfig.name}</span>. All rights reserved.
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};
