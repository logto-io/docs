import Layout from '@theme/Layout';
import Redoc from '@theme/Redoc';
import React from 'react';

import spec from './swagger.json';

const Api = () => (
  <Layout>
    <Redoc spec={spec} />
  </Layout>
);

export default Api;
