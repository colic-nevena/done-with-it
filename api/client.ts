import authStorage from '@/auth/AuthStorage';
import cache from '@/utils/Cache';
import { create, ApiResponse } from 'apisauce';
import settings from "../config/Settings"

const apiClient = create({
    baseURL: settings.apiUrl
});

apiClient.addAsyncRequestTransform(async (request: any) => {
    const token = await authStorage.getToken();
    if (token) {
        request.headers["x-auth-token"] = token;
    }
})

const originalGet = apiClient.get;
apiClient.get = async <T, U = T>(url: string, params?: {}, axiosConfig?: any): Promise<ApiResponse<T, U>> => {
    const response: ApiResponse<T, U> = await originalGet(url, params, axiosConfig);

    if (response.ok) {
        cache.store(url, response.data);
        return response;
    }

    const cachedData = await cache.get(url);

    return cachedData ? { ok: true, data: cachedData } as ApiResponse<T, U> : response;
};

export default apiClient;
