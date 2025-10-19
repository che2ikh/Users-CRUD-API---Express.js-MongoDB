const mongoose = require('mongoose'); 

const userSchema = new mongoose.Schema({ 


name: { type : String, required : true }, 

email: { type: String, unique: true, required: true }, 

password: { type: String, required: true }, 

}); 

const productSchema= new mongoose.Schema({
    qrcode:{type :String, required: true,unique:true},
    name:{type: String,required:true},
    price:{ type:Number,required:true}

});
 const User=mongoose.model('User', userSchema);
 const Product= mongoose.model('Product', userSchema);

module.exports ={User,Product};