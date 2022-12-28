import React from 'react'
import { useCart } from 'react-use-cart'
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate  } from "react-router-dom";

import "../../style/Cart.css"

function Cart() {

  let Navigate = useNavigate();

	const {	
      isEmpty,
			totalUniqueItems,
			items,
			totalItems,
			cartTotal,
			updateItemQuantity,
			removeItem,
			emptyCart} = useCart();

      const tocheckout =() => 
      { Navigate("/checkout")}

	if (isEmpty) return <div className="body-cart">
      <i class="fa fa-cart-arrow-down" aria-hidden="true"></i>
      <h5 className="text-center cart-empty" >
      Your shopping cart is empty, please buy something to make us happy! </h5>
    </div>
  return (
    <>
    <section className="py-4 container">
      <div className="row justify-content-center">
        {/* {console.warn(items)} */}
        <div className="col-12">
          <h3 className="title-total-items"> Total Items: {totalItems} </h3>
          <div className='spacer'></div>
          <table className="table table-light- table-hover m-0">
            <tbody>
              <tr>
                <td className="product-col" style={{padding: "5px 70px 7px 10px"}}>
                  <b>Product</b>
                  </td>
                <td className="name-col" style={{padding: "5px 100px 7px 10px"}}>
                  <b>Name</b>
                </td>
                <td className="price-col" style={{ padding: "5px 50px 7px 10px" }}>
                  <b>Price</b>
                </td>
                <td className="quantity-col" style={{padding: "5px 50px 7px 10px"}}>
                  <b>Quantity</b>
                </td>
              </tr>
              {items.map((item,index) =>{
                return (
                  <tr key={index}>
                      <td>
                        <img src={item.img} style={{height: "10rem"}} alt=""></img>
                      </td>
                      <td className="content" >{item.title}</td>
                      <td className="content">{item.price}</td>
                      <td className="content">{item.quantity}</td>
                      <td className="">
                        <button style={{border:"3px solid pink" }} className="btn-subtract btn btn-light ms-2  " 
                                onClick={() => updateItemQuantity(item.id, item.quantity-1)}>
                          - 
                        </button>
                        <button style={{border:"3px solid black" }} className="btn-add btn btn-light ms-2 "
                                onClick={() => updateItemQuantity(item.id, item.quantity+1)}>
                          +
                        </button>
                        <button className="btn-remove btn btn-dark ms-2" onClick={() => removeItem(item.id)}>
                          Remove Item
                        </button>
                      </td>
                  </tr>
                )
            })}
            </tbody>
          </table>
        </div>
        <hr/>
        <div className='spacer'></div>
        <div className="col-auto ms-auto">
          <h3>Total Price:  {cartTotal} VND</h3>
        </div>
        <div className="col-auto ms-auto">
          <button className="clear-btn btn btn-warning m-4  w-40" onClick={() => emptyCart()}>Clear Cart</button>
          <button className="checkout-btn btn btn-primary m-2" onClick={() => tocheckout()}>Check Out</button>
        </div>
      </div>
    </section>
	</>
  )
}

export default Cart
