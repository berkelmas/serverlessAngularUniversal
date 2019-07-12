"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions = require("firebase-functions");
// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
exports.universal = functions.https.onRequest((request, response) => {
    require(`${process.cwd()}/dist/universalson-webpack/server`).app(request, response);
});
//# sourceMappingURL=index.js.map