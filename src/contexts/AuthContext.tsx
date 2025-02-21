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
      setAuthToken(authToken);
      void getLoggedInUser();
    },
    [getLoggedInUser],
  );

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
