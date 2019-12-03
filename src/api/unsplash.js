import axios from 'axios';

// const searchImages = term => {

// }

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 2bd22c20589bb0a1a3c9d10ceef3feadda9b39595457bade0381616a1eb91501'
    }
})