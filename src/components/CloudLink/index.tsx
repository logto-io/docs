import { joinPath } from '@silverhand/essentials';
import { type PropsWithChildren } from 'react';

import Url from '../Url';

type Props = PropsWithChildren<{
  /**
   * The path to navigate to in the Cloud console. E.g., `to="applications"`.
   * If the path is an absolute URL, it will be used as is.
   */
  readonly to: string;
}>;

const logtoCloudConsoleUrl = 'https://cloud.logto.io';
const logtoCloudTenantIdWildcard = 'to';

const isAbsoluteUrl = (url: string) => {
  return url.startsWith('http://') || url.startsWith('https://');
};

const getCloudConsoleUrl = (path: string) => {
  if (isAbsoluteUrl(path)) {
    return path;
  }

  const baseUrl = new URL(logtoCloudConsoleUrl);
  const pathname =
    path.startsWith(`/${logtoCloudTenantIdWildcard}/`) ||
    path.startsWith(`${logtoCloudTenantIdWildcard}/`)
      ? path
      : joinPath(logtoCloudTenantIdWildcard, path);

  return new URL(pathname, baseUrl).toString();
};

/**
 * Remove the possible leading slashes and capitalize the first letter
 */
const toTitleCaseLabel = (path: string) => {
  const pathWithoutLeadingSlashes = path.replace(/^\/+/, '');
  // Capitalize the first letter
  return pathWithoutLeadingSlashes.charAt(0).toUpperCase() + pathWithoutLeadingSlashes.slice(1);
};

const CloudLink = ({ to, children }: Props) => {
  const link = getCloudConsoleUrl(to);

  return (
    <Url hasIcon={false} href={link}>
      {children || toTitleCaseLabel(to)}
    </Url>
  );
};

export default CloudLink;
