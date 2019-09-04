import axios from 'axios';

export default axios.create({
  baseURL: 'http://bibliapp.herokuapp.com/api'
});