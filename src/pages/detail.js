import React, { useContext } from 'react'
import GifContex from 'contex/GifsContext'
import Gif from 'component/Gif'
import useSingleGif from 'hook/useSingleGif'
import useSeo from 'hook/useSeo'
function Detail({ params }) {
  const { gif } = useSingleGif({ id: params.id })
  const title = gif ? gif.title : ''
  useSeo({ description: `Detail of ${title}`, title })

  if (!gif) return null
  return (
    <>
      <h3>{gif.title}</h3> <Gif {...gif} />
    </>
  )
}

export default Detail
