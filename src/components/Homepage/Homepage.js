import "./Homepage.css"


const Middle=()=>{
    return <>
    <div className="middle">
         <div className="left-box">
            <h2 className="name">Laundry <br/>Service</h2>
            <p className="description">Doorstep Wash & Dryclean Service</p>
            <p className="question">Don’t Have An Account?</p>
            <button className="register">Register</button>
         </div>
         <div className="right-box">
            <h2 className="signin">SIGN IN</h2>
            <div className="sinput">
            <input className="Email" type="text" name="Mobile/Email" placeholder="Mobile/Email"></input><br/>
            <input className="pass" type="password" name="Password" placeholder="Password"></input>
            </div>
            <span className="forget">Forget Password?</span>
            <button className="signinbtn">Sign In</button>
            
         </div>
    </div>
    </>
}

export default Middle