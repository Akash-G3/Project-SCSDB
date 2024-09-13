import axios from 'axios';

const instance = axios.create({
    baseURL:"https://api.themoviedb.org/3/",
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MzdkNmRmYWE2MWVmMDEzNDIyOGFmOGVhY2U5YzIwOCIsIm5iZiI6MTcyNjIxNjA3NS4zNzAzMjgsInN1YiI6IjY2ZDAzYjM5YTkyOTQ3NDE4YjQ3M2Q5OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ay7o_Jw7I11dqvyMVB2XVNXaBOJgNXEHNzDBCEDk490'
      }
})

export default instance;