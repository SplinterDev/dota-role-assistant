import React, { useState } from 'react'
import './App.css'
import Filters from './components/Filters/Filters'
import HeroesList from './components/HeroesList/HeroesList'
import { FiltersObject } from './components/Filters/Filters'

function App(): React.ReactElement {
  const [filters, setFilters] = useState<FiltersObject>({
    attribute: null,
    complexity: 0,
  })

  return (
    <div className="App">
      <Filters onChange={(filters) => setFilters(filters)} />
      <HeroesList filters={filters} />
    </div>
  )
}

export default App
