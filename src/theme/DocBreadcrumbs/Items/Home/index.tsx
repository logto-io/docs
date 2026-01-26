import Link from '@docusaurus/Link';
import { translate } from '@docusaurus/Translate';
import { useActiveDocContext } from '@docusaurus/plugin-content-docs/lib/client/index.js';
import { useThemeConfig } from '@docusaurus/theme-common';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function HomeBreadcrumbItem(): JSX.Element {
  const navbarItems = useThemeConfig().navbar.items;
  // Note: The plugin ID will fall back to the default plugin ID if not specified.
  // We are fine with that until we have multiple docs plugins.
  const { activeDoc } = useActiveDocContext(undefined);
  const activeNavbarItem = navbarItems.find((item) => {
    if (typeof item.to !== 'string') {
      return false;
    }
    // Check if the item is an internal link and the `activeDoc` matches the link.
    // This usually means the item is a link to the home page of the current active doc.
    // E.g., `/api-protection` is the home page of the `api-protection/nodejs/README` doc.
    return item.to.startsWith('/') && activeDoc?.id.startsWith(item.to.slice(1));
  });
  const homeHref = useBaseUrl(String(activeNavbarItem?.to ?? '/'));

  return (
    <li className="breadcrumbs__item">
      <Link
        aria-label={translate({
          id: 'theme.docs.breadcrumbs.home',
          message: 'Home page',
          description: 'The ARIA label for the home page in the breadcrumbs',
        })}
        className="breadcrumbs__link"
        href={homeHref}
      >
        {activeNavbarItem?.label ??
          translate({ id: 'theme.docs.breadcrumbs.home', message: 'Docs' })}
      </Link>
    </li>
  );
}
