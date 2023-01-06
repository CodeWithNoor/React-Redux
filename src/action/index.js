export const AddToCart = ({id, quantity, product}) => {
  return {
    type: 'ADD_TO_CART',
    payload: {id, quantity, product}
  }
}