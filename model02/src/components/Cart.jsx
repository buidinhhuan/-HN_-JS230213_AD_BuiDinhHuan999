import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import "bootstrap/dist/css/bootstrap.min.css";
import Product from "./Product";

// or less ideally
function Cart({ product, setProduct }) {
  console.log(product);
   const [count,setCount] =useState(0)
  let max = 99
  let min = 0
  const handleClickPlus =()=>{
      ( count === max) ? alert("bạn đã đạt tới giới hạn")
       : setCount(count+1)
  }
  const handleClickMinus =()=>{
      ( count === min) ? alert("bạn đã đạt tới giới hạn")
       :setCount(count-1)
  }
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        <i className="fa-solid fa-cart-shopping"></i>
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className="cart">Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div>
            <section className="container">
              {product.map((e, i) => (
                <section key={i} className="product">
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

                    <button onClick={handleClickMinus} className="minus">
                      <i className="fa-solid fa-minus"></i>
                    </button>
                    <div>{count}</div>
                    <button onClick={handleClickPlus} className="plus">
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
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Cart;
