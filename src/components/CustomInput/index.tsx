import React, {useState} from 'react';
import {
  Text,
  TextInput,
  View,
  TextInputProps,
  TouchableOpacity,
} from 'react-native';
import {
  Control,
  Controller,
  FieldPath,
  FieldValues,
  PathValue,
  RegisterOptions,
  useFormContext,
} from 'react-hook-form';
import IonIcon from 'react-native-vector-icons/Ionicons';
import AntDIcon from 'react-native-vector-icons/AntDesign';
import styles from '../../styles';

interface ICustomInputProps<
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>,
> extends TextInputProps {
  isPassword?: boolean;
  label: string;
  name: TName;
  rules?: RegisterOptions<TFieldValues, TName>;
  control: Control<TFieldValues, TName>;
  defaultValue?: PathValue<TFieldValues, TName>;
}

const CustomInput = <
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>,
>({
  isPassword,
  label,
  name,
  rules,
  control,
  defaultValue,
  ...rest
}: ICustomInputProps<TFieldValues, TName>) => {
  const {
    formState: {errors},
  } = useFormContext<TFieldValues>();

  const [isPasswordVisible, setPasswordVisible] = useState(isPassword);
  return (
    <Controller
      control={control}
      name={name}
      defaultValue={defaultValue}
      render={({field: {onChange, value, onBlur}}) => (
        <View>
          {label && <Text style={styles.label}>{label}</Text>}
          <View style={styles.inputWrapper}>
            <TextInput
              {...rest}
              onChangeText={onChange}
              value={value}
              onBlur={onBlur}
              secureTextEntry={isPasswordVisible}
              style={styles['flex-1']}
            />
            {isPassword && (
              <TouchableOpacity
                onPress={() => setPasswordVisible(!isPasswordVisible)}>
                <IonIcon
                  name={isPasswordVisible ? 'eye-off' : 'eye'}
                  size={24}
                />
              </TouchableOpacity>
            )}
          </View>
          {errors[name] && (
            <View style={styles.errorMessageContainer}>
              <AntDIcon
                style={styles.errorIcon}
                name="exclamationcircleo"
                size={24}
              />
              <Text style={styles.errorText}>
                {errors[name]?.message?.toString()}
              </Text>
            </View>
          )}
        </View>
      )}
      rules={rules}
    />
  );
};

export default CustomInput;
