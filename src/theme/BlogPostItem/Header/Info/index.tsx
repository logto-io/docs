import { translate } from '@docusaurus/Translate';
import { useBlogPost } from '@docusaurus/plugin-content-blog/client';
import { usePluralForm } from '@docusaurus/theme-common';
import { useDateTimeFormat } from '@docusaurus/theme-common/internal';
import type { Props } from '@theme/BlogPostItem/Header/Info';
import clsx from 'clsx';

import { isHowToTutorial } from '../../utils';

import styles from './styles.module.css';

// Very simple pluralization: probably good enough for now
function useReadingTimePlural() {
  const { selectMessage } = usePluralForm();
  return (readingTimeFloat: number) => {
    const readingTime = Math.ceil(readingTimeFloat);
    return selectMessage(
      readingTime,
      translate(
        {
          id: 'theme.blog.post.readingTime.plurals',
          description:
            'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',
          message: 'One min read|{readingTime} min read',
        },
        { readingTime }
      )
    );
  };
}

function ReadingTime({ readingTime }: { readonly readingTime: number }) {
  const readingTimePlural = useReadingTimePlural();
  return <>{readingTimePlural(readingTime)}</>;
}

function DateTime({
  date,
  formattedDate,
}: {
  readonly date: string;
  readonly formattedDate: string;
}) {
  return <time dateTime={date}>{formattedDate}</time>;
}

function Spacer() {
  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{' · '}</>;
}

export default function BlogPostItemHeaderInfo({ className }: Props) {
  const { metadata } = useBlogPost();
  const { date, readingTime } = metadata;

  const dateTimeFormat = useDateTimeFormat({
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  });

  // Charles edited this to remove the time from generated "Build X with Y tutorials"
  const isTutorial = isHowToTutorial(metadata.frontMatter.slug);

  if (isTutorial) {
    return null;
  }

  const formatDate = (blogDate: string) => dateTimeFormat.format(new Date(blogDate));

  return (
    <div className={clsx(styles.container, 'margin-vert--md', className)}>
      <DateTime date={date} formattedDate={formatDate(date)} />
      {readingTime !== undefined && (
        <>
          <Spacer />
          <ReadingTime readingTime={readingTime} />
        </>
      )}
    </div>
  );
}
