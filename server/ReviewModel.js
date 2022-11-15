const mongoose = require('mongoose');

class ReviewModel {
    Review;

    constructor () {
        mongoose.connect('mongodb://localhost:27017/chocolate', {
            useUnifiedTopology: true,
            useNewUrlParser: true
        });

        const reviewSchema = mongoose.Schema({
            stars: Number,
            name: String,
            title: String, 
            review: String,
        });

        reviewSchema.virtual('id')
            .get(function() {
                return this._id.toHexString();
            });

        reviewSchema.set('toJSON', {
            virtuals: true
        });

        this.Review = mongoose.model('Review', reviewSchema);
    }

    async createReview(stars, name, title, review) {
        try {
            let createdReview = new this.Review({
                stars: stars,
                name: name,
                title: title,
                review: review,
            });

            const insertedReview = await this.saveReview(createdReview);

            return insertedReview;
        }
        catch (err) {
            console.log("create review error: ", err);
            return false;
        }
    }

    async getReviews() {
        try {
            let reviews = await this.Review.find();
            return reviews;
        }
        catch (err) {
            console.log("Get reviews error: ", err);
            return false;
        }
    }

    saveReview(review) {
        try {
            return review.save();
        }
        catch(err) {
            console.log("Error saving review: ", err);
            return false;
        }
    }

}

module.exports = ReviewModel;