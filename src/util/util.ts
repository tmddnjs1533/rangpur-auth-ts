import { domain } from "./url";
import Cookies from "js-cookie";

export const getToken = () => {
  const hfac = Cookies.get("hfac", { domain });
  if (!!hfac) return hfac;
  return window.history.back();
};
