import axios from 'axios';
import backendurl from "../config/config"

const API_URL = `${backendurl}/log`;

export const fetchLogsByType = (type) => {
  return axios.get(`${API_URL}?type=${type}`).then(response => response.data);
};

