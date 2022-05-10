import axios from "axios";

const baseUrl = "https://androy-store.herokuapp.com"; //https://androy-store.herokuapp.com
axios.create({
    baseURL: baseUrl,
    withCredentials: true
})

class product_service {
    static addProduct(product) {
        return axios.post(baseUrl+'/api/v1/products/new-product', product);
    }

    static getProducts() {
        return axios.get(baseUrl+'/api/v1/products/all-products');
    }

    static getProduct(id) {
        return axios.get(`${baseUrl}/api/v1/products/product/${id}`);
    }

    static editProduct(id, product) {
        return axios.put(`${baseUrl}/api/v1/products/update-product/${id}`, product);
    }

    static deleteProduct(id) {
        return axios.delete(`${baseUrl}/api/v1/products/delete-product/${id}`);  //https://androy-store.herokuapp.com
    }
}

export default product_service;