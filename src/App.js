import React from 'react'
import { Route } from 'react-router-dom'
// import * as BooksAPI from './BooksAPI'
import MainPage from './MainPage'
import SearchPage from './SearchPage'
import './App.css'

class BooksApp extends React.Component {
  state = {}

  render() {
    return (
      <div className="app">
        <Route path="/search" component={SearchPage}/>
        <Route exact path="/" component={MainPage}/>
      </div>
    )
  }
}

export default BooksApp
