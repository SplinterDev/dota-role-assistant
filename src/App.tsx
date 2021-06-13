import React, { useState } from 'react'
import './App.css'
import Filters from './components/Filters/Filters'
import HeroesList from './components/HeroesList/HeroesList'
import { FiltersObject } from './components/Filters/Filters'

function App(): React.ReactElement {
  const [filters, setFilters] = useState<FiltersObject>({
    attribute: null,
    complexity: 0,
    roles: {
      Carry: 0,
      Support: 0,
      Nuker: 0,
      Disabler: 0,
      Jungler: 0,
      Durable: 0,
      Escape: 0,
      Pusher: 0,
      Initiator: 0,
    },
  })

  return (
    <div className="App">
      <Filters onChange={(filters) => setFilters(filters)} />
      <HeroesList filters={filters} />
    </div>
  )
}

export default App
