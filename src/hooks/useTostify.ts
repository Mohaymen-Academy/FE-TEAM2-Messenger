import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const useToastify = () => {
  const defaultOptions = {
    position: toast.POSITION.TOP_RIGHT,
    autoClose: 1500,
    closeButton: false,
  };

  const success = (message: string, options = {}) => {
    const successOptions = {
      ...defaultOptions,
      ...options,
      className:
        "bg-green-100 text-green-900 font-vazir  rounded-2xl shadow-2xl shadow-black",
    };

    toast.success(message, successOptions);
  };

  const error = (message: string, options = {}) => {
    const errorOptions = {
      ...defaultOptions,
      ...options,
      className: "bg-red-100 text-red-900 rounded-2xl shadow-2xl shadow-black",
    };

    toast.error(message, errorOptions);
  };

  const warning = (message: string, options = {}) => {
    const errorOptions = {
      ...defaultOptions,
      ...options,
      className:
        "bg-yellow-100 text-yellow-900 rounded-2xl shadow-2xl shadow-black",
    };

    toast.warning(message, errorOptions);
  };

  return {
    success,
    error,
    warning,
  };
};

export default useToastify;
