import axios from "axios";

const axiosinstance = axios.create({
    baseURL:'https://react-transactions.herokuapp.com/api'
})

export default axiosinstance;