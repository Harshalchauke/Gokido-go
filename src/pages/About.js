import React from 'react'
import Wave from 'react-wavify'

const About = () => {
    
  return (
    <>
     <div>
        <div className="hero_single1 inner_pages background-image" >
            <img src='images/about.jpg' className='bgg'></img>
			<div className="opacity-mask">
				<div className="containerr">
					<div className="row justify-content-center">
						<div className="col-lg-10">
							<h1>About us</h1>
							<p>#WeProTest: How we started!...</p>
						</div>
					</div>
				
				</div>
			</div>
			<div className='wave-topp wave-top10'>
        
           <Wave fill='#fff'
        paused={false}
        options={{
          height: 2,
          amplitude: 20,
          speed: 0.15,
          points: 4
          
        }}/> 
        </div>
        <div className='wave-topp wave-top20'>
        
        <Wave fill='white'
     paused={false}
     options={{
       height: 2,
       amplitude: 20,
       speed: 0.11,
       points: 4
       
     }}/> 
     </div>
     <div className='wave-topp wave-top30'>
        
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


	

		<div className="container margin_30_20">	

				<div className="row justify-content-center align-items-center add_bottom_15">
					<div className="col-lg-6">
						<div className="box_about">
							<h3>#WeProTest: How we started!...</h3>
							<p>We all met in a programming className. Of course we wanted to program fun games. After the first 2-3 meetings we talked about plastic and the "FRIDAYS-FOR-FUTURE" demos. We all agreed that it is also imperative that individuals reconsider their consumption patterns. This also includes the use of technologies and service offers.</p>
							<p>For many of our daily "conveniences" we could pay a very high price in the future.</p>
							<p>The discussions were so moving and inspiring that our mentor suggested taking a small step towards a sustainable world together.</p>
							<p>Through a scrum session and other product discussions, we came up with the idea of ​​coding a sustainable delivery portal. Go Kidogo is therefore a good example of the fact that we not only have to rethink technologies for even more convenience, but especially in the present time for a just and sustainable world.</p>
							<p>At Go Kidogo, we value the essentials: quality of the food, fairness towards our restaurant partners and sustainable packaging.</p>
						</div>
					</div>
					<div className="col-lg-6 text-center d-none d-lg-block">
							<img src="images/we.jpg" alt="" className="img-fluid" width="100%" height="auto"/>
					</div>
				</div>
			
				<div className="row  add_bottom_15">
					<div className="col-lg-12">
						<div className="box_about">
							<h3>Go Kidogo - Small steps, big changes.</h3>
							<p className="lead">The problem</p>
							<p>On average, one person produces 226.5 kilograms of packaging waste every year.<br/>The consumption of service packaging (out-of-home consumption) in the catering industry increased by 325 percent from 2000 to 2020. According to a Statista forecast, a total of 17.1 million people will use online food delivery services this year. By 2023, the number is expected to rise to 21.6 million.</p>
							<p className="lead">Our approach</p>
							<p>We are sustainable and promote sustainability; Our restaurants deliver the food completely packaging-free.<br></br> With our high-quality reusable packaging, we are declaring war on disposable packaging for take-away food. Go Kidogo stands for sustainable management and consumption. (Green Economy).<br></br> With this approach we want to help to reduce the burden on the environment.<br></br>Go Kidogo supports its partners to become more sustainable and to reduce packaging waste and save costs. In addition, Go Kidogo offers its partners a completely fair and transparent price model.</p>
							<p className="lead">Our approach</p>
							<p>With Go Kidogo, we have created an environmentally friendly and sustainable online delivery portal for ordering meals by using a returnable deposit system for take-away meals.<br></br>Our reusable containers are made from 100% QUALITY PLASTIC and are also 100% recyclable. In addition, they are absolutely free of harmful substances.</p>
							<p className="lead">Our guiding principles</p>
							<p>according to the 17 Sustainable Development Goals (SDGs) of the United Nations:</p>
							<ul>
								<li >Don't go hungry: According to estimates by the World Health Organization (WHO), around 1.3 billion tons of food ends up in the trash every year. At the same time, 821.6 million people are starving – a scandal! We want to save food and thus fight hunger.</li>
								<li>Less inequality: We want to enable restaurant operators to participate in the digital economy. On reasonable terms and fair market conditions.</li>
								<li>Sustainable consumption: . With Gokidogo.de we want to encourage our fellow human beings to consume sustainably. Conscious enjoyment and conserving resources is our motto.</li>
								<li>Measures to protect the climate: Our planet needs help. With Gokidogo.de we are trying to make the ever-growing economic sector of food delivery services more climate-neutral. Imparting knowledge about climate protection is therefore an important part of our work.</li>
							</ul>
							<p className="lead">Our Team &amp; Vision</p>
							<p>Alexander, Luis and Rinku are the managing directors and Joel, Luisa, Nico, Vincent and Logan are the co-owners of Go Kidogo. We are a passionate group of young people who want to encourage people to rethink the way they consume. Our mission is to make the world a bit more sustainable and fairer.</p>
						</div>
					</div>
				</div>
			
			</div>
			
		
	 
            </div>
    </>
  )
}

export default About
