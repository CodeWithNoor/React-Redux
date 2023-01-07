import React, { useEffect,useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import PriceFormat from "../Helpers/PriceFormat";
import {AddToCart} from '../action/index'
import { Link } from "react-router-dom";
import '../css/Product.css'

const SingleProduct = () => {
  const [quantity, setQuantity] = useState(1)
  const { id } = useParams(); // destructuring of id
  const dispatch = useDispatch();
  const { product } = useSelector((state) => state.productReducer); // destructuring of product || get single product
  
  useEffect(() => {
    dispatch({ type: "PRODUCT", id });
  }, [id]);

  const decQuantity = () => {
    if(quantity > 1) {
      setQuantity(quantity-1)
  }
  }

  return (
    <>
      <div className="container mt-100">
        <div className="row">
          <div className="col-6">
            <div className="details__image">
              <img src={`${product.image}`} alt="" />
            </div>
          </div>
          <div className="col-6">
            <div className="details__name">{product.name}</div>
            <div className="details__prices">
              <span className="details__actaul">
                {PriceFormat(product.price)}
              </span>
              <span className="details__discount">
                {PriceFormat(product.price)}
              </span>
            </div>
            <div className="details__info">
              <div className="details__incDec">
                <span className="dec" onClick={decQuantity}><i class="fa-solid fa-minus"></i></span>
                <span className="quantity">{quantity}</span>
                <span className="inc" onClick={() => setQuantity(quantity+1)}><i class="fa-solid fa-plus"></i></span>
                <button className="btn-default" onClick={() => dispatch(AddToCart(quantity,product))}><Link to='/cart'>ADD TO CART</Link></button>
              </div>
            </div>
            <div className="details__p">
              <h4>Details</h4>
              {product.description}
            </div>
            <div className="details__p">
              {product.productMeta}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
