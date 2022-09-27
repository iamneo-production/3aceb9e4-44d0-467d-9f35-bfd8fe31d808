import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema({
    empId: {
        type: String,
        required: true,
    },
    mobileNumber: {
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
    },
    password: {
        type: String,
        required: true,
   },
   department: {
    type: String,
    required: true,
},
role: {
    type: String,
    required: true,
}
});

const Employee = mongoose.model('employee', employeeSchema);

export default Employee;