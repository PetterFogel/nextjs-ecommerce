import { fetchData } from "@/utils/fetchData";
import { AdminProductsList } from "./AdminProductsList";

const AdminPage = async () => {
  const products = await fetchData("products");

  return <AdminProductsList products={products} />;
};

export default AdminPage;
