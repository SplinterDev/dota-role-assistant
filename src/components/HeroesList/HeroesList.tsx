import React from 'react'
import { useHeroes } from '../../hooks/useHeroes'
import './HeroesList.scss'
import Hero from '../Hero/Hero'
import { FiltersObject } from '../Filters/Filters'

type Props = {
  filters: FiltersObject
}

const HeroesList = ({ filters }: Props): React.ReactElement => {
  const heroes = useHeroes()
  if (heroes.length) {
    let filteredHeroes = heroes

    if (filters.attribute) {
      filteredHeroes = heroes.filter(
        (hero) => hero.attribute === filters.attribute,
      )
    }
    if (filters.complexity) {
      filteredHeroes = heroes.filter(
        (hero) => hero.complexity === filters.complexity,
      )
    }

    return (
      <ul className="HeroesList">
        {filteredHeroes.map((hero) => (
          <Hero key={hero.id} hero={hero} />
        ))}
      </ul>
    )
  } else {
    return <div>Loading...</div>
  }
}

export default HeroesList
