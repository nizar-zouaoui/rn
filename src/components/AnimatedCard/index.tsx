import {SharedValue} from 'react-native-reanimated';
import {StyledAnimatedView} from '../NativeStyledComponents';
import ProductCard from '../ProductCard';
import React from 'react';
import useAnimatedCard from './useAnimatedCard';

interface IAnimatedCardProps {
  index: number;
  translateX: SharedValue<number>;
  item: {
    img: string;
    title: string;
    description: string;
    price: string;
  };
  screenWidth: number;
}

const AnimatedCard: React.FC<IAnimatedCardProps> = ({
  item,
  index,
  translateX,
  screenWidth,
}) => {
  const {animatedStyle} = useAnimatedCard({
    screenWidth,
    index,
    translateX,
  });
  return (
    <StyledAnimatedView
      style={animatedStyle}
      className="justify-center items-center">
      <ProductCard
        width={`w-[${(screenWidth * 0.8).toFixed(0)}px]`}
        description={item.description}
        img={item.img}
        price={item.price}
        title={item.title}
      />
    </StyledAnimatedView>
  );
};

export default AnimatedCard;
