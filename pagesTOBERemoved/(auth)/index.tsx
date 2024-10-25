import React from 'react'
import { Link } from 'expo-router';
import { Image, ImageBackground, Pressable, StyleSheet, Text, View } from 'react-native'
import colors from '@/constants/Colors'
import AppButton from '@/components/AppButton';

export default function WelcomeScreen() {
  return (
    <ImageBackground blurRadius={3} style={styles.background} source={require("../../assets/images/background.jpg")}>
      <View style={styles.logoContainer}>
        <Image source={require("../../assets/images/logo-red.png")} style={styles.logo} />
        <Text style={styles.tagline}>Sell what you don't need</Text>
      </View>

      <View style={styles.buttonContainer}>
        <Link href="/login" asChild>
          <AppButton title="Login" />
        </Link>
        <Link href="/register" asChild>
          <AppButton color={colors.secondary} title="Register" />
        </Link>
      </View>
    </ImageBackground>
  )
}

WelcomeScreen.options = {
  headerShown: false,
};

const styles = StyleSheet.create({
  tagline: {
    fontSize: 23,
    fontWeight: "600",
    paddingVertical: 20
  },
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center"
  },
  buttonContainer: {
    padding: 20,
    width: "100%"
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center"
  }
})
