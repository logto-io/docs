import Admonition from '@theme/Admonition';
import React, { ReactNode } from 'react';

type Props = {
  calling: ReactNode;
};

const SignInNote = ({ calling }: Props) => {
  return (
    <Admonition type="note">
      Before calling <code>{calling}</code>, make sure you have correctly{' '}
      <a href="https://logto.io">configured Redirect URI</a> in Admin Console.
    </Admonition>
  );
};

export default SignInNote;
