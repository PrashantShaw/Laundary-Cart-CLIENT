import React from 'react';
import './ViewOrderSummary.css'


const ViewOrderSummary = ({
  orderInfo,
  setOrderToView,
  setOrderNo,
  setShowDelPopup,
  setOrderIdToDel }) => {

  console.log(orderInfo)


  const priceList = {
    'Shirts': 50,
    'Trousers': 70,
    'Jeans': 100,
    'Boxers': 30,
    'Joggers': 40,
    'Others': 60,
  }

  let Pickup = 90;
  let subtotal = 0;


  function onDelHandler() {
    setOrderNo(orderInfo.orderId)
    setOrderIdToDel(orderInfo._id)
    setOrderToView(false)
    setShowDelPopup(true)
  }

  return (<>
    <div className='createOrderSummary'>
      <div className='main'>
        <div className='headsum'>
          <h3>Summery</h3>
          <span style={{ cursor: 'pointer' }}
            onClick={() => { setOrderToView('') }}
          >X</span>
        </div>
        <div className='optionsum'>
          <p>Store Location: {orderInfo.storeLocation}</p>
          <p>Store Address: {orderInfo.city}</p>
          <p>Phone: {orderInfo.storePhone}</p>
        </div>
        <div className='order'>
          <h6>Order Detail</h6>
          <ul className='ordervar'>
            {
              orderInfo.products.map((item) => {
                subtotal = subtotal + (priceList[item.productType] * item.quantity);
                // totalItems += item.quantity;
                return (<li><span className=''>{item.productType}</span>
                  <span className=''><i>{item.washType.join(", ")}</i></span>
                  <span className='lastcol'>{item.quantity} X {priceList[item.productType]}= <span className='multiply'>{item.quantity * priceList[item.productType]}</span> </span>
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
        <div className='summary-order-cancel'>
          <button
            type='submit'
            onClick={onDelHandler}
          >
            Cancel order
          </button>
        </div>

      </div>
    </div>
  </>

  )
}

export default ViewOrderSummary