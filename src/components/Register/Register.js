import React, { useRef } from 'react'
import './Register.css'
import Header from '../Homepage/Nav'
import { Footer } from '../Homepage/Footer'
import Footerhome from '../Homepage/Footerhome'
import Border from '../Border'
import { useNavigate } from 'react-router-dom'
import { register } from '../api/api'


const Register = () => {

  const navigate = useNavigate()
  const nameRef = useRef(null)
  const emailRef = useRef(null)
  const phoneRef = useRef(null)
  const stateRef = useRef(null)
  const districtRef = useRef(null)
  const addressRef = useRef(null)
  const pincodeRef = useRef(null)
  const passwordRef = useRef(null)

  // const [userInfo, setUserInfo] = useState({})

  function onRegisterHandler() {
    const userInfo = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      phoneNo: phoneRef.current.value,
      state: stateRef.current.value,
      district: districtRef.current.value,
      address: addressRef.current.value,
      pincode: pincodeRef.current.value,
      password: passwordRef.current.value,
    }

    register(userInfo)
      .then(res => {
        console.log(res)
        alert("Registration Successfull.")
        navigate('/')
      })
      .catch(err => console.log(err))

  }

  return (
    <>
      {/* TO NAVBAR */}
      <Header />

      {/* REGISTRATION SECTION */}
      <div className='regbody'>
        <div className='left'>
          <h2 className="rname">Laundry <br /> Service</h2>
          <p className="rdescription">Doorstep Wash & <br /> Dryclean Service</p>
          <p className="rquestion">Already Have Account</p>
          <button className="rlogin"
            onClick={() => { navigate('/') }}
          >Login
          </button>

        </div>
        <div className='right'>
          <h1 className='rhead'>REGISTER</h1>
          <div className='d1'>
            <input ref={nameRef} className='input' type="text" placeholder='Name' required />
            <input ref={emailRef} className='input' type="email" placeholder='E-mail' required />
          </div>
          <div className='d1'>
            <input ref={phoneRef} className='input' type="number" placeholder='Phone' required />
            <input ref={stateRef} className='input' type="text" placeholder='State' required />
          </div>
          <div className='d1'>
            <input ref={districtRef} className='input' type="text" placeholder='District' required />
            <input ref={addressRef} className='input' type="text" placeholder='Address' required />
          </div>
          <div className='d1'>
            <input ref={pincodeRef} className='input' type="Number" placeholder='Pincode' required />
            <input ref={passwordRef} className='input' type="password" placeholder='Password' required />
          </div>

          <span className='label'><input type="checkbox" required />I agree to Terms & Condition receiving marketing and promotional materials</span>
          <button className='regbtn'
            onClick={onRegisterHandler}
          >
            Register
          </button>
        </div>
      </div>

      {/* FOOTER SECTION */}
      <Footer />
      <Footerhome />
      <Border />
    </>
  )
}

export default Register