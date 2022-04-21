import { useState, useEffect } from 'react'
import { Heading } from '@chakra-ui/react'
import * as API from './services/launches'
import logo from "./assets/logo-spacex.png"

function App() {
  const [launches, setLaunches] = useState([])

  useEffect(() => {
    API.getAllLaunches().then(setLaunches)
  }, [])
  
  return (
    <>
      <img src={logo} width={300} />
      <h1> SpaceX Launches </h1>
      <section>
        {launches.map(launch => (
          <ul key={launch.flight_number}>
            {launch.mission_name} ({launch.launch_year})
          </ul>
        ))}
      </section>
    </>
  )
}

export default App
