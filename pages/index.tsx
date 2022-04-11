import type { NextPage } from 'next'
import Head from 'next/head'

// components
import { H1, List } from '../components'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>devblabber.</title>
        <meta
          name="description"
          content="devblabber. blabbers of a curious dev"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <H1>
          Welcome to <span className="text-green-500">devblabber!</span>
        </H1>
        <List />
      </main>
    </div>
  )
}

export default Home
