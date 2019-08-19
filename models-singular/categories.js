'use strict';

// Where is our schema defined?
// How do we get it in here so we can run methods on it?
const mongooseModel = require('./categories-schema');

class Categories {

  constructor() {}

  get(_id) {
    // Call the appropriate mongoose method to get
      if(_id) {
          // If 1, return it as a plain object
        return mongooseModel.findOne({_id});
      } else {
          // If 2, return it as an object like this:
          return  mongooseModel.find({})
          .then((foundItems)=>{
              // { count: ##, results: [{}, {}] }
             return { count: foundItems.length, results: foundItems}
          })
      }
  }

  create(record) {
    // Call the appropriate mongoose method to create a new record
    const newRecord = new mongooseModel(record);
    //returns a promise that resolves into a new player
     return newRecord.save();

  }

  update(_id, record) {
    // Call the appropriate mongoose method to update a record
    return mongooseModel.findByIdAndUpdate(_id, record, {new: true});
  }

  delete(_id) {
    // Call the appropriate mongoose method to delete a record
    return mongooseModel.findByIdAndDelete(_id);
  }

}

module.exports = Categories;
