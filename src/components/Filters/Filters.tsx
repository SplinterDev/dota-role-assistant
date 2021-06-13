import React, { useEffect, useState } from 'react'
import './Filters.scss'
import { Attribute, Roles } from '../../hooks/useHeroes'

export type FiltersObject = {
  attribute: Attribute | null
  complexity: number
  roles: Roles
}

type Props = {
  onChange: (f: FiltersObject) => void
}

const Filters = ({ onChange }: Props): React.ReactElement => {
  const [attrFilter, setAttrFilter] = useState<Attribute | null>(null)
  const [compl, setCompl] = useState(0)
  const [role, setRole] = useState<Roles>({
    Carry: 0,
    Support: 0,
    Nuker: 0,
    Disabler: 0,
    Jungler: 0,
    Durable: 0,
    Escape: 0,
    Pusher: 0,
    Initiator: 0,
  })

  useEffect(() => {
    onChange({
      attribute: attrFilter,
      complexity: compl,
      roles: role,
    })
  }, [attrFilter, compl, role])

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
      <div className="role-filter">
        <h2>Role</h2>
        <div className="role-options">
          <div
            className={`text-option ${role.Carry ? 'active' : ''}`}
            onClick={() => setRole((r) => ({ ...r, Carry: r.Carry ? 0 : 1 }))}
          >
            Carry
          </div>
          <div
            className={`text-option ${role.Support ? 'active' : ''}`}
            onClick={() =>
              setRole((r) => ({ ...r, Support: r.Support ? 0 : 1 }))
            }
          >
            Support
          </div>
          <div
            className={`text-option ${role.Nuker ? 'active' : ''}`}
            onClick={() => setRole((r) => ({ ...r, Nuker: r.Nuker ? 0 : 1 }))}
          >
            Nuker
          </div>
          <div
            className={`text-option ${role.Disabler ? 'active' : ''}`}
            onClick={() =>
              setRole((r) => ({ ...r, Disabler: r.Disabler ? 0 : 1 }))
            }
          >
            Disabler
          </div>
          <div
            className={`text-option ${role.Jungler ? 'active' : ''}`}
            onClick={() =>
              setRole((r) => ({ ...r, Jungler: r.Jungler ? 0 : 1 }))
            }
          >
            Jungler
          </div>
          <div
            className={`text-option ${role.Durable ? 'active' : ''}`}
            onClick={() =>
              setRole((r) => ({ ...r, Durable: r.Durable ? 0 : 1 }))
            }
          >
            Durable
          </div>
          <div
            className={`text-option ${role.Escape ? 'active' : ''}`}
            onClick={() => setRole((r) => ({ ...r, Escape: r.Escape ? 0 : 1 }))}
          >
            Escape
          </div>
          <div
            className={`text-option ${role.Pusher ? 'active' : ''}`}
            onClick={() => setRole((r) => ({ ...r, Pusher: r.Pusher ? 0 : 1 }))}
          >
            Pusher
          </div>
          <div
            className={`text-option ${role.Initiator ? 'active' : ''}`}
            onClick={() =>
              setRole((r) => ({ ...r, Initiator: r.Initiator ? 0 : 1 }))
            }
          >
            Initiator
          </div>
        </div>
      </div>
    </div>
  )
}

export default Filters
