import axios from 'axios'

import { Gist } from './models'

const GithubApiURL = 'https://api.github.com'
const username = process.env.username || ''

export const getGists = async (): Promise<Gist[]> => {
  const { data } = await axios({
    method: 'get',
    url: `${GithubApiURL}/users/${username}/gists`,
  })

  return data
}

export const getGist = async (id: string): Promise<Gist> => {
  const { data } = await axios({
    method: 'get',
    url: `${GithubApiURL}/gists/${id}`,
  })

  return data
}
