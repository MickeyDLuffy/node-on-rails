const mongoose = require('mongoose');
const url = 'mongodb+srv://dluffy:user123@cluster0.3v9md.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
mongoose.connect(url, {useCreateIndex: true, useUnifiedTopology: true})
 .then(() => console.log('Connected succesfully'))
 .catch(err => console.log(err));

 // create schema

 const nameSchema = new mongoose.Schema({
     coursenam: String
 });

 //create a model to map with above schema

 const studenModel = mongoose.model('students', nameSchema);

  const createRecord = async (newCourse) => {
     const newData = new studenModel({
       coursenam:newCourse
     });

     const result = await newData.save();
     console.log(result)
 };

 // get all courses
 const getAllCourses = async ()=> {
    const courseList = await studenModel.find();
    console.log(courseList);
 }

 const getCourseById = async (courseId) => {
    const courseList = await studenModel.findById();
    console.log(courseList);
 }