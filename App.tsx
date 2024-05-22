import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AuthProvider} from './src/contexts/Auth';
import Stacks from './src/stacks';
import {StyledGestureHandlerRootView} from './src/components/NativeStyledComponents';
import {ThemeProvider} from './src/contexts/Theme';

function App(): React.JSX.Element {
  return (
    <StyledGestureHandlerRootView className="flex-1">
      <ThemeProvider>
        <AuthProvider>
          <NavigationContainer>
            <Stacks />
          </NavigationContainer>
        </AuthProvider>
      </ThemeProvider>
    </StyledGestureHandlerRootView>
  );
}

export default App;
