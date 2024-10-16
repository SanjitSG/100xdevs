const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb+srv://sanjit:xt22Uu76Ki7ceEMd@posttracket.plwpuqj.mongodb.net/hms');

// Define schemas
const AdminSchema = new mongoose.Schema({
    username: String,
    password: String
});

const UserSchema = new mongoose.Schema({
    username: String,
    password: String,
    purchasedCourses: [{
        // mongodb lets you create complex relationships
        // array list of courses
        // storing id of one document into another document
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course'
    }]
});

const CourseSchema = new mongoose.Schema({
    title: String,
    decription: String,
    imageLink: String,
    price: Number
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}