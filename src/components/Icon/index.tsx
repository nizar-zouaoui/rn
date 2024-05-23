import React from 'react';
import {
  StyledAntDIcon,
  StyledTouchableOpacity,
  StyledView,
} from '../NativeStyledComponents';
interface IIconProps {
  onPress?: () => void;
  iconName: string;
}

const Icon: React.FC<IIconProps> = ({onPress, iconName}) => {
  return (
    <StyledView>
      <StyledTouchableOpacity onPress={onPress}>
        <StyledAntDIcon className="text-3xl" name={iconName} />
      </StyledTouchableOpacity>
    </StyledView>
  );
};

export default Icon;
