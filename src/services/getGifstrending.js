//consumiendo API
import { API_KEY, API_URL } from './setting'

const fromApiResponseToGifs = ApiResponse => {
  const { data = [] } = ApiResponse
  return data
}
export default function getGifsTrending() {
  const apiURL = `${API_URL}/trending/searches?api_key=${API_KEY}`

  return fetch(apiURL)
    .then(res => res.json())
    .then(fromApiResponseToGifs)
}
