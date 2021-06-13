import React, { useState } from 'react'
import './Filters.scss'

const Filters = (): React.ReactElement => {
  const [strFilter, setStrFilter] = useState(false)
  const [agiFilter, setAgiFilter] = useState(false)
  const [intFilter, setIntFilter] = useState(false)

  return (
    <div className="Filters">
      <h1>Filters heroes</h1>
      <div className="attr-filter">
        <h2>Attribute</h2>
        <img
          onClick={() => {
            setStrFilter((curr) => !curr)
          }}
          className={`attr str ${strFilter ? 'active' : ''}`}
          src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_strength.png"
        />
        <img
          onClick={() => {
            setAgiFilter((curr) => !curr)
          }}
          className={`attr agi ${agiFilter ? 'active' : ''}`}
          src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_agility.png"
        />
        <img
          onClick={() => {
            setIntFilter((curr) => !curr)
          }}
          className={`attr int ${intFilter ? 'active' : ''}`}
          src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_intelligence.png"
        />
      </div>
    </div>
  )
}

export default Filters
