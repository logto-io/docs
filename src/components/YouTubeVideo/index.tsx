import { translate } from '@docusaurus/Translate';
import { useState } from 'react';

import PlayIcon from '@site/src/assets/video.svg';

import styles from './index.module.scss';

type Props = {
  /** The YouTube video ID, e.g. `cpjf9b6qt6U` of `https://www.youtube.com/watch?v=cpjf9b6qt6U`. */
  readonly id: string;
  /** The video title. It is used as the accessible name of the video. */
  readonly title: string;
};

/**
 * An embedded YouTube video.
 *
 * Only the thumbnail is rendered at first, and the YouTube player is loaded after the user clicks
 * play, so pages with a video don't pay the cost of the player (and its cookies) on every visit.
 */
const YouTubeVideo = ({ id, title }: Props) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className={styles.video}>
      {isPlaying ? (
        // The YouTube player needs both scripts and its own origin to work, which sandboxing
        // cannot express; the frame is cross-origin and cannot touch this page anyway.
        // eslint-disable-next-line react/iframe-missing-sandbox
        <iframe
          allowFullScreen
          className={styles.player}
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        />
      ) : (
        <button
          type="button"
          className={styles.preview}
          aria-label={translate(
            { id: 'component.youTubeVideo.play', message: 'Play video: {title}' },
            { title }
          )}
          onClick={() => {
            setIsPlaying(true);
          }}
        >
          <img
            alt=""
            className={styles.thumbnail}
            src={`https://i.ytimg.com/vi/${id}/maxresdefault.jpg`}
          />
          <PlayIcon className={styles.playIcon} />
        </button>
      )}
    </div>
  );
};

export default YouTubeVideo;
