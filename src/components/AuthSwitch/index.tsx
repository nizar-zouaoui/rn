import React from 'react';
import {TouchableOpacity} from 'react-native';
import {StyledView, StyledText} from '../NativeStyledComponents';

interface IAuthSwitchProps {
  message: string;
  btnLabel: string;
  onPress: () => void;
}

const AuthSwitch: React.FC<IAuthSwitchProps> = ({
  message,
  btnLabel,
  onPress,
}) => {
  return (
    <StyledView className="flex-row items-center justify-center">
      <StyledText>{message}</StyledText>

      <TouchableOpacity onPress={onPress}>
        <StyledText className="font-bold text-amber-400">{btnLabel}</StyledText>
      </TouchableOpacity>
    </StyledView>
  );
};

export default AuthSwitch;
