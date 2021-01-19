// 1. Given user's GitHub ID, fetch their email from Cognito
//      - SECRETS: Cognito User Pool ID
// 2. Send email via. MailJet
//      - SECRETS: MailJet API Key
//                 MailJet Secret Key

const mailjet = require("node-mailjet").connect(
  process.env.MAILJET_API_KEY,
  process.env.MAILJET_API_SECRET
);

await mailjet
  .post("send", {
    version: "v3.1",
  })
  .request({
    Messages: [
      {
        From: {
          Email: "info@huntr.dev",
          Name: "the huntr team",
        },
        To: [
          {
            Email: "TODO: users email",
            Name: "TODO: users email",
          },
        ],
        TemplateID: "TODO: template ID",
        TemplateLanguage: true,
        Variables: "TODO: required variables",
      },
    ],
  });
