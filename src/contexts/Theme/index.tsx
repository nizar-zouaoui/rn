import React, {createContext} from 'react';
import {Dimensions} from 'react-native';

type ThemeContextType = {
  screenWidth: number;
};

const ThemeContext = createContext<ThemeContextType>({
  screenWidth: Dimensions.get('window').width,
});

const ThemeProvider: React.FC<{children: React.JSX.Element}> = ({children}) => {
  return (
    <ThemeContext.Provider
      value={{screenWidth: Dimensions.get('window').width}}>
      {children}
    </ThemeContext.Provider>
  );
};

export {ThemeProvider};
export default ThemeContext;
