const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('Hello, MERN!');
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

mongoose.connect('mongodb://localhost/mydatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log(err));

  const admin = require('firebase-admin');

const serviceAccount = require('./path/to/serviceAccountKey.json'); // Path to your service account key JSON file

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'ripl-85cf8.firebaseapp.com', // Replace with your Firebase project's database URL
});

const firestore = admin.firestore();

