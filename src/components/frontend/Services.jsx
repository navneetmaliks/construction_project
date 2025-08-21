import React from 'react'
import Header from '../commonlayout/Header'
import Footer from '../commonlayout/Footer'
import Hero from '../commonlayout/Hero'
import ServiceImg from '../../assets/images/service-img-1.jpg';
const Services = () => {
  return (
    <>
    <Header/>
    <main>
      <Hero 
      preHeading='Quality. Intigrity. Value' 
      heading='Services' 
      text="We excel at transforming vision into reality through outstanding craftmanship and precise </br> attention to details. With years of experience and a dedication to quality "
      />
    

        {/* ourservices */}
        <section-3 className='section-3 bg-light py-5'>
            <div className="container py-5">
                <div className="section-header text-center">
                    <span>Our Services</span>
                    <h2>Our Construction Services</h2>
                    <p>
                        We offer a diverse array of construction services. spanning residential commercial and industrial project.

                    </p>
                </div>
                <div className="row pt-4">
                    <div className="col-md-4 col-lg-4">
                        <div className="item">
                            <div className="service-image">
                                <img src={ServiceImg} alt="" className='w-100' />

                            </div>
                            <div className="service-body">
                                <div className="service-title">
                                    <h3>Speciality Construction</h3>
                                </div>
                                <div className="service-content">
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</p>
                                </div>
                                <a href="#" className='btn btn-primary'>Read More</a>
                            </div>
                        </div>

                    </div>
                    <div className="col-md-4 col-lg-4">
                        <div className="item">
                            <div className="service-image">
                                <img src={ServiceImg} alt="" className='w-100' />

                            </div>
                            <div className="service-body">
                                <div className="service-title">
                                    <h3>Speciality Construction</h3>
                                </div>
                                <div className="service-content">
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</p>
                                </div>
                                <a href="#" className='btn btn-primary'>Read More</a>
                            </div>
                        </div>

                    </div>
                  <div className="col-md-4 col-lg-4">
                        <div className="item">
                            <div className="service-image">
                                <img src={ServiceImg} alt="" className='w-100' />

                            </div>
                            <div className="service-body">
                                <div className="service-title">
                                    <h3>Speciality Construction</h3>
                                </div>
                                <div className="service-content">
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</p>
                                </div>
                                <a href="#" className='btn btn-primary'>Read More</a>
                            </div>
                        </div>

                    </div>
                   <div className="col-md-4 col-lg-4">
                        <div className="item">
                            <div className="service-image">
                                <img src={ServiceImg} alt="" className='w-100' />

                            </div>
                            <div className="service-body">
                                <div className="service-title">
                                    <h3>Speciality Construction</h3>
                                </div>
                                <div className="service-content">
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</p>
                                </div>
                                <a href="#" className='btn btn-primary'>Read More</a>
                            </div>
                        </div>

                    </div>
                </div>

            </div>

        </section-3>

        

    </main>
    <Footer/>
    </>
    
  )
}

export default Services