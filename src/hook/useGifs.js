import { useContext, useState, useEffect } from 'react'
import getGifs from 'services/getGifs'
import GifsContext from 'contex/GifsContext'
import '../style/home.css'

const INITIAL_PAGE = 0

export function useGifs({ keyword } = { keyword: null }) {
  //estado de la paginacion
  const [page, setPage] = useState(INITIAL_PAGE)

  const { gifs, setGifs } = useContext(GifsContext)
  //recuperamos la keyword del localStorage
  const keywordToUse = keyword || localStorage.getItem('lastKeyword')

  useEffect(() => {
    getGifs({ keyword: keywordToUse }).then(gifs => {
      setGifs(gifs)
      //guardamos la keywork en el localStorage
      localStorage.setItem('lastKeyword', keyword)
    })
  }, [keyword, keywordToUse, setGifs])

  useEffect(
    function () {
      if (page === INITIAL_PAGE) return
      getGifs({ keyword: keywordToUse, page }).then(nextGifs => {
        setGifs(prevGifs => prevGifs.concat(nextGifs))
      })
    },
    [keywordToUse, page]
  )

  return { gifs, setPage }
}
