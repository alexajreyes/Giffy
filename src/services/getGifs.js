//consumiendo API
import { API_KEY, API_URL } from './setting'

const fromApiResponseToGifs = Apiresponse => {
  const { data = [] } = Apiresponse
  if ((Array.array = { data })) {
    const gifs =
      data &&
      data.map(image => {
        const { images, title, id } = image
        const { url } = images.downsized_medium
        return { id, title, url }
      })
    return gifs
  }
  return []
}

export default function getGifs({
  keyword = 'husky',
  limit = 5,
  page = 0,
} = {}) {
  const apiURL = `${API_URL}/gifs/search?api_key=${API_KEY}=${keyword}&limit=${limit}&offset=${
    page * limit
  }&rating=g&lang=en`

  return fetch(apiURL)
    .then(res => res.json())
    .then(fromApiResponseToGifs)
}
