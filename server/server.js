import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('bla bla bla')
});

app.listen(8000, () => {
    console.log("server is running on port 8000!");
})