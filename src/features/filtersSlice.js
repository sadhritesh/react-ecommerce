import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    sortType: "high",
    filteredProducts: [],
    query: "",
    selectedCategory: "All",
    selectedCompany: "All",
    selectedColor: "All",
    rangeValue: 0,
    maxPrice:0
}

export const filtersSlice = createSlice({
    name: "filters", 
    initialState,
    reducers: {
        setSortType: (state=initialState, action)=>{
            state.sortType = action.payload
        },
        setFilteredProducts: (state=initialState, action)=>{
            state.filteredProducts = action.payload
        },
        setQuery: (state=initialState, action)=>{
            state.query = action.payload
            state.selectedCategory = "All"
            state.selectedCompany = "All"
        },
        setSelectedCategory: (state=initialState, action)=>{
            state.selectedCategory = action.payload
            state.query = ""
            state.selectedCompany = "All"
            state.sortType = "high"
            state.rangeValue = state.maxPrice
            state.selectedColor = "All"
        },
        setSelectedCompany: (state=initialState, action)=>{
            state.selectedCompany = action.payload
            state.query = ""
            state.selectedCategory = "All"
            state.sortType = "high"
            state.rangeValue = state.maxPrice
            state.selectedColor = "All"
        },
        setSelectedColor: (state=initialState, action)=>{
            state.selectedColor = action.payload.selectedColor
            state.rangeValue = action.payload.rangeValue
            state.query = ""
            state.selectedCategory = "All"
            state.selectedCompany = "All"
        },
        setRangeValue: (state=initialState, action)=>{
            state.rangeValue = action.payload
            state.query = ""
            state.selectedCategory = "All"
            state.selectedCompany = "All"
            state.selectedColor = "All"
        },
        setMaxPrice: (state=initialState, action)=>{
            state.maxPrice = action.payload
        },
        clearFilters: (state=initialState, action)=>{
            state.query = ""
            state.selectedCategory = "All"
            state.selectedCompany = "All"
            state.selectedColor = "All"
            state.rangeValue = action.payload.rangeValue
        }
    }
})

export const { setSortType, setFilteredProducts, setQuery, setSelectedCategory, setSelectedCompany, setSelectedColor, setRangeValue, clearFilters, setMaxPrice } = filtersSlice.actions

export default filtersSlice.reducer