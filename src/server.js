import express from 'express';
import { MongoClient } from 'mongodb';
import cors from 'cors'

const app = express();
const port = 3078;
app.use(cors())

// Replace 'your_connection_string', 'your_database_name', and 'your_collection_name' with your actual values
const uri = 'mongodb+srv://nik:sCMbmK4PdMtUh0zs@cluster1.oiew07s.mongodb.net/?retryWrites=true&w=majority';
const collectionName0 = 'array';
const collectionName1 = 'backtracking';
const collectionName2 = 'binarysearch';
const collectionName3 = 'binarytree';
const collectionName4 = 'bitmanipulation';
const collectionName5 = 'breadthfirstsearch';
const collectionName6 = 'deapthFirstSearch';
const collectionName7 = 'dnc';
const collectionName8 = 'dynamic-programming';
const collectionName9 = 'graph';
const collectionName10 = 'greedy';
const collectionName11 = 'hashtable';
const collectionName12 = 'heap';
const collectionName13 = 'linkedlist';
const collectionName14 = 'math';
const collectionName15 = 'matrix';
const collectionName16 = 'monotonicstack';
const collectionName17 = 'queue';
const collectionName18 = 'recursion';
const collectionName19 = 'slidingwindow';
const collectionName20 = 'sorting';
const collectionName21 = 'stack';
const collectionName22 = 'string';
const collectionName23 = 'tree';
const collectionName24 = 'twopointers';
const collectionName25 = 'binarysearchtree';
const collectionName26 = 'codeChef';
const collectionName27 = 'codingNinjas';
const collectionName28 = 'codingNinjas2';

const connectToMongoDB = async () => {
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

  try {
    await client.connect();
    console.log('Connected to the database');
    return client.db();
  } catch (error) {
    console.error('Error connecting to the database:', error.message);
    throw error;
  }
};

