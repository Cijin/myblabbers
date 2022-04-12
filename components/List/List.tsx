import { useQuery } from 'react-query'
import Link from 'next/link'

import { getGists, Gist } from '../../services'

const ListItems = (items: Gist[]) =>
  items.map((gist) => {
    return (
      <li key={gist.id}>
        <Link href={`/gist/${gist.id}`}>
          <a className="text-lg hover:text-green-300 hover:underline underline-offset-4">
            {gist.description}
          </a>
        </Link>
      </li>
    )
  })

export const List = () => {
  const { data: gists, isLoading, isSuccess } = useQuery(['gists'], getGists)

  return (
    <>
      {isLoading && <h1>Loading . . .</h1>}
      {isSuccess && (
        <ul className="list-disc space-y-4 px-4">{ListItems(gists)}</ul>
      )}
    </>
  )
}
