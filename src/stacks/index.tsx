import React, {useContext} from 'react';
import AuthStack from './Auth';
import AuthContext from '../contexts/Auth';
import TabNav from './TabNav';

const Stacks = () => {
  const {isAuthenticated} = useContext(AuthContext);
  return !isAuthenticated ? <AuthStack /> : <TabNav />;
};

export default Stacks;
