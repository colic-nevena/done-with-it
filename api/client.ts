import { create } from 'apisauce'

const apiClient = create({
    baseURL: `${process.env.EXPO_PUBLIC_BASE_URL}/api`
})

export default apiClient;