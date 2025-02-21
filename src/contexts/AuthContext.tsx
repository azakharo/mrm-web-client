import React, {
  createContext,
  FC,
  ReactNode,
  useCallback,
  useMemo,
  useState,
} from 'react';

import {getAuthToken, remAuthToken, setAuthToken} from '@/helpers/localStorage';

const isAuthed = (): boolean => !!getAuthToken();

export interface AuthState {
  isAuthenticated: boolean;
}

const initialAuthState: AuthState = {
  isAuthenticated: false,
};

export interface AuthContextType extends AuthState {
  onLoginSuccess: (authToken: string) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType>({
  ...initialAuthState,
  onLoginSuccess: () => {},
  logout: () => {},
});

interface Props {
  children: ReactNode;
}

export const AuthProvider: FC<React.PropsWithChildren<Props>> = ({
  children,
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState(() => isAuthed());

  const onLoginSuccess = useCallback((authToken: string) => {
    setAuthToken(authToken);
    setIsAuthenticated(true);
  }, []);

  const logout = useCallback(() => {
    remAuthToken();
    setIsAuthenticated(false);
  }, []);

  const contextValue = useMemo(
    () => ({
      isAuthenticated,
      onLoginSuccess,
      logout,
    }),
    [isAuthenticated, onLoginSuccess, logout],
  );

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};
