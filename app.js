const express = require('express');
const app = express();
const cors = require('cors')
const moviesRouter = require('./routes/movies')
const genresRouter = require('./routes/genres')

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors())

app.use('/movies', moviesRouter);
app.use('/genres', genresRouter);




app.listen(3000, function() {
    console.log("El servidor está corriendo en el puerto 3000");
})