interface Props {
  className?: string
}

// Icono de Baterías (batería de coche con polos positivo y negativo)
export default function Battery({ className = 'size-6' }: Props) {
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
      <rect x='2' y='7' width='20' height='12' rx='2' ry='2' />
      <line x1='6' y1='7' x2='6' y2='4' />
      <line x1='18' y1='7' x2='18' y2='4' />
      {/* Signo menos (-) en el polo izquierdo */}
      <line x1='5' y1='13' x2='9' y2='13' />
      {/* Signo más (+) en el polo derecho */}
      <line x1='15' y1='13' x2='19' y2='13' />
      <line x1='17' y1='11' x2='17' y2='15' />
    </svg>
  )
}
