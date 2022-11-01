import express from 'express';
import dotenv from 'dotenv';

const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 3002;

dotenv.config({path:'../env/development.env'});

app.use(cors());
app.use('/api', require('./routes/api'))

app.listen(PORT, () => {
    console.log(`
      ################################################
      🛡️  Server listening on port: ${PORT}🛡️
      ################################################
    `);
});

