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

  const [readTime, setReadTime] = useState(0);

  const [bookMarkItems, setBookMarkItems] = useState([]);

  return (
    <div className="App">

      <div className="max-w-[1240px] mx-auto">
        <Header></Header>
      </div>

      <div className="max-w-[1200px] mx-auto rounded-md mt-6 md:grid md:grid-cols-3 gap-4">
        <Blog readTime={readTime} setReadTime={setReadTime} bookMarkItems={bookMarkItems} setBookMarkItems={setBookMarkItems}></Blog>
        <RightSite readTime={readTime} bookMarkItems={bookMarkItems}></RightSite>

      </div>
      <Question></Question>
    </div>
  )
}

export default App
