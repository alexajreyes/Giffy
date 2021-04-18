import React, { useState } from 'react'
import { useLocation } from 'wouter'
import '../style/home.css'

import ListOfGifs from 'component/ListOfGifs'
import { useGifs } from 'hook/useGifs'
// import Categories from '../component/categories'
import TrendingSearch from 'component/trendingSearch'

// const POPULAR_GIFS = ['The Walking Dead', 'League of Justice', 'gatos']

export default function Home() {
  const [keyword, setKeyword] = useState('')
  const [path, pushLocation] = useLocation()

  //----------
  const { gifs } = useGifs()

  //----------
  const handleSubmit = evt => {
    evt.preventDefault()
    pushLocation(`/search/${keyword}`)
  }

  const handleChange = evt => {
    //capturamos el vaolor
    setKeyword(evt.target.value)
  }

  return (
    <div className="content-home">
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Search a gif here ..."
          type="text"
          value={keyword}
          onChange={handleChange}
        />
      </form>
      <h3>Ultima busqueda</h3>
      <div className="container-gifs">
        <ListOfGifs gifs={gifs} />
        {/* <Categories name="tendencias" option={POPULAR_GIFS} /> */}
        <TrendingSearch />
      </div>
      <br />
      {/* <button onClick={handleNextPage}>Next page ...</button> */}
    </div>
  )
}
