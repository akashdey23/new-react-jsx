import React from 'react'
import "./Pagination.css"
const Pagination = ({pageNo, setPageNo }) => {
  const handleNext =() =>{
    setPageNo(pageNo + 1);
  }
  const handlePrev =() =>{
    if(pageNo > 1){
      setPageNo(pageNo - 1);
    }
    
  }
  return (
    <div className="pagination-container">

      <div className="pageButton" onClick={handlePrev}>{"<"}</div>
      {pageNo > 1 ? (<div className="pageButton">1</div>) : ""}
      
      <div className="pageButton">{pageNo}</div>
      <div className="pageButton">3</div>
      <div className="pageButton" onClick={handleNext}>{">"}</div>
    </div>
  );
}

export default Pagination