import { connectToDB } from "@/lib/database";
import Product from "@/models/product";
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
