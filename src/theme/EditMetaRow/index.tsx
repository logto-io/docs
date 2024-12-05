import { translate } from '@docusaurus/Translate';
import type { Props } from '@theme/EditMetaRow';
import clsx from 'clsx';
import { useState } from 'react';

import EditIcon from '@site/src/assets/edit.svg';
import ThumbDownIcon from '@site/src/assets/thumbs-down.svg';
import ThumbUpIcon from '@site/src/assets/thumbs-up.svg';
import Button from '@site/src/components/Button';
import Textarea from '@site/src/components/Textarea';

import styles from './styles.module.scss';

export default function EditMetaRow({ className, editUrl }: Props): JSX.Element {
  const [showTextarea, setShowTextarea] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [feedback, setFeedback] = useState('');

  return (
    <div className={className}>
      <div className={styles.container}>
        <div className={styles.feedbackWrapper}>
          <span className={styles.label}>Did you find what you needed?</span>
          {!showSuccessMessage && (
            <div className={styles.buttons}>
              <Button
                className={styles.button}
                onClick={() => {
                  window.plausible?.('Docs Helpful');
                  setShowSuccessMessage(true);
                }}
              >
                <ThumbUpIcon />
                {translate({
                  id: 'theme.common.yes',
                  message: 'Yes',
                  description: 'The label for the docs helpful button',
                })}
              </Button>
              <Button
                className={clsx(styles.button, showTextarea && styles.notHelpful)}
                onClick={() => {
                  setShowTextarea(true);
                }}
              >
                <ThumbDownIcon />
                {translate({
                  id: 'theme.common.no',
                  message: 'No',
                  description: 'The label for the docs not helpful button',
                })}
              </Button>
            </div>
          )}
          {!showSuccessMessage && showTextarea && (
            <>
              <Textarea
                className={styles.feedback}
                placeholder={translate({
                  id: 'theme.common.feedbackPlaceholder',
                  message: "We'd love to hear your feedback!",
                  description: 'The placeholder of the feedback textarea',
                })}
                value={feedback}
                onChange={({ currentTarget }) => {
                  setFeedback(currentTarget.value);
                }}
              />
              <div className={styles.buttons}>
                <Button
                  className={styles.button}
                  type="primary"
                  onClick={() => {
                    window.plausible?.('Docs Not Helpful', {
                      feedback,
                    });
                    setShowSuccessMessage(true);
                  }}
                >
                  {translate({
                    id: 'theme.common.submit',
                    message: 'Submit',
                    description: 'The label of the submit button',
                  })}
                </Button>
              </div>
            </>
          )}
          {showSuccessMessage && (
            <div className={styles.successMessage}>
              {translate({
                id: 'theme.common.thanksForTheFeedback',
                message: 'Thank you for helping improve Logto Docs! 💜 ',
                description: 'The success message after submitting feedback',
              })}
            </div>
          )}
        </div>
        {editUrl && (
          <div className={styles.editUrlColumn}>
            <span className={styles.label}>Help us improve the docs!</span>
            <div className={styles.buttons}>
              <Button className={styles.button} href={editUrl}>
                <EditIcon />
                {translate({
                  id: 'theme.common.editThisPage',
                  message: 'Edit this page',
                  description: 'The link label to edit the current page',
                })}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
