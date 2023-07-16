import axios from 'axios';
const API_URL = 'http://localhost:8000';

export const uploaddata = async (data) => {
    try {
        const response = await axios.post(`${API_URL}/upload`, data);
        return response.data;
    } catch (error) {
        console.log("Error while calling api", error.message)
    }
}