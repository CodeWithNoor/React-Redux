const initialState = {
  products: [],
  totalPrice: 0,
  totalQuantity: 0,
};

const cartReducer = (state = initialState, action) => { 
    let update_product;
    let index;

  if (action.type === "ADD_TO_CART") {
    const { product, quantity } = action.payload;
    const exsistingProduct = state.products.find(
      (curItem) => curItem.id === product.id
    );
    if (exsistingProduct) {
      return state;
    } else {
      const TotalPrice = state.totalPrice + product.price * quantity;
      const TotalQuantity = state.totalQuantity + quantity;
      product.quantity = quantity;
      return {
        ...state,
        products: [...state.products, product],
        totalPrice: TotalPrice,
        totalQuantity: TotalQuantity,
      };
    }
  }

  if(action.type === 'SET_DECREMENT'){
    update_product = state.products.find((product) => product.id === action.payload) // checked quantity
    index = state.products.findIndex((product) => product.id === action.payload) 
    if(update_product.quantity > 1){
        update_product.quantity -= 1;
        state.products[index] = update_product;
        return {
            ...state,
            totalPrice: state.totalPrice - update_product.price, totalQuantity: state.totalQuantity - 1
        }
     }
  }

  if(action.type === 'SET_INCREMENT'){
    update_product = state.products.find(product => product.id === action.payload);
    index = state.products.findIndex(product => product.id === action.payload);
    update_product.quantity += 1;
    state.products[index] = update_product;
    return {
        ...state,
        totalPrice: state.totalPrice + update_product.price, totalQuantity: state.totalQuantity+1
    }
  }

  // to delete the individual elements from an item cart
  if(action.type === 'REMOVE_ITEM') {
    update_product = state.products.filter((product) => product.id !== action.payload)
    return {
      ...state,
      products: update_product
    }
  }

  // clear the cart
  if(action.type === 'CLEAR_CART'){
    return {
      ...state,
      products: []
    }
  }

else {
    return state;
  }
};

export default cartReducer;
