/**
|--------------------------------------------------
| IMPORTS
|--------------------------------------------------
*/

import { postFunc, getFunc } from "Services/mainApiServices";
import Base64 from "Util/base64";
import { NotificationManager } from "react-notifications";

/**
|--------------------------------------------------
| TYPES
|--------------------------------------------------
*/

const LOGIN_REQ = "auth/LOGIN_REQ";
const LOGIN_SCS = "auth/LOGIN_SCS";
const LOGIN_FLR = "auth/LOGIN_FLR";

const LOGOUT_USER = "auth/LOGOUT_USER";

/**
|--------------------------------------------------
| ACTIONS
|--------------------------------------------------
*/

export const login = (body, navigate) => async dispatch => {
  dispatch({ type: LOGIN_REQ });
  const response = await postFunc("admins/login", body);

  if (response.status.errorCode === 200) {
    let decode = Base64.decode(response.access_token.trim().split(".")[1]);
    // eslint-disable-next-line no-control-regex
    decode = JSON.parse(decode.replace(/[^\x01-\x7F]/g, ""));
    if (decode && response.access_token) {
      localStorage.setItem("user", JSON.stringify(decode));
      localStorage.setItem("data", JSON.stringify(response.data));
      localStorage.setItem("jwt-token", JSON.stringify(response.access_token));
      dispatch({ type: LOGIN_SCS, payload: { user: decode, data: response } });
      navigate("/start");
    }
  } else {
    NotificationManager.error(response.status.description);
    dispatch({ type: LOGIN_FLR });
    
  }
};

export const renewToken = async history => {
  const response = await getFunc("renew");

  if (response.status.errorCode === 200) {
    let decode = Base64.decode(response.access_token.trim().split(".")[1]);
    // eslint-disable-next-line no-control-regex
    decode = JSON.parse(decode.replace(/[^\x01-\x7F]/g, ""));
    if (decode && response.access_token) {
      localStorage.setItem("user", JSON.stringify(decode));
      localStorage.setItem("data", JSON.stringify(response.data));
      localStorage.setItem("jwt-token", JSON.stringify(response.access_token));
      history.push("admin");
    }
  }
};

export const logOut = navigate => dispatch => {
  dispatch({ type: LOGOUT_USER });
  localStorage.clear();
  navigate("/login");
};

/**
|--------------------------------------------------
| REDUCERS
|--------------------------------------------------
*/

const INIT_STATE = {
  user: JSON.parse(localStorage.getItem("user")),
  data: JSON.parse(localStorage.getItem("data")),
  meni: JSON.parse(localStorage.getItem("meni")),
  loading: false
};

export default function reducer(state = INIT_STATE, action = {}) {
  switch (action.type) {
    case LOGIN_REQ:
      return {
        ...state,
        items: {},
        loadnig: true
      };
    case LOGIN_SCS:
      return {
        ...state,
        user: action.payload.user,
        data: action.payload.data.data,
        meni: action.payload.user.meni,
        loading: false
      };
    case LOGIN_FLR:
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
}
