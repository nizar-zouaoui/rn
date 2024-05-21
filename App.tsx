import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AuthProvider} from './src/contexts/Auth';
import Stacks from './src/stacks';
import {StyledGestureHandlerRootView} from './src/components/NativeStyledComponents';

function App(): React.JSX.Element {
  return (
    <StyledGestureHandlerRootView className="flex-1">
      <AuthProvider>
        <NavigationContainer>
          <Stacks />
        </NavigationContainer>
      </AuthProvider>
    </StyledGestureHandlerRootView>
  );
}

export default App;
