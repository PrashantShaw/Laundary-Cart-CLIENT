import React from 'react'
import './Footerhome.css'

const Footerhome = () => {
    return (
    <div className='mainfooter'>

        <div className='about'>
            <h3>ABOUT US</h3>
            <p>Doorstep Wash & Dryclean Service</p>
        </div>
        <div className='home'>
            <h4>Home</h4>
            <span>SignIn</span>
            <span>Register</span>
        </div>
        <div className='pricing'>
            <h4>Pricing</h4>
        </div>
        <div className='career'>
            <h4>Career</h4>
            <span>Blogs</span>
            <span>Create</span>
        </div>
        <div className='contact'>
            <h4>Contact</h4>
        </div>
        <div className='social'>
            <h4>SOCIAL MEDIA</h4>
            <div>
            <img className="imgfm" src={require('./footerhomeimg/facebook.png')} alt="any" />
            <img className="imgfm" src={require('./footerhomeimg/instagram.png')} alt="any" />
            <img className="imgfm" src={require('./footerhomeimg/linkedin.png')} alt="any" />
            </div>
        </div>
    </div>
    )
}

export default Footerhome;