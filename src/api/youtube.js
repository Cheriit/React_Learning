import axios from 'axios';

const KEY = 'AIzaSyAONbfuh3bebTr7pfrUokEpnYX8nvbbDhs';

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params : {
        part: 'snippet',
        maxResults: 5,
        key: KEY,
        type: 'video'
    }

});