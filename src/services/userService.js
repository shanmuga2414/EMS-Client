import http from "./httpService";
import { apiUrl } from "../config.json";

const apiEndpoint = apiUrl + "/users";

export function register(user) {
  return http.post(apiEndpoint, {
    email: user.email,
    name: user.name,
    phone: user.phone,
    password: user.password,
  });
}

// https://www.youtube.com/watch?v=YI-hiRL4CdI
