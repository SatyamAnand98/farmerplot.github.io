var mongoose = require('mongoose');

const itemSchema = mongoose.Schema({
    _id:{
        type: String,
        required: true
    },
    Name:{
        type:String,
        required: true
    },
    Email:{
        type: String,
        required: true
    },
    Location:{
        type:String,
        required: true
    },
    Phone:{
        type:Number,
        required: true
    },
    Password:{
        type:String,
        required: true
    }
});

itemSchema.set('collection', 'customerLogin');

const Item = module.exports = mongoose.model('customerLogin', itemSchema);
