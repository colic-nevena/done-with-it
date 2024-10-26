import React from 'react';
import { useFormikContext } from 'formik';
import AppTextInput from '../AppTextInput';
import ErrorMessage from './ErrorMessage';
import { KeyboardTypeOptions } from 'react-native';

interface AppFormFieldProps {
    name: string;
    placeholder: string;
    icon?: string;
    secureTextEntry?: boolean;
    autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
    autoCorrect?: boolean;
    textContentType?: any;
    maxLength?: number;
    keyboardType?: KeyboardTypeOptions | undefined;
    multiline?: boolean;
    numberOfLines?: number;
    width?: number;
}

export default function AppFormField({
    name,
    placeholder,
    icon,
    secureTextEntry,
    autoCapitalize,
    autoCorrect,
    textContentType,
    maxLength,
    keyboardType,
    multiline,
    numberOfLines,
    width,
}: AppFormFieldProps) {
    const { setFieldTouched, errors, touched, setFieldValue, values } = useFormikContext<any>();

    return (
        <>
            <AppTextInput
                placeholder={placeholder}
                icon={icon}
                secureTextEntry={secureTextEntry}
                autoCapitalize={autoCapitalize}
                autoCorrect={autoCorrect}
                textContentType={textContentType}
                maxLength={maxLength}
                keyboardType={keyboardType}
                multiline={multiline || false}
                width={width}
                numberOfLines={multiline && numberOfLines ? numberOfLines : 1}
                onChangeText={text => setFieldValue(name, text)}
                value={values[name]}
                onBlur={() => setFieldTouched(name)}
            />

            {touched[name] && errors[name] ? (
                <ErrorMessage visible={touched[name]} error={errors[name]?.toString()} />
            ) : null}
        </>
    );
}
