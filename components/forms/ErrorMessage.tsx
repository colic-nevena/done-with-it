import React from 'react'
import AppText from '../AppText'
import { StyleSheet } from 'react-native';
import { FormikTouched } from 'formik';

interface Props {
    error: string;
    visible: boolean | FormikTouched<any> | FormikTouched<any>[] | undefined
}

export default function ErrorMessage({ error, visible }: Props) {
    if (!visible || !error) return null;

    return (
        <AppText style={styles.error} text={error} />
    )
}

const styles = StyleSheet.create({
    error: {
        color: "red"
    }
})