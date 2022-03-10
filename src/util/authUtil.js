import { renewToken } from "Modules/units/Auth";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();
export const authHeader = () => {
  // return authorization header with jwt token
  const user = JSON.parse(localStorage.getItem("user"));
  const token = JSON.parse(localStorage.getItem("jwt-token"));

  if (user && token) {
    return {
      Authorization: `JWT ${token}`,
      Token: token
    };
  }
  return {};
};

export function checkToken() {
  const user = JSON.parse(localStorage.getItem("user"));
  const token = JSON.parse(localStorage.getItem("jwt-token"));
  if (user && token) {
    const iat = new Date(user.iat * 1000);
    const exp = new Date(user.exp * 1000);
    const time = new Date();
    iat.setMinutes(iat.getMinutes() + 30);
    if (time > iat && time < exp) {
      renewToken(history);
    } else if (new Date() > exp) {
      // remove user from local storage to logout user
      localStorage.clear();
      history.push("/login");
      window.location.reload();
    }
  }
  else {
    localStorage.clear();
      history.push("/login");
      window.location.reload();
  }
}
