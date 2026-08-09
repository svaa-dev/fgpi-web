import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'

// Propiedades base comunes para ambas variantes del componente
interface PropiedadesBase {
  children?: ReactNode
}

// Propiedades específicas para cuando el botón actúa como un enlace (etiqueta <a>)
type PropiedadesEnlace = PropiedadesBase &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string // Se requiere obligatoriamente 'href' para esta variante
  }

// Propiedades específicas para cuando actúa como un botón nativo (etiqueta <button>)
type PropiedadesBotonNativo = PropiedadesBase &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never // No debe permitirse la propiedad 'href' en esta variante
  }

// Tipo unión que combina ambas variantes posibles
export type ButtonProps = PropiedadesEnlace | PropiedadesBotonNativo

/**
 * Componente Button
 *
 * Renderiza una etiqueta <a> si se proporciona la propiedad 'href',
 * de lo contrario renderiza una etiqueta <button>.
 * No incluye diseño visual, solo la estructura lógica y el tipado.
 */
export default function Button(props: ButtonProps) {
  // Verificamos si la propiedad 'href' existe en las props
  if ('href' in props) {
    // Aplicamos casting explícito a PropiedadesEnlace para evitar que TypeScript
    // mezcle firmas de controladores de eventos de HTMLButtonElement en la etiqueta <a>.
    const { children, ...rest } = props as PropiedadesEnlace
    // Renderizamos como enlace
    {
      /* <a
            href='#contacto'
            className='bg-primary hover:bg-primary/90 text-primary-content inline-flex items-center justify-center rounded-lg border border-transparent px-6 py-2 text-sm font-bold tracking-wider uppercase transition-all duration-300 ease-out active:scale-95 md:text-base'
          >
            VER MÁS
          </a> */
    }
    return (
      <a
        className='bg-primary inline-block cursor-pointer rounded-lg px-6 py-2 text-sm font-bold transition-all duration-300 hover:brightness-80 md:text-base'
        {...rest}
      >
        {children}
      </a>
    )
  }

  // Aplicamos casting explícito a PropiedadesBotonNativo para garantizar un tipado limpio
  // de los atributos y controladores de eventos para la etiqueta <button>.
  const { children, type = 'button', ...rest } = props as PropiedadesBotonNativo
  return (
    <button
      className='bg-primary inline-block cursor-pointer rounded-lg px-6 py-2 text-sm font-bold transition-all duration-300 hover:brightness-80 md:text-base'
      type={type}
      {...rest}
    >
      {children}
    </button>
  )
}
