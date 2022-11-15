const mongoose = require('mongoose');

class UserModel {
    User;

    constructor () {
        mongoose.connect('mongodb://localhost:27017/chocolate', {
            useUnifiedTopology: true,
            useNewUrlParser: true
        });

        const userSchema = mongoose.Schema({
            username: String,
            password: String, 
            appointments: Array,
        });

        userSchema.virtual('id')
            .get(function() {
                return this._id.toHexString();
            });

        userSchema.set('toJSON', {
            virtuals: true
        });

        this.User = mongoose.model('User', userSchema);
    }

    async signUp(username, password) {
        try {
            const alreadyUser = await this.User.findOne({ username: username });
            if(alreadyUser) {
                // Username is already taken
                return false;
            }

            const salt = await bcrypt.genSalt();
            let hash = await bcrypt.hash(password, salt);

            let user = new this.User({
                nickname: nickname,
                password: hash,
                appointments: [],
            });

            const insertedUser = await this.saveUser(user);

            return insertedUser;
        }
        catch (err) {
            console.log("sign up error: ", err);
            return false;
        }
    }

    async logIn(username, password) {
        try {
            let user = await this.User.findOne({ username: username });
            if(user) {
                const isValid = await bcrypt.compare(password, user.password);
                if(isValid) {
                    return user;
                }
                console.log("Password is not valid: ", password, user.password);
            }
            console.log("Username is not valid");
            return false;
        }
        catch (err) {
            console.log("Sign in error: ", err);
            return false;
        }
    }

    saveUser(user) {
        try {
            return user.save();
        }
        catch(err) {
            console.log("Error saving user: ", err);
            return false;
        }
    }

}

module.exports = UserModel;