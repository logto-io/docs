import Layout from '@theme/Layout';
import Redoc from '@theme/Redoc';

import spec from './swagger.json';
import './index.scss';

const Api = () => (
  <Layout title="API">
    <Redoc spec={spec} />
  </Layout>
);

export default Api;
