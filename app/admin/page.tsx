import { IProduct } from "@/types/product";
import { fetchData } from "@/utils/fetchData";

const AdminPage = async () => {
  const products = await fetchData("products");

  return (
    <main>
      <h2>Admin</h2>
      <div>
        {products.map((p: IProduct) => (
          <div key={p._id}>
            <div>{p.title}</div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default AdminPage;
