import React from 'react';
import {ImageProps} from 'react-native';
import {StyledView, StyledImage, StyledText} from '../NativeStyledComponents';

interface IMainIconProps extends Omit<ImageProps, 'source'> {
  source: ImageProps['source'];
  label: string;
}

const MainIcon: React.FC<IMainIconProps> = ({source, label, ...rest}) => {
  return (
    <StyledView className="pt-12 justify-center items-center">
      <StyledImage source={source} {...rest} className="w-44 h-44" />
      <StyledText className="text-bold text-3xl">{label}</StyledText>
    </StyledView>
  );
};

export default MainIcon;
