import React from 'react'

function PersonalInfo() {
  return (
    <section className='personal-container'>
      <div className="name">
        <label htmlFor="name">Name</label>
        <input type="text"  placeholder='Name' />
      </div>
      <div className="email">
        <label htmlFor="email">Email Address<span class="required">*</span></label>
        <small>The purchase receipt would be sent to this address</small>
        <input type="text" placeholder='Email Address'/>
      </div>
      <div className="address-1">
        <label htmlFor="address">Address 1</label>
        <input type="text" placeholder='Address 1' />
      </div>
      <div className="address-2">
        <label htmlFor="address-2">Address 2</label>
        <input type="text" placeholder='Address 2'  />
      </div>
      <div className="Location">
        <div className="local-gov">
          <label htmlFor="local-government">Local Government</label>
          <input type="text" placeholder='LG' />
        </div>
        <div className="State">
          <label htmlFor="State">State</label>
          <select name="" id="" className='select'>
            <option value="">Lagos</option>
            <option value="">Ogun</option>
            <option value="">Abuja</option>
          </select>
        </div>
      </div>
    </section>
  )
}

export default PersonalInfo