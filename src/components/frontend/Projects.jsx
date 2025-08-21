import React from 'react'
import Header from '../commonlayout/Header'
import Footer from '../commonlayout/Footer'
import Hero from '../commonlayout/Hero'
import projectImg from '../../assets/images/service-img-2.jpg';

const Projects = () => {
  return (
    <>
    <Header/>
    <main>
        <Hero 
            preHeading='Quality. Intigrity. Value' 
            heading='Projects' 
            text='We excel at transforming vision into reality through outstanding craftmanship and precise </br>attention to details. With years of experience and a dedication to quality ' 
        />

        <section-3 className='section-3 bg-light py-5'>
            <div className="container py-5">
                <div className="section-header text-center">
                    <span>Our Projects</span>
                    <h2>Discover our diverse range of projects</h2>
                    <p>We offer a diverse array of construction services, spanning residential, commercial and industrial.</p>
                </div>
                <div className="row pt-4">
                    <div className="col-md-4 col-lg-4">
                        <div className="item">
                            <div className="service-image">
                                <img src={projectImg} alt="" className='w-100' />

                            </div>
                            <div className="service-body">
                                <div className="service-title">
                                    <h3>Kolkata Project</h3>
                                </div>
                                <div className="service-content">
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</p>
                                </div>
                                <a href="#" className='btn btn-primary small'>Read More</a>
                            </div>
                        </div>

                    </div>
                    <div className="col-md-4 col-lg-4">
                        <div className="item">
                            <div className="service-image">
                                <img src={projectImg} alt="" className='w-100' />

                            </div>
                            <div className="service-body">
                                <div className="service-title">
                                    <h3>Delhi Project</h3>
                                </div>
                                <div className="service-content">
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</p>
                                </div>
                                <a href="#" className='btn btn-primary small'>Read More</a>
                            </div>
                        </div>

                    </div>
                    <div className="col-md-4 col-lg-4">
                        <div className="item">
                            <div className="service-image">
                                <img src={projectImg} alt="" className='w-100' />

                            </div>
                            <div className="service-body">
                                <div className="service-title">
                                    <h3>Spain Project</h3>
                                </div>
                                <div className="service-content">
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</p>
                                </div>
                               
                                    <a href="#" className='btn btn-primary small'>Read More</a>
                                
                            </div>
                        </div>

                    </div>
                    <div className="col-md-4 col-lg-4">
                        <div className="item">
                            <div className="service-image">
                                <img src={projectImg} alt="" className='w-100' />

                            </div>
                            <div className="service-body">
                                <div className="service-title">
                                    <h3>Mumbai Project</h3>
                                </div>
                                <div className="service-content">
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</p>
                                </div>
                                <a href="#" className='btn btn-primary small'>Read More</a>
                            </div>
                        </div>

                    </div>
                    <div className="col-md-4 col-lg-4">
                        <div className="item">
                            <div className="service-image">
                                <img src={projectImg} alt="" className='w-100' />

                            </div>
                            <div className="service-body">
                                <div className="service-title">
                                    <h3>Mumbai Project</h3>
                                </div>
                                <div className="service-content">
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</p>
                                </div>
                                <a href="#" className='btn btn-primary small'>Read More</a>
                            </div>
                        </div>

                    </div>
                    <div className="col-md-4 col-lg-4">
                        <div className="item">
                            <div className="service-image">
                                <img src={projectImg} alt="" className='w-100' />

                            </div>
                            <div className="service-body">
                                <div className="service-title">
                                    <h3>Mumbai Project</h3>
                                </div>
                                <div className="service-content">
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</p>
                                </div>
                                <a href="#" className='btn btn-primary small'>Read More</a>
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

export default Projects