import React, {useRef, useState} from 'react';
import {
  StyledView,
  StyledText,
  StyledAnimatedView,
  StyledAnimatedScrollView,
  StyledFlatList,
} from '../NativeStyledComponents';
import Icon from '../Icon';
import ProductCard from '../ProductCard';
import Animated, {useSharedValue} from 'react-native-reanimated';
import {FlatList} from 'react-native';

const Caroussel = () => {
  const pressLeft = () => {
    console.log('left');
  };

  const pressRight = () => {
    console.log('right');
  };
  const arr = [
    {
      img: 'img 1',
      title: 'title 1',
      description: 'description 1',
      price: 'price 1',
    },
    {
      img: 'img 2',
      title: 'title 2',
      description: 'description 2',
      price: 'price 2',
    },
    {
      img: 'img 3',
      title: 'title 3',
      description: 'description 3',
      price: 'price 3',
    },
    {
      img: 'img 4',
      title: 'title 4',
      description: 'description 4',
      price: 'price 4',
    },
  ];

  return (
    <StyledView>
      <StyledText>Caroussel</StyledText>
      <StyledFlatList
        data={arr}
        horizontal
        keyExtractor={item => item.title}
        renderItem={item => <ProductCard key={item.title} />}
        onScroll={event => console.log(event.nativeEvent.contentOffset)}
        className="flex-row"
      />
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

export default Caroussel;
