import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID b6542dd86cc6a64a361eb3fef19c31b2e2f97519cb10bf88eba3603eb88067b0'
  }
});
