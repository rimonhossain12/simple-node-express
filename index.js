const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

const port = 5000;


app.get('/', (req, res) => {
    res.send('wow I excited to learning node and express with nodemon automatic restart');
});

const users = [
    { id: 0, name: 'shabana', email: 'shabana@gmail.com', phone: '017888888888' },
    { id: 1, name: 'shabnur', email: 'shabnur@gmail.com', phone: '017888888888' },
    { id: 2, name: 'sochorita', email: 'sochorita@gmail.com', phone: '017888888888' },
    { id: 3, name: 'sonia', email: 'sonia@gmail.com', phone: '017888888888' },
    { id: 4, name: 'srabonti', email: 'srabonti@gmail.com', phone: '017888888888' },
    { id: 5, name: 'susmita', email: 'susmita@gmail.com', phone: '017888888888' },
]

app.get('/users', (req, res) => {
   const search = req.query.search;
    if(search){
        const searchResult = users.filter(user => user.name.toLowerCase().includes(search));
        res.send(searchResult);
    }else{
        res.send(users);
    }
   
});

// app METHOD
app.post('/users',(req,res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log('hitting the post',req.body);
    // res.send(JSON.stringify(newUser));
    res.json(newUser);
})

app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id];
    // console.log(req.params.id);
    res.send(user);
})

app.get('/fruits', (req, res) => {
    res.send(['mangoes', 'fazli', 'apple']);
})

app.get('/fruits/mangoes/fazli', (req, res) => {
    res.send('Yummy Yummy to marka fazli');
})

app.listen(port, () => {
    console.log('Listening to port', port);
})