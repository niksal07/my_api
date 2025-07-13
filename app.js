const express = require('express');
const app = express();
app.use(express.json());

app.get('/api/health', (req, res) => {
  res.json({ status: 'OK' });
});

app.get('/api/user/:id', (req, res) => {
  const userId = req.params.id;
  res.json({ id: userId, name: 'John Doe' });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`API server running on port ${PORT}`);
});
