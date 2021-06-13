import React, { useEffect, useState } from 'react'
import './Filters.scss'
import { Attribute } from '../../hooks/useHeroes'

export type FiltersObject = {
  attribute: Attribute | null
  complexity: number
}

type Props = {
  onChange: (f: FiltersObject) => void
}

const Filters = ({ onChange }: Props): React.ReactElement => {
  const [attrFilter, setAttrFilter] = useState<Attribute | null>(null)
  const [compl, setCompl] = useState(0)

  useEffect(() => {
    onChange({
      attribute: attrFilter,
      complexity: compl,
    })
  }, [attrFilter, compl])

  return (
    <div className="Filters">
      <h1>Filters heroes</h1>
      <div className="attr-filter">
        <h2>Attribute</h2>
        <img
          onClick={() => {
            setAttrFilter((curr) => (curr === 'strength' ? null : 'strength'))
          }}
          className={`option attr str ${
            attrFilter === 'strength' ? 'active' : ''
          }`}
          src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_strength.png"
        />
        <img
          onClick={() => {
            setAttrFilter((curr) => (curr === 'agility' ? null : 'agility'))
          }}
          className={`option attr agi ${
            attrFilter === 'agility' ? 'active' : ''
          }`}
          src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_agility.png"
        />
        <img
          onClick={() => {
            setAttrFilter((curr) =>
              curr === 'intelligence' ? null : 'intelligence',
            )
          }}
          className={`option attr int ${
            attrFilter === 'intelligence' ? 'active' : ''
          }`}
          src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_intelligence.png"
        />
      </div>
      <div className="compl-filter">
        <h2>Complexity</h2>
        <div
          onClick={() => setCompl((oldCompl) => (oldCompl === 1 ? 0 : 1))}
          className={`option compl compl-1 ${compl >= 1 ? 'active' : ''}`}
        ></div>
        <div
          onClick={() => setCompl((oldCompl) => (oldCompl === 2 ? 0 : 2))}
          className={`option compl compl-2 ${compl >= 2 ? 'active' : ''}`}
        ></div>
        <div
          onClick={() => setCompl((oldCompl) => (oldCompl === 3 ? 0 : 3))}
          className={`option compl compl-3 ${compl >= 3 ? 'active' : ''}`}
        ></div>
      </div>
    </div>
  )
}

export default Filters
