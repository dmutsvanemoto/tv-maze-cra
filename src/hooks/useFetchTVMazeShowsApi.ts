import { useState, useEffect } from "react";
import axios from "axios";

const useFetchTVMazeShowsApi = () => {
  const [data, setData] = useState<any[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);

      const CancelToken = axios.CancelToken;
      const source = CancelToken.source();

      try {
        const response = await axios.get<any[]>(
          `http://api.tvmaze.com/schedule`,
          { cancelToken: source.token }
        );

        setData(response.data);
      } catch (error) {
        setIsError(true);
      }

      setIsLoading(false);
    };

    fetchData();
    return () => {};
  }, []);

  return { data, isLoading, isError };
};

export default useFetchTVMazeShowsApi;
