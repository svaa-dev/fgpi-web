import HeroCars from '@/images/hero-cars.jpg'
import HeroBrands from '@/images/hero-brands.png'
import HeroWindshield from '@/images/hero-windshield.jpg'

export default function Hero() {
  return (
    <section>
      <img
        src={HeroWindshield.src}
        alt='Hero windshield'
        className='h-200 w-full object-cover'
      />
      <img src={HeroBrands.src} alt='Hero brands' />
      <img src={HeroCars.src} alt='Hero cars' />

      <div>
        <div>ELEVA TU VIAJE</div>
        <div>Todo lo que necesitas encuentralo aquí en Forte Glass</div>
        <button>VER MAS</button>
      </div>
    </section>
  )
}
