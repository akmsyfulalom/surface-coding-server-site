const express = require('express')
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000

app.use(cors());

const categories = require('./data/categories.json')

const course = require('./data/course.json');




app.get('/', (req, res) => {
    res.send('Server is running')
});

app.get('/categories', (req, res) => {
    res.send(categories)
})


app.get('/course', (req, res) => {
    res.send(course)
});







app.listen(port, () => {
    console.log('surface coding app server is running');
});