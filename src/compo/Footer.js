import React from 'react'
import { Link } from 'react-router-dom'
import Wave from 'react-wavify'

const Footer = () => {
  return (
    <>
      <footer>
       <div className='wave-top wave-top11'>
        
        <Wave fill='#d3e6c8'
     paused={false}
     options={{
       height: 2,
       amplitude: 20,
       speed: 0.15,
       points: 4
       
     }}/> 
     </div>
     <div className='wave-top wave-top22'>
     
     <Wave fill='#d3e6c8'
  paused={false}
  options={{
    height: 4,
    amplitude: 30,
    speed: 0.11,
    points: 4
    
  }}/> 
  </div>
  <div className='wave-top wave-top33'>
     
     <Wave fill='#d3e6c8'
  paused={false}
  options={{
    height: 3,
    amplitude: 20,
    speed: 0.20,
    points: 4
    
  }}/> 
  </div>
   
          <div className="container margin_60_40 fix_mobile">
            <div className="row">
                <div className="col-lg-3 col-md-6">
                    <h3 data-bs-target="#collapse_1">QUICK LINKS</h3>
                    <div className="dont-collapse-sm links" id="collapse_1">
                        <ul>
                                <li><Link className='linkk' to="about.php">About Us</Link></li>
                                <li><Link className='linkk' to="how_it_works.php">That's how it works</Link></li>
                                <li><Link className='linkk' to="contact.php">Contact</Link></li>
                                <li><Link className='linkk' to="imprint.php">Imprint</Link></li>
                                <li><Link className='linkk' to="conditions.php">Conditions</Link></li>
                                <li><Link className='linkk' to="privacy.php">Privacy</Link></li>
                                <li><Link className='linkk' to="cookie.php">Cookie</Link></li>
                                
                                
                            </ul>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <h3 data-bs-target="#collapse_2">CITY</h3>
                    <div className="dont-collapse-sm links" id="collapse_2">
                        <ul>
                            <li>
                                {/* <a href='/verpackungsfreiegastronomie/bad-vilbel/'>BAD VILBEL</a> */}
                                <Link to="/verpackungsfreiegastronomie/bad-vilbel/" className='linkk'>BAD VILBEL</Link></li>
                            <li><Link className='linkk' to="/verpackungsfreiegastronomie/hanau/">HANAU</Link></li>
                            <li><Link className='linkk' to="/verpackungsfreiegastronomie/mainz/">MAINZ</Link></li>
                            <li><Link className='linkk' to="/verpackungsfreiegastronomie/bad-nauheim/">BAD NAUHEIM</Link></li>
                            <li><Link className='linkk' to="/verpackungsfreiegastronomie/frankfurt-am-main/">FRANKFURT AM MAIN</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                        <h3 data-bs-target="#collapse_3">CONTACT</h3>
                    <div className="dont-collapse-sm contacts" id="collapse_3">
                        <ul>
                            <li><i class="fa-solid fa-house"></i> Go Kidogo Deutschland GmbH <br/>Kurmarkstraße 30, 60437 <br/> Frankfurt am Main</li>
                            <li><i class="fa-solid fa-mobile-screen-button"></i>+49 - 162 910 7481</li>
                            <li><i class="fa-regular fa-envelope"></i><Link to="#0">service@gokidogo.de</Link></li>
                            <li><i class="fa-regular fa-envelope"></i><Link to="#0">zerowaste@gokidogo.de</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                        <h3 data-bs-target="#collapse_4">Secure Payment Methods</h3>
                    <div className=" dont-collapse-sm" id="collapse_4">
                        <div id="newsletter">
                        <ul className="footer-selector clearfix">
                        <li><img src="images/cards_all.svg" data-src="images/cards_all.svg" alt="" width="230" height="35" className="lazy loaded" data-was-processed="true"/></li>
                    </ul>
                        </div>
                        <div className="follow_us">
                            <h5>Social Media</h5>
                            <ul>
                                <li><Link className='socials' to="https://twitter.com/GoKidogo" target="_blank"><img src="images/twitter_icon.svg" data-src="img/twitter_icon.svg" alt="" className="lazy loaded" data-was-processed="true"/></Link></li>
                                <li><Link className='socials' to="https://www.facebook.com/zerowasteDE/" target="_blank"><img src="images/facebook_icon.svg" data-src="img/facebook_icon.svg" alt="" className="lazy loaded" data-was-processed="true"/></Link></li>
                                <li><Link className='socials' to="https://www.instagram.com/gokidogo_de/?hl=de" target="_blank"><img src="images/instagram_icon.svg" data-src="img/instagram_icon.svg" alt="" className="lazy loaded" data-was-processed="true"/></Link></li>
                                <li><Link className='socials' to="#0"><img src="images/youtube_icon.svg" data-src="img/youtube_icon.svg" alt="" className="lazy loaded" data-was-processed="true"/></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- /row--> */}
            <hr></hr>
            <div className="row add_bottom_25">
                <div className="col-lg-6">
                    <ul className="footer-selector clearfix">
                    {/* <i class="fa-solid fa-globe"></i> */}
                        <li>
                            <div className="styled-select lang-selector">
                                <select name="lang" className="lang">
                                    <option value="">Select</option>
                                    <option value="en" selected="">English(EN)</option>
                                    <option value="de">Deutsch(DE)</option>
                                </select>
                            </div>
                        </li>
                        
                    </ul>
                </div>
                <div className="col-lg-6">
                    <ul className="additional_links">
                            <li><Link to="conditions.php">Terms and conditions</Link></li>
                            <li><Link to="privacy.php">Privacy</Link></li>
                        
                            <li><span>© Go Kidogo 2022</span></li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
    </>
  )
}

export default Footer
