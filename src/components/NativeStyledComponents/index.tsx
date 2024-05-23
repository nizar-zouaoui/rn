import {styled} from 'nativewind';
import {
  FlatList,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import AntDIcon from 'react-native-vector-icons/AntDesign';
import Animated from 'react-native-reanimated';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';

export const StyledView = styled(View);
export const StyledSafeAreaView = styled(SafeAreaView);
export const StyledText = styled(Text);
export const StyledTouchableOpacity = styled(TouchableOpacity);
export const StyledAntDIcon = styled(AntDIcon);
export const StyledImage = styled(Image);
export const StyledTextInput = styled(TextInput);
export const StyledAnimatedView = styled(Animated.View);
export const StyledAnimatedScrollView = styled(Animated.ScrollView);
export const StyledFlatList = <T,>() =>
  styled(FlatList as new () => FlatList<T>);
export const StyledGestureHandlerRootView = styled(GestureHandlerRootView);
