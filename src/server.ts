import express from 'express';
import * as path from 'path'

let app = express();

let port = 3000 || process.env.PORT;

app.use(express.static('public'))
app.get('/', (req, res) => {
    res.sendFile(path.resolve('public', 'index.html'));
});

app.listen(port, () => {
    console.log(`server is runnig at port ${port}`);
    //console.log(path.resolve('public', 'index.html'));
});