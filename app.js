
const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();
const mongoose = require('mongoose');
const bodyparser=require("body-parser")
mongoose.connect('mongodb://localhost/contactdance');
const port = 90;

//schema
const contactSchema = new mongoose.Schema({
    name: String,
    phone: String,
    age: String,
    bodyweight: String
  });

  const ReviewrSchema = new mongoose.Schema({
    name: String,
    phone: String,
    age: String,
    decription: String
  });

const contact = mongoose.model('contact', contactSchema);

const Review = mongoose.model('Review', contactSchema);


// EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static')) // For serving static files
app.use(express.urlencoded())

// PUG SPECIFIC STUFF
app.set('view engine', 'pug') // Set the template engine as pug
app.set('views', path.join(__dirname, 'views')) // Set the views directory
 
// ENDPOINTS
app.get('/', (req, res)=>{
    const params = { }
    res.status(200).render('home.pug',params);
})

app.get('/contact', (req, res)=>{
    const params = { }
    res.status(200).render('contact.pug' ,params);
 })

app.post('/contact', (req, res)=>{
    var mydata= new contact(req.body);
    mydata.save().then(()=>{
        res.send("..........thank you this item saved")
    }).catch(()=>{
        res.status(400).send("this item not saved")
    })
});


app.post('/Review', (req, res)=>{
    var mydata= new Review(req.body);
    mydata.save().then(()=>{
        res.send("..........thank you this item saved")
    }).catch(()=>{
        res.status(400).send("this item not saved")
    })
});




app.get('/about', (req, res)=>{
    const params = { }
    res.status(200).render('about.pug',params);
})


app.get('/home', (req, res)=>{
    const params = { }
    res.status(200).render('home.pug',params);
})


app.get('/blogs', (req, res)=>{
    const params = { }
    res.status(200).render('blogs.pug',params);
})

app.get('/features', (req, res)=>{
    const params = { }
    res.status(200).render('features.pug',params);
})
app.get('/trainers', (req, res)=>{
    const params = { }
    res.status(200).render('trainers.pug',params);
})

app.get('/pricing', (req, res)=>{
    const params = { }
    res.status(200).render('pricing.pug',params);
})
app.get('/REview', (req, res)=>{
    const params = { }
    res.status(200).render('Review.pug',params);
})
// START THE SERVER
app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});