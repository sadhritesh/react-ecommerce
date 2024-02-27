import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { setSingleProduct, setSingleProductLoading } from '../../features/singleProductSlice'
import { setError } from '../../features/productsSlice'
import { getSingleProduct } from '../../api/api'
import { PageNavigation,FormatPrice, ImageSection, AddToCart } from '../index'
import style from './SingleProduct.module.css'
import { MdSecurity } from "react-icons/md";
import { TbTruckDelivery, TbReplace } from "react-icons/tb";
import { ClipLoader } from 'react-spinners'
import Rating from '@mui/material/Rating';
const API = "https://api.pujakaitem.com/api/products/"

function SingleProduct() {
  const message = useSelector(state => state.authentication.message);
  const { id } = useParams()
  const isSingleProductLoading = useSelector(state=>state.singleProduct.isSingleProductLoading)
  const singleProduct = useSelector(state=>state.singleProduct.singleProduct)


  const dispatch = useDispatch()

  console.log(message);

  useEffect(()=>{
    const url = `${API}?id=${id}`

    dispatch(setSingleProductLoading())

    const fetchData = async () => {
      try {
        const data = await getSingleProduct(url)
        if (data){
          dispatch(setSingleProduct(data))
        }else{
          dispatch(setError())
        }
      } catch (error) {
        console.error('Error in fetching single product:',error)
      }
    }

    fetchData()
  },[])

  const { 
    name,
    company,
    price,
    description,
    category,
    stock,
    stars,
    reviews,
    image
  } = singleProduct;

  if (isSingleProductLoading){
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
    <>
    <div>
      <PageNavigation title={name} />
      <div className='container'>
          <div className={style.product_container}>
                <div className={style.product_img}>
                    <ImageSection imageData={image} />
                </div>
                <div className={style.product_details} >
                    <h3>{name}</h3>
                    <Rating
                      name="simple-controlled"
                      value={stars}
                      precision={0.5}
                      readOnly
                      className={style.rating}
                    />
                     <p>{reviews} reviews</p>
                    <p>MRP :
                      <del>
                       <span> <FormatPrice price={price+250000} /> </span>
                      </del>
                    </p>
                    <p>
                      Deal of the Day : 
                      <span> <FormatPrice price={price} /> </span>
                    </p>

                    <p>
                      {description}
                    </p>
                    <div className={style.product_features_container}>
                        <div className={style.product_features}>
                          <TbTruckDelivery className={style.features_icon} />
                          <p>Free Delivery</p>
                        </div>

                        <div className={style.product_features}>
                          <TbReplace className={style.features_icon} />
                          <p>30 Days Replacement</p>
                        </div>

                        <div className={style.product_features}>
                          <TbTruckDelivery className={style.features_icon} />
                          <p>Sky Delivery </p>
                        </div>

                        <div className={style.product_features}>
                          <MdSecurity className={style.features_icon} />
                          <p>2 Year Warranty </p>
                        </div>
                    </div>

                    <p>
                      Available : <span> {stock>0? `In stock`: `Not in stock`} </span>
                    </p>

                    <p>
                      Product ID : <span> {id} </span>
                    </p>

                    <p>
                      Brand name : <span> {company} </span>
                    </p>

                    <hr />

                    { stock > 0 && <AddToCart product={singleProduct}  /> } 
                </div>
          </div>
      </div>
    </div>
    </>
  )
}

export default SingleProduct
