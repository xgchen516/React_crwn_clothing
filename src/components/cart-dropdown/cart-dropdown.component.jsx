import React from 'react';
import { connect } from 'react-redux';

import CustomButton from '../custom-button/custom-button.component';
import '../cart-item/cart-item.component';

import './cart-dropdown.styles.scss';
import CartItem from '../cart-item/cart-item.component';

const CartDropdown = ({ cartItems }) => (
  <div className='cart-dropdown'>
    <div className='cart-items' />
      {cartItems.map(cartItems => (
        <CartItem key={cartItems.id} item={cartItems} />
      ))}
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
);

const mapStateToProps = ({ cart: {cartItems } }) => ({
  cartItems
})
export default connect(mapStateToProps)(CartDropdown);
