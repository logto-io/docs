import type { SVGProps, ComponentType } from 'react';

import Authorization from './authorization.svg';
import Concepts from './concepts.svg';
import Connectors from './connectors.svg';
import Customization from './customization.svg';
import Developer from './developer.svg';
import Elements from './elements.svg';
import GetStarted from './get-started.svg';
import Integrate from './integrate.svg';
import OpenSource from './open-source.svg';
import Organization from './organization.svg';
import Security from './security.svg';
import UserFlows from './user-flows.svg';

type SvgComponent = ComponentType<SVGProps<SVGSVGElement> & { title?: string }>;

type IconMap = Record<string, SvgComponent>;

/**
 * Category icons used in the sidebar.
 * The map key is the `customProps.id` of the category item.
 */
const icons: IconMap = Object.freeze({
  'get-started': GetStarted,
  'integrate-logto': Integrate,
  connectors: Connectors,
  'user-flows': UserFlows,
  customization: Customization,
  authorization: Authorization,
  organization: Organization,
  developer: Developer,
  elements: Elements,
  security: Security,
  'open-source': OpenSource,
  concepts: Concepts,
});

export default icons;
