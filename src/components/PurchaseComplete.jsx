import React from 'react'
import CheckMark from '../assets/checkmark.svg'

function PurchaseComplete() {
  return (
    <section className='purchase'>
      <div className="purchase-container">
        <span className='checkmark-circle'><img src={CheckMark} alt="checkmark-icon" /></span>
        <p className='purchase-header'>Purchase Completed</p>
        <p className='purchase-text'>Please check your email for details concerning 
this transaction</p>
        <p href="#" className='return-home'>Return Home </p>
      </div>
    </section>
  )
}

export default PurchaseComplete