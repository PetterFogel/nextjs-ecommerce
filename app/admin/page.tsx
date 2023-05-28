"use client";
import { AdminProductsList } from "./AdminProductsList";
import { NotificationAlert } from "@/common/components/notification-alert/NotificationAlert";
import { useFetchProductsQuery } from "@/redux/api/productsApi";
import "react-toastify/dist/ReactToastify.css";

const AdminPage = async () => {
  const { data: products } = useFetchProductsQuery();
  if (!products) return;
  return (
    <>
      <NotificationAlert />
      <AdminProductsList products={products} />
    </>
  );
};

export default AdminPage;
