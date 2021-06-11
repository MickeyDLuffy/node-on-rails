
const express = require('express');
const app = express();

const mongoose = require('mongoose');

// establishing database conection
const mongoUrl = 'mongodb+srv://dluffy:user123@cluster0.3v9md.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
mongoose.connect(mongoUrl)
.then(() => console.log('Connected to mongo atlass succesfuly'))
.catch(err => console.log(err));


const courseSchema = new mongoose.Schema({
    coursename: String
});

const courseModel = mongoose.model('course', courseSchema);

app.get('/api/v1/courses', async (req, res) => {
   const courses = await courseModel.find();

   res.send(courses);
});

app.get('/api/v1/courses/:id', async (req, res) => {
    courseModel.findById({_id: req.params.id}, (err, result) => {
        if(err) throw err
        res.send(result);
    })
})

app.put('/api/v1/courses', (req, res) => {
   const courseToUpdate = courseModel.findById({_id: req.params.id}, (err, result) => {
       if(err) throw err;
       document.coursename = req.body.coursename;
       document.save((err, result) => {
           if(err) throw err;
           res.status(201)
           .send(result);
       })
   })
});
app.post('/api/v1/courses', (req, res) =>{
    const courseData = new courseModel({
          coursename: req.body.coursename
    });

    courseData.save((err, result) => {
        if(err) throw err;

        res.status(201)
        .send(result);
    })
});

app.delete('/api/v1/courses/:id', (req, res) => {
    courseModel.findByIdAndDelete({_id: req.params.id}, (err, document) => {
        if (err) throw err;

        courseModel.deleteOne({_id: req.params.id}, (err, courseId) => {
            res.status(201).send({message: 'Deleted well. U can delete via this method too'})
        })
        res.status(201)
         .send({message: 'Succesffuly deleted'})
    })
})









const port = process.env.PORT || 5000;
app.listen(port, () => console.log('Server is listening on port ${port}'))