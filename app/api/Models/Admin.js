const mongoose = require('mongoose');
const { Schema } = mongoose;

const adminSchema = new Schema({
    email: {
        type: String,
        unique: true,
        required: true
    },
    password:{
        type:String,
        required:true
    },
    timestamp: {
        type: Date,
        default: Date.now
    }
});

// module.exports = mongoose.model('User',UserSchema);
module.exports = mongoose.models.Admin || mongoose.model('Admin', adminSchema)