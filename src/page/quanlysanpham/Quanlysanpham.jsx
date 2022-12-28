import React, { useEffect, useState } from "react";
import {
  Link,
  useHistory,
  useNavigate,
  useParams,
  useLocation,
} from "react-router-dom";


import { useForm } from "react-hook-form";
import productservice from "../../service/product.service";
import ModalUser from "./addnew";
import "../../style/manage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PostNewProduct from "../quanlysanpham/addnew";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import _ from "lodash";
import "./Quanlysanpham.scss"

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

function Quanlysanpham() {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isDirty, dirtyFields },
    setValue,
  } = useForm({ mode: "onBlur" });
  const [error, setError] = useState([]);
  ////
  const [data, setData] = useState({ products: [] });
  useEffect(() => {
    productservice.getAllProducts().then((res) => {
      setData(res.data);
    });
  }, []);

  ////
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);

  const [data1, setData1] = useState({ products: {} });
  const handleOpen = (product) => {
    setOpen(true);
    setData1(product);
    if (data1 && !_.isEmpty(data1)) {
      setValue = () => [
        { id: data1.id },
        { title: data1.title },
        { color: data1.color },
        { price: data1.price },
        { img: data1.img },
        { desc: data1.desc }

      ];
    }
  };
  const handleClose = () => {
    setOpen(false);
    reset();
  };
  const handleOpen1 = () => setOpen1(true);
  const handleClose1 = () => setOpen1(false);

  ///

  /////

  const onUpdata = (dataupdate) => {
    const title = dataupdate.title;
    const color = dataupdate.color;
    const price = dataupdate.price;
    const img = dataupdate.img;
    const productId = dataupdate.productId;
    const desc = dataupdate.desc;

    productservice.updateProduct(productId, title, color, price, img,desc).then(
      () => {
        // window.open("/login")
        window.alert("Successed!");
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
  };
  const onAddnew = (dataAddnew) => {
    const title = dataAddnew.title;
    const price = dataAddnew.price;
    const img = dataAddnew.img;
    const color = dataAddnew.color;
    const desc = dataAddnew.desc;
    productservice.postNewProduct(title, color, price, img,desc).then(
      () => {
        // window.open("/login")
        window.alert(" Successed!");
        window.location.reload();
      },
      (error) => {
        const resMessage =
          (error.response &&
            error.response.dataAddnew &&
            error.response.dataAddnew.message) ||
          error.message ||
          error.toString();
        setMessage(resMessage);
      }
    );
    console.log(dataAddnew);
  };

  const [isopen, setIsopen] = useState(false);

  const handelAddnewProducts = () => {
    navigate("/addnew");
  };

  const LoadEdit = (id) => {
    navigate("/edit/" + id);
  };
  const Removefunction = (id) => {
    if (window.confirm("Do you want to remove?")) {
      productservice
        .deleteProduct(id)
        .then((res) => {
          alert("Removed successfully.");
          window.location.reload();
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  };
  return (
    <body>
    <div className="mx-1 mt-5">
      <button className="btn btn-primary manage-product--addnew" onClick={handleOpen1}>
        Add new product
      </button>
    </div>
    <div className="users-table mt-3 mx-1">
      <div>
        <Modal
          open={open1}
          onClose={handleClose1}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <form onSubmit={handleSubmit(onAddnew)} className="form-register p-1">
            <h1>
              {" "}
              <b>ADD NEW</b>{" "}
            </h1>
            {/* name */}
            <label htmlFor="title"> title</label>
            <input
              name="title"
              type="text"
              {...register("title", {
                required: " title is required"
              })}
            ></input>
            {errors.title && (
              <small className="notion-text"> {errors.title.message}</small>
            )}

            {/* color */}

            <label htmlFor="color"> color </label>
            <input
              name="color"
              type="text"
              {...register("color", {
                required: " color is required"
              })}
            ></input>
            {errors.color && (
              <small className="notion-text"> {errors.color.message}</small>
            )}


            {/* price */}

            <label htmlFor="price">price</label>
            <input
              name="price"
              type="text"
              {...register("price", {
                required: "price is required",
              })}
            ></input>
            {errors.price && (
              <small className="notion-text"> {errors.price.message}</small>
            )}
             {/* price */}

             <label htmlFor="desc">desc</label>
            <input
              name="desc"
              type="text"
              {...register("desc", {
                required: "desc is required",
              })}
            ></input>
            {errors.desc && (
              <small className="notion-text"> {errors.desc.message}</small>
            )}

            {/* image */}
            <label htmlFor="img">img</label>
            <input
              type="url"
              name="img"
              {...register("img", {
                required: "image is required",
              })}
            ></input>
             {errors.img && (
              <small className="notion-text"> {errors.img.message}</small>
            )}

            {message && (
              <div>
                <div role="alert">{message}</div>
              </div>
            )}
            <div className="row">
              <Button className="col-sm" type="submit" color="primary">
                Save
              </Button>
              <Button
                className="col-sm"
                color="secondary"
                onClick={handleClose1}
              >
                Cancel
              </Button>
            </div>
          </form>
        </Modal>
      </div>
      <table id="customers">
        <tr className="manage-header--title">
          <th className="h-10 w-10 manage-header--title-item">Product</th>
          <th className="manage-header--title-item">Name</th>
          <th className="manage-header--title-item">Price</th>
          <th className="manage-header--title-item">Description</th>
          <th className="manage-header--title-item">Action</th>
        </tr>
        {data.products &&
          data.products.map((product) => {
            return (
              <tr key={product.id}>
                <td>
                  {" "}
                  <img className="manage-product--img-product" src={product.img} />
                </td>
                <td>{product.title}</td>
                <td>{product.price}</td>
                <td>{product.desc}</td>
                <td>
                  <div className="management-product--actions-box">
                  <button 
                    className="btn btn-danger m-2 management-product--btn-edit"
                    onClick={() => handleOpen(product)}
                  >
                    Edit
                  </button>
                  <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                    className="bg-body"
                  >
                    <form
                      onSubmit={handleSubmit(onUpdata)}
                      className="form-register h-100 "
                    >
                      <h1>
                        {" "}
                        <b>UPDATE</b>{" "}
                      </h1>
                      {/* id */}

                      <label htmlFor="productId"> product id</label>

                      <input
                        name="productId"
                        type="text"
                        defaultValue={data1.id}
                        {...register("productId")}
                      ></input>
                      {/* name */}
                      <label htmlFor="title"> title</label>
                      <input
                        name="title"
                        type="text"
                        defaultValue={data1.title}
                        {...register("title", {
                          required: " title is required"         
                        })}
                      ></input>
                      {errors.title && (
                        <small className="notion-text">
                          {" "}
                          {errors.title.message}
                        </small>
                      )}

                      {/* material */}

                      <label htmlFor="color"> color</label>
                      <input
                        name="color"
                        type="text"
                        defaultValue={data1.color}
                        {...register("color", {
                          required: " color is required",                  
                        })}
                      ></input>
                      {errors.color && (
                        <small className="notion-text">
                          {" "}
                          {errors.color.message}
                        </small>
                      )}

                      {/* price */}

                      <label htmlFor="price">price</label>
                      <input
                        name="price"
                        defaultValue={data1.price}
                        type="text"
                        {...register("price", {
                          required: "price is required",
                        })}
                      ></input>
                      {errors.price && (
                        <small className="notion-text">
                          {" "}
                          {errors.price.message}
                        </small>
                      )}
  {/* price */}

  <label htmlFor="desc">desc</label>
                      <input
                        name="desc"
                        defaultValue={data1.desc}
                        type="text"
                        {...register("desc", {
                          required: "desc is required",
                        })}
                      ></input>
                      {errors.desc && (
                        <small className="notion-text">
                          {" "}
                          {errors.desc.message}
                        </small>
                      )}
                      {/* image */}
                      <label htmlFor="img">img</label>
                      <input
                        type="url"
                        name="img"
                        defaultValue={data1.img}
                        {...register("img", {
                          required: "image is required",
                        })}
                      ></input>
                      {errors.img && (
                        <small className="notion-text">
                          {" "}
                          {errors.img.message}
                        </small>
                      )}

                      {message && (
                        <div>
                          <div role="alert">{message}</div>
                        </div>
                      )}

                      <div className="row">
                        <Button
                          className="col-sm"
                          type="submit"
                          color="primary"
                        >
                          Save
                        </Button>
                        <Button
                          className="col-sm"
                          color="secondary"
                          onClick={handleClose}
                        >
                          Cancel
                        </Button>
                      </div>
                    </form>
                  </Modal>
                  <button
                    onClick={() => {
                      Removefunction(product.id);
                    }}
                    className="btn btn-danger management-product--btn-delete"
                  >
                    Delete
                  </button>
                  </div>
                </td>
              </tr>
            );
          })}
      </table>
    </div>
  </body>
);
}

export default Quanlysanpham;
