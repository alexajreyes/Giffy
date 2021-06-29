import React, { useEffect, useRef, useCallback } from 'react'
import ListOfGifs from 'component/ListOfGifs'
import { useGifs } from 'hook/useGifs'
import useNearScreen from 'hook/useNearScreen'
import debounce from 'just-debounce'

export default function SearchResult({ params }) {
  const { keyword } = params

  const { gifs, setPage } = useGifs({ keyword })
  const externalRef = useRef()
  const { isNearScreen } = useNearScreen({
    externalRef: externalRef,
    once: false,
  })

  // const handleNextPage = () => setPage(prevPage => prevPage + 1)

  // const handleNextPage = () => console.log('next Page')

  const debounceHandleNextPage = useCallback(
    debounce(() => setPage(prevPage => prevPage + 1), 200),
    []
  )
  useEffect(
    function () {
      console.log(isNearScreen)
      if (isNearScreen) debounceHandleNextPage()
    },
    [debounceHandleNextPage, isNearScreen]
  )
  return (
    <React.Fragment>
      <h3>{keyword}</h3>
      <ListOfGifs gifs={gifs} />
      <div id="visor" ref={externalRef}></div>
      {/* <button onClick={handleNextPage}>Get next page ...</button> */}
    </React.Fragment>
  )
}
