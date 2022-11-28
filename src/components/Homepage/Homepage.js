import { useNavigate } from "react-router-dom"
import "./Homepage.css"
import Header from "./Nav"
import { Footer } from './Footer'
import Footerhome from './Footerhome'
import Border from '../Border'
import { login } from "../api/api"
import { useRef, useState } from "react"

const HomePage = () => {

   const navigate = useNavigate()

   const [invalidEmailPhone, setInvalidEmailPhone] = useState(false)
   const [invalidPassword, setInvalidPassword] = useState(false)
   // const [invalidEmailPhone, setInvalidEmailPhone] = useState(false)

   const emailPhoneRef = useRef(null)
   const passwordRef = useRef(null)

   function validateLogin() {
      login(
         emailPhoneRef.current.value,
         passwordRef.current.value
      )
         .then((msg) => {
            console.log("token :: ", msg.data.token)
            localStorage.setItem('AUTH_TOKEN', msg.data.token)
            navigate('/orders')
         })
         .catch((err) => {
            console.log("error :: ", err.response.status)
            if (err.response.status === 404) {
               setInvalidEmailPhone(true)
            }
            else if (err.response.status === 401) {
               setInvalidPassword(true)
            }
         })
   }

   return <>
      {/* TO NAVBAR */}
      <Header />

      {/* HERO SECTION */}
      <div className="middle">
         <div className="left-box">
            <h2 className="name">Laundry <br />Service</h2>
            <p className="description">Doorstep Wash & Dryclean Service</p>
            <p className="question">Don’t Have An Account?</p>
            <button className="register"
               onClick={() => { navigate('/register') }}
            >Register
            </button>
         </div>
         <div className="right-box">
            <h2 className="signin">SIGN IN</h2>
            <div className="sinput">
               <input ref={emailPhoneRef} className="Email" type="text" name="Mobile/Email" placeholder="Mobile/Email" 
               onChange={()=>setInvalidEmailPhone(false)}
               />
               {invalidEmailPhone ? <p className="error-msg">Invalid email / phone number</p>
               : null}
               <div className="passdiv">
                  <input ref={passwordRef} className="pass" type="password" name="Password" placeholder="Password" 
                  onChange={()=>setInvalidPassword(false)}
                  />
                  <img className="img" src={require('./padlock.png')} alt="any" />
               </div>
               {invalidPassword ? <p className="error-msg">Invalid password</p>
               : null}

            </div>
            <span className="forget">Forget Password?</span>
            <div className="signIn-btn">
               <button
                  className="signinbtn"
                  onClick={validateLogin}
               >Sign In
               </button>
            </div>

         </div>
      </div>
      {/* FOOTER SECTION */}
      <Footer />
      <Footerhome />
      <Border />
   </>
}

export default HomePage