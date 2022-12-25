import React, { useEffect, useState } from 'react'
import './OrdersListPage.css';

import { ReactComponent as WashingMachine } from "../Assests/washing-machine.svg"
import { ReactComponent as Ironing } from "../Assests/ironing.svg"
import { ReactComponent as Towel } from "../Assests/towel.svg"
import { ReactComponent as Bleach } from "../Assests/bleach.svg"


function Product({ item, productInfo, productHandler, washHandler, resetHandler }) {

    const [quantity, setQuantity] = useState(0)

    const [machine, setMachine] = useState(false)
    const [iron, setIron] = useState(false)
    const [dry, setDry] = useState(false)
    const [bleach, setBleach] = useState(false)

    function notSelected() {
        setQuantity(0)
        setMachine(false)
        setIron(false)
        setDry(false)
        setBleach(false)
    }
    useEffect(() => {
        if (!quantity) {
            notSelected()
        }
    }, [quantity])


    return (
        <>
            <tr className="order-body">
                <td className='prodType'>
                    <img className='ProdImg'
                        src={require(`../Assests/${item.prodType}.jpg`)} alt={item.prodType} />
                    <p className='prod-name'>{item.prodType}</p>
                    <p className='prod-lorem'>Here is some information</p>
                </td>
                <td>
                    <input className='quantity' type='number' min={0}
                        value={quantity}
                        onChange={(e) => {
                            setQuantity(Number(e.target.value))
                            productHandler(
                                Number(e.target.value),
                                item.prodType,
                                item.price)
                        }}
                    />
                </td>
                <td>
                    <WashingMachine className='wash-btn'
                        fill={machine ? "#5861AE" : "#9b9b9b"}
                        onClick={() => {
                            if (!quantity) {
                                alert('Select Quantity first')
                                return
                            }
                            washHandler(item.prodType, 'Washing')
                            setMachine(prev => !prev)
                        }}
                    />
                    <Ironing className='wash-btn'
                        fill={iron ? "#5861AE" : "#9b9b9b"}
                        onClick={() => {
                            if (!quantity) {
                                alert('Select Quantity first')
                                return
                            }
                            washHandler(item.prodType, 'Ironing')
                            setIron(prev => !prev)
                        }}
                    />
                    <Towel className='wash-btn'
                        fill={dry ? "#5861AE" : "#9b9b9b"}
                        onClick={() => {
                            if (!quantity) {
                                alert('Select Quantity first')
                                return
                            }
                            washHandler(item.prodType, 'Dry cleaning')
                            setDry(prev => !prev)
                        }}
                    />
                    <Bleach className='wash-btn'
                        fill={bleach ? "#5861AE" : "#9b9b9b"}
                        onClick={() => {
                            if (!quantity) {
                                alert('Select Quantity first')
                                return
                            }
                            washHandler(item.prodType, 'Chemical')
                            setBleach(prev => !prev)
                        }}
                    />
                </td>
                <td>
                    {!quantity ? '-' :
                        <p>{`${quantity} x ${item.price} =    `}
                            <span className='prod-total'>
                                {quantity * (item.price)}
                            </span></p>}
                </td>
                <td>
                    {!quantity ? '' :
                        <button
                            onClick={() => {
                                notSelected()
                                productHandler(
                                    0,
                                    item.prodType,
                                    item.price)
                            }}
                            className='reset-btn'>Reset</button>}
                </td>
            </tr>
        </>
    )
}

export default Product