// useProtectedRequest.ts
import { useContext } from 'react';
import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';

import { AuthContext } from '@store/AuthContext';
import { REFRESH_TOKEN } from '@config/constants';

export const useProtectedRequest = () => {
  const { accessToken, refreshToken, setAccessToken, setRefreshToken } = useContext(AuthContext);

  const protectedRequest = async (requestConfig: AxiosRequestConfig): Promise<AxiosResponse | null> => {
    try {
      const response = await axios({ ...requestConfig, headers: { ...requestConfig.headers, Authorization: `Bearer ${accessToken}` } });
      return response;
    } catch (error) {
      if ((error as AxiosError).response?.status === 401) {
        // Token expired; attempt to refresh it
        try {
          const { data } = await axios.post(REFRESH_TOKEN, { refreshToken });
          setAccessToken(data.accessToken);
          setRefreshToken(data.refreshToken);
          return await protectedRequest(requestConfig);
        } catch (refreshError) {
          // Refresh failed; redirect to login
          console.error('Failed to refresh access token:', refreshError);
          return null;
        }
      }
      throw error;
    }
  };

  return protectedRequest;
};
