import React from 'react';

import {StyledView, StyledText} from '../NativeStyledComponents';

export interface ICardProps {
  img: string;
  title: string;
  description: string;
}

const Card: React.FC<ICardProps> = ({img, title, description}) => {
  return (
    <StyledView>
      <StyledView>
        <StyledText className="font-bold text-red-600">{img}</StyledText>
      </StyledView>
      <StyledView className="p-2">
        <StyledText>{title}</StyledText>
        <StyledText>{description}</StyledText>
      </StyledView>
    </StyledView>
  );
};

export default Card;
