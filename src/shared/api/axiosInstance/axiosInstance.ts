import axios from 'axios';

export const axiosInstance = axios.create({
    baseURL: '/api',
    headers: {
        // eslint-disable-next-line @typescript-eslint/naming-convention
        'Content-Type': 'application/json',
    },
});

axiosInstance.interceptors.request.use((config) => {
    if (config.headers) {
        config.headers.Authorization = `Bearer }`;
    }

    return config;
});

axiosInstance.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;

        if (error.response.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;

            return axiosInstance(originalRequest);
        }

        throw error;
    },
);
