import * as React from 'react'
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query'
import type { AppProps } from 'next/app'

import '../styles/globals.css'

function App({ Component, pageProps }: AppProps) {
  const [queryClient] = React.useState(() => new QueryClient())

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <div className="bg-slate-900 h-screen">
          <section className="flex item-center justify-center">
            <Component {...pageProps} />
          </section>
        </div>
      </Hydrate>
    </QueryClientProvider>
  )
}

export default App
