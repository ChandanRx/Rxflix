import mongoose from "mongoose";

const contact = new mongoose.Schema({
    username : {
       type : String,
       required : true
    },
    email : {
        type : String,
        required : true
     },
     phone : {
        type : String,
        required : true
     },
     message : {
        type : String,
        required : true
     },
},{
    timestamps: true
})

const Contact = mongoose.models.Contact || mongoose.model('Contact' , contactSchema)

export default contact;