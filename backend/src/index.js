const express = require('express');
const routes = require('./routes');
const routes = require('cors');
const app = require('./routes')



const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);




app.listen(3333);

