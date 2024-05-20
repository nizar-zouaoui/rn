import React from 'react';
import SignUpForm from '../../containers/AuthForms/SignUp';
import {StyledView} from '../../components/NativeStyledComponents';

const Signup: React.FC = () => {
  return (
    <StyledView className="items-center">
      <StyledView className="w-4/5">
        <SignUpForm />
      </StyledView>
    </StyledView>
  );
};

export default Signup;
