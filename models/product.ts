import { IProduct } from "@/types/product";
import { Schema, model, models } from "mongoose";

export const ProductSchema = new Schema<IProduct>({
  title: {
    type: String,
    required: [true, "Title is required."]
  },
  imageUrl: {
    type: String,
    required: [true, "image url is required."]
  },
  category: {
    type: String,
    required: [true, "Category is required."]
  },
  info: {
    type: String,
    required: [true, "Information is required."]
  },
  sizes: {
    type: [String],
    required: [true, "At least one size is required."]
  },
  price: {
    type: Number,
    required: [true, "Price is required."]
  }
});

const Product = models.Product || model("Product", ProductSchema);

export default Product;
