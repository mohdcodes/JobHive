import { useState, useEffect } from 'react';
import axios from 'axios';

// import env from 'react-native-dotenv';

const useFetch = (endpoint, query) => {
  const [data, setdata] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [error, setError] = useState(null);
  const options = {
    method: 'GET',
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    params: { ...query },
    headers: {
      'X-RapidAPI-Key': '40551d0084msh0c001313dfcebdfp1ea0fdjsna2727f2cc379',
      'X-RapidAPI-Host': 'jsearch.p.rapidapi.com',
    },
  };
  const fetchData = async () => {
    setisLoading(true);
    try {
      const response = await axios.request(options);
      setdata(response.data.data);
      setisLoading(false);
    } catch (error) {
      setError(error);
      alert('seems something wrong');
    } finally {
      isLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const reFetch = () => {
    setisLoading(true);
    fetchData();
  };
  return { data, isLoading, error, reFetch };
};

export default useFetch;
