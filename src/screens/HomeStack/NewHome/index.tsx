import React from 'react';
import {
  StyledAnimatedView,
  StyledText,
  StyledView,
} from '../../../components/NativeStyledComponents';
import Card from '../../../components/Card';

const NewHome: React.FC = () => {
  const item = {
    img: 'img 1',
    title: 'title 1',
    description: 'description 1',
    price: 'price 1',
  };
  return (
    <StyledView>
      <StyledText>NewHome</StyledText>
      <StyledAnimatedView sharedTransitionTag="title 1">
        <Card
          description={item.description}
          img={item.img}
          title={item.title}
        />
      </StyledAnimatedView>
    </StyledView>
  );
};

export default NewHome;
