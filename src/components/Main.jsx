import React from 'react'
import imgBase from '../assets/ImageBase.png'
import FindAddress from './FindAddress'

const Main = () => {
  return (
    <div className='main'>
        <div className='main-content'>
            <FindAddress/>
            <div className='main-img'>
                <img src={imgBase} alt="Prato de comida" />
            </div>
        </div>
    </div>
  )
}

export default Main