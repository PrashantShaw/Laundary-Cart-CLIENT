import React, { useState } from 'react';
import './Summery.css'
import { createOrder } from '../../api/api';
// import { useNavigate } from 'react-router-dom';


const Summery = ({ productInfo, setSuccessPopup, setCreateOrderSummary }) => {

  // const navigate = useNavigate()

  const [disable, setdisable] = useState(true)

  const obj = { 'Jp nagar': ['xyz', 123], 'Ajampada': ['xyza', 234], 'South Extension': ['xyzaa', 345], 'Mg road': ['xyzaaa', 456] }

  const priceList = {
    'Shirts': 50,
    'Trousers': 70,
    'Jeans': 100,
    'Boxers': 30,
    'Joggers': 40,
    'Others': 60,
  }


  const [orderInfo, setOrderInfo] = useState({
    orderId: "",
    storeLocation: "",
    city: "",
    storePhone: "",
    totalItems: "",
    price: "",
    status: "Ready to pickup",
    // products: [],
  })

  const products = productInfo
  console.log(productInfo, products)



  let Pickup = 90;
  let subtotal = 0;
  let totalItems = 0

  function onStoreSelect(e) {

    const orderId = 'OR' + Math.floor(Math.random() * 10000)
    setOrderInfo({
      orderId: orderId,
      storeLocation: e.target.value,
      city: obj[e.target.value][0],
      storePhone: obj[e.target.value][1],
      totalItems: totalItems,
      price: subtotal + Pickup,
      status: "Ready to pickup",
      products: productInfo
    })

    if (disable) {
      setdisable(false)
    }
  }

  function createOrderHandler() {
    console.log(orderInfo)
    createOrder(orderInfo)
      .then(res => {
        console.log(res.data)
        setSuccessPopup(true)
        setCreateOrderSummary(false)
        // alert('Your Order creation is successfull')
      })
      .catch(err => {
        alert(err.message)
      })
  }

  return (<>
    <div className='createOrderSummary'>
      <div className='main'>
        <div className='headsum'>
          <h3>Summery</h3>
          <span
            style={{ cursor: 'pointer' }}
            onClick={() => setCreateOrderSummary(false)}
          >X</span>
        </div>
        <div className='optionsum'>
          <select value={orderInfo.storeLocation} onChange={(e) => onStoreSelect(e)} >
            <option value="none" hidden>Store location</option>
            <option name="Jpnagar" value='Jp nagar' >Jp nagar</option>
            <option name="Ajampada" value='Ajampada' >Ajampada</option>
            <option name="SouthExtension" value='South Extension' >South Extension</option>
            <option name="Mgroad" value='Mg road' >Mg road</option>

          </select>
          <p>Store Address: {orderInfo.city}</p>
          <p>Phone: {orderInfo.storePhone}</p>
        </div>
        <div className='order'>
          <h6>Order Detail</h6>
          <ul className='ordervar'>
            {
              products.map((item) => {
                subtotal = subtotal + (priceList[item.productType] * item.quantity);
                totalItems += item.quantity;
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
          <div className='addressbox'>
            <span className='addresshead'>Other</span>
            <p>#223, 10th road, Jp Nagar, Bangalore</p>
          </div>
          <div className='Addnew'>
            <p>ADD NEW</p>
          </div>
        </div>
        <div className='cancel'>
          <button
            style={disable ? { background: '#8f92b2' } : {}}
            type='submit'
            disabled={disable}
            onClick={createOrderHandler}
          >
            Confirm
          </button>
        </div>

      </div>
    </div>
  </>

  )
}

export default Summery