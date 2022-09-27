import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
    jobTitle: {
        type: String,
        required: true,
    },
    jobLocation: {
        type: String,
        required: true,
    },   
    
    salary: {
        type: String,
        required: true,
    },
    jobDesc: {
        type: String,
        required: true
    }
});

const Job = mongoose.model('job', jobSchema);

export default Job;