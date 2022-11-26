import React from "react";
import "./OrderSuccesfull.css";
// import {navigate} from "react";
import success from "../Assests/success.svg"
const OrderSuccessfull=()=>{
    return(
      

    <div className="success_container">
            <img
              style={{ width: "100px", height: "100px" }}
              src={success}
              alt="successfull"
            />
            <div className="order_success_msg">
              <p>Your order is successfully Placed.</p>
            </div>
            <div className="track_order_msg">
              <p>You can track the delivery in the "Orders" section.</p>
            </div>
            <div>
              <button
                onClick={() => {
                  // navigate("Go TO Orders");
                }}
                className="goto_order_button"
              >
                Go To Orders
              </button>
            </div>
          </div>
        
    )
            }
       export default OrderSuccessfull;     