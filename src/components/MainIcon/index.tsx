import React from 'react';
import {Image, ImageProps, Text, View} from 'react-native';
import styles from '../../styles';
interface IMainIconProps extends Omit<ImageProps, 'source'> {
  source: ImageProps['source'];
  label: string;
}

const MainIcon: React.FC<IMainIconProps> = ({source, label, ...rest}) => {
  console.log(source);
  return (
    <View style={styles.imgContainer}>
      <Image source={source} {...rest} style={styles.img} />
      <Text>{label}</Text>
    </View>
  );
};

export default MainIcon;
