import React from "react";
import { useSelector } from "react-redux";
import PriceFormat from "../Helpers/PriceFormat";
import { Link } from "react-router-dom";
import '../css/Product.css'

const Home = () => {
  const { products } = useSelector((state) => state.productReducer); // destructuring of object
  return (
    <>
      <div className="container">
        <div className="row">
          {products.map((item, index) => {
            const { id, name, price, image, discount, discountPrice} = item;
            return (
              <div className="col-4" key={index}>
                <div className="product">
                  <div className="product__img">
                    <Link to={`/details/${id}`}>
                      <img src={`${image}`} alt="images" />
                    </Link>
                  </div>
                  <div className="product__name">{name}</div>
                  <div className="row">
                    <div className="col-6">
                      <div className="product__price">
                        <span className="actualPrice">
                          {PriceFormat(price)}
                        </span>
                        <span className="discount">{discount}%</span>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="product__discount__price">
                        {PriceFormat(discountPrice)}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Home;
