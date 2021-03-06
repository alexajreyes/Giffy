import React from 'react'
import { Link } from 'wouter'

export default function Categories({ name, option = [] }) {
  return (
    <div>
      <ul>
        <h3>{name}</h3>
        {option.map(singleOption => (
          <li key={singleOption}>
            <Link to={`/search/${singleOption}`}>Gifs de {singleOption}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
