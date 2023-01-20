import React from 'react'
import nairaSign from '../assets/naira-sign.svg'

function ConfirmPayment() {
  return (
    <section className='confirm-pay'>
      <div className='confirm-pay--header'>
        <p>Item Name</p>
        <p><img src={nairaSign} alt="naira-sign" className='naira-img' />Price</p>
      </div>
      <div className='confirm-pay--body'>
        <div className='confirm-pay--content'>
          <span>Data science and usability</span>
          <span className='confirm-pay--price'>50,000.00</span>
        </div>
        <div className='confirm-pay--content'>
          <span>Shipping</span>
          <span className='confirm-pay--price confirm-pay--price-accent'>0.00</span>
        </div>
      </div>
      <div className='confirm-pay--footer'>
        <div className="total-price-box">
          <span>Total</span>
          <span>50,000.00</span>
        </div>
      </div>
    </section>
  )
}

export default ConfirmPayment