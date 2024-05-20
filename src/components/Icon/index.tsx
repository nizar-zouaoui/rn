import {View} from 'react-native';
import React from 'react';
import {
  StyledAntDIcon,
  StyledTouchableOpacity,
} from '../NativeStyledComponents';
interface IIconProps {
  onPress?: () => void;
  iconName: string;
}

const Icon: React.FC<IIconProps> = ({onPress, iconName}) => {
  return (
    <View>
      <StyledTouchableOpacity onPress={onPress}>
        <StyledAntDIcon className="text-3xl" name={iconName} />
      </StyledTouchableOpacity>
    </View>
  );
};

export default Icon;
