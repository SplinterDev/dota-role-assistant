import React from 'react'
import { useHeroes } from '../../hooks/useHeroes'
import './HeroesList.scss'
import Hero from '../Hero/Hero'

const HeroesList = (): React.ReactElement => {
  const heroes = useHeroes()
  if (heroes.length) {
    return (
      <ul className="HeroesList">
        {heroes.map((hero) => (
          <Hero key={hero.id} hero={hero} />
        ))}
      </ul>
    )
  } else {
    return <div>Loading...</div>
  }
}

export default HeroesList
