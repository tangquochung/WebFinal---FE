import React, { useState,useEffect } from "react";
import "../style/register.css";
import { Link, useHistory,useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import productservice from "../service/product.service";

function EditProduct() {
  let history = useHistory();
  const [message, setMessage] = useState("");
  const {    register,   handleSubmit,  formState: { errors }, } = useForm({ mode: "onBlur" });
 
  //
  const [data, setData] = useState({product:{}}); 
  useEffect(() => {
    productservice.getProduct(productId)
    .then((res) =>{
      setData(res.data)
    })
  },[])
//
const { productId } = useParams();
//
const handleChangeName=(e,data)=> {
    const name=e.target.value;
    const material=data.material;
    const price=data.price;
    const img=data.img;

    const empdata={name,material,price,img};   
    setData(empdata);
   }



  const onSubmit = (data) => {
    const name = data.name;
    const material = data.material;
    const price = data.price;
    const img = data.img;
    productservice.updateProduct(productId,name, material, price, img).then(
      () => {
        // window.open("/login")
        window.alert(" Successed!");
        history.push("/manageProduct");
      },
      (error) => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        setMessage(resMessage);
      }
    );
    console.log(data);
  };


  return (
    
    <div className="register">
      <form onSubmit={handleSubmit(onSubmit)} className="form-register">
        <h1>  <b>Edit</b> </h1>
        {/* firstname */}
        <label htmlFor="name"> name</label>
        {data && <input 
        value={data.product.name}
        onChange={handleChangeName}
          name="name"
          type="text"
          {...register("name", {
            required: "First name is required",
          })}
        ></input>}
        {errors.name && (
          <small className="notion-text"> {errors.name.message}</small>
        )}

        {/* lastname */}

        <div class="form-group">
          <label for="exampleFormControlSelect1">material</label>
          {data && <select
          value={data.product.material}
            class="form-control"
            id="exampleFormControlSelect1"
            {...register("material")}
          >
            <option>Diamond</option>
            <option>Gold</option>
            <option>Silver</option>
          </select>}
        </div>

        {/* email */}

        <label htmlFor="price">price</label>
        {data && <input
          name="price"
          type="text"
          value={data.product.price}
          {...register("price", {
            required: "price is required",
          })}
        ></input>}
        {errors.price && (
          <small className="notion-text"> {errors.price.message}</small>
        )}

        {/* username */}
        <label htmlFor="img">img</label>
        {data && <input
        value={data.product.img}
          name="img"
          {...register("img", {
            required: "img is required"
          })}
        ></input>}

        {message && (
          <div>
            <div role="alert">{message}</div>
          </div>
        )}
        <button type="submit" className="btn-login">Save</button>

      </form>
    </div>
  );
}

export default EditProduct;
