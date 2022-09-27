import mongoose from "mongoose";

const loginSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    empId: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    }
});

const Login = mongoose.model('login', LoginSchema);

export default Login;