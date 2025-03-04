import React from 'react'

const FindAddress = () => {
  return (
    <div className='container-address'>
        <h1 className='title-address'>Are you starving?</h1>
        <p className='address-sloggan'>Within a few clicks, find meals that are accessible near you</p>
        <div className='square-box-address'>
            <div className='square-buttons'>
                <button>Delivery</button>
                <button>Pickup</button>
            </div>
            <input className='input-food-address' type="text" placeholder='Enter Your Address' />
            <button>Find Food</button>
        </div>
    </div>
  )
}

export default FindAddress