import express from 'express';
import cors from 'cors';
import env from './env.js';
import mathRoute from './routes/mathRoute.js';


const app = express();
const root_api = '/api/v1';

// Add middleware for parsing URL encoded bodies (which are usually sent by browser)
app.use(cors());
// Add middleware for parsing JSON and urlencoded data and populating `req.body`
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(root_api, mathRoute);

const server = app.listen(env.port).on('listening', () => {
  console.log(`🚀 are live on ${env.port}`);
});


export default server;