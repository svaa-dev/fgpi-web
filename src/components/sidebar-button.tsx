import Hamburger from '@/icons/hamburger'
import Facebook from '@/icons/facebook'
import Instagram from '@/icons/instagram'
import Linkedin from '@/icons/linkedin'
import Tiktok from '@/icons/tiktok'

const navLinks = [
  { href: '#', label: 'Inicio' },
  { href: '#', label: 'Servicios' },
  { href: '#', label: 'Autopartes & Accesorios' },
  { href: '#', label: 'Baterías' },
  { href: '#', label: 'Empresa' },
  { href: '#', label: 'Contacto' },
]

const socialLinks = [
  { href: '#', label: 'Facebook', icon: Facebook },
  { href: '#', label: 'Instagram', icon: Instagram },
  { href: '#', label: 'LinkedIn', icon: Linkedin },
  { href: '#', label: 'TikTok', icon: Tiktok },
]

export default function SidebarButton() {
  return (
    <>
      <button>
        <Hamburger />
      </button>

      <div></div>
    </>
  )
}
