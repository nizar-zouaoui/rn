import React, {createContext, useState} from 'react';

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
