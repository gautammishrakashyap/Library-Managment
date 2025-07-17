const express = require('express');
const app = express();
const port = 5000;
const cors = require('cors');
app.use(cors());


app.get('/', (req, res) => {
  res.send('Library backend working fine and now fixed!');
});
app.get('/api/message', (req, res) => {
  res.json({ message: "Hello from the backend with api!" });
});


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
