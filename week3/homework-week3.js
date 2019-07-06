const express = require('express');
const createError = require('http-errors');
const app = express();

app.use(express.json());
app.use(express.urlencoded());

let todos =[{
  id: 1, title: 'Buy cookies', isDone: true,
}, {
  id: 2, title: 'Do laundry', isDone: true,
}, {
  id: 3, title: 'Go to the bank', isDone: true,
},{
  id: 4, title: 'Clean the floor', isDone: false,
}];

let idNext = t5;

// the to do List
app.get('/todos', (req, res) => {
    return res.send('GET HTTP method on todos resource');
});

// GET request
app.get('/todos', (req, res) => {
    return res.send('GET HTTP method on todos resource');
});

// POST request
app.post('/todos', (req, res) => {
    return res.send('POST HTTP method on todos resource');
});

//PUT Request
app.put('/todos/:todoId', (req, res) => {
    return res.send(
    `PUT HTTP method on todos/${req.params.userId} resource`,
    );
});

// DELETE Request
app.delete('/todos/:todoId', (req, res) => {
    return res.send(
    `DELETE HTTP method on todos/${req.params.userId} resource`,
    );
});

// 404 error
app.use((req, res, next) => {
    console.log("hi, this is a 404");
    next(createError(404));
});

// Error handler middleware
app.use((err, req, res, next) => {
    console.log("handling the error");
    res.send(err.status);
});

app.listen(3000);