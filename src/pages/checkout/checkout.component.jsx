import React, { useContext } from 'react';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';

import CreditCard from '../../assets/pay.svg';
import CardExp from '../../assets/icon-calendar-date.svg';
import CardCVC from '../../assets/icon-lock.svg';

import { CartContext } from '../../providers/cart/cart.provider';

import './checkout.styles.scss';

const CheckoutPage = () => {
  const { cartItems, total } = useContext(CartContext);
  return (
    <div className="checkout-page">
      {cartItems.map(cartItem => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className="total">
        Your total is
        <span className="totalPrice"> ${total}</span>
      </div>
      <div className="test-warning">
        <p className="test-title">
          Please use the credit card below when making payments.
        </p>
        <span className="test-message">
          <img src={CreditCard} alt="Credit Card icon" />
          4242 4242 4242 4242
          <br />
          <img src={CardExp} alt="Calender Icon" />
          01/30
          <br />
          <img src={CardCVC} alt="Secure Lock" />
          123
        </span>
      </div>
      <StripeCheckoutButton price={total} />
    </div>
  );
};

export default CheckoutPage;
