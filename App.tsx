import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AuthProvider} from './src/contexts/Auth';
import Stacks from './src/stacks';

function App(): React.JSX.Element {
  return (
    <AuthProvider>
      <NavigationContainer>
        <Stacks />
      </NavigationContainer>
    </AuthProvider>
  );
}

export default App;
