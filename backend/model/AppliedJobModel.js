import mongoose from "mongoose";

const appliedSchema = new mongoose.Schema({
    googleId: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    givenName: {
        type: String,
        required: true,
    },
    familyName: {
        type: String,
        required: true
    }
});

const Applied = mongoose.model('applied', appliedSchema);

export default Applied;