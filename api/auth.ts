import apiClient from "./client";

export function login(email: string, password: string) {
    return apiClient.post("/auth", { email, password })
}