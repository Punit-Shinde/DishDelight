import React from 'react';
import noPage from "../../assets/nopage.png"
import "./NotFound.scss";
 
const NotFound = () => {
  return (
    <div className='not-found my-5'>
      <div className='container flex align-center justify-center'>
      <img src = {noPage} alt = "" />
        No food found.
      </div>
    </div>
  )
}

export default NotFound