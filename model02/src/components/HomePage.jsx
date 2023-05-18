import React, { useState } from "react";

import Cart from "./Cart";
import Product from "./Product";

function HomePage() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Airpods Pro",
      price: 24900,
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTJiKtlpQGkIeOyAPV3qQMNkl8uuRzfGWZtIDb_WgDnam8WjhpL&usqp=CAU",
      count: 0,
      heading: "Wireless Noise Cancelling Earphones",
      des: "AirPods Pro have been designed to deliver active Noise Cancellation for immersive sound. Transparancy mode so much can hear your surroundings.",
    },
    {
      id: 2,
      name: "Apple Watch",
      price: 40900,
      imageUrl: "https://purepng.com/public/uploads/large/apple-watch-pcq.png",
      count: 0,
      heading: "You ve never seen a watch like this",
      des: "The most advanced Apple Watch yet, featuring the Always-On Retina display, the ECG app, international emergency calling, fall detection and a builtin compass.",
    },
    {
      id: 3,
      name: "Macbook Pro",
      price: 199900,
      imageUrl: "https://pngimg.com/uploads/macbook/macbook_PNG8.png",
      count: 0,
      heading: "The best for the brightest",
      des: "Designed for those who defy limits and change the world, the new MacBook Pro is by far the most powerful notebook weve ever made. its the ultimate pro notebook for the ultimate user.",
    },
    {
      id: 4,
      name: "iPhone 11 pro",
      price: 106600,
      imageUrl:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-11-pro-midnight-green-select-2019?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1566954990073",
      count: 0,
      heading: "Pro cameras. Pro display. Pro performance",
      des: "A mind blowing chip that doubles down on machine learning and pushes the boundaries of what a smartphone can do. Welcome to the first iPhone powerful enough to be called Pro.",
    },
  ]);
  return (
    <>
      <div>
        <Cart product={products} setProduct={setProducts}/>
      </div>

      <div>
        <Product product={products} setProduct={setProducts} />
      </div>
    </>
  );
}

export default HomePage;
