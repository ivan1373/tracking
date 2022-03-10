import axios from "axios";
import { authHeader, checkToken } from "Util/authUtil";
import { NotificationManager } from "react-notifications";

const API = 'http://0.0.0.0:5010';

export const getFunc = async url => {
  return axios
    .get(`${API}/${url}`, {
      headers: {
        ...authHeader()
      }
    })
    .then(response => {
      checkToken();
      return response.data;
    })
    .catch(error => {
      checkToken();
      return NotificationManager.error(error.message);
    });
};

export const postFunc = async (url, body) => {
  return axios
    .post(`${API}/${url}`, body, {
      headers: {
        ...authHeader()
      }
    })
    .then(response => {
      checkToken();
      return response.data;
    })
    .catch(error => {
      checkToken();
      return NotificationManager.error(error.message);
    });
};

export const deleteFunc = async url => {
  return axios
    .delete(`${API}/${url}`, {
      headers: {
        ...authHeader()
      }
    })
    .then(response => {
      checkToken();
      return response.data;
    })
    .catch(error => {
      checkToken();
      return NotificationManager.error(error.message);
    });
};

export const putFunc = async (url, body) => {
  return axios
    .put(`${API}/${url}`, body, {
      headers: {
        ...authHeader()
      }
    })
    .then(response => {
      checkToken();
      return response.data;
    })
    .catch(error => {
      checkToken();
      return NotificationManager.error(error.message);
    });
};
