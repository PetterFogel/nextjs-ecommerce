import { FC } from "react";
import { ToastContainer } from "react-toastify";

export const NotificationAlert: FC = () => (
  <ToastContainer
    position="top-center"
    autoClose={5000}
    hideProgressBar
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
  />
);
