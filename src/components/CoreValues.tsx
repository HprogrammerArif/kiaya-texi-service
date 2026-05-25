import Image from 'next/image';
import * as React from 'react';

type CoreValuesItem = {
  icon: string;
  title: string;
  description: string;
};

type CoreValuesProps = {
  title: string;
  items: readonly CoreValuesItem[];
};

/**
 * Renders the company's core values as a grid of titled cards.
 * @param props Section title and value cards
 * @returns React.ReactNode representing the core values section
 */
export const CoreValues = (props: CoreValuesProps): React.ReactNode => {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
            {props.title}
          </h2>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {props.items.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl bg-[#F5F5F5] p-7 sm:p-8"
            >
              <div className="flex items-center gap-3">
                <span className="flex size-8 shrink-0 items-center justify-center" aria-hidden="true">
                  <Image
                    src={item.icon}
                    alt=""
                    width={32}
                    height={32}
                    className="size-8 object-contain"
                  />
                </span>
                <h3 className="text-lg font-extrabold text-slate-800">
                  {item.title}
                </h3>
              </div>
              <p className="mt-4 text-sm font-medium leading-relaxed text-slate-500">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
