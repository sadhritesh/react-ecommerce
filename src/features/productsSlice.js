import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    products: [],
    featuredProducts: [],
    isLoading: false, 
    isError: false
}

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers:{
        setProducts: (state=initialState, action) => {

            state.isLoading = false
            state.isError = false 
            state.products = action.payload
            state.featuredProducts = action.payload?.filter((product)=>(product.featured && product.featured === true))
        },
        setLoading: (state, action) => {
            state.isLoading = true
        },
        setError: (state, action) => {
            state.isError = true
            state.isLoading = false
        }
    }
})

export const { setProducts, setLoading, setError } = productsSlice.actions

export default productsSlice.reducer