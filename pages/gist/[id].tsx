import type { NextPageContext } from 'next'
import { useQuery } from 'react-query'

import { getGist } from '../../services'

interface GistProps {
  id: string
}

const Gist = ({ id }: GistProps) => {
  const { data, isLoading, isSuccess } = useQuery([`gist:${id}`], () =>
    getGist(id)
  )

  const GistInfo = () => {
    return (
      <>
        <h1>{data.description}</h1>
      </>
    )
  }

  return (
    <>
      {isLoading && <h1>Loading . . .</h1>}
      {isSuccess && (
        <code>
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
