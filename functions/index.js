// The Cloud Functions for Firebase SDK to create Cloud Functions and setup triggers.
const functions = require("firebase-functions");
const nodemailer = require("nodemailer");

// a hello world cloud function that sends the same string + "man" back to client
exports.addMessage = functions.https.onCall((data) => {
  let message = data + " man";
  console.log("log message: ", message);
  return message;
});

// Resource: https://firebase.google.com/docs/functions/write-firebase-functions
// Use this for emails - https://www.youtube.com/watch?v=vThujL5-fZQ&ab_channel=Fireship
