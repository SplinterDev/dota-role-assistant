import React from 'react'
import heroes from './data/allHeroes.json'
import './App.css'

function App(): React.ReactElement {
  return (
    <div className="App">
      <ul>
        {heroes.map((item) => {
          const imageUrl =
            'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/'
          const imageName = item.name.slice(14) + '.png'
          return (
            <li key={item.id}>
              {item.name_loc}
              <img src={`${imageUrl}${imageName}`} />
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default App
