import React from 'react';
import SignUpForm from '../../containers/AuthForms/SignUp';
import {StyledView} from '../../components/NativeStyledComponents';

const Signup: React.FC = () => {
  return (
    <StyledView className="w-4/5 mx-auto">
      <SignUpForm />
    </StyledView>
  );
};

export default Signup;
