import React, { useEffect, useState } from 'react'
import style from './RangeFilter.module.css'
import Slider from '@mui/material/Slider';
import { useSelector, useDispatch } from 'react-redux'; 
import FormatPrice from '../../Helper/FormatPrice';
import { setFilteredProducts,setRangeValue,setMaxPrice } from '../../../features/filtersSlice';

const RangeFilter = () => {
   const products = useSelector(state=>state.products.products)
   const dispatch = useDispatch() 
   const rangeValue = useSelector(state=>state.filterProducts.rangeValue)
   const maxPrice = useSelector(state=>state.filterProducts.maxPrice)

   useEffect(()=>{
     let mPrice = products?.map((product)=>product.price)
     dispatch(setMaxPrice(Math.max(...mPrice)))
     dispatch(setRangeValue(Math.max(...mPrice)))
   },[products])

   
   useEffect(()=>{
        dispatch(setFilteredProducts(products?.filter((product)=>product.price <= rangeValue)))
   },[rangeValue])
   
  return (
    <div className={style.rangefilter}>
       <h3>By Price</h3>
        <p>{<FormatPrice price={rangeValue} />}</p>
        <Slider 
        aria-label="Default" 
        valueLabelDisplay="off"
        min={0}
        defaultValue={maxPrice}
        max={maxPrice}
        value={rangeValue}
        onChange={(e, newValue) => dispatch(setRangeValue(newValue))} 
        style={{width:"80%"}}
        />
    </div>
  )
}

export default RangeFilter
