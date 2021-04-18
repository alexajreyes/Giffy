import React from 'react'
import 'style/gifs.css'
import { Link } from 'wouter'

export default function Gif({ id, title, url }) {
  return (
    <div className="gif_content">
      <Link href={`/gif/${id}`} className="gifs">
        <h4>{title}</h4>
        <img src={url} alt={title} />
      </Link>
    </div>
  )
}
