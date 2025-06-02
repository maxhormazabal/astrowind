import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'How it works',
      href: '#how-it-works',
    },
    {
      text: 'Features',
      href: '#features',
    },
    {
      text: 'Pricing',
      href: '#pricing',
    },
    {
      text: 'Integrations',
      href: '#integrations',
    },
    {
      text: 'FAQ',
      href: '#faq',
    },
    {
      text: 'Contact',
      href: '#contact',
    },
  ],
  actions: [{ text: 'Book a demo', href: '#contact', target: '_self' }],
};

export const footerData = {
  links: [
    {
      title: 'Legal',
      links: [
        { text: 'Privacy Policy', href: getPermalink('/privacy') },
        { text: 'Terms of Service', href: getPermalink('/terms') },
        { text: 'Cookie Policy', href: getPermalink('/cookies') },
      ],
    },
    {
      title: 'Contact Us',
      links: [
        { text: 'info@dokken.com', href: 'mailto:info@dokken.ai' },
        { text: 'Estrada do Vilar, 56, Lavadores,<br />36214 Vigo, Pontevedra', href: 'https://maps.app.goo.gl/vRtFFkc3gcxQM78w5' },
      ],
    },
  ],
  secondaryLinks: [],
  socialLinks: [
    { ariaLabel: 'Whatsapp', icon: 'tabler:brand-whatsapp', href: 'https://wa.me/34677163247' },
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: 'https://linkedin.com/company/dokken-ai' },
  ],
  footNote: 'Project supported by the Ignicia program of the Galician Innovation Agency, Xunta de Galicia.',
};
