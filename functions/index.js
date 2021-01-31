// The Cloud Functions for Firebase SDK to create Cloud Functions and setup triggers.
const functions = require("firebase-functions");

// // a hello world cloud function that simply sends a specific response
exports.helloWorld = functions.https.onRequest((request, response) => {
  console.log("What's up man, this is cool");
  response.send("Hello from Firebase!");
});

// a hello world cloud function that sends the same string + "man" back to client
exports.addMessage = functions.https.onCall((data) => {
  let message = data + " man";
  console.log("log message: ", message);
  return message;
});

// Resource: https://firebase.google.com/docs/functions/write-firebase-functions
// Use firebase deploy to make changes

// Send an email

// const nodemailer = require("nodemailer");

// // TODO: Configure the `gmail.email` and `gmail.password` Google Cloud environment variables.
// const gmailEmail = functions.config().gmail.email;
// const gmailPassword = functions.config().gmail.password;
// const mailTransport = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: gmailEmail,
//     pass: gmailPassword,
//   },
// });

// const APP_NAME = "PMSOX app";

// exports.sendWelcomeEmail = functions.auth.user().onCreate((user) => {
//   const email = user.email; // The email of the user.
//   const displayName = user.displayName; // The display name of the user.
//   return sendWelcomeEmail(email, displayName);
// });

// exports.sendByeEmail = functions.auth.user().onDelete((user) => {
//   const email = user.email;
//   const displayName = user.displayName;
//   return sendGoodbyeEmail(email, displayName);
// });

// // Sends a welcome email to the given user.
// async function sendWelcomeEmail(email, displayName) {
//   const mailOptions = {
//     from: `${APP_NAME} <noreply@firebase.com>`,
//     to: email,
//   };

//   // The user subscribed to the newsletter.
//   mailOptions.subject = `Welcome to ${APP_NAME}!`;
//   mailOptions.text = `Hey ${
//     displayName || ""
//   }! Welcome to ${APP_NAME}. I hope you will enjoy our great sox service.`;
//   await mailTransport.sendMail(mailOptions);
//   console.log("New welcome email sent to:", email);
//   return null;
// }

// // Sends a goodbye email to the given user.
// async function sendGoodbyeEmail(email, displayName) {
//   const mailOptions = {
//     from: `${APP_NAME} <noreply@firebase.com>`,
//     to: email,
//   };

//   mailOptions.subject = `Bye!`;
//   mailOptions.text = `Hey ${
//     displayName || ""
//   }!, We confirm that we have deleted your ${APP_NAME} account. Thanks for being a valuable member`;
//   await mailTransport.sendMail(mailOptions);
//   console.log("Account deletion confirmation email sent to:", email);
//   return null;
// }
