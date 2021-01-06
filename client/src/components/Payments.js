import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import StripeCheckout from 'react-stripe-checkout';

class Payments extends Component {
  render() {
    return (
      <StripeCheckout
        name="Emaily"
        description="$5 for 5 email credits"
        amount={500}
        token={(token) => console.log(token)}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
      >
        <Link className="btn">Add Credits</Link>
      </StripeCheckout>
    );
  }
}

export default Payments;
