import Image from 'next/image';
import * as React from 'react';

type NetworkPartnerItem = {
  icon: string;
  title: string;
  description: string;
};

type JoinOurNetworkProps = {
  title: string;
  items: readonly NetworkPartnerItem[];
};

/**
 * Renders the "Join Our Network" section with three partner audience cards.
 * @param props Section title and partner card items
 * @returns React.ReactNode representing the join-our-network section
 */
export const JoinOurNetwork = (props: JoinOurNetworkProps): React.ReactNode => (
  <section className="bg-white py-20 sm:py-28">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      {/* Section heading */}
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
          {props.title}
        </h2>
      </div>

      {/* Partner cards */}
      <div className="grid gap-6 sm:grid-cols-3">
        {props.items.map((item) => (
          <article
            key={item.title}
            className="group rounded-2xl border border-slate-100 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
          >
            {/* Icon */}
            <div
              className="mb-5 flex size-12 items-center justify-center transition-transform duration-300 group-hover:scale-110"
              aria-hidden="true"
            >
              <Image
                src={item.icon}
                alt=""
                width={48}
                height={48}
                className="size-12 object-contain"
              />
            </div>

            <h3 className="mb-3 text-base font-bold text-slate-900">{item.title}</h3>
            <p className="text-sm leading-relaxed text-slate-500">{item.description}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);
