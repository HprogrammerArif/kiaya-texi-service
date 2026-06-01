'use client';

import { useState } from 'react';

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
    window.location.href = `/#bookings?${params.toString()}`;
  }

  return (
    <div className="w-full max-w-4xl rounded-2xl bg-white px-6 py-5 shadow-2xl">
      {/* ── Tabs ── */}
      <div className="mb-5 inline-flex rounded-full bg-gray-100 p-1">
        <button
          type="button"
          id="hero-tab-transfer"
          onClick={() => setActiveTab('transfer')}
          className={`rounded-full px-5 py-1.5 text-sm font-semibold transition-all duration-200 ${
            activeTab === 'transfer'
              ? 'bg-gray-900 text-white shadow'
              : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          {props.tabTransfer}
        </button>
        <button
          type="button"
          id="hero-tab-hourly"
          onClick={() => setActiveTab('hourly')}
          className={`rounded-full px-5 py-1.5 text-sm font-semibold transition-all duration-200 ${
            activeTab === 'hourly'
              ? 'bg-gray-900 text-white shadow'
              : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          {props.tabHourly}
        </button>
      </div>

      {/* ── Form ── */}
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end">
          {/* Pickup */}
          <div className="flex-1">
            <label
              htmlFor="hero-pickup"
              className="mb-1 block text-[11px] font-bold uppercase tracking-widest text-gray-400"
            >
              {props.labelPickup}
            </label>
            <input
              id="hero-pickup"
              type="text"
              value={pickup}
              onChange={(e) => setPickup(e.target.value)}
              placeholder={props.placeholderLocation}
              required
              className="w-full rounded-lg border border-gray-200 bg-gray-50 px-3.5 py-2.5 text-sm text-gray-800 outline-none placeholder:text-gray-400 focus:border-gray-400 focus:bg-white transition-colors"
            />
          </div>

          {/* Drop-off — only for transfer mode */}
          {activeTab === 'transfer' && (
            <div className="flex-1">
              <label
                htmlFor="hero-dropoff"
                className="mb-1 block text-[11px] font-bold uppercase tracking-widest text-gray-400"
              >
                {props.labelDropOff}
              </label>
              <input
                id="hero-dropoff"
                type="text"
                value={dropOff}
                onChange={(e) => setDropOff(e.target.value)}
                placeholder={props.placeholderLocation}
                required
                className="w-full rounded-lg border border-gray-200 bg-gray-50 px-3.5 py-2.5 text-sm text-gray-800 outline-none placeholder:text-gray-400 focus:border-gray-400 focus:bg-white transition-colors"
              />
            </div>
          )}

          {/* Date */}
          <div className="w-full lg:w-44">
            <label
              htmlFor="hero-date"
              className="mb-1 block text-[11px] font-bold uppercase tracking-widest text-gray-400"
            >
              {props.labelDate}
            </label>
            <input
              id="hero-date"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
              className="w-full rounded-lg border border-gray-200 bg-gray-50 px-3.5 py-2.5 text-sm text-gray-700 outline-none focus:border-gray-400 focus:bg-white transition-colors"
            />
          </div>

          {/* Time */}
          <div className="w-full lg:w-36">
            <label
              htmlFor="hero-time"
              className="mb-1 block text-[11px] font-bold uppercase tracking-widest text-gray-400"
            >
              {props.labelTime}
            </label>
            <input
              id="hero-time"
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              required
              className="w-full rounded-lg border border-gray-200 bg-gray-50 px-3.5 py-2.5 text-sm text-gray-700 outline-none focus:border-gray-400 focus:bg-white transition-colors"
            />
          </div>

          {/* CTA */}
          <button
            type="submit"
            id="hero-get-quote"
            className="w-full shrink-0 rounded-xl bg-gray-900 px-7 py-2.5 text-sm font-bold uppercase tracking-wider text-white shadow transition-all duration-200 hover:bg-gray-700 hover:shadow-lg active:scale-95 lg:w-auto"
          >
            {props.labelGetQuote}
          </button>
        </div>
      </form>
    </div>
  );
}
