import Url, { type Props } from '@site/src/components/Url';

export default function MDXA(props: Props): JSX.Element {
  return <Url hasIcon={false} type="inline" {...props} />;
}
