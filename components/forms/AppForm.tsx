import { Formik, FormikValues, FormikHelpers } from 'formik'
import React, { ReactNode } from 'react'
import * as Yup from 'yup';

interface AppFormProps<T> {
    initialValues: T;
    onSubmit: (values: T, helpers: FormikHelpers<T>) => void;
    validationSchema: Yup.Schema;
    children: ReactNode;
}

export default function AppForm<T extends FormikValues>({
    initialValues,
    onSubmit,
    validationSchema,
    children,
}: AppFormProps<T>) {
    return (
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
        >
            {() => (
                <>
                    {children}
                </>
            )}
        </Formik>
    )
}
