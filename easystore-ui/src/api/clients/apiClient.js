import axios from "axios";

/**
 * Configured Axios instance for API requests.
 * @type {import('axios').AxiosInstance}
 */
const apiClient = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    timeout: 10000,
});

export default apiClient;