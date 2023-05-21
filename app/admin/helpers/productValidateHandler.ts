import { IProduct } from "@/types/product";

export const productValidateHandler = (values: IProduct) => {
  const errors: Record<string, string> = {};
  if (!values.title) {
    errors.title = "Please enter title";
  }
  if (!values.imageUrl) {
    errors.imageUrl = "Please enter image url";
  }
  if (!values.category) {
    errors.category = "Please select category";
  }
  if (values.sizes.length === 0) {
    errors.sizes = "Please select sizes";
  }
  if (values.price <= 0) {
    errors.price = "Please enter price";
  }
  if (values.rating <= 0) {
    errors.rating = "Please enter rating";
  }
  if (!values.info) {
    errors.info = "Please enter product info";
  }

  return errors;
};
