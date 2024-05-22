import {SharedValue} from 'react-native-reanimated';
import {StyledAnimatedView} from '../NativeStyledComponents';
import ProductCard from '../ProductCard';
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
  const width = screenWidth * 0.8;
  return (
    <StyledAnimatedView
      style={{...animatedStyle, width: screenWidth}}
      className="justify-center items-center">
      {width && (
        <ProductCard
          width={width}
          description={item.description}
          img={item.img}
          price={item.price}
          title={item.title}
        />
      )}
    </StyledAnimatedView>
  );
};

export default AnimatedCard;
