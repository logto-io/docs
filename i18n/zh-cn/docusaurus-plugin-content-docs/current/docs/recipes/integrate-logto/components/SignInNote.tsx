import Admonition from '@theme/Admonition';
import React, { ReactNode } from 'react';

type Props = {
  calling: ReactNode;
};

const SignInNote = ({ calling }: Props) => {
  return (
    <Admonition type="note">
      在调用 <code>{calling}</code> 之前，请先确保已经在「管理控制台」中正确配置了 Redirect URI。
    </Admonition>
  );
};

export default SignInNote;
