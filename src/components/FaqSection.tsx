'use client';

import Image from 'next/image';
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

/** Emoji icons for each category tab pill. */
const CATEGORY_EMOJI: Record<FaqCategoryId, string> = {
  all: '⭐',
  booking: '📋',
  airport: '✈️',
  policy: '⚙️',
  service: '💳',
};

/** SVG asset icon shown beside each FAQ row question. */
const CATEGORY_ICON: Record<Exclude<FaqCategoryId, 'all'>, string> = {
  booking: '/assets/icons/hotelIcon.svg',
  airport: '/assets/icons/planeIcon.svg',
  policy: '/assets/icons/okIcon.svg',
  service: '/assets/icons/stopwatch.svg',
};

/**
 * Renders filterable FAQ accordion content with category icons.
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
        {/* Header */}
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
            {props.title}
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-slate-500 sm:text-base">
            {props.description}
          </p>
        </div>

        {/* Category filter pills with emoji icons */}
        <fieldset
          aria-label={props.title}
          className="mt-10 flex flex-wrap items-center justify-center gap-3 border-0 p-0"
        >
          {props.categories.map((category) => {
            const isSelected = selectedCategory === category.id;
            return (
              <button
                key={category.id}
                type="button"
                aria-pressed={isSelected}
                onClick={() => selectCategory(category.id)}
                className={
                  isSelected
                    ? 'inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-2 text-sm font-semibold text-white transition-colors'
                    : 'inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-2 text-sm font-semibold text-slate-600 transition-colors hover:bg-slate-50'
                }
              >
                <span aria-hidden="true" className="text-base leading-none">
                  {CATEGORY_EMOJI[category.id]}
                </span>
                {category.label}
              </button>
            );
          })}
        </fieldset>

        {/* FAQ accordion — 2-column grid */}
        <div className="mt-10 grid gap-3 lg:grid-cols-2">
          {filteredItems.map((item) => {
            const isOpen = openItemId === item.id;
            const iconSrc = CATEGORY_ICON[item.category];

            return (
              <article
                key={item.id}
                className="overflow-hidden rounded-xl border border-slate-200 bg-white"
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={`${item.id}-answer`}
                  onClick={() => setOpenItemId(isOpen ? null : item.id)}
                  className="flex w-full items-center gap-3 px-5 py-4 text-left"
                >
                  {/* Category icon */}
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-slate-900">
                    <Image
                      src={iconSrc}
                      alt=""
                      width={18}
                      height={18}
                      aria-hidden="true"
                      className="size-[18px] object-contain brightness-0 invert"
                    />
                  </span>

                  <span className="flex-1 text-sm font-bold text-slate-800">
                    {item.question}
                  </span>

                  {/* Solid triangle chevron matching reference image */}
                  <span
                    aria-hidden="true"
                    className={`shrink-0 text-[10px] leading-none text-slate-700 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                  >
                    ▼
                  </span>
                </button>

                {isOpen && (
                  <div id={`${item.id}-answer`} className="px-5 pb-5 pt-1">
                    <p className="text-sm leading-relaxed text-slate-500">{item.answer}</p>
                  </div>
                )}
              </article>
            );
          })}
        </div>

        {/* Item count */}
        <p className="mt-8 text-center text-xs text-slate-400">
          Showing {filteredItems.length} of {props.items.length} questions
        </p>
      </div>
    </section>
  );
};
