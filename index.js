const express = require('express')
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000

app.use(cors());



const course = require('./data/course.json');




app.get('/', (req, res) => {
    res.send('Server is running')
});


// course api

app.get('/course', (req, res) => {
    res.send(course)
});

// course each id api

app.get('/course/:id', (req, res) => {
    const id = req.params.id;
    const selectedCourse = course.find(c => c._id === id)
    res.send(selectedCourse)

})

// premium router api

app.get('/premium/:id', (req, res) => {
    const id = req.params.id;
    const selectPremiumCourse = course.find(p => p._id === id)
    res.send(selectPremiumCourse);
})






app.listen(port, () => {
    console.log('surface coding app server is running');
});