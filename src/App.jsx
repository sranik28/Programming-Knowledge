// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Blog from './components/Blog/Blog'
import Header from './components/Header/Header'
import Question from './Question/Question'
import RightSite from './components/RightSite/RightSite'

function App() {

  return (
    <div className="App">
      <div>
        <div>
          <Header />
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-2 '>
          <div>
          <Blog />
          </div>
          <div>
            <RightSite/>
          </div>
        </div>
      </div>
      <Question/>
    </div>
  )
}

export default App
