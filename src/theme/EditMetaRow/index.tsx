import Translate, { translate } from '@docusaurus/Translate';
import type { Props } from '@theme/EditMetaRow';
import clsx from 'clsx';
import { useState } from 'react';

import EditIcon from '@site/src/assets/edit.svg';
import ThumbDownIcon from '@site/src/assets/thumbs-down.svg';
import ThumbUpIcon from '@site/src/assets/thumbs-up.svg';
import Button from '@site/src/components/Button';
import Textarea from '@site/src/components/Textarea';

import styles from './styles.module.scss';

const likeWebhookUrl =
  'https://hooks.slack.com/triggers/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';
const feedbackWebhookUrl =
  'https://hooks.slack.com/triggers/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';

export default function EditMetaRow({ className, editUrl }: Props): JSX.Element {
  const [showTextarea, setShowTextarea] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [feedback, setFeedback] = useState('');

  return (
    <div className={clsx(styles.container, className)}>
      <div className={styles.flexRow}>
        <div className={styles.feedback}>
          <span className={styles.label}>
            {translate({
              id: 'theme.common.doYouFindThisPageHelpful',
              message: 'Do you find this page helpful?',
              description: 'The label for the docs helpfulness question',
            })}
          </span>
          {!showSuccessMessage && (
            <div className={styles.buttons}>
              <Button
                className={styles.button}
                onClick={() => {
                  void fetch(likeWebhookUrl, {
                    method: 'POST',
                    body: JSON.stringify({ url: window.location.href }),
                  });
                  setShowSuccessMessage(true);
                }}
              >
                <ThumbUpIcon />
                <Translate id="theme.common.yes">Yes</Translate>
              </Button>
              <Button
                className={clsx(styles.button, showTextarea && styles.notHelpful)}
                onClick={() => {
                  setShowTextarea(true);
                }}
              >
                <ThumbDownIcon />
                <Translate id="theme.common.no">No</Translate>
              </Button>
            </div>
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
          {!showSuccessMessage && showTextarea && (
            <>
              <Textarea
                className={styles.feedbackInput}
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
              <Button
                className={styles.button}
                type="primary"
                onClick={() => {
                  void fetch(feedbackWebhookUrl, {
                    method: 'POST',
                    body: JSON.stringify({ url: window.location.href, feedback }),
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
            </>
          )}
        </div>
        {editUrl && (
          <div className={styles.editUrlColumn}>
            <span className={styles.label}>
              <Translate id="theme.common.helpUsImproveTheDocs">
                Help us improve the docs!
              </Translate>
            </span>
            <Button className={styles.button} href={editUrl}>
              <EditIcon />
              {translate({
                id: 'theme.common.editThisPage',
                message: 'Edit this page',
                description: 'The link label to edit the current page',
              })}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
