const filterReducer = (state, action) => {
    switch(action.type){
        case "LOAD_FILTER_PRODUCTS":
            let priceArr = action.payload.map((item) => item.price);

            let maxPrice = Math.max(...priceArr);
            let minPrice = Math.min(...priceArr)
       
        return {
            ...state,
            filter_products: [...action.payload],
            all_products: [...action.payload],
            filters: {...state.filters, price: maxPrice, maxPrice: maxPrice, minPrice: minPrice}
        }

        case "GET_SORT_VALUE":
        
           

            return{
                ...state,
                sorting_value : action.payload,
            }

        case "SORTING_PRODUCTS":
            let newSortData;
            // let tempSortProduct = [...action.payload];

            const {filter_products, sorting_value} = state;
            let tempSortProduct = [...filter_products];

            const sortingProducts = (a, b) => {
                if(sorting_value === "lowest"){
                    return a.price - b.price;

                }
                if(sorting_value === "highest"){
                    return b.price - a.price;
                }

                if(sorting_value === "a-z"){
                   return a.name.localeCompare(b.name)
                }
                if(sorting_value === "z-a"){
                   return b.name.localeCompare(a.name)
                }
            }

            newSortData = tempSortProduct.sort(sortingProducts)


            return {
                ...state,
                filter_products: newSortData,
            }

            case "UPDATE_FILTERS_VALUE":
                const {name, value} = action.payload;

                return{
                    ...state,
                    filters:{
                        ...state.filters,
                         [name]:value,

                    }
                }

            case "FILTER_PRODUCTS":
                let {all_products} =state;
                let tempFilterProducts = [...all_products];

                const {text, category, gender, kids, price, sports} = state.filters;
                if(text){
                    tempFilterProducts = tempFilterProducts.filter((item) => {
                        return item.name.toLowerCase().includes(text);
                    })
                }
                if(category !== "all"){
                    tempFilterProducts = tempFilterProducts.filter((item) => {
                        return item.category === category;
                    })
                }
               

                
               
                if(gender !== "all"){
                    tempFilterProducts = tempFilterProducts.filter((item) => {
                        return item.gender === gender;
                    })
                }
                // if(color){
                //     tempFilterProducts = tempFilterProducts.filter((item) => {
                //         return item.color.includes(color)
                //     })
                // }

                 if(kids !== "all"){
                    tempFilterProducts = tempFilterProducts.filter((item) => {
                        return item.kids === kids;
                    })
                }

                if(price){
                    tempFilterProducts = tempFilterProducts.filter((item) => {
                         return item.price <= price ;
                    })
                 }

                 if(sports !== "all"){
                    tempFilterProducts = tempFilterProducts.filter((item) => {
                        return item.sports === sports;
                    })
                 }

                
                

 

                return{
                    ...state,
                    filter_products:tempFilterProducts

                }

                case "CLEAR_FILTERS":
                    return {
                        ...state,
                        filters: {
                            ...state.filters,
                            text: "",
                            category: "all",
                            gender: "all",
                            color:"all",
                            kids: "all",
                            price: state.filters.maxPrice,
                            maxPrice: state.filters.maxPrice,
                            minPrice: state.filters.minPrice,
                            sports: "all"
                        }
                    }



 

         default:
         return state;


    }
}

export default filterReducer;