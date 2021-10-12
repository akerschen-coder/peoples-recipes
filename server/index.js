// imports 
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from  './routes/posts.js';

const app = express();


app.use('/posts', postRoutes);

// body parser to properly send requests and will accept images 
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

// time for some mongooses- how to connect 
// come back chill our shit 
const CONNECT_URL = "mongodb+srv://akerschen:LetsKickIt1!@cuds.dz2qv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

// the two are not required but helps 
mongoose.connect(CONNECT_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Sever running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));

// error with cannot use useFindAndModify
//mongoose.set('useFindAndModify', false);