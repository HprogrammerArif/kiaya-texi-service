'use client';

import { useTranslations } from 'next-intl';
import * as React from 'react';
import { AppConfig } from '@/utils/AppConfig';

const COPIED_RESET_MS = 2000;

/**
 * Copies text to the clipboard using the async Clipboard API.
 * @param text - The text to copy
 * @returns Whether the copy succeeded
 */
const copyToClipboard = async (text: string): Promise<boolean> => {
  try {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(text);
      return true;
    }
    return false;
  } catch {
    return false;
  }
};

/**
 * Glass-style strip shown above the hero booking form that reveals the
 * promo / voucher code and lets the customer copy it with one click.
 * The code is entered later in the booking system's "Voucher Code" field.
 * @returns The rendered promo code strip
 */
export const PromoCodeBanner = (): React.ReactNode => {
  const t = useTranslations('Index');
  const [copied, setCopied] = React.useState(false);
  const code = AppConfig.promoCode;

  React.useEffect(() => {
    if (!copied) {
      // oxlint-disable-next-line eslint/no-empty-function
      return () => {};
    }
    const timerId = setTimeout(() => {
      setCopied(false);
    }, COPIED_RESET_MS);
    return () => {
      clearTimeout(timerId);
    };
  }, [copied]);

  const handleCopy = async () => {
    const ok = await copyToClipboard(code);
    if (ok) {
      setCopied(true);
    }
  };

  return (
    <div className="flex flex-col items-center text-center">
      <div className="inline-flex flex-col items-center gap-2 rounded-2xl border border-white/25 bg-white/10 px-4 py-2.5 text-white backdrop-blur-sm sm:flex-row sm:gap-3 sm:rounded-full sm:py-1.5 sm:pr-1.5 sm:pl-4">
        <span className="flex items-center gap-2 text-xs font-medium text-white/90 sm:text-sm">
          <svg
            aria-hidden="true"
            className="size-4 shrink-0 text-amber-300"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M20.59 13.41 13.42 20.58a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82Z" />
            <circle cx="7" cy="7" r="1.5" />
          </svg>
          {t('promo_code_label')}
        </span>

        <span className="flex items-center gap-1.5">
          {/* Code chip — clicking it also copies */}
          <button
            type="button"
            id="promo-code-value"
            onClick={handleCopy}
            aria-label={t('promo_code_copy_aria', { code })}
            className="rounded-full border border-dashed border-amber-300/80 bg-black/30 px-3 py-1 font-mono text-xs font-bold tracking-wider text-amber-200 transition-colors select-all hover:bg-black/45 focus-visible:ring-2 focus-visible:ring-amber-300/60 focus-visible:outline-none sm:text-sm"
          >
            {code}
          </button>

          <button
            type="button"
            id="promo-code-copy"
            onClick={handleCopy}
            aria-label={t('promo_code_copy_aria', { code })}
            className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold transition-colors focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:outline-none sm:text-sm ${
              copied ? 'bg-emerald-500 text-white' : 'bg-white text-slate-900 hover:bg-white/85'
            }`}
          >
            {copied ? (
              <svg
                aria-hidden="true"
                className="size-3.5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20 6 9 17l-5-5" />
              </svg>
            ) : (
              <svg
                aria-hidden="true"
                className="size-3.5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="9" y="9" width="13" height="13" rx="2" />
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
              </svg>
            )}
            <span aria-live="polite">{copied ? t('promo_code_copied') : t('promo_code_copy')}</span>
          </button>
        </span>
      </div>

      <p className="mt-1.5 text-[11px] text-white/70 sm:text-xs">{t('promo_code_hint')}</p>
    </div>
  );
};
