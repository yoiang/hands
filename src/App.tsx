import { useState } from 'react'
import './App.css'
import { HandInFrame } from './components/HandInFrame'
import { Information } from './components/Information'
import { hands } from './data/hands'

function App() {
  const [handIndex, setHandIndex] = useState(Math.floor(Math.random() * hands.length))
  const [hand, setHand] = useState(hands[handIndex])

  return (
    <main>
      <HandInFrame hand={hand} setHand={setHand} setHandIndex={setHandIndex} />
      <Information hand={hand} />
    </main>
  )
}

export default App
