'use strict';

const mongoose = require('mongoose');

// What fields and constraints do we want?
const categorySchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    }
});

// Do we need to run any lifecycle hooks/middleware?
// categorySchema.post('findOne', function(document){
//     console.log('--AFTER find one--');
//     // console.log({document});
//     // console.log({this});
// });
//
// categorySchema.post('init', function(doc){
//     console.log('--AFTER init--');
//     // console.log({this});
// });
//
// categorySchema.post('save', function(doc){
//     console.log('--AFTER save--');
//     // console.log({this});
// });


module.exports = mongoose.model('categories', categorySchema);
