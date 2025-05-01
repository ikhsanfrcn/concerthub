import { ToastContainer } from "react-toastify";

export const Toastify: React.FC = () => {
  return (
    <ToastContainer
      theme="colored"
      position="top-right"
      autoClose={3000}
      hideProgressBar
      newestOnTop
      closeOnClick
      pauseOnHover
    />
  );
};
