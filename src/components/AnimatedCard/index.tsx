/* eslint-disable react-native/no-inline-styles */
import {SharedValue} from 'react-native-reanimated';
import {StyledAnimatedView} from '../NativeStyledComponents';
import Card from '../Card';
import React, {useContext} from 'react';
import useAnimatedCard from './useAnimatedCard';
import ThemeContext from '../../contexts/Theme';

interface IAnimatedCardProps {
  index: number;
  translateX: SharedValue<number>;
  item: {
    img: string;
    title: string;
    description: string;
    price: string;
  };
}

const AnimatedCard: React.FC<IAnimatedCardProps> = ({
  item,
  index,
  translateX,
}) => {
  const {screenWidth} = useContext(ThemeContext);
  const {animatedStyle} = useAnimatedCard({
    screenWidth,
    index,
    translateX,
  });
  return (
    <StyledAnimatedView
      style={{...animatedStyle, width: screenWidth}}
      className="justify-center items-center border-dashed">
      <StyledAnimatedView
        className="border-dashed"
        style={{elevation: 2, width: screenWidth * 0.8}}>
        <Card
          description={item.description}
          img={item.img}
          price={item.price}
          title={item.title}
        />
      </StyledAnimatedView>
    </StyledAnimatedView>
  );
};

export default AnimatedCard;
