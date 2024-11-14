const express = require('express');

// Initialize the Express application
const app = express();

// Define the port number for the server to listen on
const port = 3000;

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://patnewell42:patnewell42@cluster0.m3uuc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
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




// Define a route for the root URL ('/') and specify the response
app.get('/', (req, res) => {
  res.send('Hello, World!'); // Send 'Hello, World!' as the response
});

// Start the server and have it listen on the defined port
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`); // Log a message to the console indicating the server is running
});