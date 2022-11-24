import React from 'react'
import './Register.css'

const Register = () => {
  return (
    <>
      <div className='regbody'>
        <div className='left'>
          <h2 className="rname">Laundry <br/> Service</h2>
          <p className="rdescription">Doorstep Wash & <br /> Dryclean Service</p>
          <p className="rquestion">Already Have Account</p>
          <button className="rlogin">Login</button>

        </div>
        <div className='right'>
          <h1 className='rhead'>REGISTER</h1>
          <div className='d1'>
            <input className='input' type="text" placeholder='Name'/>
            <input className='input' type="email" placeholder='E-mail'/>
          </div>
          <div className='d1'>
            <input className='input' type="number" placeholder='Phone'/>
            <input className='input' type="text" placeholder='State'/>
          </div>
          <div className='d1'>
            <input className='input' type="text" placeholder='District'/>
            <input className='input' type="text" placeholder='Address'/>
          </div>
          <div className='d1'>
            <input className='input' type="Number" placeholder='Pincode'/>
            <input className='input' type="password" placeholder='Password'/>
          </div>
          
          <span className='label'><input type="checkbox" />I agree to Terms & Condition receiving marketing and promotional materials</span>
          <button className='regbtn'>Register</button>
        </div>
      </div>
    </>
  )
}

export default Register