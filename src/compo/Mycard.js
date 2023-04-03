

import React from 'react';

const Mycard = (props) => {
  return (
    <>
      <div className='mycard'>
        <span>98</span>
        <img src={props.imgs} alt='img' className='imgs' ></img>
        <div className='info'>
        <div className='title'><h4>{props.cardno}</h4>
        <h6>View all</h6></div>
        
        </div>
      </div>

    </>
  )
}

export default Mycard
