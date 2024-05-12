import React, {useContext} from 'react';
import AuthStack from './Auth';
import AuthContext from '../contexts/Auth';
import HomeStack from './Home';

const Stacks = () => {
  const {isAuthenticated, user} = useContext(AuthContext);
  console.log(user);
  return !isAuthenticated ? <AuthStack /> : <HomeStack />;
};

export default Stacks;
