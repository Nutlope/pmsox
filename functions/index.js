// The Cloud Functions for Firebase SDK to create Cloud Functions and setup triggers.
const functions = require("firebase-functions");

// a hello world cloud function that simply sends a specific response
exports.helloWorld = functions.https.onRequest((request, response) => {
  console.log("What's up man, this is cool");
  response.send("Hello from Firebase!");
});

// Resource: https://firebase.google.com/docs/functions/write-firebase-functions
// Use firebase deploy to make changes
