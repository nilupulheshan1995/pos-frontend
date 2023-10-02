import { useState } from 'react';
import axios from 'axios';

const API_BASE_URL = 'https://api.example.com'; 

export interface ApiResponse {
    success: boolean;
    message: string;
  }
  
  export interface ApiError {
    error: string;
  }
  
  export interface PostData {
    key: string;
    value: string;
  }
  


const useApiPost = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [response, setResponse] = useState<ApiResponse | null>(null);

  const postData = async (data: PostData) => {
    setIsLoading(true);
    setError(null);

    try {
      const apiUrl = `${API_BASE_URL}/order/place`; 
      const apiResponse = await axios.post<ApiResponse>(apiUrl, data);

      setResponse(apiResponse.data);
    } catch (err:any) {
      const apiError = err.response?.data as ApiError;
      setError(apiError?.error || 'An error occurred while processing your request.');
    } finally {
      setIsLoading(false);
    }
  };

  return { postData, isLoading, response, error };
};

export default useApiPost;
