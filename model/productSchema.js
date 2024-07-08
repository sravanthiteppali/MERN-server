const mongoose = require('mongoose');

const productSchema = mongoose.Scgema({
    imageURL:{type:String,required:true},
    Price:{type:Number,required:true},
   name:{type:String,required:true},
   description:{type:String,required:true}
})
module.exports = mongoose.model('Product',productSchema);