import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-builder-react-a2f6f-default-rtdb.firebaseio.com/'
})

export default instance;