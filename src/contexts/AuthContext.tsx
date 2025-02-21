import React, {
  createContext,
  FC,
  ReactNode,
  useCallback,
  useMemo,
  useState,
} from 'react';

import {getAuthToken, remAuthToken} from '@/helpers/localStorage';

const isAuthed = (): boolean => !!getAuthToken();

export interface AuthState {
  isAuthenticated: boolean;
}

const initialAuthState: AuthState = {
  isAuthenticated: false,
};

export interface AuthContextType extends AuthState {
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType>({
  ...initialAuthState,
  logout: () => {},
});

interface Props {
  children: ReactNode;
}

export const AuthProvider: FC<React.PropsWithChildren<Props>> = ({
  children,
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState(() => isAuthed());

  const logout = useCallback(() => {
    remAuthToken();
    setIsAuthenticated(false);
  }, []);

  const contextValue = useMemo(
    () => ({
      isAuthenticated,
      logout,
    }),
    [isAuthenticated, logout],
  );

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};
