import React from 'react'
import ListOfGifs from 'component/ListOfGifs'
import { useGifs } from 'hook/useGifs'

export default function SearchResult({ params }) {
  const { keyword } = params

  const { gifs, setPage } = useGifs({ keyword })

  const handleNextPage = () => setPage(prevPage => prevPage + 1)
  return (
    <React.Fragment>
      <h3>{keyword}</h3>
      <ListOfGifs gifs={gifs} />
      <button onClick={handleNextPage}>Get next page ...</button>
    </React.Fragment>
  )
}
