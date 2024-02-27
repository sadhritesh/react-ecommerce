import React, { useEffect, useState } from 'react'
import { getAllProducts } from '../../api/api'
import { useSelector, useDispatch } from 'react-redux'
import { setLoading, setProducts, setError } from '../../features/productsSlice'
import style from './Products.module.css'
import { ClipLoader } from 'react-spinners'
import { GridCard, ListCard, SortProducts, FilterSection } from '../index'
import { IoGridSharp } from "react-icons/io5";
import { FaListAlt } from "react-icons/fa";


function Products() {
  
  const isLoading = useSelector(state=> state.products.isLoading)
  const filteredProducts = useSelector(state=>state.filterProducts.filteredProducts)
  const dispatch = useDispatch()
  const [ view, setView ] = useState("grid")

  useEffect(() => {
    const fetchData = async () => {
      dispatch(setLoading())
      try {
        const data = await getAllProducts();
        if (data) {
          dispatch(setProducts(data));
        } else {
          dispatch(setError());
        }
      } catch (error) {
        console.error('Error fetching products:', error);
        dispatch(setError())
      }
    };

    fetchData();
  }, []);


    if (isLoading){
    return (
      <div className={style.cliploader}>
        <ClipLoader
        loading
        color="rgb(98 84 243)"
        />
      </div>
    )
  }

  return (
    <div className='container'>
        <div className={style.products_container}>
            <div className={style.products_filter}>
                <FilterSection />
            </div>
            <div className={style.products_main}>
                <div className={style.products_sort}>
                    <div className={style.view}>
                        <div 
                        className={view === "grid"? `${style.grid} ${style.active}`: `${style.grid}`}
                        onClick={(e)=>setView("grid")}
                        >
                            <IoGridSharp className={style.icons} />
                        </div>
                        <div 
                        className={view === "list"? `${style.list} ${style.active}`: `${style.list}`}
                        onClick={(e)=>setView("list")}
                        >
                            <FaListAlt className={style.icons} />
                        </div>
                    </div>
                    <div className={style.total_products}>
                      {
                        `${filteredProducts?.length} total products` 
                      }
                    </div>
                    <div className={style.sort_products}>
                        <SortProducts />
                    </div>
                </div>

                {
                  view === "grid" ?                 
                                  <div className={style.products_grid}>
                                    {
                                      filteredProducts?.map(product=>(
                                          <GridCard 
                                          key={product.id}
                                          {...product}
                                          />
                                      ))
                                    }
                                  </div> :
                                  <div className={style.products_list}>
                                      {
                                        filteredProducts?.map(product=>(
                                            <ListCard 
                                              key={product.id}
                                              {...product}
                                            />
                                        ))
                                      }
                                  </div>
                }
            </div>
        </div>
    </div>
  )
}

export default Products
