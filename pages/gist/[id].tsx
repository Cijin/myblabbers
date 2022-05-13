import type { NextPageContext } from 'next'
import Link from 'next/link'
import { useQuery } from 'react-query'
import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/prism'

import { H1, Caption } from '../../components'

import { getGist } from '../../services'

function getLocaleDate(date: string): string {
  const event = new Date(date)

  return event.toLocaleDateString(undefined, {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

interface GistProps {
  id: string
}

const Gist = ({ id }: GistProps) => {
  const {
    data: gist,
    isLoading,
    isSuccess,
  } = useQuery([`gist:${id}`], () => getGist(id))

  const GistInfo = () => {
    if (!isSuccess) {
      return null
    }

    return (
      <div className="text-white space-y-8">
        <Link href="/">
          <a className="underline underline-offset-4 hover:text-green-500">
            Home
          </a>
        </Link>
        <header>
          <H1>{gist.description}</H1>
          <Caption className="italic">
            Updated: {getLocaleDate(gist.updated_at)}
          </Caption>
        </header>
        <section className="space-y-4">
          <ReactMarkdown
            components={{
              code({ node, inline, className, children, ...props }) {
                const match = /language-(\w+)/.exec(className || '')
                return !inline && match ? (
                  <SyntaxHighlighter
                    style={dracula}
                    language={match[1]}
                    PreTag="div"
                    {...props}
                  >
                    {String(children).replace(/\n$/, '')}
                  </SyntaxHighlighter>
                ) : (
                  <code className={className} {...props}>
                    {children}
                  </code>
                )
              },
            }}
          >
            {Object.values(gist.files)[0].content}
          </ReactMarkdown>
        </section>
      </div>
    )
  }

  return (
    <>
      {isLoading && <h1>Loading . . .</h1>}
      {isSuccess && (
        <code className="mb-2">
          <GistInfo />
        </code>
      )}
    </>
  )
}

export async function getServerSideProps(context: NextPageContext) {
  const { id } = context.query
  return {
    props: {
      id,
    },
  }
}

export default Gist
