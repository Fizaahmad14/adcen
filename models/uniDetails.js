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
    },
    information: {
        "Historical Perspective": {
        type: String,
        required: false
        },
        "Established/Charter": {
            type: String,
            required: false
        },
        "University Charter": {
            type: String,
            required: false
        },
        "Vision": {
            type: String,
            required: false
        },
        "Mission Statement": {
            type: String,
            required: false
        },
        "Research and Discovery": {
            type: String,
            required: false
        },
        "Teaching and Learning": {
            type: String,
            required: false
        },
        "Outreach and Public Service": {
            type: String,
            required: false
        },
        "International Linkages": {
            type: String,
            required: false
        },
        "Why this University": {
            type: String,
            required: false
        }
    }
    // Add more fields as needed
});

// Check if the UniDetails model already exists
const UniDetailsModel = models.UniDetails || model('UniDetails', UniDetailsSchema);

export default UniDetailsModel;
