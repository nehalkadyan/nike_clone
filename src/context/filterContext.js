import {createContext, useContext, useReducer, useEffect} from "react";

import { useProductContext } from "./productContext";
import reducer from "../reducers/filterReducer"


const FilterContext = createContext();

const initialState = {
    
    filter_products: [],
    all_products: [],
    sorting_value: "lowest",  
    filters: {
        text: "",
        category: "all",
        gender: "all",
        color:"all",
        kids: "all",
        price: 0,
        maxPrice: 0,
        minPrice: 0,
        sports: "all"
    },
}


export const FilterContextProvider = ({children}) => {

    const {products} = useProductContext();
     
    const [state, dispatch] = useReducer(reducer, initialState);


    //sorting 

    const sorting = (event) => {
        let userValue = event.target.value;
        return dispatch({type: "GET_SORT_VALUE", payload: userValue})
    }

    // updating the filter value
    const updateFilterValue = (event) => {
        let name = event.target.name;
        let value = event.target.value;

        return dispatch({type: "UPDATE_FILTERS_VALUE", payload: {name, value}})
    };

    // to clear the filters
    const clearFilters = () => {
        dispatch({type: "CLEAR_FILTERS"})
    }

    // to sort the product
    useEffect(() => {
        dispatch({type: "FILTER_PRODUCTS"});
        dispatch({type: "SORTING_PRODUCTS"});
    }, [products, state.sorting_value, state.filters])

    // to load all the products
    useEffect(() => {
        dispatch({type: "LOAD_FILTER_PRODUCTS", payload: products});
        
    }, [products])

    

    return (
        <FilterContext.Provider value={{ ...state, sorting, updateFilterValue, clearFilters}}>
            {children}
        </FilterContext.Provider>
    )
}

export const useFilterContext = () => {
    return useContext(FilterContext);
}