import React from "react"
import Back from "../common/Back"
import Heading from "../common/Heading"
import img from "../images/about.jpg"
import "./about.css"


const About = () => {
  return (
    <>
     {/* About us Who we are*/}

      <section className='about'>
        <Back name='About Us' title='About Us - Who We Are?' cover={img} />
        <div className='container flex mtop'>
        
        </div>
        <div className='container flex mtop'>
          <div className='left row'>
            <div>
            <Heading className='Heading2x' title='RentCircle' subtitle='Your Direct Path to Hassle-Free Rentals' />
            <p className='Aboutstory'> At RentCircle, we are passionate about simplifying the rental experience for both tenants and property owners. 
              <br />
              Our mission is to connect people with their ideal rental properties, making the process efficient and enjoyable.</p>
            </div>
            <Heading title='Who We Are!' subtitle='Check out our company story and work process' />
           <p className='Aboutstory'>RentCircle was founded by a team of real estate enthusiasts and technology experts who recognized the need for a better way to find and manage rental properties. With years of experience in the real estate industry and a deep understanding of modern technology, we set out to create a platform that would redefine the rental market.</p>
          </div>

          <div className='right row'>
            <img src='./immio.jpg' alt='' />
          </div>

      </div>
      
        
      </section>

      <hr className='aboutDivider1' />

    {/*Our Vision*/}
      <section className='about' id='visionTopPad'>
        <div className='container flex mtop'>
        </div>
        <section id='vision1'>
        <div className='container flex mtop' id='overlay'>
        <div className='left row' id>
            <img src='./images/logo5.png' alt='' className='visionLogo'/>
        </div>
        <div className='right row'>
        
        </div>
          <div className='right row' >
            <Heading title='Our Vision!' subtitle='vision statment' />

            <p className='Aboutstory'>We envision a world where renting a property is seamless, transparent, and accessible to everyone. <br /> Whether you're a tenant searching for your dream home or a property owner looking to fill vacancies, RentCircle is here to provide you with the tools and resources you need.</p>
            {/*<button className='btn2'>More About Us</button>*/}
          </div>
        </div>
      </section>
     
    </section>
    <hr className='aboutDivider1' />
      

    {/* What We Offer*/}
      <section className='about'>
  <div className='container flex mtop'>
  </div>
  <div className='container flex mtop'>
      <Heading title='Who We Are!' subtitle='Check out our company story and work process' />
    </div>
  <div className='container flex mtop' id='offerbalance'>
    <div>
      <h2 classname="H2offer">Comprehensive <br />Property Listings</h2>
      <img src='./images/icon/check-list.png' alt='' className='smallimage' />
      <p className='Aboutstory'>Browse a diverse range of rental properties, from apartments and single-family homes to commercial spaces and land listings. Our listings are continually updated to provide you with the latest options.</p>
      
    </div>

    <div className='left row'>
      
      <h2 classname="H2offer">User-Friendly <br />Experience</h2>
      <img src='./images/icon/employee.png' alt='' className='smallimage' />
      <p className='Aboutstory'>Our user-friendly website and mobile app make it easy to search for properties, view details, and connect with property owners or tenants.</p>
      
    </div>

    <div className='left row'>
      
      <h2 classname="H2offer">Secure <br />Transactions </h2>
     
      <img src='./images/icon/authentication.png' alt='' className='smallimage' />
      <p className='Aboutstory'>We prioritize your security. Our platform includes secure payment processing and privacy features to protect your sensitive information.</p>
      
    </div>

    <div className='left row'>
      
      <h2 classname="H2offer">Dedicated <br />Support</h2>
      <img src='./images/icon/call-center-agent.png' alt='' className='smallimage' />
      <p className='Aboutstory'>Our dedicated customer support team is here to assist you throughout your rental journey. Have questions or need assistance? We're just a message away.</p>
      
    </div>
    

  </div>
</section>
    </>
  )
}

export default About
