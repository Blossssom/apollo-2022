import axios from "axios";


const API_URL = "https://yts.mx/api/v2/list_movies.json";

const getMovies = async (limit, rating) => {
    await axios.get(`${API_URL}`).then(res => {
        let b = res.data.movies;
        console.log(b)
    });
}


export {getMovies};