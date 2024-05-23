import React from 'react';
import SignInForm from '../../../containers/AuthForms/SignIn';

import {StyledView} from '../../../components/NativeStyledComponents';

const SignIn: React.FC = () => {
  return (
    <StyledView className="items-center">
      <StyledView className="w-4/5">
        <SignInForm />
      </StyledView>
    </StyledView>
  );
};

export default SignIn;
