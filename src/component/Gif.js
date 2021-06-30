import React from 'react'
import 'style/gifs.css'
import { Link } from 'wouter'

function Gif({ id, title, url }) {
  return (
    <div className="Gifs">
      <Link
        href={`/gif/${id}`}
        className="Gifs-link
      "
      >
        <h4>{title}</h4>
        <img src={url} alt={title} />
      </Link>
    </div>
  )
}
export default React.memo(Gif)
