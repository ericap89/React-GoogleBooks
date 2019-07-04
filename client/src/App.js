import React from 'react'
import { BrowserRouter , Route } from 'react-router-dom'
import Home from './pages/Home'
import Saved from './pages/Saved'

const App =_ => {
  return(
    <BrowserRouter>
      <div>
        <Route exact path='/' component = { _ => <Home/> } />
        <Route path='/Saved' component = { _ => <Saved/> }/>
      </div>
    </BrowserRouter>
  )
}

export default App 