import { UserRegistration } from "@/model/UserViewModel";
import apiClient from "./client";

const register = async (userInfo: UserRegistration) => {
    return await apiClient.post("/users", userInfo)
}

export default { register }