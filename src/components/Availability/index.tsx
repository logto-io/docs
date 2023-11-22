import styles from './index.module.scss';

/** A type that represents a semantic version for new features (major.minor). */
type MinorVersion = {
  major: number;
  minor: number;
};

/** A type that represents the feature is coming soon. */
type ComingSoon = 'comingSoon';

type Props = {
  /** Whether the feature is available in Logto Cloud. */
  cloud: boolean | ComingSoon;
  /**
   * Whether the feature is available in Logto OSS. If it is a `MinorVersion`,
   * it means the feature is available in Logto OSS since the specified version.
   */
  oss: boolean | ComingSoon | MinorVersion;
};

const getDisplayText = (status: boolean | ComingSoon | MinorVersion) => {
  if (status === 'comingSoon') {
    return 'coming soon-blue';
  }

  if (typeof status === 'boolean') {
    return status ? '✓ available-4EA254' : 'not applicable-78767F';
  }

  return `since v${status.major}.${status.minor}-4EA254`;
};

/**
 * A component that shows the availability of the feature in Logto Cloud and Logto OSS.
 * Open source availability can have a version number.
 */
const Availability = ({ cloud, oss }: Props) => {
  return (
    <div className={styles.availability}>
      <img
        alt="Cloud availability"
        src={`https://img.shields.io/badge/Cloud-${getDisplayText(cloud)}`}
      />
      <img alt="OSS availability" src={`https://img.shields.io/badge/OSS-${getDisplayText(oss)}`} />
    </div>
  );
};

export default Availability;
