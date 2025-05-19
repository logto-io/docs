import { Redirect } from '@docusaurus/router';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

const HomeRedirect = () => {
  const {
    siteConfig: { customFields },
  } = useDocusaurusContext();

  const buildTarget = String(customFields?.buildTarget ?? '');

  return <Redirect to={buildTarget === 'tutorial' ? 'tutorial' : 'introduction'} />;
};

export default HomeRedirect;
