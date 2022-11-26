import React, { useState } from 'react';
import "./ViewOrderSummary.css";

const ViewOrdersummary = () => {
 const products = [
    {
      productType: 'boxers',
      washType: ['machine', 'bleach'],
      price: 20,
      quantity: 2
    },
    {
      productType: 'shart',
      washType: ['machine', 'ironing'],
      price: 30,
      quantity: 5
    },
    {
      productType: 'T-shirt',
      washType: ['ironing', 'bleach'],
      price: 60,
      quantity: 3
    },

  ]



  let Pickup = 90;
  let subtotal = 0;
  return (<>
    <div className='main'>
      <div className='headsum'>
        <h2>Summery</h2>
        <span>X</span>
      </div>
      <div className='optionsum'>
        
          <p>Storelocation : Jpnagar</p>

        
        <p>Store Address:Near Phone Booth 10th,road</p>
        <p>Phone: 994599999</p>
      </div>
      <div className='order'>
        <h6>Order Detail</h6>
        <ul className='ordervar'>
          {
            products.map((item) => {
              subtotal = subtotal + (item.price * item.quantity);
              return (<li><span className='firstcol'>{item.productType}</span>
                <span className='middlecol'>{item.washType.join(",")}</span>
                <span className='lastcol'>{item.quantity} X {item.price}= <span className='multiply'>{item.quantity * item.price}</span> </span>
              </li>)
            })
          }
        </ul>
        <p className='subtotal'>Subtotal: <span className='fontweight'> {subtotal}</span></p>
        <p className='pickup'>Pickup charges: <span className='fontweight'>{Pickup}</span></p>
        <div className='total'>
          Total:  Rs {Pickup + subtotal}
        </div>
      </div>

      <div className='address'>
        <h6>Address</h6>
        <div className='addressbox'>
          <span className='addresshead'>HOME</span>
          <p>#223, 10th road, Jp Nagar, Bangalore</p>
        </div>
        
        
      </div>
      
  
    </div>

  </>

  )
}

export default ViewOrdersummary 
  ;