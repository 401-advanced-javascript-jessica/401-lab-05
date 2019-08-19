'use strict';

const mongoose = require('mongoose');

// Require your model
const Categories = require('./models-singular/categories');

// Mongoose Server URI
const MONGOOSE_URI = 'mongodb://localhost/class05';

// Connect
mongoose.connect(MONGOOSE_URI, { useNewUrlParser: true });

// Do some work
const categories = new Categories();

const doDataStuff = async () => {
    const sampleCategory = {
        name: 'Shirts',
        description: 'Things you wear on top'
    };

    let newCategory = await categories.create(sampleCategory);
    //console.log('Category Created', newCategory);

    let oneCategory = await categories.get('5d5a1c39fe3d6c8e8042f265');
   // console.log('One Category', oneCategory);

    // Disconnect
    mongoose.disconnect();

};

doDataStuff();


