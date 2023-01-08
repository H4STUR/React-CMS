import React from 'react';
import { Card } from 'antd';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import {useStripe, useElements, PaymentElement} from '@stripe/react-stripe-js';


const stripePromise = loadStripe('pk_test_51AROWSJX9HHJ5bycpEUP9dK39tXufyuWogSUdeweyZEXy3LC7M8yc5d9NlQ96fRCVL0BlAu7Nqt4V7N5xZjJnrkp005fDiTMIr');

function Home() {

  const gridStyle = {
    width: '23%',
    textAlign: 'center',
    margin: '5px',
  };

  //PAYMENTS
      //PayPal
  const initialOptions = {
    "client-id": "test",
    currency: "USD",
    intent: "capture",
    "data-client-token": process.env.PAYPAL_TOKEN,
  };
      //Stripe
  const options = {
    // passing the client secret obtained from the server
    clientSecret: '{{CLIENT_SECRET}}',
  };

  //!_PAYMENTS

  return (
    <div>
    <div className="site-card-border-less-wrapper boosting-selection">
      <Card
        title="Current Rank"
        bordered={false}
        style={{
          width: 500,
          borderRadius: 5,
        }}
      >
        
        <Card.Grid style={gridStyle}>WalmartBag</Card.Grid>
        <Card.Grid style={gridStyle}>Plastic</Card.Grid>
        <Card.Grid style={gridStyle}>Wood</Card.Grid>
        <Card.Grid style={gridStyle}>Aluminium</Card.Grid>

        <Card.Grid style={gridStyle}>Coblestone</Card.Grid>
        <Card.Grid style={gridStyle}>Gravel</Card.Grid>
        <Card.Grid style={gridStyle}>Nigger</Card.Grid>
        <Card.Grid style={gridStyle}>TwatMaster</Card.Grid>

      </Card>

    </div>

    <div className="site-card-border-less-wrapper boosting-selection">
      <Card
        title="Desired Rank"
        bordered={false}
        style={{
          width: 500,
          borderRadius: 5,
        }}
      >
        
        <Card.Grid style={gridStyle}>WalmartBag</Card.Grid>
        <Card.Grid style={gridStyle}>Plastic</Card.Grid>
        <Card.Grid style={gridStyle}>Wood</Card.Grid>
        <Card.Grid style={gridStyle}>Aluminium</Card.Grid>

        <Card.Grid style={gridStyle}>Coblestone</Card.Grid>
        <Card.Grid style={gridStyle}>Gravel</Card.Grid>
        <Card.Grid style={gridStyle}>Nigger</Card.Grid>
        <Card.Grid style={gridStyle}>TwatMaster</Card.Grid>

        <div className="paypal-button">
          <PayPalScriptProvider options={initialOptions}>
              <PayPalButtons style={{ layout: "horizontal" }} />
          </PayPalScriptProvider>
        </div>

      </Card>

    </div>
    </div>
    

    

        );

}

export default Home;