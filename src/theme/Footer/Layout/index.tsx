import Link from '@docusaurus/Link';
import type { Props } from '@theme/Footer/Layout';
import clsx from 'clsx';

export default function FooterLayout({ style, links, logo, copyright }: Props): JSX.Element {
  return (
    <footer
      className={clsx('footer', {
        'footer--dark': style === 'dark',
      })}
    >
      <div className="container container-fluid">
        {links}
        <div className="footer__bottom text--center">
          {logo && <div className="margin-bottom--sm">{logo}</div>}
          {copyright}
          <Link className="footer__link-item" to="https://logto.io/trust-and-security">
            Hosted in 🇪🇺🇺🇸🇦🇺
          </Link>
          <Link className="footer__link-item" to="/terms/of-service">
            Terms
          </Link>
          <Link className="footer__link-item" to="/terms/privacy-policy">
            Privacy
          </Link>
        </div>
      </div>
    </footer>
  );
}
