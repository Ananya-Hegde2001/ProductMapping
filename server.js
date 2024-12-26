const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/matchingSystem')
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Connection error:', err));

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Define Schema
const productMappingSchema = new mongoose.Schema({
  supplierName: String,
  standardizedName: String,
});

const ProductMapping = mongoose.model('ProductMapping', productMappingSchema);

// API Endpoints
app.get('/api/mappings', async (req, res) => {
  try {
    const mappings = await ProductMapping.find();
    res.json(mappings);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.get('/', (req, res) => {
  res.send('Welcome to the Product Mapping System API');
});

// POST route for adding new mappings
app.post('/api/mappings', async (req, res) => {
  try {
    const newMapping = new ProductMapping(req.body);
    await newMapping.save();
    res.status(201).json(newMapping);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Start the Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

