import React from 'react';
import {StyledAnimatedScrollView, StyledView} from '../NativeStyledComponents';
import Icon from '../Icon';
import AnimatedCard from '../AnimatedCard';
import useCarousel from './useCarousel';

const Carousel = () => {
  const {
    scrollHandler,
    pressRight,
    pressLeft,
    screenWidth,
    scrollViewRef,
    data,
    translateX,
  } = useCarousel();
  return (
    <StyledView
      style={{width: screenWidth}}
      className="justify-center my-6 items-center space-y-4">
      <StyledAnimatedScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        onScroll={scrollHandler}
        scrollEventThrottle={16}
        showsHorizontalScrollIndicator={false}>
        {data &&
          data.length !== 0 &&
          data.map((item, index) => (
            <StyledView
              key={item.title}
              style={{width: screenWidth}}
              className="justify-center items-center">
              <AnimatedCard item={item} index={index} translateX={translateX} />
            </StyledView>
          ))}
      </StyledAnimatedScrollView>
      <StyledView className="flex-row justify-center space-x-1">
        <StyledView>
          <Icon iconName="arrowleft" onPress={pressLeft} />
        </StyledView>
        <StyledView>
          <Icon iconName="arrowright" onPress={pressRight} />
        </StyledView>
      </StyledView>
    </StyledView>
  );
};

export default Carousel;
