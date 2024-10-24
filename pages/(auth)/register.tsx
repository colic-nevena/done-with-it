import React from 'react'
import * as Yup from "yup"
import { Image, SafeAreaView, StyleSheet } from 'react-native'
import AppForm from '@/components/forms/AppForm'
import AppFormField from '@/components/forms/AppFormField'
import SubmitButton from '@/components/forms/SubmitButton'

const validationSchema = Yup.object().shape({
    name: Yup.string().required().min(3).label("Name"),
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password")
})

export default function RegisterScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <Image style={styles.logo} source={require("../../assets/images/logo-red.png")} />

            <AppForm<{ name: string; email: string; password: string }>
                initialValues={{ name: "", email: "", password: "" }}
                onSubmit={(values) => console.log(values)}
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