import axios from 'axios';

const Api = (url) => {

    return axios({
    url: url,
    method: 'GET',

    });
}

export default Api;
