import { Schema, model, models } from "mongoose";

// Define schema for uniDetails
const UniDetailsSchema = new Schema({
    // Define fields for uniDetails schema
    // For example:
    id: {
        type: Number,
        required: true
    },
    Name: {
        type: String,
        required: true
    },
    href: {
        type: String,
        required: true
    },
    src: {
        type: String,
        required: true
    },
    Degree:   {
        type: String,
        required: true
    },
    Campus: {
        type: String,
        required: true
    },
    fees: {
        Tuition: {
            type: String,
            required: true
        },
        Hostel: {
            type: String,
            required: true
        },
        Transport: {
            type: String,
            required: true
        },
        Food: {
            type: String,
            required: true
        }
    }
    // Add more fields as needed
});

// Check if the UniDetails model already exists
const UniDetailsModel = models.UniDetails || model('UniDetails', UniDetailsSchema);

export default UniDetailsModel;
