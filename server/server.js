const express = require('express');
const { MongoClient } = require('mongodb');
const cors = require('cors');

const uri = "mongodb+srv://mhb:ORMj2W3dakH0mFJZ@cluster0.18ctz4a.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const app = express();

// Middleware
app.use(cors());  // Handle CORS
app.use(express.json());  // Parse JSON request bodies

// Connect to MongoDB
client.connect(err => {
  if (err) {
    console.error('Failed to connect to MongoDB:', err);
    return;
  }

  const experiencesCollection = client.db("ripl").collection("experiences");

  // Routes
  app.get('/experiences', (req, res) => {
    experiencesCollection.find().toArray()
      .then(experiences => res.json(experiences))
      .catch(err => {
        console.error('Failed to fetch experiences:', err);
        res.status(500).json({ message: 'Internal server error' });
      });
  });

  app.post('/experiences', (req, res) => {
    const newExperience = req.body;

    experiencesCollection.insertOne(newExperience)
      .then(result => res.json(result.ops[0]))
      .catch(err => {
        console.error('Failed to add experience:', err);
        res.status(500).json({ message: 'Internal server error' });
      });
  });

  // Start server
  const port = process.env.PORT || 5000;
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
});
