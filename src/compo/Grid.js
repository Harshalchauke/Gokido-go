import React from 'react'
import Gridtitle from './Gridtitle'

const Grid = (props) => {
  return (
    <>
    <div className='bg_grey'>
      <div className='container_30_60' >
        <div className='grid-title'>
            <span>
                <em>
                </em>
            </span>
            <h2>Choose from the most popular restaurants in your neighborhood.</h2>
            <p>Order, enjoy and support your local heroes!.</p>
            <a>All Restaurants</a>
        </div>
        <div className='grid row'>
        <Gridtitle pic='/images/g1.jpg' score='9.3' n1='Pearl of India' n2='Indisch, Vegan, Vegitarisch, Fitness' n3='Frankfurter Str. 171, 61118 Bad Vilbel' />
        <Gridtitle pic='/images/g2.jpg' score='9.3' n1='Aki Gesa' n2='Afrikanisch, Mediterran, Vegitarisch, Tapas' n3='Homburger Straße 180, 61118 Bad Vilbelt' />
        <Gridtitle pic='/images/g3.png' score='9.3' n1='Foodie Bar' n2='Indian,Thai,Continental' n3='Pardi Bhandara Road Nagpur' />
        <Gridtitle pic='/images/g4.jpg' score='9.3' n1='Bel Forno Pizza & Pasta' n2='Italienisch, Mediterran, Pizza, Pasta, Nudeln, Vegitarisch, Vegan, Deutsche Küche, Burger' n3='Lautenschlägerstraße 23 63450 Hanau' />
        <Gridtitle pic='/images/g5.jpg' score='9.3' n1='Mini Asia' n2='Indisch, Vegan, Vegitarisch, Fitness' n3='Hauptstrasse 21 61231 Bad Nauheim' />
        <Gridtitle pic='/images/g6.jpg' score='9.3' n1='Sushi Sensei' n2='Japanisch, Sushi, Fitness, Vegitarisch, Vegan, Fisch' n3='Hansaallee 162, 60320, Frankfurt' />
        <Gridtitle pic='/images/g7.jpg' score='9.3' n1='Rooftop Nagpur' n2='German,Indian,Thai,Italian,Chinese' n3='P.N.24,BHANDARA ROAD,NEAR HINDI SCHOOL,DURGA NAG' />
        <Gridtitle pic='/images/g8.jpg' score='9.3' n1='Eiscafé Venezia Bad Vilbel' n2='Italienisch, Mediterran' n3=' Frankfurter Str. 96, 61118 Bad Vilbel, Germany' />

        </div>



        <div className='banner'>
          <img src='images/banner.jpg'/>
          <div className='bannerwrapper opacity-mask'>
            <div>
              <small>GokidoGo Delivery</small>
              <h3>We Deliver to your Office</h3>
              <p>Enjoy a tasty food in minutes!</p>
              <button type="button" class="btns btn-success">Start Now!</button>
              {/* <a href='/' className='btn1 gradient'>Start Now!</a> */}
              {/* <button className="btn btn-outline-light" type="button" id="button-addon2">Start Now!</button> */}
            </div>
          </div>

        </div>






      </div>
    </div>

    </>
  )
}

export default Grid
