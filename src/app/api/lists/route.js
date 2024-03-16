import mongoose from "mongoose";
import { connectToDB  } from "../../../../utils/db";

import UniDetailsModel from "../../../../models/uniDetails";

import { NextResponse } from "next/server";
export async function GET(req) {
  try {
    await connectToDB();
    const unis = await UniDetailsModel.find();
    return new NextResponse(JSON.stringify(unis), {
      status: 200,
    });
  } catch (error) {
    return new NextResponse("Failed to connect to database", {
      status: 500,
    });
  }
}
async function testUniDetailsModel() {
  try {
    // Insert a sample document
    const result = await UniDetailsModel.create({
      id: 1,
      Name: 'Sample University',
      href: 'https://example.com',
      src: 'https://example.com/image.jpg',
      Degree: 'Bachelor of Science',
      Campus: 'Main Campus',
      fees: {
        Tuition: '10000',
        Hostel: '5000',
        Transport: '2000',
        Food: '3000'
      }
    });
    //console.log('Sample document inserted:', result);

    // Query for the inserted document
    const documents = await UniDetailsModel.find({ id: 1 });
    //console.log('Documents found:', documents);
  } catch (error) {
    console.error('Error testing UniDetailsModel:', error);
  }
}

testUniDetailsModel();