import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
}

export default function SEO({ title, description }: SEOProps) {
  const siteName = "Agnes Catering";
  const fullTitle = `${title} | ${siteName}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FoodEstablishment",
    "name": siteName,
    "image": "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&q=80",
    "description": description,
    "telephone": "+254797453969",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Nairobi",
      "addressCountry": "KE"
    },
    "servesCuisine": ["Kenyan", "International", "African"],
    "priceRange": "$$"
  };

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <script type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </script>
    </Helmet>
  );
}
