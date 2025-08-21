import React from 'react'
import Header from '../commonlayout/Header'
import Footer from '../commonlayout/Footer'
import Sidebar from '../commonlayout/Sidebar'

const Dashboard = () => {
  return (
    <>
    <Header/>
    <main className='dashboard'>
      <div className="container">
        <section className="section-9 py-5">
         
          <div className="row">
            <Sidebar />
            <div className="col-md-9">
              <div className="card shadow border-0 mb-3">
                <div className="card-body p-5">
                  <h3>Dashboard Overview</h3>
                  <p>This is a placeholder for your dashboard content. You can add charts, tables, or any other components you need to manage your site.</p>
                  <p>Use the navigation on the left to access different sections of the admin panel.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
    <Footer/>
    </>
  )
}

export default Dashboard