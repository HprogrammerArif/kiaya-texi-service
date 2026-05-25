import type { Metadata } from 'next';
import Image from 'next/image';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Features } from '@/components/Features';
import { TravelOptions } from '@/components/TravelOptions';
import { Link } from '@/libs/I18nNavigation';

type IndexPageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata(props: IndexPageProps): Promise<Metadata> {
  const { locale } = await props.params;
  const t = await getTranslations({ locale, namespace: 'Index' });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

export default async function IndexPage(props: IndexPageProps) {
  const { locale } = await props.params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'Index' });

  const features = [
    {
      icon: '/assets/icons/airplane.svg',
      title: t('feature_1_title'),
      description: t('feature_1_description'),
    },
    {
      icon: '/assets/icons/hotel.svg',
      title: t('feature_2_title'),
      description: t('feature_2_description'),
    },
    {
      icon: '/assets/icons/location.svg',
      title: t('feature_3_title'),
      description: t('feature_3_description'),
    },
    {
      icon: '/assets/icons/stopwatch.svg',
      title: t('feature_4_title'),
      description: t('feature_4_description'),
    },
  ] as const;

  const travelOptions = [
    {
      icon: '/assets/icons/planeIcon.svg',
      title: t('travel_option_1_title'),
      description: t('travel_option_1_description'),
      bullets: [
        t('travel_option_1_bullet_1'),
        t('travel_option_1_bullet_2'),
        t('travel_option_1_bullet_3'),
      ],
    },
    {
      icon: '/assets/icons/hotelIcon.svg',
      title: t('travel_option_2_title'),
      description: t('travel_option_2_description'),
      bullets: [
        t('travel_option_2_bullet_1'),
        t('travel_option_2_bullet_2'),
        t('travel_option_2_bullet_3'),
      ],
    },
    {
      icon: '/assets/icons/pointIcon.svg',
      title: t('travel_option_3_title'),
      description: t('travel_option_3_description'),
      bullets: [
        t('travel_option_3_bullet_1'),
        t('travel_option_3_bullet_2'),
        t('travel_option_3_bullet_3'),
      ],
    },
    {
      icon: '/assets/icons/fixIcon.svg',
      title: t('travel_option_4_title'),
      description: t('travel_option_4_description'),
      bullets: [
        t('travel_option_4_bullet_1'),
        t('travel_option_4_bullet_2'),
        t('travel_option_4_bullet_3'),
      ],
    },
  ] as const;

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden py-24 sm:py-32">
        {/* Background Image Container */}
        <div className="absolute inset-0">
          <Image
            src="/assets/images/bacggroundOverlayImage.jpg"
            alt="Premium Private Travel Background"
            fill
            priority
            className="object-cover object-center"
          />
          {/* Dark overlay to ensure high contrast and readability */}
          <div className="absolute inset-0 bg-black/60 sm:bg-black/55" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          {/* Headline */}
          <h1 className="mx-auto max-w-4xl text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl leading-tight whitespace-pre-line">
            {t('hero_title')}
          </h1>

          {/* CTAs */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/#bookings"
              className="w-full sm:w-auto rounded-xl bg-white px-8 py-3.5 text-base font-bold text-gray-900 shadow-sm transition-all hover:bg-gray-100 hover:shadow-md hover:scale-105 active:scale-95 text-center"
            >
              {t('hero_cta_primary')}
            </Link>
            <Link
              href="/#contact"
              className="w-full sm:w-auto rounded-xl border border-white bg-transparent px-8 py-3.5 text-base font-bold text-white shadow-sm transition-all hover:bg-white/10 hover:shadow-md hover:scale-105 active:scale-95 text-center"
            >
              {t('hero_cta_secondary')}
            </Link>
          </div>

          {/* Features Horizontal Pill Bar */}
          <div className="mt-16 sm:mt-24 flex justify-center">
            <div className="inline-flex flex-wrap items-center justify-center gap-x-8 gap-y-3 rounded-2xl sm:rounded-full bg-black/30 border border-white/10 px-6 py-3.5 text-sm font-medium text-white backdrop-blur-md">
              <span className="flex items-center gap-1.5 whitespace-nowrap">
                <span className="text-white font-bold">✓</span>
                {t('hero_feature_1')}
              </span>
              <span className="flex items-center gap-1.5 whitespace-nowrap">
                <span className="text-white font-bold">✓</span>
                {t('hero_feature_2')}
              </span>
              <span className="flex items-center gap-1.5 whitespace-nowrap">
                <span className="text-white font-bold">✓</span>
                {t('hero_feature_3')}
              </span>
              <span className="flex items-center gap-1.5 whitespace-nowrap">
                <span className="text-white font-bold">✓</span>
                {t('hero_feature_4')}
              </span>
              <span className="flex items-center gap-1.5 whitespace-nowrap">
                <span className="text-white font-bold">✓</span>
                {t('hero_feature_5')}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Features ── */}
      <Features title={t('features_title')} items={features} />

      {/* ── TRAVEL OPTIONS ── */}
      <TravelOptions title={t('travel_options_title')} items={travelOptions} />
    </>
  );
}
