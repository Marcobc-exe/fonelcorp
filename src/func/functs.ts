import { email } from "../const/const";

export const handleCopyEmail = async () => {
  try {
    await navigator.clipboard.writeText(email);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};
