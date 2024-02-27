import React, { useEffect, useState } from 'react'
import style from './FilterSection.module.css'
import SearchBar from './SearchBar/SearchBar'
import { useSelector, useDispatch } from 'react-redux'
import CategoryFilter from './CategoryFilter/CategoryFilter'
import CompanyFilter from './CompanyFilter/CompanyFilter'
import ColorFilter from './ColorFilter/ColorFilter'
import RangeFilter from './RangeFilter/RangeFilter'
import { IoFilter } from "react-icons/io5"
import { IoMdClose } from "react-icons/io"
import { Button } from '../../styles/Button.js'
import { clearFilters } from '../../features/filtersSlice.js';


const FilterSection = () => {

  const products = useSelector(state=>state.products.products) 
  const maxPrice = useSelector(state=>state.filterProducts.maxPrice) 
  const [ filterActive, setFilterActive ] = useState(false)
  const [categories, setCategories] = useState([]) 
  const [companies, setCompanies] = useState([]) 
  const [colors, setColors ] = useState([])
  const dispatch = useDispatch()


  const getUniqeData = (data, property) =>{
      return data.map((currData)=>(currData[property]))
  }  

  const getUniqeColors = (data) => {
    let colorsData = data.flatMap((currData)=>currData.colors)
    return colorsData
  }

  useEffect(()=>{
    let tempCategories = getUniqeData(products, "category" )
    setCategories(["All", ...new Set(tempCategories)])

    let tempCompanies = getUniqeData(products, "company")
    setCompanies(["All", ...new Set(tempCompanies)])

    let tempColors = getUniqeColors(products)
    setColors([...new Set(tempColors)])
  },[products])

  return (
    <div className={style.filterbar}>
      <div 
      className={style.filterbtn}
      onClick={(e)=>setFilterActive(true)}
      >
        <h3>Filter</h3>
        <IoFilter />
      </div>
    <div className={ filterActive ? `${style.mobilefiltersection}`:`${style.filtersection}` }>
       <SearchBar />
       <CategoryFilter categories={categories} />
       <CompanyFilter companies={companies} />
       <IoMdClose 
       className={style.close_icon}
       onClick={(e)=>setFilterActive(false)}
       />
       <ColorFilter colors={colors} />
        <RangeFilter />
        <Button
        onClick={(e)=>dispatch(clearFilters({rangeValue:maxPrice}))}
        >Clear Filters</Button>
    </div>
    </div>

  )
}

export default FilterSection
