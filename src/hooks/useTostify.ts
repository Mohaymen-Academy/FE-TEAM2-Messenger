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
        "bg-green-100 text-green-900 font-vazir rounded-2xl shadow-2xl shadow-black w-11/12 max-w-[240px]",
    };

    toast.success(message, successOptions);
  };

  const error = (message: string, options = {}) => {
    const errorOptions = {
      ...defaultOptions,
      ...options,
      className:
        "bg-red-100 text-red-900 rounded-2xl shadow-2xl shadow-black w-11/12 max-w-[240px]",
    };

    toast.error(message, errorOptions);
  };

  const warning = (message: string, options = {}) => {
    const warningOptions = {
      ...defaultOptions,
      ...options,
      className:
        "bg-yellow-100 text-yellow-900 rounded-2xl shadow-2xl shadow-black w-11/12 max-w-[240px]",
    };

    toast.warning(message, warningOptions);
  };

  const info = (message: string, options = {}) => {
    const infoOptions = {
      ...defaultOptions,
      ...options,
      className:
        "bg-blue-100 text-blue-900 rounded-2xl shadow-2xl shadow-black w-11/12 max-w-[240px]",
    };
    toast.info(message, infoOptions);
  };

  return {
    success,
    error,
    warning,
    info,
  };
};

export default useToastify;
