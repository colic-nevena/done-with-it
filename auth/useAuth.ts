import { useContext } from "react"
import AuthContext from "./Context"
import authStorage from "./AuthStorage"

export default function useAuth() {
    const { user, setUser } = useContext(AuthContext)

    const logOut = () => {
        setUser({ email: "", name: "", userId: -1 })
        authStorage.removeToken()
    }

    return {
        user,
        logOut
    }
}