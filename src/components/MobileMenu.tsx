import { useState } from 'react'
import Hamburger from '@/icons/Hamburger'
import Close from '@/icons/Close'
import Home from '@/icons/Home'
import Services from '@/icons/Services'
import CarParts from '@/icons/CarParts'
import Battery from '@/icons/Battery'
import Company from '@/icons/Company'
import Contact from '@/icons/Contact'

import Facebook from '@/icons/Facebook'
import Instagram from '@/icons/Instagram'
import Linkedin from '@/icons/Linkedin'
import Tiktok from '@/icons/Tiktok'

// Lista de enlaces de navegación principal con sus respectivos iconos personalizados
const navLinks = [
  { href: '#', label: 'Inicio', icon: Home },
  { href: '#', label: 'Servicios', icon: Services },
  { href: '#', label: 'Autopartes & Accesorios', icon: CarParts },
  { href: '#', label: 'Baterías', icon: Battery },
  { href: '#', label: 'Empresa', icon: Company },
  { href: '#', label: 'Contacto', icon: Contact },
]

// Lista de enlaces a redes sociales con sus iconos correspondientes
const socialLinks = [
  { href: '#', label: 'Facebook', icon: Facebook },
  { href: '#', label: 'Instagram', icon: Instagram },
  { href: '#', label: 'LinkedIn', icon: Linkedin },
  { href: '#', label: 'TikTok', icon: Tiktok },
]
export default function MobileMenu() {
  // Estado para controlar la apertura y el cierre del panel del menú lateral
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Botón de activación (Hamburguesa) visible en pantallas móviles/tablets */}
      <button
        onClick={() => setIsOpen(true)}
        className='hover:bg-base-200 flex cursor-pointer items-center justify-center rounded-lg p-2 transition-colors duration-200'
        aria-label='Abrir menú de navegación'
      >
        <Hamburger className='size-7' />
      </button>

      {/* Overlay de fondo oscuro difuminado. Controla la visibilidad y transición de opacidad */}
      <div
        className={`fixed inset-0 z-50 min-h-screen bg-black/45 backdrop-blur-xs transition-opacity duration-300 ${
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
            // Resaltamos el enlace de 'Inicio' para fines ilustrativos de selección como en el diseño de referencia
            const isHighlighted = link.label === 'Inicio'

            return (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`group flex items-center gap-3.5 rounded-xl px-3 py-3 text-sm font-medium transition-all duration-200 ${
                  isHighlighted
                    ? 'bg-primary/5 text-primary'
                    : 'text-base-content/75 hover:bg-base-200/50 hover:text-primary'
                }`}
              >
                <Icon
                  className={`size-5 transition-transform duration-200 group-hover:scale-105 ${
                    isHighlighted
                      ? 'text-primary'
                      : 'text-base-content/40 group-hover:text-primary'
                  }`}
                />
                <span>{link.label}</span>
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
