import React from 'react'
import './Hero.scss'
import { Hero as HeroType } from '../../hooks/useHeroes'

type Props = {
  hero: HeroType
}

const Hero = ({ hero }: Props): React.ReactElement => {
  return (
    <li className="Hero">
      <img src={hero.image} />
      <h2 className={hero.primaryAttribute}>{hero.name}</h2>
    </li>
  )
}

export default Hero
