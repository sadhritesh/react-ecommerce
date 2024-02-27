import React from 'react';
import style from './CartItemCard.module.css'
import FormatPrice from '../Helper/FormatPrice.jsx'
import { CartQuantityToggle } from '../index.js'
import { increaseCartItemQuantity, decreaseCartItemQuantity, deleteCartItem } from '../../features/cartSlice.js'; 
import { useDispatch, useSelector } from 'react-redux';
import { MdDelete } from "react-icons/md";

const CartItemCard = ({cartItemData}) => {

  const dispatch = useDispatch()
  const { activeUser } = useSelector(state=>state.authentication)
  return (
    <div className={style.cart_item}>
        <div className={style.pro_img}>
            <div className={style.image}>
                <img src={cartItemData.image} alt={cartItemData.name} />
            </div>
            <div className={style.pro_details}>
                <div className={style.pro_name}>
                    <p>{cartItemData.name}</p>
                </div>
                <div className={style.pro_color}>
                    <p>Color:</p>
                    <div className={style.color} style={{background:`${cartItemData.color}`}}></div>
                </div>
            </div>
        </div>
        <div className={style.price}>
            <p>{<FormatPrice price={cartItemData.price} />}</p>
        </div>
        <div className={style.quantity}>
            < CartQuantityToggle 
             quantity={cartItemData.quantity}
             increaseQuantity = {()=>dispatch(increaseCartItemQuantity({productId:cartItemData.id, userId: activeUser.gmail}))}
             decreaseQuantity={()=>dispatch(decreaseCartItemQuantity({productId:cartItemData.id, userId: activeUser.gmail}))}
            />
        </div>
        <div className={style.subtotal}>
            <p>{<FormatPrice price={(cartItemData.price)*(cartItemData.quantity)} />}</p>
        </div>
        <div className={style.remove}> 
            <MdDelete 
             onClick={()=>dispatch(deleteCartItem({productId:cartItemData.id, userId: activeUser.gmail}))}
            />
        </div>
    </div>

  )
}

export default CartItemCard
