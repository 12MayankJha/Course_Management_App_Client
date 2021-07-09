import axios from 'axios';

const api = "api/";
const popularProducts = api + 'getAllPopularProducts';
const subcategoryProducts = api + 'getAllProducts';
const categoryProducts = api + 'getProductByCategory';

class Services {
    getAllPopular() {
        return axios.get(popularProducts).then((response) => (response.data))
    }

    getSubCategoryProducts() {
        return axios.get(subcategoryProducts).then((response) => (response.data))
    }

    getCategoryProducts() {
        return axios.get(categoryProducts).then((response) => (response.data))
    }
}

export default new Services();