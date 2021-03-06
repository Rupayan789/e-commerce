
import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
/**
* @author
* @function 
**/

const StripeCheckOutButton = ({price}) => {
    const priceForStripe=price*100;
    const {REACT_APP_API_KEY}=process.env;
    
    const onToken=token=>{
        console.log(token);
        alert("Payment Successful")
    }
  return(
    <StripeCheckout
    label='Pay Now'
    name='crown-covers'
    billingAddress
    shippingAddress
    image='https://sendeyo.com/up/d/f3eb2117da'
    description={`Your Total is $${price}`}
    amount={priceForStripe}
    token={onToken}
    stripeKey={REACT_APP_API_KEY}
    />)

 }

export default StripeCheckOutButton;