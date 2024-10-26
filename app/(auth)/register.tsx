import React, { useState } from 'react'
import * as Yup from "yup"
import { Image, SafeAreaView, StyleSheet } from 'react-native'
import AppForm from '@/components/forms/AppForm'
import AppFormField from '@/components/forms/AppFormField'
import SubmitButton from '@/components/forms/SubmitButton'
import { UserRegistration } from '@/model/UserViewModel'
import usersApi from "../../api/users"
import useAuth from '@/auth/useAuth'
import apiAuth from '@/api/auth'
import useApi from '@/hooks/useApi'
import ActivityIndicator from '@/components/ActivityIndicator'

const validationSchema = Yup.object().shape({
    name: Yup.string().required().min(3).label("Name"),
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password")
})

export default function RegisterScreen() {
    const auth = useAuth()
    const registerApi = useApi(usersApi.register)
    const loginApi = useApi(apiAuth.login)

    const [error, setError] = useState("")

    const handleSubmit = async (userInfo: UserRegistration) => {
        const result = await registerApi.request(userInfo)

        if (!result.ok) {
            if (result.data) setError(result.data.toString())
            else {
                setError("Unexpected error occurred")
                console.log(result)
            }
            return
        }

        const { data: authToken } = await loginApi.request(
            userInfo.email,
            userInfo.password
        )
        auth.logIn(authToken as string)
    }

    return (
        <>
            <SafeAreaView style={styles.container}>
                <ActivityIndicator visible={registerApi.loading || loginApi.loading} />
                <Image style={styles.logo} source={require("../../assets/images/logo-red.png")} />

                <AppForm<{ name: string; email: string; password: string }>
                    initialValues={{ name: "", email: "", password: "" }}
                    onSubmit={handleSubmit}
                    validationSchema={validationSchema}
                >

                    <AppFormField
                        name="name"
                        placeholder="Name"
                        icon="account"
                        autoCapitalize="none"
                        autoCorrect={false}
                        textContentType="name"
                    />

                    <AppFormField
                        name="email"
                        placeholder="Email"
                        icon="email"
                        autoCapitalize="none"
                        autoCorrect={false}
                        textContentType="emailAddress"
                    />

                    <AppFormField
                        name="password"
                        placeholder="Password"
                        icon="lock"
                        secureTextEntry
                        autoCapitalize="none"
                        autoCorrect={false}
                        textContentType="password"
                    />

                    <SubmitButton title="Register" />
                </AppForm>
            </SafeAreaView>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10
    },
    logo: {
        width: 80,
        height: 80,
        marginTop: 50,
        marginBottom: 50,
        alignSelf: "center"
    }
})