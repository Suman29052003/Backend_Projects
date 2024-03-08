const express = require('express');
const dotenv = require( 'dotenv' ).config();
const errorHandler = require ('./middleware/errorHandler.js')

const app = express()
const port = 4000;

app.use(express.json()); // Middleware for parsing JSON bodies
app.use("/api/Contacts", require( './routes/contactRouter.js'));
app.use(errorHandler)
app.listen(port, () => {
    console.log(`Server is running on ${port}`)
})