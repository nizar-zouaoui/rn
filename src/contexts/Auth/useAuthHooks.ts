import {useContext} from 'react';
import AuthContext, {UserData} from '.';

const rootUser = {
  email: 'email@example.com',
  userName: 'user',
  password: 'password',
};

const users: UserData[] = [rootUser];
const useAuthHooks = () => {
  const {setIsAuthenticated, setUser} = useContext(AuthContext);
  const login = ({email, password}: {email: string; password: string}) => {
    const existingUser = users.find(us => us.email === email);
    if (
      existingUser &&
      existingUser.email === email &&
      existingUser.password === password
    ) {
      setIsAuthenticated(true);
      return setUser(existingUser);
    }
  };
  const signUp = (newUser: UserData) => {
    const existingUser = users.find(us => us.email === newUser.email);
    if (!existingUser) {
      setIsAuthenticated(true);
      return setUser(newUser);
    }
  };
  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
  };
  return {login, signUp, logout};
};

export default useAuthHooks;
