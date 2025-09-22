import axios from "axios";
const instance = axios.create({
    baseURL:"http://localhost:6200/api"
});
export default instance;