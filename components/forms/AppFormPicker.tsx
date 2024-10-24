import React from "react";
import { useFormikContext } from "formik";
import AppPicker, { PickerItemComponentProps } from "../AppPicker";
import ErrorMessage from "./ErrorMessage";

interface Props {
    items: any[];
    numberOfColumns?: number;
    name: string;
    placeholder: string;
    width?: string;
    PickerItemComponent?: React.ComponentType<PickerItemComponentProps>;
}

export default function AppFormPicker({ items, numberOfColumns, name, placeholder, width, PickerItemComponent }: Props) {
    const { errors, setFieldValue, touched, values } = useFormikContext<any>();

    return (
        <>
            <AppPicker
                numberOfColumns={numberOfColumns}
                items={items}
                onSelectItem={(item) => setFieldValue(name, item)}
                placeholder={placeholder}
                selectedItem={values[name]}
                width={width}
                PickerItemComponent={PickerItemComponent}
            />

            {errors[name] && touched[name] ?
                < ErrorMessage error={errors[name].toString()} visible={!!touched[name]} /> : null}
        </>
    );
}
