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
    width,
    SCREEN_WIDTH,
    scrollViewRef,
    data,
    translateX,
  } = useCarousel();
  return (
    <StyledView
      className={`${width} justify-center my-6 items-center space-y-4`}>
      <StyledAnimatedScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        onScroll={scrollHandler}
        scrollEventThrottle={16}
        showsHorizontalScrollIndicator={false}>
        {SCREEN_WIDTH &&
          data.map((item, index) => (
            <StyledView
              key={item.title}
              className={`${width} justify-center items-center`}>
              <AnimatedCard
                item={item}
                index={index}
                translateX={translateX}
                screenWidth={SCREEN_WIDTH}
              />
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
