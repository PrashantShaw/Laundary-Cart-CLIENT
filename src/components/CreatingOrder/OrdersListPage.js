import React, { useEffect, useState } from "react";
import home from "../Assests/home.svg"
import list from "../Assests/list.png"
import more from "../Assests/more.png"
import Border from "../Border";
import './OrdersListPage.css';
import { getOrders, deleteOrder } from '../api/api'
import { useNavigate } from "react-router-dom";
import logout from "../Assests/power.png"
import ViewOrdersummary from "../ViewOrderSummary/ViewOrderSummary";

const OrdersListPage = () => {

  const [ordersList, setOrdersList] = useState([])
  const [showDelPopup, setShowDelPopup] = useState(false)
  const [orderNo, setOrderNo] = useState('')
  const [orderIdToDel, setOrderIdToDel] = useState('')
  const [orderToView, setOrderToView] = useState('')

  const navigate = useNavigate()

  // const ordersCount = 0
  const ordersCount = ordersList.length

  // console.log(ordersList)

  useEffect(() => {
    getOrders()
      .then(res => {
        if (res.name === "AxiosError" || !res.data) {
          alert("You are not Authorized, Please login to continue")
          navigate('/')
        }
        setOrdersList(res.data)
        console.log(res.data)
      })
      .catch(err => {
        alert(err.message)
      })
    // eslint-disable-next-line
  }, [showDelPopup])


  function deleteOrderHandler(id, orderId) {
    console.log("order to be deleted :: ", id)
    setOrderNo(orderId)
    setShowDelPopup(true)
    setOrderIdToDel(id)
  }

  return (
    <div className="orders-container">
      <div className="header">
        <p className="side-name">LAUNDRY</p>
        <ul className="ul">
          <li>Pricing</li>
          <li>Career</li>
          <li>
            <div className="user-logout">
              <img className="logout-btn" src={logout} alt='logout'
                onClick={() => {
                  let text = "Confirm logout";
                  if (window.confirm(text) === true) {
                    localStorage.clear()
                    navigate('/')
                  }
                }}
              />
              <span>User Name</span>
            </div>
          </li>
        </ul>
      </div>

      <div className="sidebar_container" style={{ zIndex: 1000 }}>
        <div className="pad-left">
          <img
            onClick={() => navigate('/orders')}
            style={{ cursor: 'pointer' }}
            src={home} alt="home" />
        </div>
        <div className="pad-left">
          <img
            onClick={() => navigate('/create')}
            style={{ cursor: 'pointer' }}
            src={more} alt="more" />
        </div>
        <div className="container pad-left">
          <img
            onClick={() => navigate('/create')}
            style={{ cursor: 'pointer' }}
            src={list} alt="list" />
        </div>
      </div>

      <div className="orders-container">
        <div className="count-search">
          <h3 className="orders-count">Orders | {ordersCount}</h3>
          <div className="create-search">
            {ordersCount > 0 &&
              <button className="create-btn"
                onClick={() => { navigate('/create') }}
              >
                Create
              </button>}
            <div className="search-bar">
              <img src={require('../Assests/search.jpg')} alt="search" />
              <input className="search" />
            </div>
          </div>
        </div>
        {/* --------------ORDERS LIST COMPONENT---------------- */}
        {
          !ordersCount ?
            <div className="no-orders-div">
              <p>No Orders available</p>
              <button className="create-btn"
                onClick={() => { navigate('/create') }}
              >
                Create
              </button>
            </div>
            :
            <div className="orders-table">
              <table>
                <thead>
                  <tr className="header-row">
                    <th>Order Id</th>
                    <th>Order Date & TIme</th>
                    <th>Store Location</th>
                    <th>City</th>
                    <th>Store Phone</th>
                    <th>Total Items</th>
                    <th>Price</th>
                    <th>Status</th>
                    <th>Cancel Order</th>
                    <th>View</th>
                  </tr>
                </thead>
                <tbody>

                  {ordersList.map((order, idx) => {
                    return <tr className="order-row" key={idx}>
                      <td>{order.orderId}</td>
                      <td>{order.orderDateTime}</td>
                      <td>{order.storeLocation}</td>
                      <td>{order.city}</td>
                      <td>{order.storePhone}</td>
                      <td>{order.totalItems}</td>
                      <td>{order.price}</td>
                      <td>{order.status}</td>
                      <td className="cancel-order"
                        onClick={() => {
                          deleteOrderHandler(order._id, order.orderId)
                        }}
                      >Cancel Order
                      </td>
                      <td>
                        <img
                          className="view-icon"
                          src={require('../Assests/view.png')}
                          alt="eye"
                          onClick={() => setOrderToView(order)}
                        />
                      </td>
                    </tr>

                  })}
                </tbody>
              </table>
            </div>
        }
      </div>
      <Border />
      {/* -----------DELETE ORDER COMPONENT--------------- */}
      <div className="cancelOrder-container"
        style={showDelPopup ? {} : { display: 'none' }}
      >
        <div className="delete-popup">
          <div className="cancel-nav">
            <p>Alert</p>
            <p
              style={{ cursor: 'pointer' }}
              onClick={() => {
                setShowDelPopup(false)
                setOrderIdToDel('')
              }}
              className="close-delete">X</p>
          </div>
          <img className="alert-img" src={require('../Assests/warning.png')} alt="alert" />
          <div className="delete-msgAndBtn">
            <p>Are you sure want to cancel the oreder No: {orderNo}</p>
            <button className="delete-proceed-btn"
              onClick={() => {

                deleteOrder(orderIdToDel)
                  .then(res => {
                    if (res.name === "AxiosError") {
                      alert("Order not found")
                    }
                    console.log(res.data)
                    setShowDelPopup(false)
                  })
                  .catch(err => {
                    alert(err.message)
                  })
              }}
            >
              Proceed
            </button>
          </div>
        </div>
      </div>
      {/* ------------ VIEW ORDER SUMMARY PAGE--------------*/}
      {orderToView ?
        <ViewOrdersummary
          orderInfo={orderToView}
          setOrderToView={setOrderToView}
          setOrderNo={setOrderNo}
          setShowDelPopup={setShowDelPopup}
          setOrderIdToDel={setOrderIdToDel}
        />
        : null}
    </div>
  );
};

