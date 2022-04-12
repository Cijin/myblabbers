import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

// components
import { H1, List } from '../components'

const Home: NextPage = () => {
  return (
    <div className="space-y-16">
      <Head>
        <title>devblabber.</title>
        <meta
          name="description"
          content="devblabber. blabbers of a curious dev"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav>
        <Image
          src="/logo.png"
          className="rounded-full"
          height={50}
          width={50}
          alt="devblabber logo"
        />
      </nav>

      <main className="flex flex-col items-center justify-center space-y-8">
        <H1 className="text-green-500">Notes to self</H1>
        <List />
      </main>
    </div>
  )
}

export default Home
