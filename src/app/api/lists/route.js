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