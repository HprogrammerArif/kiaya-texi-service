'use client';

import { useState } from 'react';
import { ScrollReveal } from '@/components/ScrollReveal';

type Tab = 'transfer' | 'hourly';

type HeroBookingFormProps = {
  labelPickup: string;
  labelDropOff: string;
  labelDate: string;
  labelTime: string;
  labelGetQuote: string;
  tabTransfer: string;
  tabHourly: string;
  placeholderLocation: string;
};

/** Inline booking widget rendered inside the hero section. */
export function HeroBookingForm(props: HeroBookingFormProps) {
  const [activeTab, setActiveTab] = useState<Tab>('transfer');
  const [pickup, setPickup] = useState('');
  const [dropOff, setDropOff] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const params = new URLSearchParams({
      type: activeTab,
      pickup,
      ...(activeTab === 'transfer' ? { dropOff } : {}),
      date,
      time,
    });
    // Redirect user to the external booking site with the selected parameters
    window.location.href = `https://book.kaiya.taxi/booking-form.php?${params.toString()}`;
  }

  return (
    <ScrollReveal  className="w-full max-w-6xl relative z-50">
      {/* 
        The wrapper has a fixed height that matches the "closed" form size. 
        This prevents the huge empty gap from pushing down the text below. 
      */}
      <div className="w-full rounded-2xl bg-transparent transition-all duration-500 h-[180px] sm:h-[120px] md:h-[100px]">
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
