import { getBaseUrl } from '@/utils/Helpers';

type JsonLdProps = {
  locale: string;
};

/**
 * Renders a JSON-LD structured data script for the Kaiya taxi service.
 * Helps search engines display rich results with business info.
 */
export const JsonLd = (props: JsonLdProps): React.ReactNode => {
  const baseUrl = getBaseUrl();

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'TaxiService',
    'name': 'Kaiya',
    'alternateName': 'Kaiya Taxi',
    'url': baseUrl,
    'logo': `${baseUrl}/assets/logo/kaiyaLogoBlack.svg`,
    'image': `${baseUrl}/assets/images/og-image.png`,
    'description':
      'Premium private taxi and airport transfer service in Hokkaido, Japan. Professional drivers, comfortable vehicles, and transparent pricing.',
    'telephone': '+81-80-8293-8862',
    'email': 'support@kiayataxi.com',
    'address': {
      '@type': 'PostalAddress',
      'addressLocality': 'Chitose',
      'addressRegion': 'Hokkaido',
      'addressCountry': 'JP',
      'streetAddress': 'Shinano 4-11-4-2F-C',
    },
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': 42.8215,
      'longitude': 141.6505,
    },
    'areaServed': [
      {
        '@type': 'State',
        'name': 'Hokkaido',
        'containedInPlace': { '@type': 'Country', 'name': 'Japan' },
      },
      {
        '@type': 'City',
        'name': 'Tokyo',
        'containedInPlace': { '@type': 'Country', 'name': 'Japan' },
      },
    ],
    'serviceType': [
      'Airport Transfer',
      'Hotel Transfer',
      'Hourly Charter',
      'Point-to-Point Transfer',
      'Day Trip',
    ],
    'priceRange': '$$',
    'currenciesAccepted': 'JPY',
    'paymentAccepted': 'Credit Card, Bank Transfer, Cash',
    'openingHoursSpecification': {
      '@type': 'OpeningHoursSpecification',
      'dayOfWeek': [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
      'opens': '00:00',
      'closes': '23:59',
    },
    'sameAs': [],
    'inLanguage': props.locale,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
};
