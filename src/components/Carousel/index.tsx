/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  StyledAnimatedView,
  StyledFlatList,
  StyledTouchableOpacity,
  StyledView,
} from '../NativeStyledComponents';
import Icon from '../Icon';
import useCarousel from './useCarousel';
import Card, {ICardProps} from '../Card';
const CardsFlatList = StyledFlatList<ICardProps>();

const Carousel = () => {
  const {
    scrollRight,
    scrollLeft,
    screenWidth,
    data,
    flatListRef,
    viewConfigRef,
    onViewableItemsChanged,
    navigation,
  } = useCarousel();
  return (
    <StyledView
      style={{width: screenWidth}}
      className="justify-center my-6 items-center space-y-4">
      <CardsFlatList
        data={data}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        viewabilityConfig={viewConfigRef.current}
        onViewableItemsChanged={onViewableItemsChanged.current}
        ref={flatListRef}
        renderItem={({item}) => (
          <StyledView
            key={item.title}
            style={{width: screenWidth}}
            className="justify-center items-center">
            <StyledAnimatedView
              className="border-dashed"
              sharedTransitionTag={item.title}
              style={{elevation: 2, width: screenWidth * 0.8}}>
              <StyledTouchableOpacity
                onPress={() => {
                  navigation.navigate('Workout', {title: item.title});
                }}>
                <Card
                  description={item.description}
                  img={item.img}
                  price={item.price}
                  title={item.title}
                />
              </StyledTouchableOpacity>
            </StyledAnimatedView>
          </StyledView>
        )}
        keyExtractor={item => item.title}
      />
      <StyledView className="flex-row justify-center space-x-1">
        <StyledView>
          <Icon iconName="arrowleft" onPress={scrollLeft} />
        </StyledView>
        <StyledView>
          <Icon iconName="arrowright" onPress={scrollRight} />
        </StyledView>
      </StyledView>
    </StyledView>
  );
};

export default Carousel;
