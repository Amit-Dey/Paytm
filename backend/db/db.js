const mongose = require('mongoose');
const bcrypt = require('bcrypt');
require('dotenv').config();

mongose.connect(process.env.VITE_MONGODB_URL)
    .then(() => console.log('Connected to MongoDB'))
    .catch((error) => console.log('Error connecting to MongoDB', error));


// User model
const userSchema = new mongose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        minlength: 3,
        trim: true,
        lowercase: true,
        maxlength: 30
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    firstname: {
        type: String,
        required: true,
        trim: true,
        maxlength: 50
    },
    lastname: {
        type: String,
        required: true,
        trim: true,
        maxlength: 50
    },
});


// Hash password method
userSchema.methods.hashPassword = async function (NormalPassword) {
    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);
    return await bcrypt.hash(NormalPassword, salt);
};

// Validate password method
userSchema.methods.validatePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
};


const AccountsSchema = new mongose.Schema({
    userId: {
        type: mongose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    balance: {
        type: Number,
        default: 0,
        min: 0,
        required: true
    }
});



// Models
const User = mongose.model('User', userSchema);
const Accounts = mongose.model('Accounts', AccountsSchema);

module.exports = { User, Accounts };