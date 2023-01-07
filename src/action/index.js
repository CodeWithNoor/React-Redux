export const AddToCart = (quantity, product) => {
  return {
    type: 'ADD_TO_CART',
    payload: {quantity, product}
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

export const removeItem = (id) => {
  return {
    type: 'REMOVE_ITEM',
    payload: id
  }
}