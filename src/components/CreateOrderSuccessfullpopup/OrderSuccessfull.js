import React from "react";
import "./OrderSuccesfull.css";
// import {navigate} from "react";
import success from "../Assests/success.png"
import { useNavigate } from "react-router-dom";
const OrderSuccessfull = () => {

  const navigate = useNavigate()

  return (

    <div className="success-popup">
      <div className="success_container">
        <img
          style={{ width: "100px", height: "100px" }}
          src={success}
          alt="successfull"
        />
        <div className="order_success_msg">
          <p className="success-msg">Your order is successfully Placed.</p>
        </div>
        <div className="track_order_msg">
          <p>You can track the delivery in the "Orders" section.</p>
        </div>
        <div>
          <button
            onClick={() => {
              navigate('/orders')
            }}
            className="goto_order_button"
          >
            Go To Orders
          </button>
        </div>
      </div>
    </div>
  )
}
export default OrderSuccessfull;     