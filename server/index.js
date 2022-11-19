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
    const response = {
        appointments: user.appointments,
        id: user.id,
        username: user.username,
    };
    res.send(response);
});

app.post('/api/sign-up', async (req, res) => {
    console.log("Signing up");
    let user = await userModel.signUp(req.body.username, req.body.password);
    const response = {
        appointments: user.appointments,
        id: user.id,
        username: user.username,
    };
    res.send(response);
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

app.post('/api/create-appointment', async (req, res) => {
    console.log("Creating appointment");
    let user = await userModel.createAppointment(req.body.userID, req.body.numberOfPeople, req.body.date, req.body.time);
    res.send(user.appointments);
});

app.post('/api/cancel-appointment', async (req, res) => {
    console.log("Cancelling appointment");
    let user = await userModel.cancelAppointment(req.body.userID, req.body.index);
    res.send(user.appointments);
});