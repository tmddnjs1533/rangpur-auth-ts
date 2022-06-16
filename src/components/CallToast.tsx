import { toast } from "react-toastify";
import CustomToast, { errorConfig, successConfig } from "./CustomToastBody";

export const CallErrorToast = (text) =>
  toast(<CustomToast variant="error" text={text} />, errorConfig);
export const CallSuccessToast = (text) =>
  toast(<CustomToast variant="success" text={text} />, successConfig);
