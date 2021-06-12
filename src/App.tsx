import React from 'react'
import './App.css'
import { useHeroes } from './utils/useHeroes'

function App(): React.ReactElement {
  const heroes = useHeroes()

  // useEffect(() => {
  //   console.log('heroes changed', heroes)
  // }, [heroes])

  return <div className="App">{heroes.length}</div>
}

export default App
