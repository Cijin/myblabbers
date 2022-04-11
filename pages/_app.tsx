import * as React from 'react'
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query'
import type { AppProps } from 'next/app'

import '../styles/globals.css'

function App({ Component, pageProps }: AppProps) {
  const [queryClient] = React.useState(() => new QueryClient())

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <div className="bg-zinc-900 min-h-screen text-white">
          <div className="container mx-auto py-20">
            <section className="flex item-center justify-center">
              <Component {...pageProps} />
            </section>
          </div>
        </div>
      </Hydrate>
    </QueryClientProvider>
  )
}

export default App