// Define a route to access the collection
app.get('/array', async (req, res) => {
  try {
    const db = await connectToMongoDB();
    const collection = db.collection(collectionName0);

    // Retrieve data from the collection
    const data0 = await collection.find().toArray();
    
    // Log retrieved data to console
    console.log('Retrieved data:', data0);

    // Send data as JSON in the response
    res.json(data0);
  } catch (error) {
    console.error('Error retrieving data from the collection:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
);
app.get('/backtracking', async (req, res) => {
    try {
      const db = await connectToMongoDB();
      const collection = db.collection(collectionName1);
  
      // Retrieve data from the collection
      const data1 = await collection.find().toArray();
      
      // Log retrieved data to console
      console.log('Retrieved data:', data1);
  
      // Send data as JSON in the response
      res.json(data1);
    } catch (error) {
      console.error('Error retrieving data from the collection:', error.message);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
  )
  app.get('/binarysearch', async (req, res) => {
    try {
      const db = await connectToMongoDB();
      const collection = db.collection(collectionName2);
  
      // Retrieve data from the collection
      const data2 = await collection.find().toArray();
      
      // Log retrieved data to console
      console.log('Retrieved data:', data2);
  
      // Send data as JSON in the response
      res.json(data2);
    } catch (error) {
      console.error('Error retrieving data from the collection:', error.message);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
  )
  app.get('/binarytree', async (req, res) => {
    try {
      const db = await connectToMongoDB();
      const collection = db.collection(collectionName3);
  
      // Retrieve data from the collection
      const data3 = await collection.find().toArray();
      
      // Log retrieved data to console
      console.log('Retrieved data:', data3);
  
      // Send data as JSON in the response
      res.json(data3);
    } catch (error) {
      console.error('Error retrieving data from the collection:', error.message);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
  )

app.get('/bitmanipulation', async (req, res) => {
    try {
      const db = await connectToMongoDB();
      const collection = db.collection(collectionName4);
  
      // Retrieve data from the collection
      const data4 = await collection.find().toArray();
      
      // Log retrieved data to console
      console.log('Retrieved data:', data4);
  
      // Send data as JSON in the response
      res.json(data4);
    } catch (error) {
      console.error('Error retrieving data from the collection:', error.message);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
  )
  
  app.get('/breadthfirstsearch', async (req, res) => {
    try {
      const db = await connectToMongoDB();
      const collection = db.collection(collectionName5);
  
      // Retrieve data from the collection
      const data5 = await collection.find().toArray();
      
      // Log retrieved data to console
      console.log('Retrieved data:', data5);
  
      // Send data as JSON in the response
      res.json(data5);
    } catch (error) {
      console.error('Error retrieving data from the collection:', error.message);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
  )
  app.get('/deapthFirstSearch', async (req, res) => {
    try {
      const db = await connectToMongoDB();
      const collection = db.collection(collectionName6);
  
      // Retrieve data from the collection
      const data6 = await collection.find().toArray();
      
      // Log retrieved data to console
      console.log('Retrieved data:', data6);
  
      // Send data as JSON in the response
      res.json(data6);
    } catch (error) {
      console.error('Error retrieving data from the collection:', error.message);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
  )
  app.get('/dnc', async (req, res) => {
    try {
      const db = await connectToMongoDB();
      const collection = db.collection(collectionName7);
  
      // Retrieve data from the collection
      const data7 = await collection.find().toArray();
      
      // Log retrieved data to console
      console.log('Retrieved data:', data7);
  
      // Send data as JSON in the response
      res.json(data7);
    } catch (error) {
      console.error('Error retrieving data from the collection:', error.message);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
  )
  app.get('/dynamic-programming', async (req, res) => {
    try {
      const db = await connectToMongoDB();
      const collection = db.collection(collectionName8);
  
      // Retrieve data from the collection
      const data8 = await collection.find().toArray();
      
      // Log retrieved data to console
      console.log('Retrieved data:', data8);
  
      // Send data as JSON in the response
      res.json(data8);
    } catch (error) {
      console.error('Error retrieving data from the collection:', error.message);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
  )
  app.get('/graph', async (req, res) => {
    try {
      const db = await connectToMongoDB();
      const collection = db.collection(collectionName9);
  
      // Retrieve data from the collection
      const data9 = await collection.find().toArray();
      
      // Log retrieved data to console
      console.log('Retrieved data:', data9);
  
      // Send data as JSON in the response
      res.json(data9);
    } catch (error) {
      console.error('Error retrieving data from the collection:', error.message);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
  )
  app.get('/greedy', async (req, res) => {
    try {
      const db = await connectToMongoDB();
      const collection = db.collection(collectionName10);
  
      // Retrieve data from the collection
      const data10 = await collection.find().toArray();
      
      // Log retrieved data to console
      console.log('Retrieved data:', data10);
  
      // Send data as JSON in the response
      res.json(data10);
    } catch (error) {
      console.error('Error retrieving data from the collection:', error.message);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
  )
  app.get('/hashtable', async (req, res) => {
    try {
      const db = await connectToMongoDB();
      const collection = db.collection(collectionName11);
  
      // Retrieve data from the collection
      const data11 = await collection.find().toArray();
      
      // Log retrieved data to console
      console.log('Retrieved data:', data11);
  
      // Send data as JSON in the response
      res.json(data11);
    } catch (error) {
      console.error('Error retrieving data from the collection:', error.message);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
  )
  app.get('/heap', async (req, res) => {
    try {
      const db = await connectToMongoDB();
      const collection = db.collection(collectionName12);
  
      // Retrieve data from the collection
      const data12 = await collection.find().toArray();
      
      // Log retrieved data to console
      console.log('Retrieved data:', data12);
  
      // Send data as JSON in the response
      res.json(data12);
    } catch (error) {
      console.error('Error retrieving data from the collection:', error.message);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
  )
  app.get('/linkedlist', async (req, res) => {
    try {
      const db = await connectToMongoDB();
      const collection = db.collection(collectionName13);
  
      // Retrieve data from the collection
      const data13 = await collection.find().toArray();
      
      // Log retrieved data to console
      console.log('Retrieved data:', data13);
  
      // Send data as JSON in the response
      res.json(data13);
    } catch (error) {
      console.error('Error retrieving data from the collection:', error.message);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
  )
  app.get('/math', async (req, res) => {
    try {
      const db = await connectToMongoDB();
      const collection = db.collection(collectionName14);
  
      // Retrieve data from the collection
      const data14 = await collection.find().toArray();
      
      // Log retrieved data to console
      console.log('Retrieved data:', data14);
  
      // Send data as JSON in the response
      res.json(data14);
    } catch (error) {
      console.error('Error retrieving data from the collection:', error.message);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
  )
  app.get('/matrix', async (req, res) => {
    try {
      const db = await connectToMongoDB();
      const collection = db.collection(collectionName15);
  
      // Retrieve data from the collection
      const data15 = await collection.find().toArray();
      
      // Log retrieved data to console
      console.log('Retrieved data:', data15);
  
      // Send data as JSON in the response
      res.json(data15);
    } catch (error) {
      console.error('Error retrieving data from the collection:', error.message);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
  )
  app.get('/monotonicstack', async (req, res) => {
    try {
      const db = await connectToMongoDB();
      const collection = db.collection(collectionName16);
  
      // Retrieve data from the collection
      const data16 = await collection.find().toArray();
      
      // Log retrieved data to console
      console.log('Retrieved data:', data16);
  
      // Send data as JSON in the response
      res.json(data16);
    } catch (error) {
      console.error('Error retrieving data from the collection:', error.message);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
  )
  app.get('/queue', async (req, res) => {
    try {
      const db = await connectToMongoDB();
      const collection = db.collection(collectionName17);
  
      // Retrieve data from the collection
      const data17 = await collection.find().toArray();
      
      // Log retrieved data to console
      console.log('Retrieved data:', data17);
  
      // Send data as JSON in the response
      res.json(data17);
    } catch (error) {
      console.error('Error retrieving data from the collection:', error.message);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
  )
  app.get('/recursion', async (req, res) => {
    try {
      const db = await connectToMongoDB();
      const collection = db.collection(collectionName18);
  
      // Retrieve data from the collection
      const data18 = await collection.find().toArray();
      
      // Log retrieved data to console
      console.log('Retrieved data:', data18);
  
      // Send data as JSON in the response
      res.json(data18);
    } catch (error) {
      console.error('Error retrieving data from the collection:', error.message);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
  )
  app.get('/slidingwindow', async (req, res) => {
    try {
      const db = await connectToMongoDB();
      const collection = db.collection(collectionName19);
  
      // Retrieve data from the collection
      const data19 = await collection.find().toArray();
      
      // Log retrieved data to console
      console.log('Retrieved data:', data19);
  
      // Send data as JSON in the response
      res.json(data19);
    } catch (error) {
      console.error('Error retrieving data from the collection:', error.message);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
  )
  app.get('/sorting', async (req, res) => {
    try {
      const db = await connectToMongoDB();
      const collection = db.collection(collectionName20);
  
      // Retrieve data from the collection
      const data20 = await collection.find().toArray();
      
      // Log retrieved data to console
      console.log('Retrieved data:', data20);
  
      // Send data as JSON in the response
      res.json(data20);
    } catch (error) {
      console.error('Error retrieving data from the collection:', error.message);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
  )
  app.get('/stack', async (req, res) => {
    try {
      const db = await connectToMongoDB();
      const collection = db.collection(collectionName21);
  
      // Retrieve data from the collection
      const data21 = await collection.find().toArray();
      
      // Log retrieved data to console
      console.log('Retrieved data:', data21);
  
      // Send data as JSON in the response
      res.json(data21);
    } catch (error) {
      console.error('Error retrieving data from the collection:', error.message);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
  )
  app.get('/string', async (req, res) => {
    try {
      const db = await connectToMongoDB();
      const collection = db.collection(collectionName22);
  
      // Retrieve data from the collection
      const data22 = await collection.find().toArray();
      
      // Log retrieved data to console
      console.log('Retrieved data:', data22);
  
      // Send data as JSON in the response
      res.json(data22);
    } catch (error) {
      console.error('Error retrieving data from the collection:', error.message);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
  )
  app.get('/tree', async (req, res) => {
    try {
      const db = await connectToMongoDB();
      const collection = db.collection(collectionName23);
  
      // Retrieve data from the collection
      const data23 = await collection.find().toArray();
      
      // Log retrieved data to console
      console.log('Retrieved data:', data23);
  
      // Send data as JSON in the response
      res.json(data23);
    } catch (error) {
      console.error('Error retrieving data from the collection:', error.message);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
  )
  app.get('/twopointers', async (req, res) => {
    try {
      const db = await connectToMongoDB();
      const collection = db.collection(collectionName24);
  
      // Retrieve data from the collection
      const data24 = await collection.find().toArray();
      
      // Log retrieved data to console
      console.log('Retrieved data:', data24);
  
      // Send data as JSON in the response
      res.json(data24);
    } catch (error) {
      console.error('Error retrieving data from the collection:', error.message);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
  )
  app.get('/binarysearchtree', async (req, res) => {
    try {
      const db = await connectToMongoDB();
      const collection = db.collection(collectionName25);
  
      // Retrieve data from the collection
      const data25 = await collection.find().toArray();
      
      // Log retrieved data to console
      console.log('Retrieved data:', data25);
  
      // Send data as JSON in the response
      res.json(data25);
    } catch (error) {
      console.error('Error retrieving data from the collection:', error.message);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
  )
  app.get('/codeChef', async (req, res) => {
    try {
      const db = await connectToMongoDB();
      const collection = db.collection(collectionName26);
  
      // Retrieve data from the collection
      const data26 = await collection.find().toArray();
      
      // Log retrieved data to console
      console.log('Retrieved data:', data26);
  
      // Send data as JSON in the response
      res.json(data26);
    } catch (error) {
      console.error('Error retrieving data from the collection:', error.message);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
  )
  app.get('/codingNinjas', async (req, res) => {
    try {
      const db = await connectToMongoDB();
      const collection = db.collection(collectionName27);
  
      // Retrieve data from the collection
      const data27 = await collection.find().toArray();
      
      // Log retrieved data to console
      console.log('Retrieved data:', data27);
  
      // Send data as JSON in the response
      res.json(data27);
    } catch (error) {
      console.error('Error retrieving data from the collection:', error.message);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
  )
  app.get('/codingNinjas2', async (req, res) => {
    try {
      const db = await connectToMongoDB();
      const collection = db.collection(collectionName28);
  
      // Retrieve data from the collection
      const data28 = await collection.find().toArray();
      
      // Log retrieved data to console
      console.log('Retrieved data:', data28);
  
      // Send data as JSON in the response
      res.json(data28);
    } catch (error) {
      console.error('Error retrieving data from the collection:', error.message);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
  )

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
