import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isSingleProductLoading: true,
    singleProduct: {}
}

const singleProductSlice = createSlice({
    name: "singleProduct",
    initialState,
    reducers: {
        setSingleProduct: (state, action) => {
            state.isSingleProductLoading = false
            state.singleProduct = action.payload;
        },
        setSingleProductLoading: (state,action) => {
            state.isSingleProductLoading = true
        }
    }
})

export const { setSingleProduct, setSingleProductLoading } = singleProductSlice.actions

export default singleProductSlice.reducer;