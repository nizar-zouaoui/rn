import React from 'react';
import {Text, TextInput, View} from 'react-native';
import styles from '../../styles';
interface ICustomInputProps {
  label: string;
  isPassword?: boolean;
}

const CustomInput: React.FC<ICustomInputProps> = ({label, isPassword}) => {
  const [text, onChangeText] = React.useState('');
  return (
    <View style={styles.inputContainer}>
      <View style={styles['width-80']}>
        <Text style={styles.textStyle}>{label}</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputStyle}
            onChangeText={onChangeText}
            value={text}
            secureTextEntry={isPassword}
          />
        </View>
      </View>
    </View>
  );
};

export default CustomInput;
