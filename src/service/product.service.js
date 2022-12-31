
import axios from 'axios'
import authHeader from './auth_header';

const url = 'https://motorbikeshop-vewn.onrender.com/' //api product


//function get product from api, return nhieu function
const getAllProducts = () => {return axios.get(url + 'api/products')}

const postNewProduct = (title, color, price, img,desc ) => {return axios.post(url + 'api/manage/products',{
    title, color, price, img,desc
},{headers:authHeader()})}

const updateProduct = (productId,title, color, price, img,desc ) => {return axios.patch(url + `api/manage/products/${productId}`,{
    title, color, price, img,desc
},{headers:authHeader()})}


const getProduct = (productId) => {return axios.get(url + `api/products/${productId}`)}


const deleteProduct = (productId) => {return axios.delete(url + `api/manage/products/${productId}`,{headers:authHeader()})}


const productservice={getAllProducts, postNewProduct, updateProduct, getProduct,deleteProduct}

export default productservice;

