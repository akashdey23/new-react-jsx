import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ReactToast from './components/toast/reactToast'
import StarRating from './components/starRating/StarRating'
// import Pagination from './components/pagination/Pagination'
import Post from './components/pagination/Post'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        {/* <ReactToast /> */}
        {/* <StarRating starCount={10}/> */}
        <Post />
      </div>
    </>
  )
}

export default App
