import React, { useState } from 'react'
import { useLocation } from 'wouter'
import '../style/home.css'

import ListOfGifs from 'component/ListOfGifs'
import { useGifs } from 'hook/useGifs'
// import Categories from '../component/categories'
import TrendingSearch from 'component/trendingSearch'
import Searchform from 'component/SearchForm'

export default function Home() {
  const [path, pushLocation] = useLocation()

  //----------
  const { gifs } = useGifs()

  //----------
  const handleSubmit = keyword => {
    //navegar a otra pagina
    pushLocation(`/search/${keyword}`)
  }

  return (
    <div className="content-home">
      <Searchform />
      <h3>Ultima busqueda</h3>
      <div className="container-gifs">
        <ListOfGifs gifs={gifs} />
        {/* <Categories name="tendencias" option={POPULAR_GIFS} /> */}
        <TrendingSearch onSubmit={handleSubmit} />
      </div>
      <br />
      {/* <button onClick={handleNextPage}>Next page ...</button> */}
    </div>
  )
}
