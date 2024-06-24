// eslint-disable-next-line no-unused-vars
import GooglePayButton from "@google-pay/button-react";
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Buy = ({ dat,remove}) => {
  const [cartItems, setCartItems] = useState(dat);
  // eslint-disable-next-line no-empty-pattern
  const [] = useState(cartItems)

  useEffect(() => {
    setCartItems(dat);
  }, [dat]);

  const totalPrice = cartItems
    ? cartItems.map((item) => item.Price * item.quantity).reduce((total, price) => total + price, 0)
    : 0;

  const updateQuantity = (itemId, newQuantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id ===  itemId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Link to="/buy">
        {cartItems && cartItems.length > 0 ? (
          cartItems.map((product) => (
            <div key={product.id}>
              {product && (
                <div key={product.id}>
                  <div className="relative bottom-7">
                    <hr />
                    <hr />
                    <hr />
                    <hr />
                  </div>
                  <div className="flex font-medium pl-16 pr-14 text-xl">
                    <img
                      src={product.images}
                      alt={product.name}
                      width={100}
                      height={100}
                      className="rounded-full p-8 z-20"
                    />
                    <h1 className="font-medium text-xl mr-10 mt-4 w-96">
                      {product.name}
                    </h1>
                    <div>
                      <span className="mr-2 mt-4">Quantity -</span>
                      <span className="mr-10 mt-4 text-slate-600">
                        {product.quantity}
                      </span>
                      <button
                        className="mr-10 mt-4"
                        onClick={() => updateQuantity(product.id, product.quantity + 1)}
                      >
                        ➕
                      </button>
                      <button
                        className="mr-10 mt-4"
                        onClick={() => updateQuantity(product.id,product.quantity > 0 ? product.quantity - 1 : 0)}
                      >
                        ➖
                      </button>
                    </div>
                    <h1 className="mr-10 mt-4">₹{product.Price}</h1>
                    <h1 className="mt-4">Total - ₹{product.Price * product.quantity}</h1>
     <div className="relative top-5 pl-5 pr-5 ">               <GooglePayButton 
  environment="TEST"
  paymentRequest={{
    apiVersion: 2,
    apiVersionMinor: 0,
    allowedPaymentMethods: [
      {
        type: 'CARD',
        parameters: {
          allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
          allowedCardNetworks: ['MASTERCARD', 'VISA'],
        },
        tokenizationSpecification: {
          type: 'PAYMENT_GATEWAY',
          parameters: {
            gateway: 'example',
            gatewayMerchantId: 'exampleGatewayMerchantId',
          },
        },
      },
    ],
    merchantInfo: {
      merchantId: '12345678901234567890',
      merchantName: 'Demo Merchant',
    },
    transactionInfo: {
      totalPriceStatus: 'FINAL',
      totalPriceLabel: 'Total',
      totalPrice: '100.00',
      currencyCode: 'USD',
      countryCode: 'US',
    },
  }}
  onLoadPaymentData={paymentRequest => {
    console.log('load payment data', paymentRequest);
  }}
/></div>
                    <button className="text-gray-600 mb-8" onClick={()=>{remove(product.id);
                   window.location.reload() }}>❌</button>
                  </div>
                  <div className="relative bottom-6 pt-14">
                    <hr />
                    <hr />
                    <hr />
                    <hr />
                  </div>
                  
                </div>
              )}
              
            </div>
          ))
        ) : (
          <p className="font-medium text-3xl mr-16 w-96 ml-20">
            Your cart is empty.
          </p>
        )}
        <h1 className="font-medium text-3xl mr-16 w-96 ml-20 text-red-600">
          OverAll Amount = ₹{totalPrice}
        </h1>
      </Link>
      
    </div>
  );
};

export default Buy;
