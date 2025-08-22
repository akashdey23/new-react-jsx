import React, { useEffect, useState } from 'react'
// import Pagination from './Pagination'
import axios from 'axios';
import "./Pagination.css"
const Post = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const arr = axios.get("https://picsum.photos/v2/list?page=${pageNo}&limit=10").then((res) => setData(res.data));
    console.log(arr);

  }, [])

  return (
    <div className='container'>
      <div className='post-container'>
        {data.map((item, index) => {
          return <img src={item.download_url} height={150} width={100} />
        })}
      </div>

    </div>
  )
}

export default Post