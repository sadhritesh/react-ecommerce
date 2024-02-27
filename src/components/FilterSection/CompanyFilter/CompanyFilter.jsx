import React, { useEffect } from 'react'
import style from './CompanyFilter.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { setFilteredProducts, setSelectedCompany } from '../../../features/filtersSlice' 

const CompanyFilter = ({companies}) => {

  const products = useSelector(state=>state.products.products)
  const selectedCompany = useSelector(state=>state.filterProducts.selectedCompany)
  const dispatch = useDispatch()

  useEffect(()=>{
    if (selectedCompany === "All"){
        dispatch(setFilteredProducts(products))
    }else{
        dispatch(setFilteredProducts(products?.filter((product)=>(product.company === selectedCompany))))
    }
  },[selectedCompany])
  

  return (
    <div className={style.companyfilter}>
        <h3>By Companies</h3>
       <select 
       value={selectedCompany}
       onChange={(e)=>(dispatch(setSelectedCompany(e.target.value)))}
       className={style.select}
       >
            {
                companies?.map((company,index)=>(
                    <option 
                    value={company}
                    key={index}>
                    {company}
                    </option>
                ))
            }
       </select>
    </div>
  )
}

export default CompanyFilter


