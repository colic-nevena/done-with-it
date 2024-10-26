import React from 'react';
import { View, StyleSheet, Modal } from 'react-native';
import * as Progress from 'react-native-progress';
import AppText from '@/components/AppText';
import colors from '@/constants/Colors';
import LottieView from 'lottie-react-native';

interface Props {
    progress: number;
    visible: boolean;
    onDone: () => void
}

export default function UploadScreen({ visible = false, progress = 0, onDone }: Props) {
    return (
        <Modal visible={visible}>
            <View style={styles.container}>
                {
                    progress < 1 ?
                        <Progress.Bar color={colors.primary} progress={progress} width={200} />
                        : <LottieView onAnimationFinish={onDone} autoPlay loop={false} source={require("../assets/animations/done.json")} style={styles.animation} />
                }

            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        flex: 1
    },
    animation: {
        width: 150
    }
})