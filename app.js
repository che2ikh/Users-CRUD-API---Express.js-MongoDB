const express = require('express');
const db = require("./config/db"); 
const cors = require('cors');


db();

const app = express();

app.use(cors());

// Middleware
app.use(express.json());
app.use(express.urlencoded({extended:false}));
// Routes
const userRoutes = require('./routes/userRoutes');
app.use('/api/v1/users', userRoutes);

// Default route
app.get('/', (req, res) => {
  res.send('API is running...');
});

// Start server
const PORT =5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

