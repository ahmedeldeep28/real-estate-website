import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';


export const fetchApi = async (url) => {
    const { data } = await axios.get(url, {
          headers: {
            'X-RapidAPI-Key': '26f9bff3abmsh627ebbef4daa5d8p146f6ajsn4ebae3c2f432',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
          }
    });
    return data;
}
