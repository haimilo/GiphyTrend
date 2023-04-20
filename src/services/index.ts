import axios, { AxiosRequestConfig } from "axios";
import { toast } from "react-toastify";
import configs from "../constants/config";

//new axios
const axiosInstance = axios.create({
    baseURL: configs.API_DOMAIN,
});

const axiosInstanceV2 = axios.create({
    baseURL: configs.API_DOMAIN,
});

const setupInterceptors = (navigate: any) => {
    axiosInstance.interceptors.request.use(
        (config: AxiosRequestConfig<any>) => {
            const token = localStorage.getItem("token");
            const pathName = window.location.pathname;
            const pathNameArray = pathName.split("/");
            const clientId =
                pathNameArray.length > 0
                    ? pathNameArray[pathNameArray.length - 1]
                    : null;
            if (token) {
                config.headers = {
                    Authorization: `Bearer ${token}`,
                    withCredentials: true,
                    //TODO: refactor this
                    clientId: clientId?.length === 24 ? clientId : "null",
                };
            }
            return config;
        },
        (error) => Promise.reject(error)
    );
    axiosInstanceV2.interceptors.request.use(
        (config: AxiosRequestConfig<any>) => {
            const token = localStorage.getItem("token");
            const pathName = window.location.pathname;
            const pathNameArray = pathName.split("/");
            const clientId =
                pathNameArray.length > 0
                    ? pathNameArray[pathNameArray.length - 1]
                    : null;
            if (token) {
                config.headers = {
                    Authorization: `Bearer ${token}`,
                    withCredentials: true,
                    //TODO: refactor this
                    clientId: clientId?.length === 24 ? clientId : "null",
                };
            }
            return config;
        },
        (error) => Promise.reject(error)
    );

    axiosInstance.interceptors.response.use(
        (response) => Promise.resolve(response),
        (error) => {
            if (!error.response) {
                return Promise.reject(error);
            }
            if (error.response.status === 400) {
                return Promise.reject(error.response);
            }
            if (
                error.response.status === 404 ||
                error.response.status === 500
            ) {
                if (error.response.data.message === "User not found!") {
                    return Promise.reject(error.response);
                }
                navigate("/404");
                return Promise.reject(error.response);
            }
            if (error.response.status === 403) {
                toast.error(`You are not authorized to perform this page`, {
                    toastId: 1,
                    theme: "colored",
                    autoClose: 10000,
                });
                return Promise.reject(error.response);
            }
            if (error.response.status === 401) {
                if (error.response.data.message === "Unauthorized") {
                    navigate("/401");
                } else {
                    navigate("/session-expired");
                }
                return Promise.reject(error.response);
            }
            return Promise.reject(error);
        }
    );
    axiosInstanceV2.interceptors.response.use(
        (response) => Promise.resolve(response?.data),
        (error) => {
            if (!error.response) {
                return Promise.reject(error);
            }
            if (error.response.status === 400) {
                return Promise.reject(error.response);
            }
            if (
                error.response.status === 404 ||
                error.response.status === 500
            ) {
                if (error.response.data.message === "User not found!") {
                    return Promise.reject(error.response);
                }
                navigate("/404");
                return Promise.reject(error.response);
            }
            if (error.response.status === 403) {
                toast.error(`You are not authorized to perform this page`, {
                    toastId: 1,
                    theme: "colored",
                    autoClose: 10000,
                });
                return Promise.reject(error.response);
            }
            if (error.response.status === 401) {
                if (error.response.data.message === "Unauthorized") {
                    navigate("/401");
                } else {
                    navigate("/session-expired");
                }
                return Promise.reject(error.response);
            }
            return Promise.reject(error);
        }
    );
};

export const sendGetRequest = (url: string, params?: any) =>
    axiosInstance.get(url, { params });
export const sendGetRequestV2 = (url: string, params?: any) =>
    axiosInstanceV2.get(url, { params });

export const sendPatchRequest = (url: string, params?: any) =>
    axiosInstance.patch(url, params);

export const sendPostRequest = (url: string, params?: any, headers?: any) =>
    axiosInstance.post(url, params, headers);

export const sendDeleteRequest = (url: string, params?: any) =>
    axiosInstance.delete(url, params);

export const sendDeleteRequestA = (url: string, params?: any) =>
    axiosInstance.delete(url, { params });

export default setupInterceptors;
