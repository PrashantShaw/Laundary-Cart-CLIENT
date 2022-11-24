import React, { useState } from 'react';
import './Summery.css'

const Summery = () => {
  
  return (<>

  
   <div className='main'>
    <div className='headsum'>
      <h2>Summery</h2>
      <span>X</span>
    </div>
    <div className='optionsum'>
      <select>
        <option value="none" selected disabled hidden>Select an Option</option>
        <option value='Jb nagar'>Jb nagar</option>
        <option value='Ajampada'>Ajampada</option>
        <option value='South Extension'>South Extension</option>
        <option value='Mg road'>Mg road</option>
        <option value='Shamsabad'>Shamsabad</option>
      </select>
      <p>Store Address:</p>
      <p>Phone:</p>
    </div>
    <div className='order'>
      <h6>Order Detail</h6>
    </div>
    <div className='address'>
      <h6>Address</h6>
    </div>
  </div>
  </>

  )
}

export default Summery