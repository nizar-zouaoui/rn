import React, {createContext, useState} from 'react';

type AuthContextType = {
  isAuthenticated: boolean;
  login: ({email, password}: {email: string; password: string}) => void;
  logout: () => void;
  user: {email: string; password: string} | null;
};

const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  user: null,
  login({email, password}) {},
  logout() {},
});

const AuthProvider: React.FC<{children: React.JSX.Element}> = ({children}) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<{email: string; password: string} | null>(
    null,
  );

  const login = ({email, password}: {email: string; password: string}) => {
    setIsAuthenticated(true);
    setUser({email, password});
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
  };
  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        login,
        logout,
        user,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export {AuthProvider};
export default AuthContext;
