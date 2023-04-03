import React from 'react';
import Mycard from './Mycard';
import './Sliders.css';



let box = document.querySelector('.product-container');

const btnp = () => {
  let width = box.clientWidth;
  box.scrollLeft = box.scrollLeft - width;
}
const btnn = () => {
  let width = box.clientWidth;
  box.scrollLeft = box.scrollLeft + width;
  console.log(box.clientWidth)

}


const Sliders = () => {

  
  
  return (
    <>
      <div className="container margin_30_60">
        <div className="main_title center stitle ">
          <span>
            <em></em>
          </span>
          <h2>Popular Categories</h2>
        </div>
      </div>
      <div className='product-slider'>
        <button className='pre-btn' onClick={btnp}>
          <i className="fa-solid fa-circle-arrow-left"></i>
        </button>
        <button className='next-btn' onClick={btnn}>
          <i className="fa-solid fa-circle-arrow-right"></i> 
        </button>


        <div className='product-container'>
          <Mycard imgs='/images/1.jpg' cardno='Pizza' />
          <Mycard imgs='/images/2.jpg' cardno='Sushi' />
          <Mycard imgs='/images/3.jpg' cardno='Burgher' />
          <Mycard imgs='/images/4.jpg' cardno='Vegiterian' />
          <Mycard imgs='/images/5.jpg' cardno='Chinese' />
          <Mycard imgs='/images/6.jpg' cardno='Mexican' />
          <Mycard imgs='/images/7.jpg' cardno='Nudeln' />
          <Mycard imgs='/images/8.jpg' cardno='Curry' />
          <Mycard imgs='/images/9.jpg' cardno='Vegan' />
          <Mycard imgs='/images/10.jpg' cardno='Halal' />

        </div>
      </div>

    </>
  )
}


export default Sliders

