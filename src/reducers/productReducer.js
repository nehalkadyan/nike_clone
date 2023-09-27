const ProductReducer = (state, action) => {
    switch(action.type){
        case "SET_API_DATA":
            const productData = action.payload.filter((item) => {
                return item
            });

            return {
                ...state,
                products: action.payload,
                total_products: productData,
                
                 
                
            };

            

            case "API_ERROR":
                return {
                    ...state,
                    isError: true
                };

            case "SET_SINGLE_PRODUCT":
                return{
                    ...state,
                    singleProduct: action.payload,
                };

             case "SET_SINGLE__ERROR":
                    return {
                        ...state,
                        isError: true
                    };

           


                default:
                    return state;
    }
}

export default ProductReducer;