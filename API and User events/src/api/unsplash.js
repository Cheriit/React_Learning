import axios from 'axios';

// const searchImages = term => {

// }

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID KEY'
    }
})