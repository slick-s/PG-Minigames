const express = require('express');
const path = require('path');
const { createProxyMiddleware } = require('http-proxy-middleware');
const app = express();

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'my-app/build')));

// Proxy API requests to the Flask backend
app.use('/api', createProxyMiddleware({ target: 'http://localhost:5000', changeOrigin: true }));

// The catch-all handler: for any request that doesn't match an API route,
// send back React's index.html file.
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'my-app/build', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
