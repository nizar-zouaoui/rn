import React, {useContext} from 'react';
import AuthStack from './Auth';
import AuthContext from '../contexts/Auth';
import HomeStack from './Home';

const Stacks = () => {
  const {isAuthenticated} = useContext(AuthContext);
  return !isAuthenticated ? <AuthStack /> : <HomeStack />;
};

export default Stacks;
