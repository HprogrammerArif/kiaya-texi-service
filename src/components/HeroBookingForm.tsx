'use client';

import { ScrollReveal } from '@/components/ScrollReveal';
import { BookingGuideModal } from './BookingGuideModal';



/** Inline booking widget rendered inside the hero section. */
export function HeroBookingForm() {
 
  return (
   <ScrollReveal className="w-full max-w-6xl relative z-30 flex flex-col items-center">
      {/* Booking guide at the top */}
      <div className="z-20 mb-6">
        <BookingGuideModal />
      </div>
      {/* Booking form wrapper */}
      <div className="w-full rounded-2xl bg-transparent transition-all duration-400 h-[180px] sm:h-[120px] md:h-[100px] relative z-10">
        <iframe 
          src="https://book.kaiya.taxi/booking-form.php" 
          className="absolute top-0 left-0 w-full h-[550px] sm:h-[450px] md:h-[450px] border-none bg-transparent"
          title="Kaiya Booking Form"
          scrolling="no"
        />
      </div>
    </ScrollReveal>
  );
}
