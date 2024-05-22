/* eslint-disable react-native/no-inline-styles */
import React from 'react';

import {StyledView, StyledText} from '../NativeStyledComponents';

interface IProductCardProps {
  width?: number;
  height?: string;
  img: string;
  title: string;
  description: string;
  price: string;
}

const ProductCard: React.FC<IProductCardProps> = ({
  img,
  title,
  description,
  price,
  width,
  // height = '',
}) => {
  return (
    <StyledView>
      <StyledView className="border-dashed" style={{elevation: 2, width}}>
        <StyledView>
          <StyledText className="font-bold text-red-600">{img}</StyledText>
        </StyledView>
        <StyledView className="p-2">
          <StyledText>{title}</StyledText>
          <StyledText>{description}</StyledText>
          <StyledText>{price}</StyledText>
        </StyledView>
      </StyledView>
    </StyledView>
  );
};

export default ProductCard;
