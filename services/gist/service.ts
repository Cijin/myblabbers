import axios from 'axios'

const GithubApiURL = 'https://api.github.com'
const username = 'cijin'

export const getGists = async () => {
  const { data } = await axios({
    method: 'get',
    url: `${GithubApiURL}/users/${username}/gists`,
  })

  return data
}

export const getGist = async (id: string) => {
  const { data } = await axios({
    method: 'get',
    url: `${GithubApiURL}/gists/${id}`,
  })

  return data
}
