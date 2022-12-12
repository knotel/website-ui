import { toast } from "react-toastify";

export const showToast = (errors, multiple) => {
  if (multiple !== true) multiple = false;

  if (Array.isArray(errors)) errors = errorMessage(errors, multiple);

  toast(errors, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: false,
  });
};

export const errorMessage = (errors, multiple) => {
  if (errors.length) {
    if (multiple === true) {
      let temp = [];
      errors.map((error, e) => {
        temp.push(error[e]);
        return true;
      });
      return temp.join("\n\n");
    }
    return errors[0];
  }
  return "";
};
