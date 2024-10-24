import React, { useRef } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import ImageInput from './ImageInput';

interface Props {
    imageUris: (string | null)[];
    onRemoveImage: (imageUri: string | null) => void;
    onAddImage: (imageUri: string | null) => void;
}

export default function ImageInputList({ imageUris = [], onRemoveImage, onAddImage }: Props) {
    const scrollView = useRef<ScrollView | null>(null);

    return (
        <View>
            <ScrollView
                ref={scrollView}
                horizontal
                onContentSizeChange={() => scrollView.current?.scrollToEnd()}
            >
                <View style={styles.container}>
                    {imageUris && imageUris.map(uri =>
                        <View key={uri} style={styles.image}>
                            <ImageInput
                                imageUri={uri}
                                onChangeImage={() => onRemoveImage(uri)}
                            />
                        </View>
                    )}

                    <ImageInput onChangeImage={uri => onAddImage(uri)} />
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row"
    },
    image: {
        marginRight: 10
    }
});
