const mongoose = require('mongoose');

const Employee = mongoose.model('Employee', {
  name: {type:String},
  position:{type: String},
  office: {type: String},
  salary: {type: Number}
});

module.exports = {
  Employee:Employee
};

// const kitty = new Cat({ name: 'Zildjian' });
// kitty.save().then(() => console.log('meow'));