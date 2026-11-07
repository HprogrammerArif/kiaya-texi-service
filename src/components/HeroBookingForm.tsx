'use client';

import { ScrollReveal } from '@/components/ScrollReveal';
import { AppConfig } from '@/utils/AppConfig';
import { BookingGuideModal } from './BookingGuideModal';
import { PromoCodeBanner } from './PromoCodeBanner';

/**
 * Inline booking widget rendered inside the hero section.
 * @returns The rendered component
 */
export function HeroBookingForm() {
  return (
    <ScrollReveal className="relative z-30 flex w-full max-w-6xl flex-col items-center">
      {/* Booking guide at the top — temporarily disabled, re-enable via AppConfig.features.bookingGuide */}
      {AppConfig.features.bookingGuide && (
        <div className="z-20 mb-6">
          <BookingGuideModal />
        </div>
      )}
      {/* Promo / voucher code — kept above the iframe so it is never covered by it */}
      {AppConfig.features.promoCode && (
        <div className="z-20 mb-6">
          <PromoCodeBanner />
        </div>
      )}
      {/* Booking form wrapper */}
      <div className="relative z-10 h-[180px] w-full rounded-2xl bg-transparent transition-all duration-400 sm:h-[120px] md:h-[100px]">
        <iframe
          src="https://book.kaiya.taxi/booking-form.php"
          // className="absolute top-0 left-0 h-[550px] w-full border-none bg-transparent sm:h-[450px] md:h-[450px]"
          className="absolute top-0 left-0 h-[700px] w-full border-none bg-transparent lg:h-[550px]"
          title="Kaiya Booking Form"
        />
      </div>
    </ScrollReveal>
  );
}
