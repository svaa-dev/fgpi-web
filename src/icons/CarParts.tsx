interface Props {
  className?: string
}

// Icono de Autopartes & Accesorios (volante de coche)
export default function CarParts({ className = 'size-6' }: Props) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      className={className}
    >
      <circle cx='12' cy='12' r='10' />
      <circle cx='12' cy='12' r='3' />
      <line x1='12' y1='12' x2='12' y2='22' />
      <line x1='12' y1='12' x2='3.5' y2='8.5' />
      <line x1='12' y1='12' x2='20.5' y2='8.5' />
    </svg>
  )
}
