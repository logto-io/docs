"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = EditMetaRow;
var Translate_1 = require("@docusaurus/Translate");
var clsx_1 = require("clsx");
var react_1 = require("react");
var edit_svg_1 = require("@site/src/assets/edit.svg");
var thumbs_down_svg_1 = require("@site/src/assets/thumbs-down.svg");
var thumbs_up_svg_1 = require("@site/src/assets/thumbs-up.svg");
var Button_1 = require("@site/src/components/Button");
var Textarea_1 = require("@site/src/components/Textarea");
var styles_module_scss_1 = require("./styles.module.scss");
var likeWebhookUrl = 'https://hooks.slack.com/triggers/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';
var feedbackWebhookUrl = 'https://hooks.slack.com/triggers/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';
function EditMetaRow(_a) {
    var className = _a.className, editUrl = _a.editUrl;
    var _b = (0, react_1.useState)(false), showTextarea = _b[0], setShowTextarea = _b[1];
    var _c = (0, react_1.useState)(false), showSuccessMessage = _c[0], setShowSuccessMessage = _c[1];
    var _d = (0, react_1.useState)(''), feedback = _d[0], setFeedback = _d[1];
    return (<div className={(0, clsx_1.default)(styles_module_scss_1.default.container, className)}>
      <div className={styles_module_scss_1.default.flexRow}>
        <div className={styles_module_scss_1.default.feedback}>
          <span className={styles_module_scss_1.default.label}>
            {(0, Translate_1.translate)({
            id: 'theme.common.doYouFindThisPageHelpful',
            message: 'Do you find this page helpful?',
            description: 'The label for the docs helpfulness question',
        })}
          </span>
          {!showSuccessMessage && (<div className={styles_module_scss_1.default.buttons}>
              <Button_1.default className={styles_module_scss_1.default.button} href="#" onClick={function (event) {
                event.preventDefault();
                void fetch(likeWebhookUrl, {
                    method: 'POST',
                    body: JSON.stringify({ url: window.location.href }),
                });
                setShowSuccessMessage(true);
            }}>
                <thumbs_up_svg_1.default />
                <Translate_1.default id="theme.common.yes">Yes</Translate_1.default>
              </Button_1.default>
              <Button_1.default className={(0, clsx_1.default)(styles_module_scss_1.default.button, showTextarea && styles_module_scss_1.default.notHelpful)} href="#" onClick={function (event) {
                event.preventDefault();
                setShowTextarea(true);
            }}>
                <thumbs_down_svg_1.default />
                <Translate_1.default id="theme.common.no">No</Translate_1.default>
              </Button_1.default>
            </div>)}
          {showSuccessMessage && (<div className={styles_module_scss_1.default.successMessage}>
              {(0, Translate_1.translate)({
                id: 'theme.common.thanksForTheFeedback',
                message: 'Thank you for helping improve Logto Docs! 💜 ',
                description: 'The success message after submitting feedback',
            })}
            </div>)}
          {!showSuccessMessage && showTextarea && (<>
              <Textarea_1.default className={styles_module_scss_1.default.feedbackInput} placeholder={(0, Translate_1.translate)({
                id: 'theme.common.feedbackPlaceholder',
                message: "We'd love to hear your feedback!",
                description: 'The placeholder of the feedback textarea',
            })} value={feedback} onChange={function (_a) {
                var currentTarget = _a.currentTarget;
                setFeedback(currentTarget.value);
            }}/>
              <Button_1.default className={styles_module_scss_1.default.button} type="primary" href="#" onClick={function (event) {
                event.preventDefault();
                void fetch(feedbackWebhookUrl, {
                    method: 'POST',
                    body: JSON.stringify({ url: window.location.href, feedback: feedback }),
                });
                setShowSuccessMessage(true);
            }}>
                {(0, Translate_1.translate)({
                id: 'theme.common.submit',
                message: 'Submit',
                description: 'The label of the submit button',
            })}
              </Button_1.default>
            </>)}
        </div>
        {editUrl && (<div className={styles_module_scss_1.default.editUrlColumn}>
            <span className={styles_module_scss_1.default.label}>
              <Translate_1.default id="theme.common.helpUsImproveTheDocs">
                Help us improve the docs!
              </Translate_1.default>
            </span>
            <Button_1.default className={styles_module_scss_1.default.button} href={editUrl}>
              <edit_svg_1.default />
              {(0, Translate_1.translate)({
                id: 'theme.common.editThisPage',
                message: 'Edit this page',
                description: 'The link label to edit the current page',
            })}
            </Button_1.default>
          </div>)}
      </div>
    </div>);
}
