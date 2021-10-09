import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5000/api', 
   
});
export const sendEmail = payload => api.post(`/contact/sendEmail`, payload)


const apis = {
 sendEmail
};

export default apis