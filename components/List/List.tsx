import { useQuery } from 'react-query'
import Link from 'next/link'

import { getGists } from '../../services'

export const List = () => {
  const { data: gists, isLoading, isSuccess } = useQuery(['gists'], getGists)

  console.log(gists && gists[0])
  const ListItems = () =>
    gists &&
    gists.map((gist: any) => {
      return (
        <li key={gist.id}>
          <Link href={`/gist/${gist.id}`}>
            <a>{gist.description}</a>
          </Link>
        </li>
      )
    })

  return (
    <>
      {isLoading && <h1>Loading . . .</h1>}
      {isSuccess && (
        <ul>
          <ListItems />
        </ul>
      )}
    </>
  )
}
