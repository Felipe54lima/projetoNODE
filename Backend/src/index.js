const express = require('express');
const server = express();

server.use(express.json());


const TaskRoutes = require('./routes/Taskroutes');
server.get('/teste', (req, res) => {
    res.send('TUdo2222222 certo com a API');
});

server.use('/task', TaskRoutes)



server.listen(3000, () => {
    console.log('API ONLINE');
});