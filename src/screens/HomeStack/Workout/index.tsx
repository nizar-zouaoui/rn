import React, {useState} from 'react';
import {
  StyledAnimatedView,
  StyledView,
} from '../../../components/NativeStyledComponents';
import Card from '../../../components/Card';
import useWorkout from './useWorkout';
import TimerClock from '../../../components/TimerClock';
import {Alert} from 'react-native';
import {workoutElements} from '../Home';

const Workout: React.FC = () => {
  const {cardItem, title} = useWorkout();
  const [elementIndex, setElementIndex] = useState<number>(0);

  return (
    <StyledView>
      <TimerClock
        onComplete={() => {
          if (elementIndex === workoutElements.length - 1) {
            Alert.alert('Workout Done!');
          } else {
            setElementIndex(prev => prev + 1);
          }
        }}
        reset={() => setElementIndex(0)}
        setElementIndex={setElementIndex}
        isLast={elementIndex === workoutElements.length - 1}
        workout={workoutElements[elementIndex]}
      />
      <StyledAnimatedView sharedTransitionTag={title}>
        {cardItem && (
          <Card
            description={cardItem.description}
            img={cardItem.img}
            price={cardItem.price}
            title={cardItem.title}
          />
        )}
      </StyledAnimatedView>
    </StyledView>
  );
};

export default Workout;
