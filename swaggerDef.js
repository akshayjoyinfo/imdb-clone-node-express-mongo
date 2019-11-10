const host = `http://localhost:3000`;

module.exports = {
  info: {
    // API informations (required)
    title: 'Hello World', // Title (required)
    version: '1.0.0', // Version (required)
    description: 'A sample API', // Description (optional)
  },
  apis: ['./drivers/webserver/routes/index.js'],
  host, // Host (optional)
  basePath: '/', // Base path (optional)
};
