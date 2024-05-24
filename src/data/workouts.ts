import {WorkoutElementType, WorkoutListType} from '../screens/HomeStack/Home';

export const workoutElements: WorkoutElementType[] = [
  {
    duration: 10,
    label: 'element 1',
    resting: false,
  },
  {
    duration: 5,
    label: 'element 2',
    resting: true,
  },
];

export const myWorkouts: WorkoutListType[] = [
  {
    img: 'img 1',
    title: 'title-1',
    description: 'description 1',
    workoutElements,
  },
  {
    img: 'img 2',
    title: 'title-2',
    description: 'description 2',
    workoutElements,
  },
  {
    img: 'img 3',
    title: 'title-3',
    description: 'description 3',
    workoutElements,
  },
  {
    img: 'img 4',
    title: 'title-4',
    description: 'description 4',
    workoutElements,
  },
];

export const publicWorkouts: WorkoutListType[] = [
  {
    creatorEmail: 'drekieki244@gmail.com',
    img: 'drekieki244 img 1',
    title: 'drekieki244-1',
    description: 'drekieki244 description 1',
    workoutElements,
  },
  {
    creatorEmail: 'drekieki244@gmail.com',
    img: 'drekieki244 img 2',
    title: 'drekieki244-2',
    description: 'drekieki244 description 2',
    workoutElements,
  },
  {
    creatorEmail: 'drekieki244@gmail.com',
    img: 'drekieki244 img 3',
    title: 'drekieki244-3',
    description: 'drekieki244 description 3',
    workoutElements,
  },
  {
    creatorEmail: 'drekieki244@gmail.com',
    img: 'drekieki244 img 4',
    title: 'drekieki244-4',
    description: 'drekieki244 description 4',
    workoutElements,
  },
];
