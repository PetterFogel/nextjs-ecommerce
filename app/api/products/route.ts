import Product from "@/models/product";
import { connectToDB } from "@/utils/database";
import { NextResponse } from "next/server";

export const GET = async (_: Request) => {
  try {
    await connectToDB();

    const products = await Product.find({});

    return new NextResponse(JSON.stringify(products), { status: 200 });
  } catch (error) {
    return new NextResponse("Failed to fetch all products", { status: 500 });
  }
};
