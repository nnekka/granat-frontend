import axios from 'axios'

const baseUrl = 'http://localhost:9999/mcu'

const sendStroka = async(str) => {
    const response = await axios.post(baseUrl, {str})
    return response.data

}

export default {sendStroka}