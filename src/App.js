import React from 'react'
import './App.css'

import { Route, Link } from 'wouter'
import SearchResult from './pages/SearchResult'
import Home from './pages/home'
import Img_logo from './assets/img/alien-153542_640.png'
import Detail from './pages/detail'
import StaticContext from './contex/StaticContex'
import { GifsContextProvider } from './contex/GifsContext'

function App() {
  return (
    <StaticContext.Provider value={{ name: 'Alex', viaja: true }}>
      <React.Fragment>
        <div className="app">
          <section className="app-content">
            <Link to="/">
              <img className="img_logo" src={Img_logo} alt="/" />
            </Link>
            <GifsContextProvider>
              <Route component={Home} path="/" />
              <Route path="/search/:keyword" component={SearchResult} />
              <Route component={Detail} path="/gif/:id" />
            </GifsContextProvider>
          </section>
        </div>
      </React.Fragment>
    </StaticContext.Provider>
  )
}

export default App
