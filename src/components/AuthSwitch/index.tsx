import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from '../../styles';

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
    <View style={styles.noAccountText}>
      <Text>{message}</Text>

      <TouchableOpacity onPress={onPress}>
        <Text style={styles.clickableText}>{btnLabel}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AuthSwitch;
