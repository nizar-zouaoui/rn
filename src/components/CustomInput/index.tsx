import React, {useState} from 'react';
import {TextInputProps} from 'react-native';
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
import {
  StyledView,
  StyledText,
  StyledAntDIcon,
  StyledTextInput,
  StyledTouchableOpacity,
} from '../NativeStyledComponents';

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
        <StyledView>
          {label && (
            <StyledText className="text-xl text-black">{label}</StyledText>
          )}
          <StyledView className="flex-row items-center bg-slate-300 px-3 rounded-xl">
            <StyledTextInput
              {...rest}
              onChangeText={onChange}
              value={value}
              onBlur={onBlur}
              secureTextEntry={isPasswordVisible}
              className="flex-1"
            />
            {isPassword && (
              <StyledTouchableOpacity
                onPress={() => setPasswordVisible(!isPasswordVisible)}>
                <IonIcon
                  name={isPasswordVisible ? 'eye-off' : 'eye'}
                  size={24}
                />
              </StyledTouchableOpacity>
            )}
          </StyledView>
          {errors[name] && (
            <StyledView className="flex-row items-center">
              <StyledAntDIcon
                className="text-base text-red-600 mr-1"
                name="exclamationcircleo"
                size={24}
              />
              <StyledText className="text-base text-red-600">
                {errors[name]?.message?.toString()}
              </StyledText>
            </StyledView>
          )}
        </StyledView>
      )}
      rules={rules}
    />
  );
};

export default CustomInput;
