import register from "./register";
import confirmation from "./confirmation";
import signIn from "./authenticate";
import signOut from "./signOut";
import getSession from "./getSession";
import forgotPassword from "./forgotPassword";
import changePassword from "./changePassword";
import completeNewPassword from "./completeNewPassword";
import * as config from "./config";
import refreshToken from "./refreshToken";

export {
  register,
  refreshToken,
  confirmation,
  signIn,
  signOut,
  getSession,
  forgotPassword,
  changePassword,
  completeNewPassword,
  config,
};
