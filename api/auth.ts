import apiClient from "./client";

export const apiLogin = (email: string, password: string) => {
    return apiClient.post("/auth", { email, password })
}
