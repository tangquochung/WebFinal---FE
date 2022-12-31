import React, { useState, useEffect } from "react";
import "./Shopping.scss";
import axios from "axios";
import { useCart } from "react-use-cart";

function Shopping() {

  const { addItem } = useCart();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("hhttps://motorbikeshop-vewn.onrender.com/api/products")
      .then((res) => {
        setProducts(res.data.products);
        console.log(res.data.products);

      });
  }, []);



  const handleAddtocart= (ID) => {
    if(localStorage.getItem("productID"))
      localStorage.removeItem("productID")
    localStorage.setItem("productID", ID)
  }
  return (
    <div className="shopping">
      <ul className="list">
        {products.map((product) => (
          <div key={product.id}>
            <li className="item">
              <div className="img-box">
                <img className="img" src={product.img} alt="img item" />
              </div>
              <div className="content">
                <p className="title">{product.title}</p>
                <p className="desc">{product.desc}</p>
                {/* <p className="color">{product.color}</p> */}
                <div className="color-list">
                    <div className="item red active"></div>
                    <div className="item yellow"></div>
                </div>

                <p className="price">{product.price} VND</p>
                <div className="actions">
                </div>
                <div className="actions">
                 <button className="btn btn-add" onClick={()=>{addItem(product)}}>Add to cart</button>
                </div>
              </div>
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
}
export default Shopping;
