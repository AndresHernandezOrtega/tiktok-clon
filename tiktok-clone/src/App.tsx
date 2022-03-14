import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

import VideoPlayer from './components/player'

function App() {


  return (
    <div className="App">
      <main>
        <VideoPlayer></VideoPlayer>
      </main>
    </div>
  )
}

export default App
