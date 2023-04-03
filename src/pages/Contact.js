import React from "react";
import Wave from "react-wavify";

const Contact = () => {
  return (
    <>
      <main>
        <div className="hero_single2 inner_pages background-image">
          <img src="images/contact.jpg" className="bg"></img>
          <div className="opacity-mask">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-xl-9 col-lg-10 col-md-8">
                  <h1>Contact Us</h1>
                  <p>Connect with us</p>
                </div>
              </div>
            </div>
          </div>
          <div className="wave-topp wave-top10">
            <Wave
              fill="#fff"
              paused={false}
              options={{
                height: 2,
                amplitude: 20,
                speed: 0.15,
                points: 4,
              }}
            />
          </div>
          <div className="wave-topp wave-top20">
            <Wave
              fill="#f9fafb"
              paused={false}
              options={{
                height: 2,
                amplitude: 20,
                speed: 0.11,
                points: 4,
              }}
            />
          </div>
          <div className="wave-topp wave-top30">
            <Wave
              fill="#f9fafb"
              paused={false}
              options={{
                height: 2,
                amplitude: 20,
                speed: 0.25,
                points: 4,
              }}
            />
          </div>
        </div>

         <div className="bg_gray">
		    <div className="container margin_60_40">
		        <div className="row justify-content-center">
		            <div className="col-lg-4">
		                <div className="box_contacts">
						<i class="fa-regular fa-life-ring"></i>
		                    <h2>Support</h2>
		                    <a href="#0">+49 - 162 910 7481</a><br/><a href="#0">zerowaste@gokidogo.de</a>
		                </div>
		            </div>
		            <div className="col-lg-4">
		                <div className="box_contacts">
		                    <i class="fa-solid fa-location-dot"></i>
		                    <h2>Address</h2>
		                    <div>Go Kidogo Deutschland GmbH<br/>Kurmarkstraße 30 , 60437 Frankfurt am Main </div>
		                </div>
		            </div>
		            <div className="col-lg-4">
		                <div className="box_contacts">
						<i class="fa-solid fa-comment-sms"></i>
		                    <h2>CONTACT</h2>
		                    <a href="#0">+49 - 162 910 7481</a><br/><a href="#0">service@gokidogo.de</a>
		                </div>
		            </div>
		        </div>
		 
		    </div>
		  
		</div>
	

		<div className="container margin_60_20">
		    <h5 className="mb_5">Drop Us a Line</h5>
		    <div className="row">
		        <div className="col-lg-4 col-md-6 add_bottom_25">
		            <div id="message-contact"></div>
			            <form id="artist_contactform" method="post" autocomplete="off">
			                <div className="form-group">
			                    <input type="text" className="form-control" id="name" name="name" placeholder="Name" data-validation="required"/>
			                </div>
			                <div className="form-group">
			                    <input type="text" id="email" name="email" className="form-control" placeholder="Email" data-validation="email"/>
			                </div>
			                <div className="form-group">
			                    <input type="text" id="phone" name="phone" className="form-control" placeholder="Telephone" data-validation="number"/>
			                </div>
			                <div className="form-group">
			                    <textarea  placeholder="Message" name="Message" id="Message" data-validation="required" className="form-control"></textarea>
			                </div>
			                <div className="form-group">
			                    <input className="btn_1 gradientt full-width" type="submit" value="Submit" id="submit-contact"/>
			                </div>
			            </form> 
		        	</div>
		             <div className="col-lg-8 col-md-6 add_bottom_25"> 
		               <iframe className="map_contact" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39714.47749917409!2d-0.13662037019554393!3d51.52871971170425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondra%2C+Regno+Unito!5e0!3m2!1sit!2ses!4v1557824540343!5m2!1sit!2ses" allowfullscreen=""></iframe> 
		            </div> 
		        </div>
		    </div>  
      </main>
    </>
  );
};

export default Contact;
