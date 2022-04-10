import Cookies from "universal-cookie";
const cookies = new Cookies();

export const getFromCookies = (key) => {
	return cookies.get(key);
};

export const setCookies = (key, value) => {
	cookies.set(key, value);
};

export const removeFromCookies = (key) => {
	cookies.remove(key);
};
