import type { Props } from '@theme/DocPage';
import DocPage from '@theme/DocPage';
import React from 'react';

const RoutedDocumentPage = (props: Props): JSX.Element => (
  <div id="route-identifier" data-route={props.location.pathname}>
    <DocPage {...props} />
  </div>
);

export default RoutedDocumentPage;
