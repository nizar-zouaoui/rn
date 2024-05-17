import {useContext} from 'react';
import AuthContext, {UserData} from '.';
import AS from '@react-native-async-storage/async-storage';

export const rootUser = {
  email: 'email@example.com',
  userName: 'user',
  password: 'password',
};

export const users: UserData[] = [rootUser];
const useAuthHooks = () => {
  const {setIsAuthenticated, setUser} = useContext(AuthContext);
  const login = ({email, password}: {email: string; password: string}) => {
    // TODO update this check auth with real backend auth
    // TODO start
    const existingUser = users.find(us => us.email === email);
    if (
      existingUser &&
      existingUser.email === email &&
      existingUser.password === password
    ) {
      setIsAuthenticated(true);
      AS.setItem('token', email);
      return setUser(existingUser);
    }
    // TODO end
  };
  const signUp = (newUser: UserData) => {
    // TODO update this check auth with real backend auth
    // TODO start
    const existingUser = users.find(us => us.email === newUser.email);
    if (!existingUser) {
      setIsAuthenticated(true);
      AS.setItem('token', newUser.email);
      return setUser(newUser);
    }
    // TODO end
  };
  const logout = () => {
    setIsAuthenticated(false);
    AS.removeItem('token');
    setUser(null);
  };

  return {login, signUp, logout};
};

export default useAuthHooks;
