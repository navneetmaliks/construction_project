import React from 'react'
import Header from '../commonlayout/Header'
import Footer from '../commonlayout/Footer'
import Hero from '../commonlayout/Hero'
import blogsImg from '../../assets/images/service-img-2.jpg';

const Blogs = () => {
  return (
    <>
    <Header/>
    <main>
        <Hero
             preHeading='Quality. Intigrity. Value' 
            heading='Blogs' 
            text='We excel at transforming vision into reality through outstanding craftmanship and precise </br>attention to details. With years of experience and a dedication to quality '
        />
        <section className="section-6 py-4 bg-light">
            <div className="container">
                <div className="section-header text-center">
                    <span>Blogs & News</span>
                    <h2>Articals & blog post</h2>
                    <p>We offer a diverse array of construction services, spanning residential, commercial and industrial.</p>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <div className="card shadow border-0">
                            <div className="card-img-top">
                                <img src={blogsImg} alt="" className='w-100' />
                            </div>
                            <div className="card-body p-4">
                               <div className='mb-3'>
                                 <a href="#" className='title'>Dummy Artical Title</a>
                               </div>
                               <a href="#" className='btn btn-primary small'>Read More</a>

                            </div>

                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card shadow border-0">
                            <div className="card-img-top">
                                <img src={blogsImg} alt="" className='w-100' />
                            </div>
                            <div className="card-body p-4">
                               <div className='mb-3'>
                                 <a href="#" className='title'>Dummy Artical Title</a>
                               </div>
                               <a href="#" className='btn btn-primary small'>Read More</a>

                            </div>

                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card shadow border-0">
                            <div className="card-img-top">
                                <img src={blogsImg} alt="" className='w-100' />
                            </div>
                            <div className="card-body p-4">
                               <div className='mb-3'>
                                 <a href="#" className='title'>Dummy Artical Title</a>
                               </div>
                               <a href="#" className='btn btn-primary small'>Read More</a>

                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </section>

    </main>
    <Footer/>
    </>
  )
}

export default Blogs