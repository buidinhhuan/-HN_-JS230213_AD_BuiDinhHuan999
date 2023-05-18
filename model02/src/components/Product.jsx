import React, { useState } from "react";

function Product({ product, setProduct }) {
    
    const handleClickPlus = (productId) => {
      setProduct((prevProducts) => {
        return prevProducts.map((p) => {
          if (p.id === productId) {
            return {
              ...p,
              count: p.count + 1
            };
          }
          return p;
        });
      });
    };
  
    const handleClickMinus = (productId) => {
      setProduct((prevProducts) => {
        return prevProducts.map((p) => {
          if (p.id === productId) {
            return {
              ...p,
              count: p.count - 1 >= 0 ? p.count - 1 : 0
            };
          }
          return p;
        });
      });
    };
  
    return (
      <div>
        <section className="container">
          {product.map((e) => (
            <section key={e.id} className="product">
              <div className="navbar">
                <div className="icon-apple">
                  <i className="fa-brands fa-apple"></i>
                </div>
                <div>ABC SHOP</div>
              </div>
              <div>
                <img src={e.imageUrl} alt="" />
              </div>
              <div className="Productname">
                <div>{e.name}</div>
                <button
                  onClick={() => handleClickMinus(e.id)}
                  className="minus"
                >
                  <i className="fa-solid fa-minus"></i>
                </button>
                <div>{e.count}</div>
                <button onClick={() => handleClickPlus(e.id)} className="plus">
                  <i className="fa-solid fa-plus"></i>
                </button>
                <div className="icon-heart">
                  <i className="fa-solid fa-heart"></i>
                </div>
              </div>
            </section>
          ))}
        </section>
      </div>
    );
  }
  
  export default Product;
  