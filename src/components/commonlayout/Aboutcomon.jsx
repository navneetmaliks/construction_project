import React from 'react'
import AboutImg from '../../assets/images/imgthree.jpg';

const Aboutcomon = () => {
  return (
    <section className='section-2 py-5'>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <img src={AboutImg} className='w-100'/>
                    </div>
                    <div className="col-md-6">
                        <span>About Us</span>
                        <h2>Crafting structure that last a lifetime</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley .</p>
                        <p>Lorem Ipsum is simply dumAboutmy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default Aboutcomon