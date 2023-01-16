const initialState = {
  products: [],
  totalQuantities: 0,
  totalPrice: 0,
};


const cartReducer  = (state = initialState, action) => {
  if(action.type === 'ADD_TO_CART'){
    let {product, quantity} = action.payload;
    const exsisting_product = state.products.find((curItem) => curItem.id === product.id)
    if(exsisting_product){
      return state
    } else {
      const Total__Price = state.totalPrice + product.discountPrice * quantity
      const Total__Item = state.totalQuantities + quantity
      product.quantity = quantity
      return {
        ...state, products: [...state.products, product],
        totalPrice: Total__Price,
        totalQuantities: Total__Item,
      }
    }
  }

    if(action.type === 'SET_INCREMENT'){
     let updatedCart = state.products.find(product => product.id === action.payload);
     let index = state.products.findIndex(product => product.id === action.payload);
     updatedCart.quantity += 1;
      state.products[index] = updatedCart;
      return {
          ...state,
          totalPrice: state.totalPrice + updatedCart.discountPrice, totalQuantities: state.totalQuantities + 1
      }
    }
    
    if(action.type === 'SET_DECREMENT'){
     let updatedCart = state.products.find(product => product.id === action.payload);
     let index = state.products.findIndex(product => product.id === action.payload); // find out index & then quantity update
      if(updatedCart.quantity > 1){
        updatedCart.quantity -= 1;
         state.products[index] = updatedCart;
         return {
             ...state,
             totalPrice: state.totalPrice - updatedCart.discountPrice, totalQuantities: state.totalQuantities - 1
         }
      } return state
    }

    if(action.type === 'REMOVE_ITEM'){
      let updatedCart = state.products.filter ((curElem) => curElem.id !== action.payload)
      return {
        ...state, products: updatedCart
      }
    }

    if(action.type === 'CLEAR_CART') {
      return {
        ...state, products: []
      }
    }

   else {
    return state
  }
}

export default cartReducer
