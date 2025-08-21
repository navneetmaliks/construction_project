import React from 'react'
import Header from '../commonlayout/Header'
import Footer from '../commonlayout/Footer'
import {useForm} from 'react-hook-form'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();

    const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()
  const onSubmit=async(data) => {
    
    const resp= await fetch('http://localhost:8000/api/authenticate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    const result = await resp.json();
    if (result.status == 'false') {
        // Handle login failure, e.g., show error message
      
      toast.error(result.message, {
      position: "bottom-right"
    });
    } else {
      // Handle successful login, e.g., redirect to dashboard
      const userInfo={
        id:result.id,
        token:result.token,
        user:{
            userData:result.user,
            result:result
      }
    }
     
     
      localStorage.setItem('userInfo', JSON.stringify(userInfo));
       navigate('/admin/dashboard');
        toast.success(result.message, {
        position: "bottom-right"
      });
      window.location.reload(); // Reload the page to reflect the new state
      
    }
   
  }

  return (
    <>
    <Header/>
    <main>
      <div className="container">
        <section className="section-9 py-5">
          <div className="section-header text-center">
            <h2>Login</h2>
            <p>Please enter your credentials to login.</p>
          </div>
          <div className="row">
            <div className="col-md-6 offset-md-3">
              <div className="card shadow border-0 mb-3">
                <div className="card-body p-5">
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-4">
                      <label htmlFor="email" className='label-for'>Email</label>
                      <input
                      {
                        ...register('email', {
                          required: 'Email is required',
                          pattern: {
                            value: /^\S+@\S+$/i,
                            message: 'Invalid email address'
                          }
                        })  
                      } 
                      type="text" className={`form-control form-control-lg ${errors.email && 'is-invalid'}`} id='email' placeholder='Enter your email' />
                      {
                        errors.email && <span className='invalid-feedback'>{errors.email?.message}</span> 
                      }
                    </div>
                    <div className="mb-4">
                      <label htmlFor="password" className='label-for'>Password</label>
                      <input type="password"
                      {
                        ...register('password', {
                          required: 'Password is required',
                          minLength: {
                            value: 6,
                            message: 'Password must be at least 6 characters'
                          }
                        })  
                      }
                       className={`form-control form-control-lg ${errors.password && 'is-invalid'}`} id='password' placeholder='Enter your password' />
                       {
                        errors.password && <span className='invalid-feedback'>{errors.password?.message}</span> 
                       }
                    </div>
                    <button type='submit' className='btn btn-primary mt-3'>Login</button>
                  </form>
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

export default Login