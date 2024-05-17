import React, {createContext, useEffect, useState} from 'react';
import AS from '@react-native-async-storage/async-storage';
import {rootUser, users} from './useAuthHooks';

export type UserData = {
  email: string;
  userName: string;
  password: string;
};

type AuthContextType = {
  isAuthenticated: boolean;
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
  user: UserData | null;
  setUser: React.Dispatch<React.SetStateAction<UserData | null>>;
};

const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  user: null,
  setIsAuthenticated: function (_: React.SetStateAction<boolean>): void {
    throw new Error('Function not implemented.');
  },
  setUser: function (_: React.SetStateAction<UserData | null>): void {
    throw new Error('Function not implemented.');
  },
});

const AuthProvider: React.FC<{children: React.JSX.Element}> = ({children}) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<UserData | null>(null);

  const checkIsAuthenticated = async () => {
    const token = await AS.getItem('token');
    // TODO update this check auth with real backend auth
    // TODO start
    const isUser = users.find(signedUser => signedUser.email === token) || null;
    if (rootUser.email === token || isUser) {
      setIsAuthenticated(true);
      setUser(rootUser.email === token ? rootUser : isUser);
    }
    // TODO end
  };

  useEffect(() => {
    checkIsAuthenticated();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated,
        setUser,
        user,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export {AuthProvider};
export default AuthContext;
