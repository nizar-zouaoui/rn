/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  StyledAnimatedView,
  StyledFlatList,
  StyledText,
  StyledTouchableOpacity,
  StyledView,
} from '../NativeStyledComponents';
import Icon from '../Icon';
import useWourkoutCarousel from './useWourkoutCarousel';
import Card, {ICardProps} from '../Card';
import {WorkoutListType} from '../../screens/HomeStack/Home';
const CardsFlatList = StyledFlatList<ICardProps>();

interface ICarouselProps {
  carouselTitle: string;
  data: WorkoutListType[];
  onPress: (title: string, isPublic: boolean) => void;
  isPublic: boolean;
}

const WourkoutCarousel: React.FC<ICarouselProps> = ({
  data,
  isPublic,
  onPress,
  carouselTitle,
}) => {
  const {
    scrollRight,
    scrollLeft,
    screenWidth,
    flatListRef,
    viewConfigRef,
    onViewableItemsChanged,
  } = useWourkoutCarousel(data);
  return (
    <StyledView
      style={{width: screenWidth}}
      className="justify-center my-6 items-center space-y-4">
      <StyledText>{carouselTitle}</StyledText>
      <CardsFlatList
        data={data}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        viewabilityConfig={viewConfigRef.current}
        onViewableItemsChanged={onViewableItemsChanged.current}
        ref={flatListRef}
        renderItem={({item}) => {
          return (
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
                    onPress(item.title, isPublic);
                  }}>
                  <Card
                    description={item.description}
                    img={item.img}
                    title={item.title}
                  />
                </StyledTouchableOpacity>
              </StyledAnimatedView>
            </StyledView>
          );
        }}
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

export default WourkoutCarousel;
