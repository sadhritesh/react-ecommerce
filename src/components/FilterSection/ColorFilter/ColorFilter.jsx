import React, { useEffect } from 'react'
import style from './ColorFilter.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { setFilteredProducts, setSelectedColor } from '../../../features/filtersSlice';

const ColorFilter = ({colors}) => {

  const selectedColor = useSelector(state=>state.filterProducts.selectedColor)
  const maxPrice = useSelector(state=>state.filterProducts.maxPrice)
  const products = useSelector(state=>state.products.products)
  const dispatch = useDispatch()

  useEffect(()=>{
    if (selectedColor === "All"){
        dispatch(setFilteredProducts(products))
    }else{
    
        dispatch(setFilteredProducts(products?.filter((product) => {
            return product.colors.some((currColor) => currColor === selectedColor);
        })));
        
    }
  },[selectedColor])
   
  return (
    <div className={style.colorfilter}>
      <h3>By Color</h3>
      <div className={style.colors}>
            <p 
            className={selectedColor === "All" ? `${style.active_ring}`:`${style.ring}`} 
            style={{padding:'2px',cursor:"pointer",fontSize:"1rem"}}
            onClick={(e)=>dispatch({selectedColor:"All",rangeValue:maxPrice})}
            >All</p>
            {
                colors?.map((currColor, index)=>{
                    return (
                        <div 
                        className={selectedColor === currColor ? `${style.active_ring}`:`${style.ring}`}
                        key={index}>
                          <div 
                          className={selectedColor===currColor?`${style.clr} ${style.active}`:`${style.clr}`} 
                          style={{background:currColor}}
                          onClick={(e)=>dispatch(setSelectedColor({selectedColor:currColor,rangeValue:maxPrice}))}
                          >
                          </div>
                        </div>
                    )
                })
            }
       </div>
    </div>
  )
}

export default ColorFilter
