export const AddToCart = (quantity, product) => {
  return {
    type: 'ADD_TO_CART',
    payload: {quantity, product}
  }
}