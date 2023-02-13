import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://us-central1-challenge-f9b45.cloudfunctions.net/api', // THE API (cloud function) URL
  // http://127.0.0.1:5001/challenge-f9b45/us-central1/api
})

export default instance
