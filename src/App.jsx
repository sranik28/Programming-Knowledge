// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Blog from './components/Blog/Blog'
import Header from './components/Header/Header'
import Question from './Question/Question'
import RightSite from './components/RightSite/RightSite'
import { useState } from 'react'

function App() {

  const [readTime , setReadTime]=useState(0);

  const[bookMarkItems,setBookMarkItems]=useState([])

  return (
    <div className="max-w-[1240px] mx-auto">
      <div>
        <div>
          <Header />
        </div>
        <div className='md:grid  md:grid-cols-3'>
        <Blog readingTime={readTime} setReadingTime={setReadTime} bookMarkItems={bookMarkItems} setBookMarkItems={setBookMarkItems}></Blog>
        <RightSite readingTime={readTime} bookMarkItems={bookMarkItems}></RightSite>
        </div>
      </div>
      <Question />
    </div>
  )
}

export default App
