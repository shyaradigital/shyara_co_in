export function getOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Shyara (OPC) Pvt. Ltd.',
    url: 'https://shyara.co.in',
    logo: 'https://shyara.co.in/logo.png',
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'contact@shyara.co.in',
      contactType: 'Customer Service',
    },
    sameAs: [],
  };
}

export function getWebsiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Shyara',
    url: 'https://shyara.co.in',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://shyara.co.in/search?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  };
}

