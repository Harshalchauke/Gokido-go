import React from 'react'
//import Typical from 'react-typical'
import Typewiter from 'typewriter-effect'
import Wave from 'react-wavify'
import { Link } from 'react-router-dom'


const Home = () => {
  // const state = {
  //   display: true,
  //   width: 600
  // };
  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 3,
  //   slidesToScroll: 1
  // };
  
  
  return (
    <>
      <div className='wrapper'>
        <h1>Delivery or Takeaway Food</h1>
        <div className='text'>
          <Typewiter
            options={{
              autoStart: true,
              loop: true,
              delay: 40,
              strings: [
                "with nice location",
                "with unique food"
              ]
            }} /> </div>

        {/* <div className="input-group mb-3">
          <input type="text" className="form-control" placeholder="Eneter your address or postal code" aria-label="Eneter your address or postal code" aria-describedby="button-addon2" />
          <button className="btn btn-outline-light" type="button" id="button-addon2">Search</button>
        </div> */}

                              <form method="post" id='search' action="#">
                                <div class="row g-0 custom-search-input">
                                    <div class="col-lg-10">
                                        <div class="form-group">
                                            <input class="form-control no_border_r pac-target-input" type="text" id="autocomplete" placeholder="Eneter your address or postal code" autocomplete="off"/>
                                        </div>
                                    </div>
                                    <div class="col-lg-2 btnw">
                                        <button class="btn_1 gradient change" type="submit">Search</button>
                                    </div>
                                </div>
                                <div class="col-lg-2 btnw-mob" style={{display:'none'}}>
                                    <button class="btn_1 gradient" type="submit">Search</button>
                                </div>
                             
                                {/* <div class="search_trends">
                                    <h5>Angesagte Lokale:</h5>
                                    <ul>
                                        <li><a href="#0">Pizza</a></li>
                                        <li><a href="#0">Sushi</a></li>
                                        <li><a href="#0">Burger</a></li>
                                        <li><a href="#0">Nudeln</a></li>
                                        <li><a href="#0">Indisch</a></li>
                                        <li><a href="#0">Thai uvm.</a></li>
                                    </ul>
                                </div> */}
                            </form>





        <div className="search_trends">
          <h5>Trending :</h5>
          <ul>
            <li Link to="/" style={{ textDecoration: 'none', color: '#555' }}>Pizza</li>
            <li Link to="/" style={{ textDecoration: 'none', color: '#555' }}>Sushi</li>
            <li Link to="/" style={{ textDecoration: 'none', color: '#555' }}>Burger</li>
            <li Link to="/" style={{ textDecoration: 'none', color: '#555' }}>Nudeln</li>
            <li Link to="/" style={{ textDecoration: 'none', color: '#555' }}>Indisch</li>
            <li Link to="/" style={{ textDecoration: 'none', color: '#555' }}>Thai uvm.</li>

          </ul>
        </div>
        <div className='wave-toph  wave-top1'>
        
           <Wave fill='white'
        paused={false}
        options={{
          height: 2,
          amplitude: 20,
          speed: 0.15,
          points: 4
          
        }}/> 
        </div>
        <div className='wave-toph wave-top2'>
        
        <Wave fill='white'
     paused={false}
     options={{
       height: 2,
       amplitude: 20,
       speed: 0.11,
       points: 4
       
     }}/> 
     </div>
     <div className='wave-toph wave-top3'>
        
        <Wave fill='white'
     paused={false}
     options={{
       height: 2,
       amplitude: 20,
       speed: 0.25,
       points: 4
       
     }}/> 
     </div>
      </div>
      
        {/* <div>
        <h2> Resizable Collapsible </h2>
        <button
          className="button"
          onClick={() =>
            this.setState({
              width: this.state.width + 100
            })
          }
        >
          {" "}
          increase{" "}
        </button>
        <button
          className="button"
          onClick={() =>
            this.setState({
              width: this.state.width - 100
            })
          }
        >
          {" "}
          decrease{" "}
        </button>
        <button
          className="button"
          onClick={() =>
            this.setState({
              display: !this.state.display
            })
          }
        >
          {" "}
          toggle{" "}
        </button>
        <div
          style={{
            width: this.state.width + "px",
            display: this.state.display ? "block" : "none"
          }}
        >
          <Slider {...settings}>
            <div>
              <h3>1</h3>
            </div>
            <div>
              <h3>2</h3>
            </div>
            <div>
              <h3>3</h3>
            </div>
            <div>
              <h3>4</h3>
            </div>
            <div>
              <h3>5</h3>
            </div>
            <div>
              <h3>6</h3>
            </div>
          </Slider>
        </div>
      </div> */}
    </>




  )
}

export default Home
