import React from 'react';
import {Text, TextInput, View, TextInputProps} from 'react-native';
import styles from '../../styles';
import {
  Control,
  Controller,
  FieldPath,
  FieldValues,
  PathValue,
  RegisterOptions,
  useFormContext,
} from 'react-hook-form';

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

  return (
    <Controller
      control={control}
      name={name}
      defaultValue={defaultValue}
      render={({field: {onChange, value, onBlur}}) => (
        <View style={styles.inputContainer}>
          <View style={styles['width-80']}>
            {label && <Text style={styles.textStyle}>{label}</Text>}
            <View style={styles.inputContainer}>
              <TextInput
                {...rest}
                onChangeText={onChange}
                value={value}
                onBlur={onBlur}
                style={styles.inputStyle}
                secureTextEntry={isPassword}
              />
            </View>
            {errors[name] && (
              <Text style={styles.errorMessage}>
                {errors[name]?.message?.toString()}
              </Text>
            )}
          </View>
        </View>
      )}
      rules={rules}
    />
  );
};

export default CustomInput;
