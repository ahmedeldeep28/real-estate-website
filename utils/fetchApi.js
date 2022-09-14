import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';


export const fetchApi = async (url) => {
    const { data } = await axios.get(url, {
        headers: {
            'X-RapidAPI-Key': 'f520d3c19bmsh474e00718284fb3p148b04jsn31d8960fe260',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
          }
    });
    return data;
}