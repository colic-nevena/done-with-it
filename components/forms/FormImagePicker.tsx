import React from 'react';
import ImageInputList from '../ImageInputList';
import ErrorMessage from './ErrorMessage';
import { useFormikContext } from 'formik';

interface Props {
    name: string
}

export default function FormImagePicker({ name }: Props) {
    const { errors, setFieldValue, touched, values } = useFormikContext<any>();
    const imageUris = values[name];

    const handleAdd = (imageUri: string | null) => {
        if (imageUri) {
            setFieldValue(name, [...imageUris, imageUri])
        }
    }

    const handleRemove = (imageUri: string | null) => {
        if (imageUri) {
            setFieldValue(name, imageUris.filter((uri: string) => uri !== imageUri))
        }
    }

    return (
        <>
            <ImageInputList imageUris={imageUris} onAddImage={handleAdd} onRemoveImage={handleRemove} />

            {errors[name] && touched[name] ?
                < ErrorMessage error={errors[name].toString()} visible={!!touched[name]} /> : null}
        </>
    )
}
