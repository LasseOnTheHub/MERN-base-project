import http from "./httpService";
import { apibaseurl } from "../configs/config.json";
import jwtDecode from "jwt-decode";

http.setJwt(getJwt());

const URL = apibaseurl + "login";

export async function login(email, password) {
  const result = await http.post(URL, { email: email, password: password });
  localStorage.setItem("token", result.data.token);
}

export function logout() {
  localStorage.removeItem("token");
}

export function getJwt() {
  return localStorage.getItem("token");
}

export function getCurrentUser() {
  try {
    const jwt = localStorage.getItem("token");
    return jwtDecode(jwt);
  } catch (error) {
    return null;
  }
}

export default {
  login,
  logout,
  getCurrentUser
};
