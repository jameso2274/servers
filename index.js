import express from 'express';
import fetch from 'node-fetch';  // Or any library you use for making HTTP requests

const app = express();

app.get('/proxy', async (req, res) => {
  const targetUrl = req.query.url;  // Get the URL from query
  if (!targetUrl) {
    return res.status(400).send('URL parameter is required');
  }

  try {
    const response = await fetch(`https://${targetUrl}`);
    const data = await response.text();
    res.send(data);
  } catch (error) {
    res.status(500).send('Error fetching the URL');
  }
});

app.listen(3000, () => {
  console.log('Server is running');
});
