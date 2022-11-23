import React from 'react'
import './Register.css'

const Register = () => {
  return (
    <>
      <div className='regbody'>
        <div className='left'>
          <h2 className="rname">Laundry <br />Service</h2>
          <p className="rdescription">Doorstep Wash & <br/> Dryclean Service</p>
          <p className="rquestion">Already Have Account</p>
          <button className="rlogin">Login</button>

        </div>
        <div className='right'>
          <h1 className='rhead'>REGISTER</h1>
          <input type="text" placeholder='Name' ></input>
          <input type="number" placeholder='Phone' ></input>
          <input type="text" placeholder='District' ></input>
          <input type="Number" placeholder='Pincode' ></input>
          <input type="email" placeholder='E-mail' ></input>
          <input type="text" placeholder='State' ></input>
          <input type="text" placeholder='Address' ></input>
          <input type="password" placeholder='Password' ></input>
          <input type="checkbox"/>
          <span className='label'>I agree to Terms & Condition receiving marketing and promotional materials</span>
          <button className='regbtn'>Register</button>
        </div>
      </div>
    </>
  )
}

export default Register