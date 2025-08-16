const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const noteRoutes = require('./routes/noteRoutes');
const authRoutes = require('./routes/authRoutes');

const app = express();
const port = 5000;
const host = "localhost";

app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/mynotesdb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Routes
app.use('/api/notes', noteRoutes);
app.use('/api/auth', authRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://${host}:${port}`);
});
