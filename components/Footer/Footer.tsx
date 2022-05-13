import Link from 'next/link'

import { P1 } from '../Typography/Typography'

export const Footer = () => {
  return (
    <footer className="mt-auto container mx-auto">
      <P1>Author: Cijin Cherian</P1>
      <div className="flex space-x-4">
        <Link href="https://github.com/Cijin">
          <a className="text-lg hover:text-green-300 hover:underline underline-offset-4">
            Github
          </a>
        </Link>
        <Link href="https://www.linkedin.com/in/cijincherian/">
          <a className="text-lg hover:text-green-300 hover:underline underline-offset-4">
            LinkedIn
          </a>
        </Link>
      </div>
    </footer>
  )
}
