const mongoose = require('mongoose');
const express = require('express');
const app = express();
const fs = require('fs');
app.use(express.json());
mongoose.connect('mongodb://localhost:27017/fooddata', { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });

const Schema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
}, { versionKey: false });

var FoodItem = mongoose.model('FoodItem', Schema);

app.post('/addtocart', (req, res) => {
    var fooditem = new FoodItem({
        name: req.body.name,
        image: req.body.image,
        price: req.body.price,
        description: req.body.description
    });

    fooditem.save().then((docs) => {
        console.log('Success', docs)
    }, (err) => {
        console.log(err)
    })
    res.json({ result: 'Success' })
});

app.get('/cart', (req, res) => {
    FoodItem.find({}, (err, data) => {
        res.json(data)
    })
})

app.get('/data', (req, res) => {
    fs.readFile('data.json', "UTF-8", (err, data) => {
        obj = JSON.parse(data);
        res.send(obj);
    })
})

app.delete('/deletecartitem', function (req, res) {

    FoodItem.deleteOne({ _id: req.body._id }).then((result) => {
        console.log(result);
        res.json(result);
    }, (err) => console.log(err));
})

app.delete('/clearcart', function (req, res) {

    FoodItem.deleteMany().then((result) => {
        console.log(result);
        res.json(result);
    }, (err) => console.log(err));
})

app.listen(9000, () => {
    console.log('Server is running on port 9000');
})