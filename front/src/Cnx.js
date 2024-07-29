import axios from "axios";
import { baseURL } from "./env";

const token = localStorage.getItem('key') ? localStorage.getItem('key') : ''
export default axios.create({
  
  baseURL: baseURL,
   headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    Authorization: `Bearer  ${token}`,
  },
});


