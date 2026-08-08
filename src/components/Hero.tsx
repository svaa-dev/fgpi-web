import { useState, useEffect, useCallback, useRef } from 'react'
import HeroCars from '@/images/hero-cars.jpg'
import HeroBrands from '@/images/hero-brands.png'
import HeroWindshield from '@/images/hero-windshield.jpg'

export default function Hero() {
  // Lista de imágenes de fondo importadas
  const imagenesFondo = [HeroCars.src, HeroWindshield.src, HeroBrands.src]

  const [indiceActivo, setIndiceActivo] = useState(0)
  const [reproduciendo, setReproduciendo] = useState(true)
  const referenciaTemporizador = useRef<NodeJS.Timeout | null>(null)
  const TIEMPO_DIAPOSITIVA = 5000 // Duración de cada imagen de fondo (5 segundos)

  // Función para avanzar a la siguiente imagen de fondo
  const siguienteImagen = useCallback(() => {
    setIndiceActivo(prev => (prev + 1) % imagenesFondo.length)
  }, [imagenesFondo.length])

  // Función para retroceder a la imagen anterior
  const anteriorImagen = useCallback(() => {
    setIndiceActivo(
      prev => (prev - 1 + imagenesFondo.length) % imagenesFondo.length,
    )
  }, [imagenesFondo.length])

  // Gestionar el temporizador de reproducción automática
  useEffect(() => {
    if (reproduciendo) {
      referenciaTemporizador.current = setInterval(() => {
        siguienteImagen()
      }, TIEMPO_DIAPOSITIVA)
    }

    return () => {
      if (referenciaTemporizador.current) {
        clearInterval(referenciaTemporizador.current)
      }
    }
  }, [reproduciendo, siguienteImagen])

  // Reiniciar el temporizador al interactuar de forma manual con los controles
  const reiniciarTemporizador = () => {
    if (referenciaTemporizador.current) {
      clearInterval(referenciaTemporizador.current)
    }
    if (reproduciendo) {
      referenciaTemporizador.current = setInterval(() => {
        siguienteImagen()
      }, TIEMPO_DIAPOSITIVA)
    }
  }

  // const manejarClickAnterior = () => {
  //   anteriorImagen()
  //   reiniciarTemporizador()
  // }

  const manejarClickSiguiente = () => {
    siguienteImagen()
    reiniciarTemporizador()
  }

  const manejarClickIndicador = (indice: number) => {
    setIndiceActivo(indice)
    reiniciarTemporizador()
  }

  return (
    <section
      className='relative h-145 w-full overflow-hidden bg-zinc-950 select-none md:h-170 lg:h-187.5'
      onMouseEnter={() => setReproduciendo(false)}
      onMouseLeave={() => setReproduciendo(true)}
    >
      {/* Carrusel de imágenes de fondo con transiciones fluidas de opacidad */}
      <div className='absolute inset-0 h-full w-full'>
        {imagenesFondo.map((imagen, index) => {
          const estaActivo = index === indiceActivo
          return (
            <div
              key={index}
              className={`absolute inset-0 h-full w-full transition-opacity duration-1000 ease-in-out ${
                estaActivo
                  ? 'pointer-events-auto z-10 opacity-100'
                  : 'pointer-events-none z-0 opacity-0'
              }`}
            >
              {/* Imagen de fondo individual */}
              <img
                src={imagen}
                alt={`Fondo Forte Glass ${index + 1}`}
                className='absolute inset-0 h-full w-full transform object-cover transition-transform duration-5000 ease-out'
                style={{
                  transform: estaActivo ? 'scale(1.0)' : 'scale(1.1)',
                }}
              />

              {/* Degradado oscuro premium en el fondo de la diapositiva activa para legibilidad */}
              <div className='absolute inset-0 z-10 bg-linear-to-t from-black/95 via-black/75 to-black/45 md:bg-linear-to-r md:from-black/90 md:via-black/65 md:to-black/30' />
            </div>
          )
        })}
      </div>

      {/* Contenido textual estático e interactivo en primer plano (Fijo) */}
      <div className='wrapper pointer-events-none relative z-20 flex h-full flex-col items-start justify-center'>
        <div className='pointer-events-auto max-w-2xl text-white'>
          {/* Etiqueta superior de la marca */}
          <span className='text-primary mb-3 inline-block text-sm font-extrabold tracking-widest uppercase md:text-sm'>
            Forte Glass Perú Import
          </span>

          {/* Título de impacto principal */}
          <h1 className='mb-4 text-4xl leading-none font-black tracking-tight uppercase md:text-6xl lg:text-7xl'>
            ELEVA TU VIAJE
          </h1>

          {/* Breve descripción explicativa */}
          <p className='mb-6 max-w-xs text-sm leading-relaxed font-light text-zinc-300 sm:max-w-lg md:mb-8 md:max-w-xl md:text-base lg:text-lg'>
            Todo lo que necesitas encuéntralo aquí en Forte Glass. Brindamos
            soluciones en vidrios automotrices, autopartes y accesorios con la
            máxima garantía y calidad.
          </p>

          {/* Botón de Llamada a la Acción (CTA) */}
          <a
            href='#contacto'
            className='bg-primary hover:bg-primary/90 text-primary-content inline-flex items-center justify-center rounded-lg border border-transparent px-6 py-2 text-sm font-bold tracking-wider uppercase transition-all duration-300 ease-out active:scale-95 md:text-base'
          >
            VER MÁS
          </a>
        </div>
      </div>

      {/* Flechas flotantes de control lateral (Ocultas en móviles, visibles en Desktop) */}
      {/* <button
        onClick={manejarClickAnterior}
        className='hover:bg-primary group absolute top-1/2 left-6 z-30 hidden size-12 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-white/10 bg-black/30 text-white shadow-lg backdrop-blur-md transition-all duration-300 hover:border-transparent active:scale-90 md:flex'
        aria-label='Imagen de fondo anterior'
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={2.5}
          stroke='currentColor'
          className='size-5 transition-transform duration-300 group-hover:-translate-x-0.5'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M15.75 19.5L8.25 12l7.5-7.5'
          />
        </svg>
      </button> */}
      <button
        onClick={manejarClickSiguiente}
        className='hover:bg-primary group absolute top-1/2 right-6 z-30 hidden size-12 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-white/10 bg-black/30 text-white shadow-lg backdrop-blur-md transition-all duration-300 hover:border-transparent active:scale-90 md:flex'
        aria-label='Imagen de fondo siguiente'
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={2.5}
          stroke='currentColor'
          className='size-5 transition-transform duration-300 group-hover:translate-x-0.5'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M8.25 4.5l7.5 7.5-7.5 7.5'
          />
        </svg>
      </button>

      {/* Indicadores circulares (Puntos inferiores de navegación del fondo) */}
      <div className='absolute bottom-8 left-1/2 z-30 flex -translate-x-1/2 items-center gap-3'>
        {imagenesFondo.map((_, index) => {
          const estaActivo = index === indiceActivo
          return (
            <button
              key={index}
              onClick={() => manejarClickIndicador(index)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                estaActivo
                  ? 'bg-primary w-8'
                  : 'w-2.5 cursor-pointer bg-white/40 hover:bg-white/70'
              }`}
              aria-label={`Ver imagen de fondo ${index + 1}`}
            />
          )
        })}
      </div>
    </section>
  )
}
