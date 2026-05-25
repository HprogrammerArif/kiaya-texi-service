import * as React from 'react';

type BeforeYouBookIconName = 'pricing' | 'included' | 'extra' | 'transparency';

type BeforeYouBookCard = {
  icon: BeforeYouBookIconName;
  title: string;
  description: string;
  items?: readonly string[];
  itemStyle?: 'check' | 'bullet';
};

type BeforeYouBookPoint = {
  title: string;
  description: string;
};

type BeforeYouBookProps = {
  title: string;
  description: string;
  cards: readonly BeforeYouBookCard[];
  points: readonly BeforeYouBookPoint[];
};

const beforeYouBookIcons: Record<BeforeYouBookIconName, React.ReactNode> = {
  pricing: (
    <svg
      aria-hidden="true"
      className="size-5"
      fill="none"
      viewBox="0 0 20 20"
    >
      <rect fill="currentColor" height="12" rx="2" width="16" x="2" y="4" />
      <path d="M4 8h12" stroke="white" strokeWidth="1.5" />
      <path d="M5 12h4" stroke="white" strokeLinecap="round" strokeWidth="1.5" />
    </svg>
  ),
  included: (
    <svg
      aria-hidden="true"
      className="size-5"
      fill="none"
      viewBox="0 0 20 20"
    >
      <circle cx="10" cy="10" fill="currentColor" r="8" />
      <path
        d="m6.5 10 2.2 2.2 4.8-5"
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  ),
  extra: (
    <svg
      aria-hidden="true"
      className="size-5"
      fill="none"
      viewBox="0 0 20 20"
    >
      <path d="M10 2.5 18 16H2L10 2.5Z" fill="currentColor" />
      <path
        d="M10 7.5v3.6M10 14h.01"
        stroke="white"
        strokeLinecap="round"
        strokeWidth="1.8"
      />
    </svg>
  ),
  transparency: (
    <svg
      aria-hidden="true"
      className="size-5"
      fill="none"
      viewBox="0 0 20 20"
    >
      <circle cx="10" cy="10" fill="currentColor" r="8" />
      <path
        d="M10 6v4h3"
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  ),
};

const beforeYouBookIconColors: Record<BeforeYouBookIconName, string> = {
  pricing: 'text-blue-500',
  included: 'text-emerald-500',
  extra: 'text-amber-500',
  transparency: 'text-violet-500',
};

/**
 * Renders pre-booking pricing and service expectations.
 * @param props Section title, cards, and booking assurance points
 * @returns React.ReactNode representing the before-you-book section
 */
export const BeforeYouBook = (props: BeforeYouBookProps): React.ReactNode => {
  return (
    <section className="bg-[#FAFAFA] py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
            {props.title}
          </h2>
          <p className="mt-4 text-sm font-medium text-slate-500 sm:text-base">
            {props.description}
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {props.cards.map((card) => (
            <article
              key={card.title}
              className="flex flex-col justify-center rounded-2xl border border-slate-200 bg-white p-7 shadow-sm sm:p-9"
            >
              <div className="flex items-center gap-3">
                <span className={beforeYouBookIconColors[card.icon]}>
                  {beforeYouBookIcons[card.icon]}
                </span>
                <h3 className="text-xl font-extrabold text-slate-800">
                  {card.title}
                </h3>
              </div>

              <p className="mt-6 text-sm leading-relaxed text-slate-500">
                {card.description}
              </p>

              {card.items && card.items.length > 0 ? (
                <ul className="mt-6 space-y-3">
                  {card.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm font-semibold leading-relaxed text-slate-600"
                    >
                      {card.itemStyle === 'check' ? (
                        <span
                          aria-hidden="true"
                          className="mt-0.5 text-slate-400"
                        >
                          &#10003;
                        </span>
                      ) : (
                        <span
                          aria-hidden="true"
                          className="mt-2 size-1.5 shrink-0 rounded-full bg-slate-500"
                        />
                      )}
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </article>
          ))}
        </div>

        <div className="mx-auto mt-20 grid max-w-5xl gap-8 sm:grid-cols-3 sm:gap-0">
          {props.points.map((point, index) => (
            <div
              key={point.title}
              className={
                index === 0
                  ? 'sm:pr-8'
                  : 'border-slate-300 sm:border-l sm:px-8'
              }
            >
              <h3 className="text-xl font-extrabold text-slate-800">
                {point.title}
              </h3>
              <p className="mt-2 max-w-56 text-sm font-medium leading-relaxed text-slate-500">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
