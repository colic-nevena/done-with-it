import { User } from '@/model/UserViewModel';
import React from 'react'

export interface IAuthContext {
    user: User;
    setUser: (user: User) => void
}

const AuthContext = React.createContext<IAuthContext>(
    {
        user: { email: "", name: "", userId: -1 },
        setUser: () => { }
    }
)

export default AuthContext