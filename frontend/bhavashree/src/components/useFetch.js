import { useState, useEffect } from "react";
import axios from "axios";
const useFetch = (url, options = {}) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios(url, options);
      setData(response.data);
      setError(null);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    if (options.method !== "POST") {
      fetchData();
    }
  }, [url]);

  const doPost = async (postData) => {
    setLoading(true);
    try {
      const response = await axios.post(url, postData);
      setData(response.data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };
  return { data, error, loading, fetchData, doPost };
};

export default useFetch;
