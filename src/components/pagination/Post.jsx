import React, { useEffect, useState } from 'react'
import axios from 'axios';
import "./Pagination.css"
import Pagination from './Pagination';
const Post = () => {
  const [data, setData] = useState([]);
  const [pageNo, setPageNo] = useState(1);
  useEffect(() => {
    const arr = axios.get(`https://picsum.photos/v2/list?page=${pageNo}&limit=5`).then((res) => setData(res.data));
    console.log(arr);

  }, [pageNo])

  return (
    <div className='container'>
      <div className='post-container'>
        {data.map((item, index) => {
          return <img key={item.id} src={item.download_url} alt={item.author}/>
        })}
      </div>
      <Pagination pageNo={pageNo} setPageNo={setPageNo} />

    </div>
  )
}

export default Post