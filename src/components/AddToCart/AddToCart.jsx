import React, { useEffect, useState } from 'react'
import style from './AddToCart.module.css'
import { CartQuantityToggle } from '../index'
import { Button } from '../../styles/Button.js'
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../../features/cartSlice.js'



const AddToCart = ({product}) => {

  const {colors, stock, id} = product
  const [ color, setColor ] = useState(colors[0]) 
  const [ quantity, setQuantity ] = useState(1) 
  const { isLoggedIn, activeUser} = useSelector(state=>state.authentication)
  const dispatch = useDispatch()


  const increaseQuantity = () => {
    quantity < stock ? setQuantity(prev=>prev+1) : setQuantity(stock)
  }
  const decreaseQuantity = () => {
    quantity > 1 ? setQuantity(prev=>prev-1) : setQuantity(1)
  }

  
  const handleAddToCart = () => {
    if(isLoggedIn){
      dispatch(addToCart({id, color, quantity, product, userId :activeUser.gmail }))
    }
  }
  return (
    <div>
       <div className={style.colors}>
            Colors :
            {
                colors?.map((currColor, index)=>{
                    return (
                        <div 
                        className={color === currColor ? `${style.active_ring}`:`${style.ring}`}
                        key={index}
                        >
                          <div 
                          className={color===currColor?`${style.clr} ${style.active}`:`${style.clr}`} 
                          style={{background:currColor}}
                          onClick={(e)=>setColor(currColor)}
                          >
                          </div>
                        </div>
                    )
                })
            }
       </div>

       {/* Add to cart */}

       <div className={style.addtocart}>
            <CartQuantityToggle 
            quantity={quantity}
            increaseQuantity={increaseQuantity}
            decreaseQuantity={decreaseQuantity}
            />
            <NavLink 
            to={isLoggedIn?'/cart':'/login'}
            onClick={()=>handleAddToCart()}
            >
            <Button>Add to cart</Button>
            </NavLink>
       </div>
    </div>
  )
}

export default AddToCart
