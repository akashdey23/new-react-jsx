import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ReactToast from './components/toast/reactToast'
import StarRating from './components/starRating/StarRating'
// import Pagination from './components/pagination/Pagination'
import Post from './components/pagination/Post'
import Pagination from './components/pagination/Pagination'
// import otp from './components/otp/otp'
import Otp from './components/otp/otp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        {/* <ReactToast /> */}
        {/* <StarRating starCount={10}/> */}
        {/* <Post/> */}
        <Otp />
      </div>
    </>
  )
}

export default App
