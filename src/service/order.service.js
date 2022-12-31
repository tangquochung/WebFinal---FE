import axios from 'axios'
import authHeader from '../service/auth_header';

const url = 'https://motorbikeshop-vewn.onrender.com/' //api product

//function get product from api, return nhieu function
const getOrders = () => {return axios.get(url + 'api/orders',{headers:authHeader()})}

const postOrder=(productId, quantity ) => {
    return axios.post(url + "api/orders", {
        productId, quantity 
    },{headers:authHeader()})
}

const orderservice={getOrders,postOrder}

export default orderservice;