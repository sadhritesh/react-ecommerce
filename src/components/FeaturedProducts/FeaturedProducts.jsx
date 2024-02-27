import React, {useState} from 'react'
import style from './FeaturedProducts.module.css'
import { ClipLoader } from 'react-spinners'
import { useSelector } from 'react-redux'
import { GridCard } from '../index'
import { NavLink } from 'react-router-dom'

const FeaturedProducts = () => {

  const featuredProducts = useSelector(state=>state.products.featuredProducts)  
  const isLoading = useSelector(state=>state.products.isLoading)


  return (
    <div className='container'>
        <div className={style.featured_container}>
            <div className='intro-data' style={{marginBottom: "1rem"}}>Check Now !</div>
            <div className="common-heading">Our Featured Products</div>
            <div className={style.cliploader}>
                <ClipLoader
                loading={isLoading}
                color="rgb(98 84 243)"
                />
            </div>
            <div className={style.card_container}>
                {
                    featuredProducts?.map((product)=>(
                        <GridCard key={product.id} {...product}/>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default FeaturedProducts
