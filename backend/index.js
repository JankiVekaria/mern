const express = require('express'),
  bodyParser = require('body-parser'),
  PORT = 8080,
  app = express(),
  // propertyData = require('./data/data'),
  // propertyDetailsArr = require('./data/propItemData'),
  cors = require('cors'),
  mongoose = require('mongoose'),
  PropertyModel = require('./models/propertySchema');

mongoose.connect('mongodb://localhost:27017/mern', { useNewUrlParser: true , useUnifiedTopology: true });
let db = mongoose.connection;
db.on("error", console.error.bind(console, 'connection error:'));

db.once('open', () => {
  console.log('We are connected');
});

app.use('/public', express.static('public'))

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())

// app.get('/properties', (req, res) => {
//   res.json(propertyData)
//   PropertyModel.find()
//     .then((result) => {
//       res.json(result)
//     }).catch((err) => {
//       console.log(err)
//     });
// })


app.get('/properties', (req, res) => {
  PropertyModel.find().limit(15)
    .then((allProperties) =>  {
      res.json(allProperties)
    }).catch((err) => {
      console.log(err);
    });
})


app.get('/properties/affordable', (req, res) => {
  PropertyModel.find().limit(20).sort({ 'price': 1 })
    .then((allProperties) => {
      res.json(allProperties)
    }).catch((err) => {
      console.log(err);
    });
})
//Find a specific property
// app.get('/properties/:id', (req, res) => {
//   const propId = req.params.id;
//   const foundProp = propertyDetailsArr.module.find(item => item._id == propId);
//   res.json(foundProp)

//   PropertyModel.findById(propId)
//     .then((foundProperty) => {
//       res.json(foundProperty)
//     }).catch((err) => {
//       console.log(err)
//     });

// })

app.get('/properties/:id', (req, res) => {
  const propId = req.params.id;

  PropertyModel.findById(propId)
    .then(oneProperty => {
      res.json(oneProperty)
    })
})


//Post a new property
// app.post('/properties', (req, res) => {
//   const newUpload = JSON.stringify(req.body);
//   console.log(newUpload);

//   PropertyModel.create(req.body)
//     .then((newProperty) => {
//       res.send(newProperty)
//     }).catch((err) => {
//       console.log(err)
//     });

// })
app.post('/properties', (req, res) => {

  const newUpload = req.body;
  console.log(newUpload);

  PropertyModel.create(newUpload)
    .then((newProperty) => {
      res.send(newProperty)
    }).catch((err) => {
      console.log(err)
    });
})

app.post('/search', (req, res) => {
  const query = req.body;
  const city = query.city;
  const min = query.min || 0;
  const max = query.max || 10000;
  const bedrooms = query.bedrooms;

  console.log(query);


  PropertyModel.find({
    city: { $regex: '.*' + city + '.*' },
    price: { $gt: min - 1, $lt: max + 1 },
    bedrooms: bedrooms ? bedrooms : { $gt: Number(bedrooms) - 1 }
  })
    .then(foundProperties => {
      res.json(foundProperties)
    })
})


app.get('/average', (req, res) => {

  PropertyModel.aggregate([
    { $match: {} },
    { $group: { _id: "$city", total: { $sum: "$price" }, count: { $sum: 1 } } }
  ]).sort({ _id: 1 })
    .then(data => {
      res.json(data)
    })
})

app.listen(PORT, () => {
  console.log('server is running at port ' + PORT)
})