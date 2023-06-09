const mongoose = require('mongoose');
const { Schema } = mongoose;

const studentSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    // fatherName: {
    //     type: String,
    //     required: true
    // },
    email: {
        type: String,
        unique: true,
        required: true
    },
    // mobileNo:{
    //     type:Number,
    //     required:true
    // }, 
    // whatsappNo:{
    //     type:Number,
    //     required:true
    // }, 
    // studingIn:{
    //     type:String,
    //     required:true
    // },
    // school:{
    //     type:String,
    //     required:true
    // },
    // Address:{
    //     state:{
    //         type:String,
    //         required:true
    //     },
    //     city:{
    //         type:String,
    //         required:true
    //     },
    //     houseNo:{
    //         type:String,
    //         required:true
    //     },
    // },
    // DOB: {
    //     type: Date,
    //     required: true
    // },
    timestamp: {
        type: Date,
        default: Date.now
    }
});

// module.exports = mongoose.model('User',UserSchema);
module.exports = mongoose.models.Student || mongoose.model('Student', studentSchema)