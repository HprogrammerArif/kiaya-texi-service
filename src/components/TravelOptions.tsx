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
  items: readonly OptionCard[];
};

/**
 * Renders a grid of travel options with detailed descriptions and checkmarks.
 * @param props TravelOptionsProps containing the title and option cards
 * @returns React.ReactNode representing the Travel Options section
 */
export const TravelOptions = (props: TravelOptionsProps): React.ReactNode => {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section title */}
        <div className="mb-12 text-left">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            {props.title}
          </h2>
        </div>

        {/* Travel Options Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {props.items.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-slate-100 bg-white p-7 sm:p-9 shadow-[0_4px_20px_rgba(0,0,0,0.01)] transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] flex flex-col justify-between"
            >
              <div>
                {/* Black rounded icon wrapper */}
                <div className="mb-6 flex size-12 items-center justify-center rounded-full bg-black">
                  <Image
                    src={item.icon}
                    alt=""
                    width={24}
                    height={24}
                    className="h-6 w-6 object-contain"
                  />
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-500 mb-6">
                  {item.description}
                </p>

                {/* Bullets */}
                <ul className="space-y-2.5">
                  {item.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-center gap-2.5 text-sm text-slate-700">
                      <span className="text-slate-500 font-semibold select-none">✓</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
