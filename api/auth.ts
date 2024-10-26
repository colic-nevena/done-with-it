import apiClient from "./client";

const login = (email: string, password: string) => {
    return apiClient.post("/auth", { email, password })
}

export default {
    login
}