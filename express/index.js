// const express = require('express');

// const joi = require('joi');

// const app = express();

// app.use(express.json());
// app.use(express.static('public')) // middleware for serving static files
// const courses = [
//     {id: 1, name: 'Angular'},
//     {id: 2, name: 'React'},
//     {id: 3, name: 'Node'},
//     {id: 4, name: 'Knockout'},
//     {id: 5, name: 'Express'}
// ];


// const requireJsonContent = () => {
//     return (req, res, next) => {
//         console.log(req.headers)
//         if( req.headers['content-type'] !== 'application/json') {
//             return res.status(400).send({message: 'Request must have content-type application/json'});
//         } 

//      next();
//     }
// }

// app.use(requireJsonContent());



// app.get('/api/courses', (req, res) => {
//      res.send(courses);
// });

// app.get('/api/courses/:id', (req, res) => {
//    const id = parseInt(req.params.id);

//   const userCourse = courses.find(course => course.id === id);

//   if(!userCourse)  return res.status(404).send({message: 'Course does not exist'});

//   res.send(userCourse);
// });

// app.put('/api/courses/:id', (req, res) => {
    
//     const {eror} = validationCourse(req.body);
//     const {courseId} = validationCourseId(req.body);

//     if(courseId) return res.status(400).send({message: error.details[0].message})
//     if(eror) return res.status(400).send({message: error.details[0].message});

//     const findCOurse = courses.find(course => course.id ===parseInt(req.params.id));

//     if(!findCOurse) return res.status(404).send({message: 'Course does not exist'})

//     findCOurse.name = req.body.name;
//     return res.send(findCOurse).send({message: 'Succesfully updated'})
// });

// app.delete('/api/courses/:id', (req, res) => {
//     const id = parseInt(req.params.id);

//     if(!id) res.status(400).send({message: 'Please specify id of item to delete'});

//     const itemToDelete = courses.find(course => course.id === id);

//     if(!itemToDelete) res.status(404).send({message: 'Course not found'});

//     courses.splice(courses.indexOf(itemToDelete), 1);

//     res.status(201).send(courses)
// })


// app.post('/api/courses',  (req, res) => {
//     const {error} = validationCourse(req.body);

//     if(error) return res.status(404).send({message: error.details[0].message})

//     const newCourse = {
//         id: courses.length + 1,
//         name: req.body.name
//     };

//     courses.push(newCourse);
//     res.send(newCourse);
// });

// const validationCourse = (newCourse) => {
//    return joi.object({
//       name: joi.string().min(5).max(30).required()
//    }).validate(newCourse);
// }

// const validationCourseId= (newCourse) => {
//     return joi.object({
//        name: joi.string().min(5).max(30).required(),
//        id: joi.string().required()
//     }).validate(newCourse);
//  }
// // app.get('/', (req, res) => {
// //      res.send('Sending a response to')
// // });

// app.get('/user', (req, res) => {
//     res.json([{name: 'Dluffy', age: 10}]);
// })

// app.get('/users/:id', (req, res) => {
//     const param = req.params.id;
//     res.send(param);
// });

// app.get('/users/:name/password/:passwrd', (req, res) => {
//     res.send(req.params);
// });

// app.get('/users/dluffy', (req, res) => {
//     console.log(req.query);
//     res.send(req.query);
// });

// const port = process.env.PORT || 3000;
// app.listen(port, () => console.log('Listening on port 3000'));


const express = require('express');
const app = express();

const mongoose = require('mongoose');

// establishing database conection
const mongoUrl = 'mongodb+srv://dluffy:user123@cluster0.3v9md.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
mongoose.connect(mongoUrl, {useNewUrlParser: true, useUnifiedTopology: true})
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
app.listen(port, () => console.log(`Server is listening on port ${port}`))