export default OrdersListPage;
/**{
        "_id": "637e983622ca00e1ab3e1506",
        "orderId": "OR008",
        "orderDateTime": "2022-11-23T21:58:36.161Z",
        "storeLocation": "Kolkata",
        "city": "Kolkata",
        "storePhone": 123456789,
        "totalItems": 10,
        "price": 450,
        "status": "Ready to pickup",
        "products": [
            {
                "productType": "Shirt",
                "quantity": 2,
                "washType": [
                    "machine",
                    "ironing"
                ],
                "price": 160,
                "_id": "637e983622ca00e1ab3e1507"
            },
            {
                "productType": "pant",
                "quantity": 4,
                "washType": [
                    "machine",
                    "ironing"
                ],
                "price": 140,
                "_id": "637e983622ca00e1ab3e1508"
            },
            {
                "productType": "jeans",
                "quantity": 1,
                "washType": [
                    "machine",
                    "ironing",
                    "bleach"
                ],
                "price": 100,
                "_id": "637e983622ca00e1ab3e1509"
            }
        ],
        "user": "637df41fce5ed2fd50300e9a",
        "__v": 0
    } */


// -------------------------------------------------------------------
// const products = [
//   {
//     productType: 'boxers',
//     washType: ['machine', 'ironing', 'bleach'],
//     price: 200,
//     quantity: 2
//   },
//   {
//     productType: 'boxers',
//     washType: ['machine', 'ironing', 'bleach'],
//     price: 250,
//     quantity: 5 // 5x50=  250
//   },
//   {
//     productType: 'boxers',
//     washType: ['machine', 'ironing', 'bleach'],
//     price: 200,
//     quantity: 2
//   },
//   {
//     productType: 'boxers',
//     washType: ['machine', 'ironing', 'bleach'],
//     price: 200,
//     quantity: 2
//   },
// ]