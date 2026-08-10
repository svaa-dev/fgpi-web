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
  facebook: { href: '#', label: 'Facebook' },
  instagram: { href: '#', label: 'Instagram' },
  linkedin: { href: '#', label: 'LinkedIn' },
  tiktok: { href: '#', label: 'TikTok' },
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
