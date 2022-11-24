import React ,{navigate} from "react";
import home  from "../Assests/home.svg"
import list from "../Assests/list.png"
import more from "../Assests/more.png"
import './CreatingOrder.css';

const TopNavBar = () => {
  const user= "";
    return (
    <>
      <div className="header_container">
        <div className="header_name">LAUNDRY</div>
        <div className="header_links">
          <div>Pricing</div>
          <div>Career</div>
          <div
            style={{
              display: "flex",

              color: "white",
              fontWeight: "600",
            }}
            className="user_name"
          >
            {user ? user.name : "User Name"}

          </div>
        </div>
      </div>
      

      <div className="sidebar_container">
        <img src={home} alt="home" />
        <div>
        <img src={more} alt="more" />
        </div>
        <div className="container">
        <img src={list} alt="list" />
       </div>
      </div>
      
              <button
                onClick={() => {
                  navigate("/createOrder");
                }}
                className="create-button"
              >
                Create
              </button>
              
    </>
  );
};

export default TopNavBar;
