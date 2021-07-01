import { useGifs } from 'hook/useGifs'
import { useEffect, useState } from 'react'
import getSingleGif from 'services/getSingleGif'

export default function useSingleGif({ id }) {
  const { gifs } = useGifs()
  const gitFromCache = gifs.find(singleGif => singleGif.id === id)
  const [gif, setGif] = useState(gitFromCache)

  useEffect(
    function () {
      if (!gif) {
        //llamar al servicio
        getSingleGif({ id }).then(setGif)
      }
    },
    [gif, id]
  )

  return { gif }
}
