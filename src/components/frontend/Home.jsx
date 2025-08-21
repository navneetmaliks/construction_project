import React from 'react'

import ServiceImg from '../../assets/images/service-img-1.jpg';
import projectImg from '../../assets/images/service-img-2.jpg';
import iconImgone from '../../assets/images/icon-4.svg';
import iconImgtwo from '../../assets/images/icon-2.svg';
import iconImgthree from '../../assets/images/icon-3.svg';
import avtarOne from '../../assets/images/avtar-1.jpg';
import Header from '../commonlayout/Header';
import Footer from '../commonlayout/Footer';
import About from '../commonlayout/Aboutcomon';
import {Swiper, SwiperSlide}from 'swiper/react';
import 'swiper/css';
import { Pagination } from 'swiper/modules';
import 'swiper/css/pagination';
const Home = () => {
  return (
    <>
    <Header/>
    <main>
        <section className='section-1'>
            <div className='hero d-flex align-items-center'>
                <div className='container-fluid '>
                    <div className='text-center'>
                        <span>Welcome Amazing Construction</span>
                        <h1>Crafting dreams with <br></br>precision and excellence</h1>
                        <p>We excel at transforming vision into reality through outstanding craftmanship and precise <br></br>attention to details. With years of experience and a dedication to quality </p>
                        <div className='mt-3 '>
                            <a href='#' className='btn btn-primary'>Contact Now</a>
                        <a href='#' className='btn btn-secondary ms-2'>View Projects</a>

                        </div>
                    </div>
                </div>
            </div>
        </section>
{/* aboutus section */}

        <About/>

        {/* Our Services Section */}

        <section-3 className='section-3 bg-light py-5'>
            <div className="container-fluid py-5">
                <div className="section-header text-center">
                    <span>Our Services</span>
                    <h2>Our Construction Services</h2>
                    <p>
                        We offer a diverse array of construction services. spanning residential commercial and industrial project.

                    </p>
                </div>
                <div className="row pt-4">
                    <div className="col-md-3 col-lg-3">
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
                    <div className="col-md-3 col-lg-3">
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
                    <div className="col-md-3 col-lg-3">
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
                    <div className="col-md-3 col-lg-3">
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

        {/* why choose us */}
        <section className='section-4 py-5'>
            <div className="container py-5">
                 <div className="section-header text-center">
                    <span>Why Choose Us</span>
                    <h2>Discover our wide variety of projects</h2>
                    <p>We offer a diverse array of construction services, spanning residential, commercial and industrial.</p>
                </div>

                <div className="row pt-4">
                <div className="col-md-4" >
                    <div className="card shadow border-0 p-4">
                        <div className="card-icon">
                            <img src={iconImgone} alt="" />

                        </div>
                        <div className="card-title pt-3">
                            <h3>Cutting-Edge Solutions</h3>
                        </div>
                        <p>We offer a diverse array of construction services, spanning residential, commercial and industrial.</p>

                    </div>
                </div>
                <div className="col-md-4" >
                    <div className="card shadow border-0 p-4">
                        <div className="card-icon">
                            <img src={iconImgtwo} alt="" />

                        </div>
                        <div className="card-title pt-3">
                            <h3>Cutting-Edge Solutions</h3>
                        </div>
                        <p>We offer a diverse array of construction services, spanning residential, commercial and industrial.</p>

                    </div>
                </div>
                <div className="col-md-4" >
                    <div className="card shadow border-0 p-4">
                        <div className="card-icon">
                            <img src={iconImgthree} alt="" />

                        </div>
                        <div className="card-title pt-3">
                            <h3>Cutting-Edge Solutions</h3>
                        </div>
                        <p>We offer a diverse array of construction services, spanning residential, commercial and industrial.</p>

                    </div>
                </div>
            </div>

            </div>
            


        </section>

        

        {/* Our projects*/}
        <section-3 className='section-3 bg-light py-5'>
            <div className="container-fluid py-5">
                <div className="section-header text-center">
                    <span>Our Projects</span>
                    <h2>Discover our diverse range of projects</h2>
                    <p>We offer a diverse array of construction services, spanning residential, commercial and industrial.</p>
                </div>
                <div className="row pt-4">
                    <div className="col-md-3 col-lg-3">
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
                    <div className="col-md-3 col-lg-3">
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
                    <div className="col-md-3 col-lg-3">
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
                    <div className="col-md-3 col-lg-3">
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

        <section className="section-5 py-5">
            <div className="container">
                <div className="section-header text-center">
                    <span>Testimonials</span>
                    <h2>What People are saying about us</h2>
                    <p>We offer a diverse array of construction services, spanning residential, commercial and industrial.</p>
                </div>
                <Swiper
                modules={[Pagination]}
                    spaceBetween={50}
                    slidesPerView={3}
                    pagination={{ clickable: true }}
                    onSlideChange={()=>console.log('slide change')}
                    onSwiper={(swiper)=>console.log(swiper)}
                    >
                        <SwiperSlide>
                            <div className="card shadow border-0">
                                <div className="card-body p-4 meta">
                                    <div className="rating">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star" viewBox="0 0 16 16">
  <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star" viewBox="0 0 16 16">
  <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star" viewBox="0 0 16 16">
  <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star" viewBox="0 0 16 16">
  <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star" viewBox="0 0 16 16">
  <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z"/>
</svg>
                                    </div>
                                    <div className="content pt-3 pb-2">
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                                    </div>
                                    <hr />
                                    <div className="d-flex">
                                        <div>
                                            <img className='cardimg' src={avtarOne} alt="" width={50}/>
                                        </div>
                                        <div className='ps-3'>
                                            <div className="name"> Navneet Malik</div>
                                            <div className="designation">CEO</div>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="card shadow border-0">
                                <div className="card-body p-4 meta">
                                    <div className="rating">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star" viewBox="0 0 16 16">
  <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star" viewBox="0 0 16 16">
  <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star" viewBox="0 0 16 16">
  <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star" viewBox="0 0 16 16">
  <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star" viewBox="0 0 16 16">
  <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z"/>
</svg>
                                    </div>
                                    <div className="content pt-3 pb-2">
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                                    </div>
                                    <hr />
                                    <div className="d-flex">
                                        <div>
                                            <img className='cardimg' src={avtarOne} alt="" width={50}/>
                                        </div>
                                        <div className='ps-3'>
                                            <div className="name"> Navneet Malik</div>
                                            <div className="designation">CEO</div>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="card shadow border-0">
                                <div className="card-body p-4 meta">
                                    <div className="rating">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star" viewBox="0 0 16 16">
  <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star" viewBox="0 0 16 16">
  <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star" viewBox="0 0 16 16">
  <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star" viewBox="0 0 16 16">
  <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star" viewBox="0 0 16 16">
  <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z"/>
</svg>
                                    </div>
                                    <div className="content pt-3 pb-2">
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                                    </div>
                                    <hr />
                                    <div className="d-flex">
                                        <div>
                                            <img className='cardimg' src={avtarOne} alt="" width={50}/>
                                        </div>
                                        <div className='ps-3'>
                                            <div className="name"> Navneet Malik</div>
                                            <div className="designation">CEO</div>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="card shadow border-0">
                                <div className="card-body p-4 meta">
                                    <div className="rating">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star" viewBox="0 0 16 16">
  <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star" viewBox="0 0 16 16">
  <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star" viewBox="0 0 16 16">
  <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star" viewBox="0 0 16 16">
  <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star" viewBox="0 0 16 16">
  <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z"/>
</svg>
                                    </div>
                                    <div className="content pt-3 pb-2">
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                                    </div>
                                    <hr />
                                    <div className="d-flex">
                                        <div>
                                            <img className='cardimg' src={avtarOne} alt="" width={50}/>
                                        </div>
                                        <div className='ps-3'>
                                            <div className="name"> Navneet Malik</div>
                                            <div className="designation">CEO</div>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </SwiperSlide>
                </Swiper>

            </div>
        </section>

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
                                <img src={projectImg} alt="" className='w-100' />
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
                                <img src={projectImg} alt="" className='w-100' />
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
                                <img src={projectImg} alt="" className='w-100' />
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

export default Home