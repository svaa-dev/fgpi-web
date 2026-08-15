import { useState } from 'react'
import Hamburger from '@/icons/hamburger'
import Close from '@/icons/close'
import Home from '@/icons/home'
import Services from '@/icons/services'
import CarParts from '@/icons/car-parts'
import Battery from '@/icons/battery'
import Company from '@/icons/company'
import Contact from '@/icons/contact'
import Facebook from '@/icons/facebook'
import Instagram from '@/icons/instagram'
import Linkedin from '@/icons/linkedin'
import Tiktok from '@/icons/tiktok'
import { LINKS, SEO } from '@/constants'

interface Props {
  pathname: string
}

// Lista de enlaces a redes sociales mapeados desde constantes globales
const socialLinks = [
  {
    href: SEO.socials.facebook.href,
    label: SEO.socials.facebook.label,
    icon: Facebook,
  },
  {
    href: SEO.socials.instagram.href,
    label: SEO.socials.instagram.label,
    icon: Instagram,
  },
  {
    href: SEO.socials.linkedin.href,
    label: SEO.socials.linkedin.label,
    icon: Linkedin,
  },
  {
    href: SEO.socials.tiktok.href,
    label: SEO.socials.tiktok.label,
    icon: Tiktok,
  },
]
const navLinks = [
  { href: LINKS.home.href, label: LINKS.home.label, icon: Home },
  { href: LINKS.services.href, label: LINKS.services.label, icon: Services },
  {
    href: LINKS.autoparts_accessories.href,
    label: LINKS.autoparts_accessories.label,
    icon: CarParts,
  },
  { href: LINKS.batteries.href, label: LINKS.batteries.label, icon: Battery },
  { href: LINKS.company.href, label: LINKS.company.label, icon: Company },
  { href: LINKS.contact.href, label: LINKS.contact.label, icon: Contact },
]

export default function MobileMenu({ pathname }: Props) {
  // Estado para controlar la apertura y el cierre del panel del menú lateral
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Botón de activación (Hamburguesa) visible en pantallas móviles/tablets */}
      <button
        onClick={() => setIsOpen(true)}
        className='hover:bg-base-200 hover:text-primary flex cursor-pointer items-center justify-center rounded-lg p-2 transition-colors duration-200'
        aria-label='Abrir menú de navegación'
      >
        <Hamburger className='size-7' />
      </button>

      {/* Overlay de fondo oscuro difuminado. Controla la visibilidad y transición de opacidad */}
      <div
        className={`fixed inset-0 z-50 min-h-screen bg-black/50 backdrop-blur-xs transition-opacity duration-300 ${
          isOpen
            ? 'pointer-events-auto opacity-100'
            : 'pointer-events-none opacity-0'
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Panel lateral deslizable (Drawer). Se despliega desde la izquierda */}
      <aside
        className={`border-base-200 bg-base-100 fixed top-0 bottom-0 left-0 z-50 flex min-h-screen w-72 max-w-[80vw] flex-col border-r shadow-2xl transition-transform duration-300 ease-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Cabecera del menú móvil */}
        <div className='border-base-200 flex items-center justify-between border-b p-5'>
          <div className='flex items-center gap-2'>
            {/* Emblema de marca adaptado */}
            <span className='text-base-content flex flex-col text-lg font-bold'>
              <span className='text-primary'>Forte Glass</span>
              <span className='ml-4 text-sm'>Perú Import</span>
            </span>
          </div>

          {/* Botón para cerrar el menú */}
          <button
            onClick={() => setIsOpen(false)}
            className='text-base-content/50 hover:text-primary hover:bg-base-200 cursor-pointer rounded-full p-2 transition-all duration-200'
            aria-label='Cerrar menú de navegación'
          >
            <Close className='size-5' />
          </button>
        </div>

        {/* Cuerpo del menú: Contenedor con scroll para los enlaces principales */}
        <nav className='flex flex-1 flex-col gap-2 overflow-y-auto px-4 py-6 uppercase'>
          {navLinks.map(link => {
            const Icon = link.icon

            const isActive =
              link.href === '/'
                ? pathname === '/'
                : pathname.startsWith(link.href)

            return (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`group flex items-center gap-3.5 rounded-xl px-4 py-3 text-sm font-semibold transition-all duration-300 ${
                  isActive
                    ? 'bg-primary/10 text-primary'
                    : 'text-base-content/75 hover:text-primary hover:bg-neutral-300/40'
                }`}
              >
                <Icon
                  className={`size-5 transition-transform duration-300 group-hover:scale-110 ${
                    isActive ? 'text-primary scale-110' : 'text-base-content/60'
                  }`}
                />
                <span
                  className={`transition-transform duration-300 ${
                    isActive ? 'translate-x-0.5' : 'group-hover:translate-x-0.5'
                  }`}
                >
                  {link.label}
                </span>
              </a>
            )
          })}
        </nav>

        {/* Pie de página del menú móvil: Enlaces a redes sociales */}
        <div className='border-base-200 bg-base-200/20 mt-auto border-t p-5'>
          <p className='text-base-content/40 mb-4 px-2 text-xs font-semibold tracking-wider uppercase'>
            Síguenos en redes
          </p>
          <div className='flex items-center gap-3'>
            {socialLinks.map(link => {
              const Icon = link.icon
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='bg-base-100 hover:bg-primary hover:text-primary-content text-base-content/65 border-base-200/50 flex size-10 cursor-pointer items-center justify-center rounded-xl border shadow-xs transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md'
                  aria-label={link.label}
                >
                  <Icon className='size-5' />
                </a>
              )
            })}
          </div>
          <div className='mt-6 text-center'>
            <span className='text-base-content/40 text-[10px] font-medium'>
              © {new Date().getFullYear()} Forte Glass Perú Import.
            </span>
          </div>
        </div>
      </aside>
    </>
  )
}
