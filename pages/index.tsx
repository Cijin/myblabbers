import type { NextPage } from 'next'
import Head from 'next/head'

import { H1, List } from '../components'

const projectname = "myblabber's"

const Home: NextPage = () => {
  return (
    <div className="space-y-16">
      <Head>
        <title>{projectname}</title>
        <meta
          name="description"
          content={`${projectname}. blabbers of a curious dev`}
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center space-y-8">
        <H1 className="text-green-500">Notes to self</H1>
        <List />
      </main>
    </div>
  )
}

export default Home
