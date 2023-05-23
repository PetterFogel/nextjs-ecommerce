"use client";

import { useFetchProductsQuery } from "@/redux/api/productsApi";
import { AdminProductsList } from "./AdminProductsList";

const AdminPage = async () => {
  const { data: products } = useFetchProductsQuery();
  if (!products) return;
  return <AdminProductsList products={products} />;
};

export default AdminPage;
