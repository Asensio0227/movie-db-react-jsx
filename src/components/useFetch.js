import {useState,useEffect, } from 'react'
export const API_END_POINT = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`;

const useFetch = (urlParam) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState({ show: false, msg: "" });

  const fetchMovie = async (url) => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      if (data.Response === "True") {
        setData(data.Search || data);
        setError({ show: false, msg: '' });
      } else {
        setError({show:true, msg: data.Error})
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }

  useEffect(() => {
    fetchMovie(`${API_END_POINT}${urlParam}`)
  },[urlParam])
  
  return { loading, error, data };
}

export default useFetch;
