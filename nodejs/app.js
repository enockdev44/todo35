require("dotenv").config()

const express = require('express');
const app = express();
const port = process.env.PORT;
const bodyParser = require('body-parser');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const { getShortDate } = require('./shortdate')
let dbo = null;

const user = {
    lastTimeConnected: getShortDate(),
    id: 71,
    email: 'olsan@gmail.com',
    password: 1234
}

jwt.sign({ user }, 'mysecretkey', (err, token) => {
    console.log('token: ' + token);

    jwt.verify(token, 'mysecretkey', (err, authData) => {
        if (err) console.log(403);
        else {

            console.table({
                message: "Welcome to Profile",
                userData: authData
            })

            console.log(authData.user);
            console.log(authData.user.lastTimeConnected.split('T')[1].split(':'));

        }
    })
})



/** middleware */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
/** database with mongodb */
var MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectID;
const URLDB = process.env.URLDATABASE;

/** function to connect to database */
function mongodbCl() {
    MongoClient.connect(URLDB, (err, db) => {
        if (err) throw err;
        dbo = db.db("tododb");
        console.log('database connected.');
    })
}

/** connect to database */
mongodbCl();


app.get('/todo', function(req, res) {

    dbo.collection("todotb").find().toArray(async function(err, result) {
        if (err) {
            console.log(err)
            res.status(500).json({ message: 'Internal server error' })
        };

        todos = await result;
        // console.log(todos);

        res.status(200).json(todos);

    });
});

app.get('/todo/:id', function(req, res) {
    const { id } = req.params;
    let todo = "";
    let ids = [];

    dbo.collection("todotb").find().toArray(async function(err, result) {
        if (err) {
            console.log(err)
            res.status(500).json({ message: 'Internal server error' })
        };

        for (var i = result.length - 1; i >= 0; i--) {
            ids.push(JSON.stringify(result[i]._id));
        }
    })

    let query = { _id: ObjectId(id) };

    dbo.collection("todotb").find(query).toArray(async function(err, result) {
        if (err) {
            console.log(err)
            res.status(500).json({ message: 'Internal server error' })
        };

        todos = await result;
        // console.log(todos);
        res.status(200).json(todo);

    });
})

app.post('/todo/', function(req, res) {
    const { name, description } = req.body;

    let query = { rollno: 1, name: name, description: description };

    dbo.collection("todotb").insertOne(query, async function(err, result) {

        if (err) {
            console.log(err)
            res.status(500).json({ message: 'Internal server error' })
        };

        res.status(200).json({ message: "todo inserted" });

    });
})

app.post('/todo/:id', function(req, res) {
    const { id } = req.params;
    const { name, description } = req.body;
    let filter = { _id: ObjectId(id) };
    let query = { name: name, description: description };
    try {
        dbo.collection("todotb").updateOne(filter, { $set: query });
        res.status(200).json({ message: 'todo updated' })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Internal server error' })
    }
})

app.delete('/todo/', function(req, res) {
    const { many } = req.body;
    console.log(many);
    ids = many.split("+");
    idObs = [];
    ids.forEach(id => {
        idObs.push(ObjectId(id));
    });
    let query = { _id: { $in: idObs } }
        // query = { _id: ObjectId(id) };

    try {
        dbo.collection("todotb").deleteMany(query, async function(err, result) {
            res.status(200).json({ message: "todo deleted" });
        });

    } catch (error) {
        //res.status(500).json({ message: 'Internal server error' });
    }

})

app.delete('/todo/:id', function(req, res) {
    const { id } = req.params;
    let query = { _id: ObjectId(id) };
    try {
        dbo.collection("todotb").deleteOne(query, async function(err, result) {
            res.status(200).json({ message: "todo deleted" });
        });

    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
})

app.post('/auth/login', (req, res) => {
    const { token } = req.body;

    res.status(200).json({ token: token });
})

app.listen(port, () => {
    console.log('Server is running on localhost:', port);
});
