import React from 'react'
import style from './Cart.module.css'
import { CartItemCard} from '../index.js'
import { useSelector } from 'react-redux';
import {FormatPrice} from '../index.js';
import { Button } from '../../styles/Button.js';
import { NavLink } from 'react-router-dom';

function Cart() {

  const cart = useSelector(state=>state.cart.cart)
  const totalAmount = useSelector(state=>state.cart.totalAmount)
  const shippingCharge = useSelector(state=>state.cart.shippingCharge)
  const isLoggedIn = useSelector(state=>state.authentication.isLoggedIn)

  if (!isLoggedIn){
    return (
      <div className="container">
          <div className={style.cont}>
              <p className={style.cont1_items}>Please login and start shopping</p>
              <NavLink to='/login' >
                <Button className={style.cont1_items}>Login</Button>
              </NavLink>
          </div>
      </div>
    )
  }else if (isLoggedIn && cart.length == 0){
    return (
      <div className="container">
        <div className={style.cont}>
            <p className={style.cont1_items}>Your cart is empty</p>
            <NavLink to='/products'>
              <Button className={style.cont1_items}>Start Shopping</Button>
            </NavLink>
        </div>
      </div>
    )
  }
  
  return (
    <div className='container'>
        <div className={style.cart_items_container}>
          <div className={style.cart_headings}>
            <p>Item</p>
            <p className={style.price}>Price</p>
            <p>Quantity</p>
            <p>Subtotal</p>
            <p className={style.remove}>Remove Item</p>
          </div>
          <hr />
          <div className={style.cart_items}>
                {
                  cart?.map((item, index)=>(
                    <CartItemCard 
                    key={index}
                    cartItemData = {item}
                    />
                  ))
                }  
          </div>
          <hr />
          <div className={style.total_container}>
              <div className={style.total_amount_container}>
                    <p>Subtotal : </p>
                    <p>{<FormatPrice price={totalAmount } />} </p>
                    <p style={{borderBottom: '1px solid black'}}>shipping Charge :</p>
                    <p style={{borderBottom: '1px solid black'}}>{<FormatPrice price={shippingCharge} />} </p>
                    <p>Total : </p>
                    <p>{<FormatPrice price={totalAmount + 5000} />}</p>
              </div>
              <div >
                    <NavLink to={'/products'}>
                      <Button className={style.continue_btn}>Continue Shopping</Button>
                    </NavLink>
              </div>
          </div>
        </div>
    </div>
  )
}

export default Cart
