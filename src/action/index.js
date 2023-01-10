export const AddToCart = (id, color, quantity, product) => {
  return {
    type: 'ADD_TO_CART',
    payload: {id, color, quantity, product}
  }
}

// increment and decrement the product
export const setDecrease = (id) => {
  return {
    type: 'SET_DECREMENT',
    payload: id
  }
}

export const setIncrease = (id) => {
  return {
    type: 'SET_INCREMENT',
    payload: id
  }
}

// remove product in cart
export const removeItem = (id) => {
  return {
    type: 'REMOVE_ITEM',
    payload: id
  }
}

// clear the cart
export const clearCart = () => {
  return {
    type: 'CLEAR_CART'
  }
}