const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const noteRoutes = require('./routes/noteRoutes');
const authRoutes = require('./routes/authRoutes');
require('dotenv').config(); // 👈 load .env file

const app = express();
const port = process.env.PORT || 5000;
const host = "localhost";

app.use(cors());
app.use(express.json());

// MongoDB connection (Atlas)
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("✅ Connected to MongoDB Atlas"))
.catch(err => console.error("❌ MongoDB connection error:", err));

// Routes
app.use('/api/notes', noteRoutes);
app.use('/api/auth', authRoutes);

app.listen(port, () => {
  console.log(`🚀 Server is running on http://${host}:${port}`);
});
