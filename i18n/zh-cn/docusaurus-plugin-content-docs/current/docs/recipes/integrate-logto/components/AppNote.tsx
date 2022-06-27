import Admonition from '@theme/Admonition';
import React, { ReactNode } from 'react';

type Props = {
  type: ReactNode;
};

const AppNote = ({ type }: Props) => {
  return (
    <Admonition type="note">
      本篇教程默认你已经在管理界面中成功创建了一个「{type}」类型的
      应用。如果你还没有完成这一步操作，请参阅{' '}
      <a href="../../tutorials/get-started/create-and-integrate-the-first-app">这篇教程</a>
      ，创建应用之后再继续。
    </Admonition>
  );
};

export default AppNote;
