import React from 'react'

function BillingInfo() {

  return (
    <section>
      <div className='name'>
        <label htmlFor="">Name on Card<span className="required">*</span></label>
        <input type="text" />
      </div>
      <div className='name card-type'>
        <label htmlFor="">Card Type<span className="required">*</span></label>
        <select  className='select'>
          <option value="">Visa</option>
          <option value="">MasterCard</option>
          <option value="">Verve</option>
        </select>
      </div>
      <div className='name card-info'>
        <div className='card-details'>
          <label htmlFor="">Card details<span className="required">*</span></label>
          <input type="text" maxLength={19} />
        </div>
        <div className='expiry-date'>
        <label htmlFor="">Expiry date<span className="required">*</span></label>
          <input type="text" id="validtill" maxLength={7}/>
        </div>
        <div className='cvv'>
        <label htmlFor="">CVV<span className="required">*</span></label>
          <input type="text" maxLength={3} />
        </div>
      </div>
    </section>
  )
}

export default BillingInfo