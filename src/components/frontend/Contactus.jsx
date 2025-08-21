import React from 'react'
import Header from '../commonlayout/Header'
import Footer from '../commonlayout/Footer'
import Hero from '../commonlayout/Hero'

const Contactus = () => {
  return (
    <>
    <Header/>
    <main>
      <Hero
       preHeading='Quality. Intigrity. Value' 
            heading='Contact Us'
          text="We excel at transforming vision into reality through outstanding craftmanship and precise <br/> attention to details. With years of experience and a dedication to quality "
      />
      <div className="container">
        <section className="section-9 py-5">
        <div className="section-header text-center">
                  
                    <h2>Contact Us</h2>
                    <p>
                        We offer a diverse array of construction services. <br/>spanning residential commercial and industrial project.

                    </p>
                </div>
                <div className="row">
                  <div className="col-md-3">
                    <div className="card shadow border-0 mb-3">
                      <div className="card-body">
                        <h3>Call Us</h3>
                        <a href='#'>(888-000-0000)</a><br/>
                        <a href='#'>(222-123-12345)</a>

                        <h3 className='pt-3 mb-0'>you Can Write Us</h3>
                        <a href='#'>example@example.com</a><br/>
                        <a href='#'>info@example.com</a>

                        <h3 className='pt-3 mb-0'>Address:</h3>
                        <p>A8, Sector 62 <br/> noida </p>

                      </div>
                      

                    </div>

                  </div>
                  <div className="col-md-9">
                    <div className="card shadow border-0 mb-3">
                      <div className="card-body p-5">
                        <form action="">
                        <div className="row">
                          <div className="col-md-6 mb-4">
                            
                              <label htmlFor="name" className='label-for'>Name</label>
                              <input type="text" className='form-control form-control-lg' id='name' placeholder='Enter your name'/>
                            
                          </div>
                          <div className="col-md-6 mb-4">
                           
                              <label htmlFor="email">Email</label>
                              <input type="email" className='form-control form-control-lg' id='email' placeholder='Enter your email'/>
                            
                          </div>
                          <div className="col-md-6 mb-4">
                            
                              <label htmlFor="phone" className='label-for'>Phone</label>
                              <input type="text" className='form-control form-control-lg' id='Phone' placeholder='Enter your Phone Number'/>
                            
                          </div>
                          <div className="col-md-6 mb-4">
                           
                              <label htmlFor="subject">Subject</label>
                              <input type="email" className='form-control form-control-lg' id='subject' placeholder='Enter your subject'/>
                            
                          </div>
                          <div>
                            <label htmlFor="message">Message</label>
                            <textarea className='form-control form-control-lg' id='message' rows="5" placeholder='Enter your message'></textarea>
                          </div>
                          
                        </div>
                        <button type='submit' className='btn btn-primary mt-3'>Send Message</button>
                      </form>

                      </div>

                    </div>

                  </div>
                </div>

      </section>

      </div>
      
      {/* get html for card */}

    </main>
    <Footer/>
    </>
  )
}

export default Contactus