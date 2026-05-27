'use client';

import * as React from 'react';

type FaqCategoryId = 'all' | 'booking' | 'airport' | 'policy' | 'service';

type FaqCategory = {
  id: FaqCategoryId;
  label: string;
};

type FaqItem = {
  id: string;
  category: Exclude<FaqCategoryId, 'all'>;
  question: string;
  answer: string;
};

type FaqSectionProps = {
  title: string;
  description: string;
  categories: readonly FaqCategory[];
  items: readonly FaqItem[];
};

/**
 * Renders filterable FAQ accordion content.
 * @param props FAQ heading, categories, and questions
 * @returns React.ReactNode representing the FAQ section
 */
export const FaqSection = (props: FaqSectionProps): React.ReactNode => {
  const [selectedCategory, setSelectedCategory] = React.useState<FaqCategoryId>('all');
  const [openItemId, setOpenItemId] = React.useState<string | null>(props.items[0]?.id ?? null);

  const filteredItems = props.items.filter(
    (item) => selectedCategory === 'all' || item.category === selectedCategory,
  );

  const selectCategory = (categoryId: FaqCategoryId) => {
    setSelectedCategory(categoryId);
    const nextItem = props.items.find(
      (item) => categoryId === 'all' || item.category === categoryId,
    );
    setOpenItemId(nextItem?.id ?? null);
  };

  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
            {props.title}
          </h2>
          <p className="mt-5 text-sm leading-relaxed font-medium text-slate-500 sm:text-base">
            {props.description}
          </p>
        </div>

        <fieldset
          aria-label={props.title}
          className="mt-10 flex flex-wrap items-center justify-center gap-4 border-0 p-0"
        >
          {props.categories.map((category) => {
            const isSelected = selectedCategory === category.id;

            return (
              <button
                key={category.id}
                type="button"
                aria-pressed={isSelected}
                onClick={() => {
                  selectCategory(category.id);
                }}
                className={
                  isSelected
                    ? 'rounded-full bg-slate-900 px-6 py-2 text-sm font-extrabold text-white uppercase transition-colors'
                    : 'rounded-full bg-slate-100 px-6 py-2 text-sm font-extrabold text-slate-500 uppercase transition-colors hover:bg-slate-200'
                }
              >
                {category.label}
              </button>
            );
          })}
        </fieldset>

        <div className="mt-12 grid gap-x-24 lg:grid-cols-2">
          {filteredItems.map((item) => {
            const isOpen = openItemId === item.id;

            return (
              <article key={item.id} className="border-b border-slate-200">
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={`${item.id}-answer`}
                  onClick={() => {
                    setOpenItemId(isOpen ? null : item.id);
                  }}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                >
                  <span className="text-base font-extrabold text-slate-800">{item.question}</span>
                  <svg
                    aria-hidden="true"
                    className={
                      isOpen
                        ? 'size-4 shrink-0 rotate-180 text-slate-700'
                        : 'size-4 shrink-0 text-slate-700'
                    }
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="m6 9 6 6 6-6"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                  </svg>
                </button>

                {isOpen ? (
                  <div id={`${item.id}-answer`} className="pb-8">
                    <p className="max-w-xl text-sm leading-relaxed font-medium text-slate-500">
                      {item.answer}
                    </p>
                  </div>
                ) : null}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
