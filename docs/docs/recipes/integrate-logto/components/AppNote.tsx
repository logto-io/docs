import Admonition from '@theme/Admonition';
import React, { ReactNode } from 'react';

type Props = {
  type: ReactNode;
};

const AppNote = ({ type }: Props) => {
  return (
    <Admonition type="note">
      This tutorial assumes you have created an Application of type &quot;{type}&quot; in Admin
      Console. If you are not ready,{' '}
      <a href="../../tutorials/get-started/create-and-integrate-the-first-app">read this</a> one
      before continuing.
    </Admonition>
  );
};

export default AppNote;
