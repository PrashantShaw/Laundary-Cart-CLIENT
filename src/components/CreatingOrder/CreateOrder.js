import React, { useState } from 'react'
import Border from '../Border'
import './OrdersListPage.css';
import home from "../Assests/home.svg"
import list from "../Assests/list.png"
import more from "../Assests/more.png"
import Product from './Product';
import Summery from '../summary/summary/summery';
import logout from "../Assests/power.png"
import { useNavigate } from 'react-router-dom';
import OrderSuccessfull from '../CreateOrderSuccessfullpopup/OrderSuccessfull';


function CreateOrder() {
    const navigate = useNavigate()

    const [createOrderSummary, setCreateOrderSummary] = useState(false)
    const [successPopup, setSuccessPopup] = useState(false)

    const [productInfo, setProductInfo] = useState([])

    const items = [
        { prodType: 'Shirts', price: 50 },
        { prodType: 'Trousers', price: 70 },
        { prodType: 'Jeans', price: 100 },
        { prodType: 'Boxers', price: 30 },
        { prodType: 'Joggers', price: 40 },
        { prodType: 'Others', price: 60 },
    ]


    function productHandler(prod_quantity, prod_type, product_price) {

        console.log(prod_quantity, prod_type, product_price)

        let prodFound = false

        let updatedProdInfo = productInfo.map((prod) => {
            if (prod.productType === prod_type) {
                prodFound = true
                return {
                    ...prod,
                    quantity: prod_quantity,
                    price: (prod_quantity) * (product_price)
                }
            }
            return prod
        })

        updatedProdInfo = updatedProdInfo.filter(prod => prod.quantity !== 0)

        if (!prodFound) {
            setProductInfo(rest => {
                return [
                    ...rest,
                    {
                        productType: prod_type,
                        quantity: prod_quantity,
                        washType: [],
                        price: (prod_quantity) * (product_price)
                    }]
            })
        }
        else setProductInfo([...updatedProdInfo])

        console.log(productInfo)
    }
    // function resetHandler(prod_type) {
    //     let newProdInfo = productInfo.filter(prod => prod.productType !== prod_type)
    //     setProductInfo(newProdInfo)
    // }

    function washHandler(prod_type, wash_type) {
        let prodFound = false
        let newProdInfo = productInfo.map(prod => {
            if (prod.productType === prod_type) {
                prodFound = true
                if (prod.washType.includes(wash_type)) {
                    // let idx = indexOf(wash_type)
                    // prod.washType.splice(idx, 1)
                    return {
                        ...prod,
                        washType: prod.washType.filter(wType => wType !== wash_type)
                    }
                }
                else {
                    return {
                        ...prod,
                        washType: [...prod.washType, wash_type]
                    }
                }
            }
            else return prod
        })
        console.log(newProdInfo)
        if (prodFound) setProductInfo([...newProdInfo])
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
                            <img className="logout-btn" src={logout} alt="logout"
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

            <div className="sidebar_container">
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


            <div className="count-search">
                <h3 className="orders-count">Create Order</h3>
                <div className="search-bar">
                    <img src={require('../Assests/search.jpg')} alt="search" />
                    <input className="search" />
                </div>
            </div>
            <div className='allOrders'>


                <div className="orders-table">
                    <table>
                        <thead>
                            <tr className="order-header ">
                                <th>Product Types</th>
                                <th>Quantity</th>
                                <th>Wash Type</th>
                                <th>Price</th>
                                <th> </th>
                            </tr>
                        </thead>
                        <tbody>

                            {items.map((item, idx) => {
                                return <Product
                                    key={idx}
                                    item={item}
                                    productInfo={productInfo}
                                    productHandler={productHandler}
                                    washHandler={washHandler}
                                // resetHandler={resetHandler}
                                />

                            })}
                        </tbody>
                    </table>
                </div>
                <div className='cancel-proceed'>
                    <button className='cencel-btn'>Cancel</button>
                    <button className='proceed-btn'
                        onClick={() => {
                            if (!productInfo.length) {
                                alert('Select Some items to proceed.')
                                return
                            }
                            setCreateOrderSummary(true)
                        }}
                    >
                        Proceed
                    </button>
                </div>
            </div>


            <Border />
            {/* ----------------CREATE ORDER SUMMARY PAGE---------------- */}
            {createOrderSummary ?
                <Summery
                    productInfo={productInfo}
                    setSuccessPopup={setSuccessPopup}
                    setCreateOrderSummary={setCreateOrderSummary}
                />
                : null}

            {/* -----------------ORDER SUCCESSFULL POPUP----------------- */}
            {successPopup ? <OrderSuccessfull /> : null}

        </div>
    )
}

export default CreateOrder
