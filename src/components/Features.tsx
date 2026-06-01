import Image from 'next/image';
import * as React from 'react';

type FeatureItem = {
  icon: string;
  title: string;
  description: string;
};

type FeaturesProps = {
  title: string;
  description: string;
  items: readonly FeatureItem[];
};

/**
 * Renders a premium grid of service feature cards.
 * @param props FeaturesProps containing section title and features list
 * @returns React.ReactNode representing the Features section
 */
export const Features = (props: FeaturesProps): React.ReactNode => {
  return (
    <section className="bg-[#FAFAFA] py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            {props.title}
          </h2>
          <p className="mt-4 text-md text-slate-600">
            {props.description}
          </p>
        </div>

        {/* Feature cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {props.items.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-2xl bg-[#FFFFFF] p-6 shadow-sm border border-slate-100/80 transition-all duration-300 hover:shadow-md hover:-translate-y-1 flex flex-col items-start text-left"
            >
              {/* Icon */}
              <div className="mb-5 flex size-12 items-center justify-center transition-transform duration-300 group-hover:scale-110">
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  width={48}
                  height={48}
                  className="size-12 object-contain"
                />
              </div>

              <h3 className="mb-2 text-lg font-bold text-slate-900">
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed text-slate-500">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
