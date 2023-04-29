// AuthContext.tsx
import { createContext, useState, useEffect, ReactNode, useCallback } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { USER_R_T, USER_A_T } from '@config/constants';
import { useNavigation } from '@react-navigation/native';

interface AuthContextValue {
  user: any;
  setUser: (user: any) => void;
  accessToken: string | null;
  setAccessToken: (token: string | null) => void;
  refreshToken: string | null;
  setRefreshToken: (token: string | null) => void;
  isAuthenticated: () => boolean;
  login: (accessToken: string, refreshToken: string, userId: string | number) => void;
  logout: () => void;
  setUserId: (id: string | number) => void;
  userId: string | number | null;
}

export const AuthContext = createContext<AuthContextValue>({} as AuthContextValue);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const navigation = useNavigation();
  const [user, setUser] = useState<any>(null);
  const [userId, setUserId] = useState<string | number | null>(null);
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [refreshToken, setRefreshToken] = useState<string | null>(null);

  const isAuthenticated = () => {
    return !!accessToken;
  };

  const storeTokens = async (accessToken: string, refreshToken: string) => {
    await AsyncStorage.setItem(USER_A_T, accessToken);
    await AsyncStorage.setItem(USER_R_T, refreshToken);
  };

  const login = (accessToken: string, refreshToken: string, userId: string | number) => {
    setAccessToken(accessToken);
    setRefreshToken(refreshToken);
    storeTokens(accessToken, refreshToken);
    setUserId(userId);

  };

  const logout = useCallback(async () => {
    setAccessToken(null);
    setRefreshToken(null);
    await AsyncStorage.removeItem('accessToken');
    await AsyncStorage.removeItem('refreshToken');
    navigation.navigate('Start');
  }, []);

  useEffect(() => {
    (async function () {
      try {
        const at = await AsyncStorage.getItem(USER_A_T);
        const rt = await AsyncStorage.getItem(USER_R_T);
        if (at && rt) {
          setAccessToken(at);
          setRefreshToken(rt);
        } else {
          logout();
        }
      } catch (e) {
        console.log(e);
      }
    }());
  }, [logout]);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        accessToken,
        setAccessToken,
        refreshToken,
        setRefreshToken,
        isAuthenticated,
        login,
        logout,
        userId,
        setUserId,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
