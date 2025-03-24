import mongoose, { mongo } from "mongoose";

async function connectToDatabase() {
    // mongoose.connect("mongodb+srv://luanwebuser:pSYuUv4Ujt8CgZUE@cluster0.ttljm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
    mongoose.connect(process.env.DB_CONNECTION_STRING);
    
    return mongoose.connection;
};

export default connectToDatabase;