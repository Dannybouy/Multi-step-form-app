import React, { useState } from 'react'
import Personallnfo from './PersonalInfo'
import BillingInfo from './BillingInfo'
import ConfirmPayment from './ConfirmPayment'
import PurchaseComplete from './PurchaseComplete'
import '../App.css'

function Form() {

    const [page, setPage] = useState(0);

    const PageDisplay = () => {
        if(page === 0) {
            return <Personallnfo/>
        } else if (page === 1) {
            return <BillingInfo/>
        } else if (page === 2) {
            return <ConfirmPayment/>
        } else {
            return <PurchaseComplete/>
        }
    }


    function Progressbar() {
        if(page <= 2) {
            return (
                <div>
                    <div className="progressbar">
                    <div className="progressbar-text">
                        <p style={{color: page == 0 ? "#F2994A" : "#BDBDBD"}}>Personal Info</p>
                        <p style={{color: page == 1 ? "#F2994A" : "#BDBDBD"}}>Billing Info</p>
                        <p style={{color: page == 2 ? "#F2994A" : "#BDBDBD"}}>Confirm Payment</p>
                    </div>
                    <div className="bar">
                      <div style={{width: page == 0 ? "33.3%" : page == 1 ? "66.6%" : "100%"}}></div>
                    </div>
                </div>
                </div>
                 
              )
        }
        
      }

    return (
        <div className='form'>
            {page <= 2 && <div className="header-text">
                <p>Complete your Purchase</p>
            </div>}
            {Progressbar()}
            <div className="form-container">
                <div className="body">
                    {PageDisplay()}
                </div>
                {page <= 2 && <div className="footer">
                    <button onClick={() =>{
                        setPage((currPage) => currPage + 1)
                    }}>Next</button>
                    <span>Cancel Payment</span>
                </div>}
            </div>
        </div>
    )
}

export default Form