import React from 'react';

import {StyledView, StyledText} from '../NativeStyledComponents';

interface ICardProps {
  width?: number;
  height?: string;
  img: string;
  title: string;
  description: string;
  price: string;
}

const Card: React.FC<ICardProps> = ({img, title, description, price}) => {
  return (
    <StyledView>
      <StyledView>
        <StyledText className="font-bold text-red-600">{img}</StyledText>
      </StyledView>
      <StyledView className="p-2">
        <StyledText>{title}</StyledText>
        <StyledText>{description}</StyledText>
        <StyledText>{price}</StyledText>
      </StyledView>
    </StyledView>
  );
};

export default Card;
