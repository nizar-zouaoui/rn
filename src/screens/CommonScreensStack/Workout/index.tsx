import React, {useState} from 'react';
import {
  StyledAnimatedView,
  StyledText,
  StyledView,
} from '../../../components/NativeStyledComponents';
import Card from '../../../components/Card';
import useWorkout from './useWorkout';
import TimerClock from '../../../components/TimerClock';
import {Alert} from 'react-native';
import {workoutElements} from '../../../data/workouts';

const Workout: React.FC = () => {
  const {cardItem, title} = useWorkout();
  const [elementIndex, setElementIndex] = useState<number>(0);
  return (
    <StyledView>
      <StyledAnimatedView sharedTransitionTag={title}>
        {cardItem && (
          <Card
            description={cardItem.description}
            img={cardItem.img}
            title={cardItem.title}
          />
        )}
      </StyledAnimatedView>
      <TimerClock
        onComplete={() => {
          setElementIndex(prev => prev + 1);
          if (elementIndex === workoutElements.length - 1) {
            Alert.alert('Workout Done!');
          }
        }}
        reset={() => setElementIndex(0)}
        setElementIndex={setElementIndex}
        isLast={elementIndex === workoutElements.length - 1}
        workout={workoutElements[elementIndex]}
      />
      {cardItem &&
        cardItem.workoutElements.map((el, idx) => (
          <StyledText
            key={el.label}
            className={`${
              el.resting ? 'text-green-700' : 'text-slate-600'
            } w-11/12 mx-auto`}>
            {el.label} : {el.duration.toString().padStart(2, '0')}:00{' '}
            {elementIndex > idx && '\u2713'}
            {elementIndex === idx && '...'}
          </StyledText>
        ))}
    </StyledView>
  );
};

export default Workout;
