import { createSlice } from "@reduxjs/toolkit";
import setLocalStorageData from "../LocalStorage/setLocalStorageData";
import { nanoid } from 'nanoid'

const initialState = {
    cart: [],
    totalItems: 0,
    totalAmount: 0,
    shippingCharge: 5000,
    cartMessage: null
}

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {

        setUserCartData: (state, action)=>{
            state.cart = action.payload
            let quantity = 0
            let amount = 0
            action.payload.forEach((item)=>{
                quantity = quantity + item.quantity
                amount = amount + (item.price*item.quantity)
            })
            state.totalAmount = amount
            state.totalItems = quantity
        },
        addToCart: (state, action)=>{
            const {id, color, quantity, product, userId} = action.payload
            
            let cartItem = {
                id: nanoid(),
                name: product.name, 
                color,
                quantity,
                image: product.image[0].url,
                price: product.price,
                max: product.stock,
            }

            state.cart = [...state.cart, cartItem]
            state.totalItems = state.totalItems + quantity
            state.totalAmount = state.totalAmount + (quantity*product.price)
            setLocalStorageData(userId, state.cart)
        },

        increaseCartItemQuantity: (state, action)=>{

            const { productId, userId } = action.payload
            
            let updatedCart = state.cart?.map((item)=>{
               

                if (item.id !== productId){
                    return {
                        ...item
                    }
                }else{
                    if (item.quantity < item.max){
                        state.totalAmount = state.totalAmount + item.price
                        state.totalItems = state.totalItems + 1

                        return {
                            ...item,
                            quantity: item.quantity + 1
                        }
                    }else{
                        state.cartMessage = "Have limited stock"
                        return {
                            ...item
                        }
                    }
                }
            })
            state.cart = updatedCart
            setLocalStorageData(userId, state.cart)

        },

        decreaseCartItemQuantity: (state, action) => {

            const { productId, userId } = action.payload

            let updatedCart = state.cart?.map((item)=>{
               

                if (item.id !== productId){
                    return {
                        ...item
                    }
                }else{
                    if (item.quantity > 1){
                        state.totalItems = state.totalItems - 1
                        state.totalAmount = state.totalAmount - item.price
                        return {
                            ...item,
                            quantity: item.quantity - 1
                        }
                    }else{
                        return {
                            ...item
                        }
                    }
                }
            })
            state.cart = updatedCart
            setLocalStorageData(userId, state.cart)
        }, 

        deleteCartItem: (state, action) => {
            const { productId, userId } = action.payload
            let updatedTotalItems = 0;
            let updatedTotalAmount = 0
            let updatedCart = state.cart?.filter((item)=>{
                if (item.id !== productId){
                    updatedTotalItems = updatedTotalItems + item.quantity
                    updatedTotalAmount = updatedTotalAmount + (item.quantity*item.price)
                    return {
                        ...item
                    }
                }
            })

            state.cart = updatedCart
            state.totalItems = updatedTotalItems
            state.totalAmount = updatedTotalAmount
            setLocalStorageData(userId, state.cart)
        },
        setCartMessage: (state, action)=>{
            state.cartMessage = null
        }
    }
})

export const {setUserCartData, addToCart, increaseCartItemQuantity, decreaseCartItemQuantity, deleteCartItem, setCartMessage } = cartSlice.actions

export default cartSlice.reducer