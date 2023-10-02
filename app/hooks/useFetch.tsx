import React from 'react'
import { useState, useEffect } from 'react';
import axios, { AxiosResponse, AxiosError } from 'axios';

type Props = {
    url: string
}

interface FetchState<T> {
    data: T | null;
    loading: boolean;
    error: AxiosError | null;
}

const useFetch = (props: Props) => {
    const [data, setData] = useState<any | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<AxiosError | any>(null);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response: AxiosResponse<any> = await axios.get<any>(props.url);
            setData(response.data);
          } catch (error) {
            setError(error);
          } finally {
            setLoading(false);
          }
        };
    
        fetchData();
    
      }, [props.url]);

    return (
        <div>useFetch</div>
    )
}

export default useFetch

