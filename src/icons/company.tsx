interface Props {
  className?: string
}

// Icono de Empresa (edificio corporativo)
export default function Company({ className = 'size-6' }: Props) {
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
      <path d='M3 21h18' />
      <path d='M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16' />
      <path d='M9 21v-4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v4' />
      <line x1='9' y1='7' x2='9.01' y2='7' />
      <line x1='15' y1='7' x2='15.01' y2='7' />
      <line x1='9' y1='11' x2='9.01' y2='11' />
      <line x1='15' y1='11' x2='15.01' y2='11' />
    </svg>
  )
}
