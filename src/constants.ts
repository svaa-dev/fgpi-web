/**
 * Información global y de contacto de la empresa
 */
export const SEO = {
  name: 'Forte Glass Perú Import',
  description:
    'Venta de parabrisas, autopartes, accesorios y baterías en Perú.',
  email: '',
  phone: '',
  address: '',
  socials: {
    facebook: {
      href: 'https://web.facebook.com/share/p/1CcVRdPnVu/',
      label: 'Facebook',
    },
    instagram: {
      href: 'https://www.instagram.com/forteglassperuimport?igsh=Y3Q0ajRzM3Q1dGRu&utm_source=qr',
      label: 'Instagram',
    },
    linkedin: {
      href: 'https://www.linkedin.com/in/forte-glass-peru-import-21556239a',
      label: 'LinkedIn',
    },
    tiktok: {
      href: 'https://www.tiktok.com/@forteglassperuimport?_r=1&_t=ZS-91gQimLANmM',
      label: 'TikTok',
    },
  },
} as const

/**
 * Enlaces de navegación principal compartidos en el sitio
 */
export const LINKS = {
  home: { href: '/', label: 'Inicio' },
  services: { href: '/servicios', label: 'Servicios' },
  autoparts_accessories: {
    href: '/autopartes-accesorios',
    label: 'Autopartes & Accesorios',
  },
  batteries: { href: '/baterias', label: 'Baterías' },
  company: { href: '/empresa', label: 'Empresa' },
  contact: { href: '/contacto', label: 'Contacto' },
} as const
