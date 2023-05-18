import Product from "@/models/product";
import { connectToDB } from "@/lib/database";
import { NextRequest, NextResponse } from "next/server";
import { IProduct } from "@/types/product";

export const GET = async (_: NextRequest) => {
  try {
    await connectToDB();

    const products = await Product.find({});

    return new NextResponse(JSON.stringify(products), { status: 200 });
  } catch (error) {
    return new NextResponse("Failed to fetch all products", { status: 500 });
  }
};

export const POST = async (req: NextRequest) => {
  const values = await req.json();
  try {
    await connectToDB();
    const newpProduct = new Product(values as IProduct);

    await newpProduct.save();
    return new NextResponse("Product was created successfully!", {
      status: 201
    });
  } catch (error) {
    if (error instanceof Error) {
      return new NextResponse(error.message, { status: 400 });
    }
  }
};
