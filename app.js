import express from 'express';
const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '../public/index.html');
  });
  
app.listen(5000, function() {
    console.log('Server is listening on port 5000');
});