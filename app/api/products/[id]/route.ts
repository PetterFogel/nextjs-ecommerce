import { connectToDB } from "@/lib/database";
import Product from "@/models/product";
import { IProduct } from "@/types/product";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (
  _: NextRequest,
  { params }: { params: { id: string } }
) => {
  try {
    await connectToDB();

    const product = await Product.findById(params.id);
    if (!product) return new NextResponse("Product Not Found", { status: 404 });

    return new NextResponse(JSON.stringify(product), { status: 200 });
  } catch (error) {
    if (error instanceof Error) {
      return new NextResponse(error.message, { status: 500 });
    }
  }
};

export const PUT = async (
  req: NextRequest,
  { params }: { params: { id: string } }
) => {
  try {
    await connectToDB();

    const values: IProduct = await req.json();
    const updatedProduct = await Product.findByIdAndUpdate(params.id, values, {
      new: true
    });

    await updatedProduct.save();
    return new NextResponse("Successfully updated the Product!", {
      status: 200
    });
  } catch (error) {
    return new NextResponse("Failed to update product", { status: 400 });
  }
};

export const DELETE = async (
  _: NextResponse,
  { params }: { params: { id: string } }
) => {
  try {
    await connectToDB();

    await Product.findByIdAndRemove(params.id);
    return new Response("Product deleted successfully", { status: 200 });
  } catch (error) {
    return new Response("Failed to remove product", { status: 500 });
  }
};
