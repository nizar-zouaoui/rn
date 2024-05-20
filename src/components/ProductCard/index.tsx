/* eslint-disable react-native/no-inline-styles */
import React from 'react';

import {StyledView, StyledText} from '../NativeStyledComponents';

const ProductCard = () => {
  return (
    <StyledView className="flex flex-col items-center">
      <StyledView className="w-11/12 border-dashed " style={{elevation: 2}}>
        <StyledView className="w-full">
          <StyledText className="font-bold text-red-600">img</StyledText>
        </StyledView>
        <StyledView className="p-2">
          <StyledText>Title</StyledText>
          <StyledText>Description</StyledText>
          <StyledText>Price</StyledText>
        </StyledView>
      </StyledView>
    </StyledView>
  );
};

export default ProductCard;
