import React from 'react';
import {
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from 'react-native';
import styles from '../../styles';

interface ICustomButtonProps extends TouchableOpacityProps {
  label: string;
}

const CustomButton: React.FC<ICustomButtonProps> = ({label, ...rest}) => {
  return (
    <View style={styles.container}>
      <View style={styles['width-60']}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity {...rest} style={styles.button}>
            <Text>{label}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CustomButton;
