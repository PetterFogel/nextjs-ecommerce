import { IProduct } from "@/types/product";
import { fetchData } from "@/lib/fetchData";

const Products = async () => {
  const products = await fetchData("products");

  return (
    <main>
      <h2>Products</h2>
      {products.map((p: IProduct) => (
        <div key={p._id}>
          <p>{p.title}</p>
        </div>
      ))}
    </main>
  );
};

export default Products;
