const initialState = {
    products: [],
    totalPrice: 0,
    totalQuantity: 0
}

const cartReducer = (state = initialState, action) => {

    if(action.type === 'ADD_TO_CART'){
        const {product,quantity} = action.payload;
        const exsistingProduct = state.products.find((curItem) => curItem.id === product.id);
        if(exsistingProduct){
            return state;
        } 
        else {
           const TotalPrice = state.totalPrice + product.discount * quantity;
           const TotalQuantity = state.totalQuantity + quantity;
           product.quantity = quantity;
           return {
            ...state, products: [...state.products, product], totalPrice: TotalPrice, 
            totalQuantity: TotalQuantity,
        }
    }
}
else{
    return state;
}
}

export default cartReducer;
