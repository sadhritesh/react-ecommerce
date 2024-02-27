import React, {useEffect, useState} from 'react'
import style from './SearchBar.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { setFilteredProducts, setQuery } from '../../../features/filtersSlice';

const SearchBar = () => {

  const query = useSelector(state=>state.filterProducts.query)
  const products =  useSelector(state=> state.products.products)
  const dispatch = useDispatch()

  useEffect(()=>{
      dispatch(setFilteredProducts(
        products?.filter(product=>(
            product.name.toLowerCase().includes(query.toLowerCase())
        ))
      ))
  },[query,setQuery])
  

  return (
    <div className={style.searchbar}>
      <form onSubmit={(e)=>(e.preventDefault())}>
            <input 
            type="text"
            value={query}
            onChange={(e)=>dispatch(setQuery(e.target.value))}
            placeholder='Search by...'
            />
      </form>
    </div>
  )
}

export default SearchBar
