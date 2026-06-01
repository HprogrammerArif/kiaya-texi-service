import Image from 'next/image';
import * as React from 'react';

type AccessibilitySpecialRequestsIconName = 'childSeat' | 'wheelchair' | 'pet' | 'language';

type AccessibilitySpecialRequestsCard = {
  icon: AccessibilitySpecialRequestsIconName;
  title: string;
  description: string;
};

type AccessibilitySpecialRequestsProps = {
  title: string;
  description: string;
  cards: readonly AccessibilitySpecialRequestsCard[];
  uniqueTitle: string;
  uniqueDescription: React.ReactNode;
  commitment: string;
};

const accessibilitySpecialRequestsIcons: Record<AccessibilitySpecialRequestsIconName, string> = {
  childSeat: '/assets/icons/childseat.svg',
  wheelchair: '/assets/icons/whellchair.svg',
  pet: '/assets/icons/petpaw.svg',
  language: '/assets/icons/languagetranslator.svg',
};

/**
 * Renders accessibility accommodations and special request guidance.
 * @param props Accessibility content, accommodation cards, and support callout
 * @returns React.ReactNode representing the accessibility section
 */
export const AccessibilitySpecialRequests = (
  props: AccessibilitySpecialRequestsProps,
): React.ReactNode => (
  <section className="bg-white py-16 sm:py-24">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
          {props.title}
        </h2>
        <p className="mt-5 text-sm leading-relaxed font-medium text-slate-500 sm:text-base">
          {props.description}
        </p>
      </div>

      <div className="mt-14 grid gap-7 lg:grid-cols-2">
        {props.cards.map((card) => (
          <article
            key={card.title}
            className="rounded-2xl border border-slate-100 bg-white p-7 shadow-sm sm:p-8"
          >
            <div className="flex size-11 items-center justify-center rounded-xl bg-slate-50">
              <Image
                src={accessibilitySpecialRequestsIcons[card.icon]}
                alt=""
                width={32}
                height={32}
                aria-hidden="true"
                className="size-8 object-contain"
              />
            </div>

            <h3 className="mt-7 text-lg font-extrabold text-slate-800">{card.title}</h3>
            <p className="mt-3 text-sm leading-relaxed font-medium text-slate-500">
              {card.description}
            </p>
          </article>
        ))}
      </div>

      <div className="mt-14 rounded-[2rem] bg-black px-7 py-8 text-white shadow-[0_0_24px_rgba(15,23,42,0.24)] sm:px-10 lg:px-12">
        <h3 className="text-3xl font-extrabold tracking-tight">{props.uniqueTitle}</h3>
        <p className="mt-6 text-base leading-relaxed font-medium text-white/80 sm:text-lg">
          {props.uniqueDescription}
        </p>
        <p className="mt-8 text-sm leading-relaxed font-medium text-white/75">{props.commitment}</p>
      </div>
    </div>
  </section>
);
