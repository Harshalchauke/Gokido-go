import React from 'react'

const Gridtitle = (props) => {
  return (
    <>
          <div className='col'>
            <div className='list_home'>
              <ul>
                <li>
                  <a href='/'>
                    <figure> <img src={props.pic} alt='' className='img'/>
                    </figure>
                    <div className='score'>
                    <i className="fa-solid fa-star starr"></i>
                    <strong>{props.score}</strong>
                    </div>
                    <h3>{props.n1} </h3>
                    <small>{props.n2} </small>
                    <ul>
                      <li>{props.n3} <br/>öffnet um 17:00</li>
                    </ul>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        
    </>
  )
}

export default Gridtitle
