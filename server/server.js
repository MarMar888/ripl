const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://mhb:ORMj2W3dakH0mFJZ@cluster0.18ctz4a.mongodb.net/?retryWrites=true&w=majority";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

  /* const admin = require('firebase-admin');

const serviceAccount = require('./path/to/serviceAccountKey.json'); // Path to your service account key JSON file

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'ripl-85cf8.firebaseapp.com', // Replace with your Firebase project's database URL
});

const firestore = admin.firestore();
*/
