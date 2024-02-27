import React, {useEffect, useState} from 'react';
import style from './CategoryFilter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { setFilteredProducts, setSelectedCategory } from '../../../features/filtersSlice';

const CategoryFilter = ({categories}) => {

  const products = useSelector(state=>state.products.products)
  const selectedCategory = useSelector(state=>state.filterProducts.selectedCategory)
  const dispatch = useDispatch()

  useEffect(()=>{
    if (selectedCategory === "All"){
        dispatch(setFilteredProducts(products))
    }else{
        dispatch(setFilteredProducts(products?.filter((product)=>(product.category === selectedCategory))))
        
    }
  },[selectedCategory])



  return (
    <div className={style.categories}>
      <h3>By Categories</h3>
      {
        categories?.map((category,index)=>(
            <p 
            className={selectedCategory===category ? `${style.active} ${style.category_list}`:`${style.category_list}`}
            onClick={(e)=>{
              dispatch(setSelectedCategory(category))}}
            key={index}
            >
            {category}
            </p>
        ))
      }
    </div>
  )
}

export default CategoryFilter


