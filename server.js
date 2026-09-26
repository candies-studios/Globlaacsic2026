#!/usr/bin/env node

/**
 * Simple Express Server for ACSIC 2026 Website
 * Usage: node server.js
 */

const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 3000;
const HOST = 'localhost';

// Serve static files from current directory
app.use(express.static(path.join(__dirname)));

// Serve index.html for root path
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Handle all other requests by serving the requested file
app.get('*', (req, res) => {
  const filepath = path.join(__dirname, req.path);
  res.sendFile(filepath, (err) => {
    if (err) {
      res.status(404).send('Page not found');
    }
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Internal Server Error');
});

// Start server
app.listen(PORT, HOST, () => {
  console.log('');
  console.log('╔════════════════════════════════════════════════════════════╗');
  console.log('║   ACSIC 2026 Website - Local Server                       ║');
  console.log('╚════════════════════════════════════════════════════════════╝');
  console.log('');
  console.log(`✓ Server running at: http://${HOST}:${PORT}`);
  console.log('');
  console.log('📝 Press Ctrl+C to stop the server');
  console.log('');
  console.log('Pages available:');
  console.log(`  • Home: http://${HOST}:${PORT}/`);
  console.log(`  • Programs: http://${HOST}:${PORT}/pages/brief-program.html`);
  console.log(`  • Visiting India: http://${HOST}:${PORT}/pages/visiting-india.html`);
  console.log(`  • About: http://${HOST}:${PORT}/pages/about-venue.html`);
  console.log('');
});

// Graceful shutdown
process.on('SIGINT', () => {
  console.log('\n\n✓ Server stopped gracefully');
  process.exit(0);
});
