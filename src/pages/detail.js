import React, { useContext } from 'react'
import GifContex from 'contex/GifsContext'
import Gif from 'component/Gif'

function Detail({ params }) {
  const { gifs } = useContext(GifContex)

  const gif = gifs.find(singleGif => singleGif.id === params.id)

  return <Gif {...gif} />
}

export default Detail
