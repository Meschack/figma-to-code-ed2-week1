import Link from 'next/link'
import { Wrapper } from '../wrapper'
import { Logo } from '../ui/logo'

const links = [
  { label: 'Home', path: '/' },
  { label: 'Top sales', path: '/top-sales' },
  { label: 'Collections', path: '/collections' },
  { label: 'Our blog', path: '/blog' },
  { label: 'About', path: '/about' }
]

export const Header = () => {
  return (
    <header className='py-4 border-b border-neutral-50'>
      <Wrapper className='flex items-center justify-between py-4'>
        <Logo />

        <nav>
          <ul className='flex items-center gap-7 font-semibold text-base text-neutral-700'>
            {links.map((link) => (
              <li key={link.path}>
                <Link href={link.path}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className='flex items-center gap-5'>
          <button className='border-e-2 border-neutral-800 px-6.5 py-1'>
            Sign up
          </button>

          <button className='rounded-42 bg-neutral-800 py-2.5 px-6.5 text-base text-white font-semibold'>
            Connect Wallet
          </button>
        </div>
      </Wrapper>
    </header>
  )
}