import React, {useEffect} from 'react'
import style from './SortProducts.module.css'
import { useSelector, useDispatch } from 'react-redux';
import { setSortType, setFilteredProducts } from '../../features/filtersSlice.js'

const SortProducts = () => {

  const dispatch = useDispatch()

  const products =  useSelector(state=> state.products.products)
  const { sortType, filteredProducts }= useSelector(state=>state.filterProducts)

  useEffect(() => {
    if (sortType === "low") {
      let sortedProduct =[ ...filteredProducts].length? [ ...filteredProducts].sort((a, b) => a.price - b.price)
                        :[...products].sort((a, b) => a.price - b.price)
      dispatch(setFilteredProducts(sortedProduct));
    } else if (sortType === "high") {
      let sortedProduct =[ ...filteredProducts].length? [ ...filteredProducts].sort((a, b) => b.price - a.price)
      :[ ...products].sort((a, b) => a.price - b.price)
      dispatch(setFilteredProducts(sortedProduct));
      // dispatch(setFilteredProducts([...products].sort((a, b) => b.price - a.price)));
    } 
    // else {
    //   dispatch(setFilteredProducts([ ...filteredProducts].length?[...filteredProducts]:[ ...products]))
    // }
  }, [sortType, setFilteredProducts]);

  return (
    <div>
      <select 
      id="" 
      value={sortType} 
      className={style.select}
      onChange={(e)=>dispatch(setSortType(e.target.value))} >
        {/* <option value="">Short By : No filter</option> */}
        <option value="low">Price(lowest-highest)</option>
        <option value="high">Price(highest-lowest)</option>
      </select>
    </div>
  )
}

export default SortProducts
