import type { Metadata, Viewport } from 'next';
import { hasLocale, NextIntlClientProvider } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { Inter } from 'next/font/google';
import { notFound } from 'next/navigation';
import { routing } from '@/libs/I18nRouting';
import { getBaseUrl } from '@/utils/Helpers';
import '@/styles/global.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

const baseUrl = getBaseUrl();

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  applicationName: 'Kaiya',
  authors: [{ name: 'Kaiya, Inc.' }],
  icons: [
    {
      rel: 'apple-touch-icon',
      url: '/apple-touch-icon.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      url: '/favicon-32x32.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      url: '/favicon-16x16.png',
    },
    {
      rel: 'icon',
      url: '/favicon.ico',
    },
  ],
  openGraph: {
    type: 'website',
    siteName: 'Kaiya',
    locale: 'en',
    images: [
      {
        url: '/assets/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Kaiya — Premium Private Travel in Hokkaido',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/assets/images/og-image.png'],
  },
  alternates: {
    canonical: baseUrl,
    languages: Object.fromEntries(
      routing.locales.map((locale) => [
        locale,
        locale === routing.defaultLocale
          ? baseUrl
          : `${baseUrl}/${locale}`,
      ]),
    ),
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function RootLayout(props: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await props.params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  return (
    <html lang={locale}>
      <body className={inter.className} suppressHydrationWarning>
        <NextIntlClientProvider>{props.children}</NextIntlClientProvider>
      </body>
    </html>
  );
}
