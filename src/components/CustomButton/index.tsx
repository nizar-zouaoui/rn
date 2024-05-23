import React from 'react';
import {TouchableOpacityProps} from 'react-native';
import {
  StyledView,
  StyledTouchableOpacity,
  StyledText,
} from '../NativeStyledComponents';

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
