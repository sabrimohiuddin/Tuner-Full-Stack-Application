// DEPENDENCIES
const app = require('./app.js');

// CONFIGURATION
require('dotenv').config();
const PORT = process.env.PORT  // you can set any default port you want.

// LISTEN
app.listen(PORT, () => {
    console.log(`Tuner App is listening on port ${PORT}`);
});
