const mongoose = require('mongoose');
const express = require('express');
const app = express();
const bodyParser = require('body-parser'); // Import body-parser
const PORT = process.env.PORT || 3001;

app.use(bodyParser.json()); // Use body-parser to parse JSON


console.log("test ---")

app.get('/', (req, res) => {

  console.log("console print")
  res.send('hello / api test ')
})


app.get('/a/', (req, res) => {
  console.log("console print")
  res.send('/a/ - test')
})




// GET API WITH REQUEST PARAMS
//http://localhost:3000/requestparam?param1=sasd
app.get('/requestparam', (req, res) => {
  var a = 'abc' + req.query.param1 + ' and ' + req.query.param2;
  console.log(a);
  console.log('req.query.param1 ', req.query.param1);
  res.send(a)
})


// POST method route
app.post('/postTest', (req, res) => {
  console.log("post method test")
  // console.log(req)
  console.log(req.body)
  console.log(req.body.email)
  res.send('POST request to the homepage')
})



let db =   mongoose.connect('mongodb://localhost/testDb').then(() => console.log("MongoDB connected finally")).catch(err => console.log(err));




// Define a Schema and Model
const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number
});

const User = mongoose.model('User', UserSchema);

// Sample API Route to Create a User
app.post('/users', async (req, res) => {

  console.log("add user api called ");
  const { name, email, age } = req.body;

  try {
      const newUser = new User({ name, email, age });
      console.log("add user function");
      await newUser.save();
      res.status(201).json(newUser);
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
});



//alternate -- app.listen(3000)
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});




 



