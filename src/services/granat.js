import axios from 'axios'

// const baseUrl = 'http://localhost:9999/mcu'
const baseUrl = 'http://pichuser.ru:9999/mcu'

const sendStroka = async(str) => {
    const response = await axios.post(baseUrl, {str})
    return response.data
}

const getSettings = async() => {
    const response = await axios.get(baseUrl);
    return response.data;
}

export default {
    sendStroka,
    getSettings,
}
