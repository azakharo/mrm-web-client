import React, {
  createContext,
  FC,
  ReactNode,
  useCallback,
  useMemo,
  useState,
} from 'react';
import useMount from 'ahooks/es/useMount';

import {getCurrentUser} from '@/api';
import {getAuthToken, remAuthToken, setAuthToken} from '@/helpers/localStorage';
import {User} from '@/types';

const isAuthed = (): boolean => !!getAuthToken();

export interface AuthState {
  isAuthenticated: boolean;
  currentUser: User | null;
}

const initialAuthState: AuthState = {
  isAuthenticated: false,
  currentUser: null,
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
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  const onLoginSuccess = useCallback((authToken: string) => {
    setAuthToken(authToken);
    setIsAuthenticated(true);
    void getCurrentUser().then(user => {
      setCurrentUser(user);
      return;
    });
  }, []);

  const logout = useCallback(() => {
    remAuthToken();
    setIsAuthenticated(false);
    setCurrentUser(null);
  }, []);

  const contextValue = useMemo(
    () => ({
      isAuthenticated,
      currentUser,
      onLoginSuccess,
      logout,
    }),
    [isAuthenticated, onLoginSuccess, logout, currentUser],
  );

  useMount(() => {
    void getCurrentUser().then(user => {
      setCurrentUser(user);
      return;
    });
  });

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};
