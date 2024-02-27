import React, { useEffect } from 'react'
import {HeroSection, TrustedSection, ServicesSection, FeaturedProducts} from '../index'
import { getAllProducts } from '../../api/api'
import { useDispatch } from 'react-redux'
import { setLoading, setProducts, setError } from '../../features/productsSlice'
function Home() {

    const dispatch = useDispatch()

    useEffect(() => {
    const fetchData = async () => {
      dispatch(setLoading())
      try {
        const data = await getAllProducts();
        console.log(data);
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



  return (
    <>
    <HeroSection intro={'Welcome To'} />
    <FeaturedProducts />
    <ServicesSection />
    <TrustedSection />
    </>
  )
}

export default Home
