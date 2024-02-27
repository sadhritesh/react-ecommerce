import React from 'react'
import { FaMinus, FaPlus } from "react-icons/fa";
import style from './CartQuantityToggle.module.css'


const CartQuantityToggle = ({quantity, increaseQuantity, decreaseQuantity}) => {


  return (
    <div className={style.cart_quantity_toggle}>
        <FaMinus onClick={()=>decreaseQuantity()} />
        <p className={style.quantity}>
            {quantity}
        </p>
        <FaPlus onClick={()=>increaseQuantity()} />
    </div>
  )
}

export default CartQuantityToggle
