import React from 'react'
import './Hero.scss'
import { Hero as HeroType } from '../../hooks/useHeroes'

type Props = {
  hero: HeroType
}

const Hero = ({ hero }: Props): React.ReactElement => {
  const renderComplexity = (complexity: number): JSX.Element[] => {
    const indicators = []
    for (let i = 0; i < 3; i++) {
      indicators.push(
        <div
          key={i}
          className={`complexity-indicator ${complexity > i ? 'filled' : ''}`}
        ></div>,
      )
    }
    return indicators
  }

  return (
    <li className="Hero">
      <img className="avatar" src={hero.image} />
      <div className="hero-label">
        <img
          className="attr"
          src={`https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_${hero.attribute}.png`}
        />
        <h2>{hero.name}</h2>
      </div>
      <div className="hero-details">
        <div className="hero-complexity">
          Complexity: {renderComplexity(hero.complexity)}
        </div>
        <div className="roles-list">
          {hero.roles.Carry > 0 && <div className="roles-item">Carry</div>}
          {hero.roles.Support > 0 && <div className="roles-item">Support</div>}
          {hero.roles.Nuker > 0 && <div className="roles-item">Nuker</div>}
          {hero.roles.Disabler > 0 && (
            <div className="roles-item">Disabler</div>
          )}
          {hero.roles.Jungler > 0 && <div className="roles-item">Jungler</div>}
          {hero.roles.Durable > 0 && <div className="roles-item">Durable</div>}
          {hero.roles.Escape > 0 && <div className="roles-item">Escape</div>}
          {hero.roles.Pusher > 0 && <div className="roles-item">Pusher</div>}
          {hero.roles.Initiator > 0 && (
            <div className="roles-item">Initiator</div>
          )}
        </div>
      </div>
    </li>
  )
}

export default Hero
