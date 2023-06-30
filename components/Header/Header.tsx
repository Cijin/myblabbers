import Link from 'next/link'
import Image from 'next/image'

export const Header = () => {
  return (
    <nav className="flex h-16 items-center justify-between my-8">
      <Link href="/">
        <a>
          <Image
            src="/logo.png"
            className="rounded-full"
            height={50}
            width={50}
            alt="myblabbers logo"
          />
        </a>
      </Link>

      <Link href="/projects">
        <a className="rounded-md bg-white/10 px-3.5 py-2.5 text-lg font-bold text-white shadow-sm hover:bg-white/20 hover:text-green-300">
          Projects
        </a>
      </Link>
    </nav>
  )
}
