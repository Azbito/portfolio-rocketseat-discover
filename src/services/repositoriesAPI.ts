import axios from 'axios'

export async function getRepositories<T>(setData: (data: T) => void) {
  const { data } = await axios.get(
    'https://api.github.com/users/marcosdanielr/repos'
  )
  setData(data)
}
