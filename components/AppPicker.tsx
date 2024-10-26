import { MaterialCommunityIcons } from '@expo/vector-icons'
import React, { useState } from 'react'
import { View, StyleSheet, TouchableWithoutFeedback, Modal, Button, FlatList, DimensionValue } from 'react-native'
import defaultStyles from "../constants/Styles"
import AppText from './AppText';
import PickerItem from './PickerItem';
import { GestureHandlerRootView } from "react-native-gesture-handler";

export interface PickerItem {
    label: string;
    value: number | string;
    onPress: (item: any) => void;
}

export interface PickerItemComponentProps {
    item: any;
    onPress: (item: any) => void;
}

interface Props {
    icon?: any;
    numberOfColumns?: number;
    placeholder: string;
    width?: string;
    selectedItem: PickerItem | undefined;
    items: PickerItem[];
    onSelectItem: (item: PickerItem) => void;
    PickerItemComponent?: React.ComponentType<PickerItemComponentProps>;
}

export default function AppPicker({ icon, numberOfColumns = 1, placeholder, items, selectedItem, onSelectItem, width = "100%", PickerItemComponent = PickerItem }: Props) {
    const [modalVisible, setModalVisible] = useState<boolean>(false);

    const handleModalToggle = () => {
        setModalVisible(!modalVisible)
    }

    return (
        <GestureHandlerRootView style={{ flex: 0 }}>
            <TouchableWithoutFeedback onPress={handleModalToggle}>
                <View style={[styles.container, { width: width as DimensionValue }]}>
                    {icon && <MaterialCommunityIcons style={styles.icon} name={icon} size={20} color={defaultStyles.colors.mediumGrey} />}

                    {selectedItem
                        ?
                        <AppText style={styles.text} text={selectedItem.label} />
                        :
                        <AppText style={styles.placeholder} text={placeholder} />}

                    <MaterialCommunityIcons name="chevron-down" size={20} color={defaultStyles.colors.mediumGrey} />
                </View>
            </TouchableWithoutFeedback>

            <Modal visible={modalVisible} animationType='slide'>
                <Button title="Close" onPress={() => setModalVisible(false)} />

                <FlatList
                    numColumns={numberOfColumns}
                    data={items}
                    keyExtractor={item => item.value.toString()}
                    renderItem={({ item }) =>
                        <PickerItemComponent
                            item={item}
                            onPress={() => {
                                setModalVisible(false);
                                onSelectItem(item);
                            }}
                        />}
                />
            </Modal>
        </GestureHandlerRootView >
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: defaultStyles.colors.lightGrey,
        borderRadius: 25,
        flexDirection: "row",
        padding: 15,
        marginVertical: 10,
    },
    icon: {
        marginRight: 10,
        marginTop: 4
    },
    text: {
        flex: 1,
        fontSize: 18
    },
    placeholder: {
        color: defaultStyles.colors.mediumGrey,
        flex: 1,
        fontSize: 18
    }
})