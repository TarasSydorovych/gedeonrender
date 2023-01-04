import axios from 'axios';
export async function  fetchPicture() {
return await axios.get(`http://127.0.0.1:4000/list`)
}
export async function fetchProduct() {
    return await axios.get(`http://127.0.0.1:4000/product`)
    }