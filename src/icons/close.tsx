interface Props {
  className?: string
}

// Icono de cierre (X) para el panel del menú móvil
export default function Close({ className = 'size-6' }: Props) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24' className={className}>
      <path
        fill='none'
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='2'
        d='M6 18L18 6M6 6l12 12'
      />
    </svg>
  )
}
