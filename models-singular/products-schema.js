'use strict';

const mongoose = require('mongoose');

// What fields and constraints do we want?
const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
  quantity: {
    type: Number,
    required: true,
  },
  sku: {
    type: String,
    required: true,
  },
  size: {
    type: String,
    required: true,
  },
});

// // Do we need to run any lifecycle hooks/middleware?
// productSchema.post('findOne', function(document){
//     console.log('--AFTER Product find one--');
//     // console.log({document});
//     // console.log({this});
// });
//
// productSchema.post('init', function(doc){
//     console.log('--AFTER Product init--');
//     // console.log({this});
// });
//
// productSchema.post('save', function(doc){
//     console.log('--AFTER Product save--');
//     // console.log({this});
// });


module.exports = mongoose.model('products', productSchema);
