import Image from 'next/image';
import * as React from 'react';

type WhyChooseItem = {
  title: string;
  description: string;
};

type WhyChooseKaiyaProps = {
  title: string;
  image1: string;
  image1Alt: string;
  image2: string;
  image2Alt: string;
  /** First 3 items rendered beside image1 (text left, image right) */
  topItems: readonly [WhyChooseItem, WhyChooseItem, WhyChooseItem];
  /** Last 3 items rendered beside image2 (image left, text right) */
  bottomItems: readonly [WhyChooseItem, WhyChooseItem, WhyChooseItem];
};

const CheckIcon = () => (
  <svg
    aria-hidden="true"
    className="mt-0.5 size-4 shrink-0 text-slate-500"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="2.2"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
  </svg>
);

const FeatureList = (props: { items: readonly WhyChooseItem[] }) => (
  <ul className="space-y-7">
    {props.items.map((item) => (
      <li key={item.title} className="flex items-start gap-3">
        <CheckIcon />
        <div>
          <h3 className="text-base font-extrabold text-slate-900">{item.title}</h3>
          <p className="mt-1 text-sm leading-relaxed text-slate-500">{item.description}</p>
        </div>
      </li>
    ))}
  </ul>
);

/**
 * Renders the "Why Choose Kaiya" section with two alternating image+feature rows.
 * @param props WhyChooseKaiyaProps containing the title, two images, and two sets of feature items
 * @returns React.ReactNode representing the Why Choose Kaiya section
 */
export const WhyChooseKaiya = (props: WhyChooseKaiyaProps): React.ReactNode => (
  <section className="bg-white py-20 sm:py-28">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      {/* Section title */}
      <h2 className="mb-14 text-center text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
        {props.title}
      </h2>

      {/* Row 1 — features left, image right */}
      <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
        <FeatureList items={props.topItems} />

        <div className="relative overflow-hidden rounded-3xl">
          <Image
            src={props.image1}
            alt={props.image1Alt}
            width={640}
            height={480}
            className="h-auto w-full object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>

      {/* Row 2 — image left, features right */}
      <div className="mt-16 grid items-center gap-12 md:mt-20 md:grid-cols-2 md:gap-16">
        <div className="relative overflow-hidden rounded-3xl md:order-1">
          <Image
            src={props.image2}
            alt={props.image2Alt}
            width={640}
            height={480}
            className="h-auto w-full object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        <div className="md:order-2">
          <FeatureList items={props.bottomItems} />
        </div>
      </div>
    </div>
  </section>
);
