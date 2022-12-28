import React, { useEffect, useState } from "react";
import "../../style/checkout.css";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { useCart } from "react-use-cart";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

import orderService from "../../service/order.service";
import getOders from "../../service/order.service";
import authService from "../../service/user.service";

import _ from "lodash";


//check out chua hien trang
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function Checkout() {

  const Navigate = useNavigate();
  const [message, setMessage] = useState("");


  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm({ mode: "onBlur" });

  const [error, setError] = useState([]);

  ////
  const [open, setOpen] = useState(false);
  ///
  const [data, setData] = useState({ user: {} });



  ////
  const onUpdata = (dataupdate) => {
    const firstname = dataupdate.firstname;
    const lastname = dataupdate.lastname;
    const contact = dataupdate.contact;
    const address = dataupdate.address;

    authService.updateInformation(firstname, lastname, contact, address).then(
      () => {
        // window.open("/login")
        window.location.reload();
      },
      (error) => {
        const resMessage =
          (error.response &&
            error.response.dataupdate &&
            error.response.dataupdate.message) ||
          error.message ||
          error.toString();
        setMessage(resMessage);
      }
    );
    console.log(dataupdate);
  };
  //
  const onSubmit = (items) => {
    {
      items &&
        items.map((item) => {
          const productId = item.id;
          const quantity = item.quantity;

          orderService.postOrder(productId, quantity).then(
            () => {
              // window.open("/login")
            },
            (error) => {
              const resMessage =
                (error.response &&
                  error.response.items &&
                  error.response.items.message) ||
                error.message ||
                error.toString();
              setMessage(resMessage);
            }
          );
          console.log(item);
        });
    }
    window.alert("Thank you");
    Navigate.push("/");
    emptyCart();
  };
  //
  const [data1, setData1] = useState({ user: {} });


  const handleClose = () => {
    setOpen(false);
    reset();
  };
  //check out chua hien trang
  const { items, emptyCart, cartTotal } = useCart();

  return (
    <body class="bg-light">
      <div class="container">
        <main>
          <div className="row">
            <div className="col-sm fs-3 d-flex p-2">
              Motorbike 
              <pre> | </pre>
              Payment
            </div>
          </div>
          <div className="" class="col-lg-20">


            <table className="table table-light- m-1 table-sm">
              <tbody>
                <tr>
                  <td
                    className="product-col"
                    style={{ padding: "5px 70px 7px 10px" }}
                  >
                    <b>Product</b>
                  </td>
                  <td
                    className="name-col"
                    style={{ padding: "5px 100px 7px 10px" }}
                  >
                    <b>Name</b>
                  </td>
                  <td
                    className="price-col"
                    style={{ padding: "5px 50px 7px 10px" }}
                  >
                    <b>Price</b>
                  </td>
                  <td
                    className="quantity-col"
                    style={{ padding: "5px 50px 7px 10px" }}
                  >
                    <b>Quantity</b>
                  </td>
                  <td
                    className="price-col"
                    style={{ padding: "5px 50px 7px 10px" }}
                  >
                    <b>Price</b>
                  </td>
                </tr>
                {items.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>
                        <img
                          src={item.img}
                          style={{ height: "10rem" }}
                          alt=""
                        ></img>
                      </td>

                      <td className="content">{item.title}</td>

                      <td className="content">{item.price}</td>
                      <td className="content">{item.quantity}</td>
                      <td className="content">{item.quantity * item.price}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <br />
            <br />

            <div class="card bg-light">
              <div class="row">

                <div class="col-xl-9 fs-5"></div>
                <div class="col-sm fs-5">Cash on Delivery</div>
                <div class="row">
                  <div class="col-xl-8"></div>
                  <div class="col-sm-3 fs-5">Total price: {cartTotal} VND</div>
                </div>
                <div class="row ">
                  <div class="col-xl-8"></div>
                  <div class="col-sm-3 fs-5">Shipping Total: 2000000 VND</div>
                </div>
                <div className="row">
                  <div class="col-xl-8"></div>
                  <div class="col-sm-3 fs-5">Total Payment: {cartTotal + 2000000} VND</div>

                </div>
              </div>

              <div className="row ">
                <div className=" col-sm m-2 d-inline">

                

                </div>
                <button
                  class=" col-sm-3 btn btn-primary m-2"
                  type="submit"
                  onClick={() => onSubmit(items)}
                >

                  Order

                </button>
              </div>
            </div>

            <br />
          </div>
        </main>
      </div>
    </body>
  );
}

export default Checkout;
