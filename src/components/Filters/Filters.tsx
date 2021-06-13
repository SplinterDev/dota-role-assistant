import React, { useState } from 'react'
import './Filters.scss'

const Filters = (): React.ReactElement => {
  const [strFilter, setStrFilter] = useState(false)
  const [agiFilter, setAgiFilter] = useState(false)
  const [intFilter, setIntFilter] = useState(false)

  const [compl1, setCompl1] = useState(false)
  const [compl2, setCompl2] = useState(false)
  const [compl3, setCompl3] = useState(false)

  return (
    <div className="Filters">
      <h1>Filters heroes</h1>
      <div className="attr-filter">
        <h2>Attribute</h2>
        <img
          onClick={() => {
            setStrFilter((curr) => !curr)
          }}
          className={`option attr str ${strFilter ? 'active' : ''}`}
          src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_strength.png"
        />
        <img
          onClick={() => {
            setAgiFilter((curr) => !curr)
          }}
          className={`option attr agi ${agiFilter ? 'active' : ''}`}
          src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_agility.png"
        />
        <img
          onClick={() => {
            setIntFilter((curr) => !curr)
          }}
          className={`option attr int ${intFilter ? 'active' : ''}`}
          src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_intelligence.png"
        />
      </div>
      <div className="compl-filter">
        <h2>Complexity</h2>
        <div
          onClick={() => setCompl1((compl) => !compl)}
          className={`option compl compl-1 ${compl1 ? 'active' : ''}`}
        ></div>
        <div
          onClick={() => setCompl2((compl) => !compl)}
          className={`option compl compl-2 ${compl2 ? 'active' : ''}`}
        ></div>
        <div
          onClick={() => setCompl3((compl) => !compl)}
          className={`option compl compl-3 ${compl3 ? 'active' : ''}`}
        ></div>
      </div>
    </div>
  )
}

export default Filters
