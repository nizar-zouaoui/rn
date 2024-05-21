import React from 'react';
import {
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from 'react-native';
import {styled} from 'nativewind';

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledTouchableOpacity = styled(TouchableOpacity);

interface ICustomButtonProps extends TouchableOpacityProps {
  label: string;
}

const CustomButton: React.FC<ICustomButtonProps> = ({label, ...rest}) => {
  return (
    <StyledView className="items-center justify-center">
      <StyledView className="w-3/5">
        <StyledView className="justify-center pt-5 px-2">
          <StyledTouchableOpacity
            {...rest}
            className="items-center bg-amber-400 p-2">
            <StyledText>{label}</StyledText>
          </StyledTouchableOpacity>
        </StyledView>
      </StyledView>
    </StyledView>
  );
};

export default CustomButton;
