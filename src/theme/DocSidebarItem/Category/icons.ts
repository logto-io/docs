import type { SVGProps, ComponentType } from 'react';

import Authorization from '@site/src/assets/authorization.svg';
import Cloud from '@site/src/assets/cloud.svg';
import Concepts from '@site/src/assets/concepts.svg';
import Connectors from '@site/src/assets/connectors.svg';
import Customization from '@site/src/assets/customization.svg';
import Developer from '@site/src/assets/developer.svg';
import Integrate from '@site/src/assets/integrate.svg';
import Introduction from '@site/src/assets/introduction.svg';
import OpenSource from '@site/src/assets/open-source.svg';
import Organization from '@site/src/assets/organization.svg';
import Security from '@site/src/assets/security.svg';
import UserFlows from '@site/src/assets/user-flows.svg';
import UserManagement from '@site/src/assets/user-management.svg';
import Vault from '@site/src/assets/vault.svg';

type SvgComponent = ComponentType<SVGProps<SVGSVGElement> & { title?: string }>;

type IconMap = Record<string, SvgComponent>;

/**
 * Category icons used in the sidebar.
 * The map key is the `customProps.id` of the category item.
 */
const icons: IconMap = Object.freeze({
  introduction: Introduction,
  'integrate-logto': Integrate,
  'end-user-flows': UserFlows,
  connectors: Connectors,
  customization: Customization,
  authorization: Authorization,
  'user-management': UserManagement,
  organizations: Organization,
  developers: Developer,
  'logto-cloud': Cloud,
  'logto-oss': OpenSource,
  concepts: Concepts,
  security: Security,
  'secret-vault': Vault,
});

export default icons;
