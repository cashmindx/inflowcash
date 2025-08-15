const admin = require("firebase-admin");
const functions = require("firebase-functions");

// The service account key is expected to be in the same directory.
// Make sure you have downloaded your serviceAccountKey.json from the Firebase console
// and placed it inside the 'functions' folder.
try {
  const serviceAccount = require("./serviceAccountKey.json");

  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });

  console.log("Firebase Admin SDK initialized successfully.");

} catch (error) {
  console.error("Failed to initialize Firebase Admin SDK:", error);
  console.error("Please ensure that 'serviceAccountKey.json' exists in the 'functions' directory and is valid.");
}

// You can define your Cloud Functions here.
exports.myFunction = functions.https.onCall((data, context) => {
  console.log("myFunction called with data:", data);

  // You can access authentication information if the user is logged in
  // const uid = context.auth.uid;

  // You can perform backend tasks here, like reading/writing to Firestore
  // using the admin SDK.

  return { result: `Hello from Firebase! You sent: "${data. Text}"` };
});
