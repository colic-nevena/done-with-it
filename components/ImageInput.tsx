import React, { useEffect } from 'react';
import { View, StyleSheet, Image, TouchableWithoutFeedback, Alert } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import colors from '@/constants/Colors';

interface Props {
    imageUri?: string | null;
    onChangeImage: (imageUri: string | null) => void;
}

export default function ImageInput({ imageUri, onChangeImage }: Props) {

    useEffect(() => {
        requestPermission();
    }, [])

    const requestPermission = async () => {
        const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync()

        if (!granted)
            alert("You need to enable permission to access the library.")
    }

    const handlePress = () => {
        if (!imageUri) {
            handleSelectImage()
        }
        else {
            Alert.alert("Delete", "Are you sure you want to delete this image", [
                { text: "Yes", onPress: () => onChangeImage(null) },
                { text: "No" }
            ])
        }
    }

    const handleSelectImage = async () => {
        try {
            const result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                quality: 0.5
            })
            if (!result.canceled) {
                onChangeImage(result.assets[0].uri)
            }
        } catch (e: any) {
            console.log("Error reading an image")
        }
    }

    return (
        <TouchableWithoutFeedback onPress={handlePress}>
            <View style={styles.container}>
                {!imageUri ?
                    <MaterialCommunityIcons name="camera" size={40} color={colors.mediumGrey} />
                    : <Image source={{ uri: imageUri }} style={styles.image} />
                }
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.lightGrey,
        borderRadius: 15,
        justifyContent: "center",
        alignItems: "center",
        height: 100,
        width: 100,
        overflow: "hidden"
    },
    image: {
        width: "100%",
        height: "100%"
    }
})