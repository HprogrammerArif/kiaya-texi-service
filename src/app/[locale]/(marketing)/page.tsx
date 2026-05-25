import type { Metadata } from 'next';
import Image from 'next/image';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { AboutKaiya } from '@/components/AboutKaiya';
import { AccessibilitySpecialRequests } from '@/components/AccessibilitySpecialRequests';
import { AirportPickup } from '@/components/AirportPickup';
import { BeforeYouBook } from '@/components/BeforeYouBook';
import { ChangesDelaysWaitingTime } from '@/components/ChangesDelaysWaitingTime';
import { CoreValues } from '@/components/CoreValues';
import { FaqSection } from '@/components/FaqSection';
import { Features } from '@/components/Features';
import { HowItWorks } from '@/components/HowItWorks';
import { SafetyServiceStandards } from '@/components/SafetyServiceStandards';
import { TravelOptions } from '@/components/TravelOptions';
import { VehicleJourney } from '@/components/VehicleJourney';
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

  const vehicleJourney = [
    {
      image: '/assets/images/Compact-Sedan.jpg',
      title: t('vehicle_journey_compact_sedan_title'),
      subtitle: t('vehicle_journey_compact_sedan_subtitle'),
      description: t('vehicle_journey_compact_sedan_description'),
      bullets: [
        t('vehicle_journey_compact_sedan_bullet_1'),
        t('vehicle_journey_compact_sedan_bullet_2'),
        t('vehicle_journey_compact_sedan_bullet_3'),
        t('vehicle_journey_compact_sedan_bullet_4'),
      ],
      imageSide: 'left',
    },
    {
      image: '/assets/images/Mini-Van.png',
      title: t('vehicle_journey_mini_van_title'),
      subtitle: t('vehicle_journey_mini_van_subtitle'),
      description: t('vehicle_journey_mini_van_description'),
      bullets: [
        t('vehicle_journey_mini_van_bullet_1'),
        t('vehicle_journey_mini_van_bullet_2'),
        t('vehicle_journey_mini_van_bullet_3'),
        t('vehicle_journey_mini_van_bullet_4'),
      ],
      imageSide: 'right',
    },
    {
      image: '/assets/images/Comfort-Van.jpg',
      title: t('vehicle_journey_comfort_van_title'),
      subtitle: t('vehicle_journey_comfort_van_subtitle'),
      description: t('vehicle_journey_comfort_van_description'),
      bullets: [
        t('vehicle_journey_comfort_van_bullet_1'),
        t('vehicle_journey_comfort_van_bullet_2'),
        t('vehicle_journey_comfort_van_bullet_3'),
        t('vehicle_journey_comfort_van_bullet_4'),
      ],
      imageSide: 'left',
    },
    {
      image: '/assets/images/Premium-SUV.jpg',
      title: t('vehicle_journey_premium_suv_title'),
      subtitle: t('vehicle_journey_premium_suv_subtitle'),
      description: t('vehicle_journey_premium_suv_description'),
      bullets: [
        t('vehicle_journey_premium_suv_bullet_1'),
        t('vehicle_journey_premium_suv_bullet_2'),
        t('vehicle_journey_premium_suv_bullet_3'),
        t('vehicle_journey_premium_suv_bullet_4'),
      ],
      imageSide: 'right',
    },
  ] as const;

  const howItWorksSteps = [
    {
      title: t('how_it_works_step_1_title'),
      description: t('how_it_works_step_1_description'),
    },
    {
      title: t('how_it_works_step_2_title'),
      description: t('how_it_works_step_2_description'),
    },
    {
      title: t('how_it_works_step_3_title'),
      description: t('how_it_works_step_3_description'),
    },
    {
      title: t('how_it_works_step_4_title'),
      description: t('how_it_works_step_4_description'),
    },
    {
      title: t('how_it_works_step_5_title'),
      description: t('how_it_works_step_5_description'),
    },
  ] as const;

  const airportPickupItems = [
    {
      icon: 'tracking',
      title: t('airport_pickup_tracking_title'),
      description: t('airport_pickup_tracking_description'),
    },
    {
      icon: 'driver',
      title: t('airport_pickup_meeting_title'),
      description: t('airport_pickup_meeting_description'),
    },
    {
      icon: 'luggage',
      title: t('airport_pickup_luggage_title'),
      description: t('airport_pickup_luggage_description'),
    },
  ] as const;

  const beforeYouBookCards = [
    {
      icon: 'pricing',
      title: t('before_you_book_pricing_title'),
      description: t('before_you_book_pricing_description'),
    },
    {
      icon: 'included',
      title: t('before_you_book_included_title'),
      description: t('before_you_book_included_description'),
      items: [
        t('before_you_book_included_item_1'),
        t('before_you_book_included_item_2'),
        t('before_you_book_included_item_3'),
        t('before_you_book_included_item_4'),
        t('before_you_book_included_item_5'),
      ],
      itemStyle: 'check',
    },
    {
      icon: 'extra',
      title: t('before_you_book_extra_title'),
      description: t('before_you_book_extra_description'),
      items: [
        t('before_you_book_extra_item_1'),
        t('before_you_book_extra_item_2'),
        t('before_you_book_extra_item_3'),
        t('before_you_book_extra_item_4'),
      ],
      itemStyle: 'bullet',
    },
    {
      icon: 'transparency',
      title: t('before_you_book_transparency_title'),
      description: t('before_you_book_transparency_description'),
    },
  ] as const;

  const beforeYouBookPoints = [
    {
      title: t('before_you_book_point_transparent_title'),
      description: t('before_you_book_point_transparent_description'),
    },
    {
      title: t('before_you_book_point_flexible_title'),
      description: t('before_you_book_point_flexible_description'),
    },
    {
      title: t('before_you_book_point_secure_title'),
      description: t('before_you_book_point_secure_description'),
    },
  ] as const;

  const changesDelaysWaitingTimeCards = [
    {
      icon: 'waiting',
      title: t('changes_delays_waiting_time_included_title'),
      description: t('changes_delays_waiting_time_included_description'),
    },
    {
      icon: 'beyond',
      title: t('changes_delays_waiting_time_beyond_title'),
      description: t('changes_delays_waiting_time_beyond_description'),
    },
    {
      icon: 'modify',
      title: t('changes_delays_waiting_time_modify_title'),
      description: t('changes_delays_waiting_time_modify_description'),
    },
    {
      icon: 'cancellation',
      title: t('changes_delays_waiting_time_cancellations_title'),
      description: t('changes_delays_waiting_time_cancellations_description'),
    },
  ] as const;

  const accessibilitySpecialRequestsCards = [
    {
      icon: 'childSeat',
      title: t('accessibility_special_requests_child_seats_title'),
      description: t('accessibility_special_requests_child_seats_description'),
    },
    {
      icon: 'wheelchair',
      title: t('accessibility_special_requests_wheelchair_title'),
      description: t('accessibility_special_requests_wheelchair_description'),
    },
    {
      icon: 'pet',
      title: t('accessibility_special_requests_pet_title'),
      description: t('accessibility_special_requests_pet_description'),
    },
    {
      icon: 'language',
      title: t('accessibility_special_requests_language_title'),
      description: t('accessibility_special_requests_language_description'),
    },
  ] as const;

  const safetyServiceStandardsCards = [
    {
      icon: 'professionalDriver',
      title: t('safety_service_standards_driver_title'),
      description: t('safety_service_standards_driver_description'),
    },
    {
      icon: 'maintenance',
      title: t('safety_service_standards_maintenance_title'),
      description: t('safety_service_standards_maintenance_description'),
    },
    {
      icon: 'compliance',
      title: t('safety_service_standards_compliance_title'),
      description: t('safety_service_standards_compliance_description'),
    },
    {
      icon: 'privacy',
      title: t('safety_service_standards_privacy_title'),
      description: t('safety_service_standards_privacy_description'),
    },
  ] as const;

  const faqCategories = [
    {
      id: 'all',
      label: t('faq_category_all'),
    },
    {
      id: 'booking',
      label: t('faq_category_booking'),
    },
    {
      id: 'airport',
      label: t('faq_category_airport'),
    },
    {
      id: 'policy',
      label: t('faq_category_policy'),
    },
    {
      id: 'service',
      label: t('faq_category_service'),
    },
  ] as const;

  const faqItems = [
    {
      id: 'book-transfer',
      category: 'booking',
      question: t('faq_book_transfer_question'),
      answer: t('faq_book_transfer_answer'),
    },
    {
      id: 'hourly-charter',
      category: 'service',
      question: t('faq_hourly_charter_question'),
      answer: t('faq_hourly_charter_answer'),
    },
    {
      id: 'airport-pickup',
      category: 'airport',
      question: t('faq_airport_pickup_question'),
      answer: t('faq_airport_pickup_answer'),
    },
    {
      id: 'flight-delayed',
      category: 'airport',
      question: t('faq_flight_delayed_question'),
      answer: t('faq_flight_delayed_answer'),
    },
    {
      id: 'cancellation-policy',
      category: 'policy',
      question: t('faq_cancellation_policy_question'),
      answer: t('faq_cancellation_policy_answer'),
    },
    {
      id: 'booking-changes',
      category: 'booking',
      question: t('faq_booking_changes_question'),
      answer: t('faq_booking_changes_answer'),
    },
    {
      id: 'child-seats',
      category: 'service',
      question: t('faq_child_seats_question'),
      answer: t('faq_child_seats_answer'),
    },
    {
      id: 'payment-methods',
      category: 'policy',
      question: t('faq_payment_methods_question'),
      answer: t('faq_payment_methods_answer'),
    },
  ] as const;

  const aboutKaiyaParagraphs = [
    t('about_kaiya_paragraph_1'),
    t('about_kaiya_paragraph_2'),
  ] as const;

  const coreValues = [
    {
      icon: '🎯',
      title: t('core_values_philosophy_title'),
      description: t('core_values_philosophy_description'),
    },
    {
      icon: '⚡',
      title: t('core_values_reliability_title'),
      description: t('core_values_reliability_description'),
    },
    {
      icon: '⭐',
      title: t('core_values_customer_title'),
      description: t('core_values_customer_description'),
    },
    {
      icon: '✅',
      title: t('core_values_quality_title'),
      description: t('core_values_quality_description'),
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

      <VehicleJourney
        title={t('vehicle_journey_title')}
        items={vehicleJourney}
      />

      <HowItWorks
        eyebrow={t('how_it_works_eyebrow')}
        title={t('how_it_works_title')}
        image="/assets/images/howItWorks.png"
        imageAlt={t('how_it_works_image_alt')}
        steps={howItWorksSteps}
        confirmationLabel={t('how_it_works_confirmation_label')}
        confirmationDescription={t('how_it_works_confirmation_description')}
      />

      <AirportPickup
        title={t('airport_pickup_title')}
        description={t('airport_pickup_description')}
        image="/assets/images/pickupImage.png"
        imageAlt={t('airport_pickup_image_alt')}
        arrowImage="/assets/images/errow.png"
        items={airportPickupItems}
      />

      <BeforeYouBook
        title={t('before_you_book_title')}
        description={t('before_you_book_description')}
        cards={beforeYouBookCards}
        points={beforeYouBookPoints}
      />

      <ChangesDelaysWaitingTime
        title={t('changes_delays_waiting_time_title')}
        description={t('changes_delays_waiting_time_description')}
        cards={changesDelaysWaitingTimeCards}
        supportTitle={t('changes_delays_waiting_time_support_title')}
        supportDescription={t(
          'changes_delays_waiting_time_support_description',
        )}
      />

      <AccessibilitySpecialRequests
        title={t('accessibility_special_requests_title')}
        description={t('accessibility_special_requests_description')}
        cards={accessibilitySpecialRequestsCards}
        uniqueTitle={t('accessibility_special_requests_unique_title')}
        uniqueDescription={t.rich(
          'accessibility_special_requests_unique_description',
          {
            email: (chunks) => (
              <a
                href={`mailto:${t('accessibility_special_requests_contact_email')}`}
                className="font-extrabold text-white underline underline-offset-4"
              >
                {chunks}
              </a>
            ),
          },
        )}
        commitment={t('accessibility_special_requests_commitment')}
      />

      <SafetyServiceStandards
        title={t('safety_service_standards_title')}
        cards={safetyServiceStandardsCards}
        termsLabel={t('safety_service_standards_terms_label')}
        termsDescription={t('safety_service_standards_terms_description')}
      />

      <FaqSection
        title={t('faq_title')}
        description={t('faq_description')}
        categories={faqCategories}
        items={faqItems}
      />

      <AboutKaiya
        title={t('about_kaiya_title')}
        paragraphs={aboutKaiyaParagraphs}
        image="/assets/images/aboutKaiya.jpg"
        imageAlt={t('about_kaiya_image_alt')}
      />

      <CoreValues title={t('core_values_title')} items={coreValues} />
    </>
  );
}
