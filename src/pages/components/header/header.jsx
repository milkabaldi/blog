import Link from 'next/link'
import Image from 'next/image'

export const Header = ({ data }) => {
  return (
    <header>
      <div>
      <div className="topNav">
        <Image
          src={'../../../../public/next.svg'}
          alt="NextJS Logo"
          width={50}
          height={50}
        />
        <nav>
          <ul>
            <li>
              <Link href="/" passHref>
                Home
              </Link>
            </li>
            <li>
              <Link href="/events" passHref>
                Events
              </Link>
            </li>
            <li>
              <Link href="/about-us" passHref>
                About Us
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <p className='title'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
      </div>

    </header>
  )
}
