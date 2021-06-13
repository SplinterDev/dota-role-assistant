import React from 'react'
import './Hero.scss'
import { Hero as HeroType } from '../../hooks/useHeroes'

type Props = {
  hero: HeroType
}

const Hero = ({ hero }: Props): React.ReactElement => {
  return (
    <li className="Hero">
      <img className="avatar" src={hero.image} />
      <div className="hero-label">
        <img
          className="attr"
          src={`https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_${hero.primaryAttribute}.png`}
        />
        <h2>{hero.name}</h2>
      </div>
    </li>
  )
}

export default Hero
