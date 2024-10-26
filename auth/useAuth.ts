import { useContext } from "react"
import AuthContext from "./Context"
import authStorage from "./AuthStorage"
import { User } from "@/model/UserViewModel"
import { jwtDecode } from "jwt-decode"

export default function useAuth() {
    const { user, setUser } = useContext(AuthContext)

    const logOut = () => {
        setUser({ email: "", name: "", userId: -1 })
        authStorage.removeToken()
    }

    const logIn = (authToken: string) => {
        const decoded = jwtDecode(authToken) as User
        setUser(decoded)
        authStorage.storeToken(authToken)
    }

    return {
        user,
        logOut,
        logIn
    }
}