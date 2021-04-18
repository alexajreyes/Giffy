import React, { useEffect, useState } from 'react'
import getGifsTrending from 'services/getGifstrending'
import Categories from 'component/categories'
import useNearScreen from 'hook/useNearScreen'

function TrendingSearch() {
  const [trends, setTrends] = useState([])

  useEffect(function () {
    getGifsTrending().then(setTrends)
  }, [])
  return <Categories name="Tendencias" option={trends} />
}

export default function LazyTrending() {
  const { isNearScreen, fromRef } = useNearScreen({ distance: '200px' })

  return <div ref={fromRef}>{isNearScreen ? <TrendingSearch /> : null}</div>
}
