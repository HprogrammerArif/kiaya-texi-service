import Image from 'next/image';
import * as React from 'react';

type OptionCard = {
  icon: string;
  title: string;
  description: string;
  bullets: readonly string[];
};

type TravelOptionsProps = {
  title: string;
  description?: string;
  items: readonly OptionCard[];
};

/**
 * Renders a 2-column grid of travel option cards matching the reference UI.
 * @param props TravelOptionsProps containing the section title, optional description, and option cards
 * @returns React.ReactNode representing the Travel Options section
 */
export const TravelOptions = (props: TravelOptionsProps): React.ReactNode => (
  <section className="bg-white py-16 sm:py-24">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      {/* Section header — centered */}
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
          {props.title}
        </h2>
        {props.description && (
          <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-slate-500 sm:text-base">
            {props.description}
          </p>
        )}
      </div>

      {/* 2-column card grid — 4 individual cards */}
      <div className="grid gap-6 sm:grid-cols-2">
        {props.items.map((item) => (
          <div
            key={item.title}
            className="flex flex-col rounded-2xl border border-slate-200 bg-white p-8"
          >
            {/* Black rounded-square icon */}
            <div className="mb-5 flex size-11 items-center justify-center rounded-lg bg-slate-900">
              <Image
                src={item.icon}
                alt=""
                width={22}
                height={22}
                className="h-[22px] w-[22px] object-contain brightness-0 invert"
              />
            </div>

            <h3 className="mb-2 text-base font-bold text-slate-900">
              {item.title}
            </h3>
            <p className="mb-5 text-sm leading-relaxed text-slate-500">
              {item.description}
            </p>

            {/* Checkmark bullets */}
            <ul className="space-y-2">
              {item.bullets.map((bullet) => (
                <li key={bullet} className="flex items-center gap-2 text-sm text-slate-600">
                  <span className="select-none text-slate-400">✓</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);
