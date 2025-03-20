import React, {createContext, FC, useCallback, useMemo, useState} from 'react';
import {useQueryClient} from '@tanstack/react-query';
import useMount from 'ahooks/es/useMount';

import {getCurrentUser, User} from '@entities/user';
import {
  getAuthTokenFromLocalStorage,
  remAuthTokenFromLocalStorage,
  setAuthTokenInLocalStorage,
} from './helpers/localStorage';

const isAuthed = (): boolean => !!getAuthTokenFromLocalStorage();

export interface AuthState {
  isAuthenticated: boolean;
  currentUser: User | null;
}

const initialAuthState: AuthState = {
  isAuthenticated: false,
  currentUser: null,
};

export interface AuthContextType extends AuthState {
  onLoginSuccess: (authToken: string) => Promise<void>;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType>({
  ...initialAuthState,
  onLoginSuccess: () => Promise.resolve(),
  logout: () => {},
});

export const AuthProvider: FC<React.PropsWithChildren> = ({children}) => {
  const queryClient = useQueryClient();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [initializing, setInitializing] = useState(true);

  const getLoggedInUser = useCallback(async () => {
    let user: User | null = null;
    try {
      user = await getCurrentUser();
    } catch (err) {
      console.error('could not get the current user');
      return;
    }

    setCurrentUser(user);
    setIsAuthenticated(true);
  }, []);

  const onLoginSuccess = useCallback(
    (authToken: string) => {
      setAuthTokenInLocalStorage(authToken);
      return getLoggedInUser();
    },
    [getLoggedInUser],
  );

  const logout = useCallback(() => {
    queryClient.clear();
    remAuthTokenFromLocalStorage();
    setIsAuthenticated(false);
    setCurrentUser(null);
  }, [queryClient]);

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
    if (isAuthed()) {
      void getLoggedInUser().then(() => {
        setInitializing(false);
        return;
      });
    } else {
      setInitializing(false);
    }
  });

  if (initializing) {
    return null;
  }

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};
