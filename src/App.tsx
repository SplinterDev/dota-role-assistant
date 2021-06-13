import React from 'react'
import './App.css'
import Filters from './components/Filters/Filters'
import HeroesList from './components/HeroesList/HeroesList'

function App(): React.ReactElement {
  return (
    <div className="App">
      <Filters />
      <HeroesList />
    </div>
  )
}

export default App
