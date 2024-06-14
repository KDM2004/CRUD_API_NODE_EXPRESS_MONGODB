import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    age: Number,
    Sex: String,
});

const User = mongoose.model('User', userSchema);

export default User;
