"use client";

import Axios, { type AxiosHeaders, type AxiosRequestConfig } from "axios";

import { API_PATH, API_URL } from "~/configs/index";
import { useLoading, useNotification } from "~/hooks";
import cookie from "../utils/cookie";

export interface IApiResponse {
  statusCode: number;
  success: string;
  data: [] | null;
}

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
function authRequestInterceptor(config: AxiosRequestConfig): any {
  const token = cookie.getToken();
  if (token) {
    (config.headers as AxiosHeaders).set("authorization", `Bearer ${token}`);
  }

  return config;
}

export const axios = Axios.create({
  baseURL: `${API_URL}${API_PATH}`,
  headers: {
    "Content-Type": "application/json",
  },
});

axios.interceptors.request.use(authRequestInterceptor);
axios.interceptors.response.use(
  (response) => {
    // useNotification.getState().dismissAllNotification();
    return response.data;
  },
  (error) => {
    if (
      error.response.data.statusCode === 401 &&
      (error.response.data.message === "login-unauthorized" || error.response.data.message === "Unauthorized")
    ) {
      cookie.clearToken();
      const message = "Unauthorized";
      useNotification.getState().addNotification({
        type: "error",
        message,
      });
    } else if (error.response.data.statusCode === 406 && error.response.data.message === "access-denied") {
      const type = "error";
      const message = "Something wrong";
      useNotification.getState().addNotification({
        type,
        message,
      });
    }

    useLoading.setState({ isLoading: false });

    return Promise.reject(error);
  },
);
