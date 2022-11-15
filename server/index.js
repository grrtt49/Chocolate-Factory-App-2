const ReviewModel = require('./ReviewModel');
const UserModel = require('./UserModel');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
  extended: false
}));

// parse application/json
app.use(bodyParser.json());

let userModel = new UserModel();
let reviewModel = new ReviewModel();

app.listen(3030, () => console.log('Server listening on port 3030!'));

app.post('/api/log-in', async (req, res) => {
    console.log("Signing in");
    let user = await userModel.logIn(req.body.username, req.body.password);
    res.send(user);
});

app.post('/api/sign-up', async (req, res) => {
    console.log("Signing in");
    let user = await userModel.signUp(req.body.username, req.body.password);
    res.send(user);
});

app.get('/api/reviews', async (req, res) => {
    console.log("Getting reviews");
    res.send(await reviewModel.getReviews());
});

app.post('/api/create-review', async (req, res) => {
    console.log("Creating review");
    let review = await reviewModel.createReview(req.body.stars, req.body.name, req.body.title, req.body.review);
    res.send(review);
});