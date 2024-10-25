import Icon from "@/components/Icon";
import ListItem from "@/components/ListItem";
import ListItemSeparator from "@/components/ListItemSeparator";
import colors from "@/constants/Colors";
import { Link } from "expo-router";
import React from "react";
import { StyleSheet, View, FlatList, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const menuItems = [
    {
        title: "My Listings",
        icon: {
            name: "format-list-bulleted",
            backgroundColor: colors.primary,
        },
    },
    {
        title: "My Messages",
        icon: {
            name: "email",
            backgroundColor: colors.secondary,
        },
        targetScreen: "/messages"
    },
];

export default function AccountScreen() {
    return (
        <SafeAreaView style={styles.screen}>
            <View style={styles.container}>
                <ListItem
                    title="Mosh Hamedani"
                    subtitle="programmingwithmosh@gmail.com"
                    image={require("../../assets/images/mosh.jpg")}
                />
            </View>
            <View style={styles.container}>
                <FlatList
                    data={menuItems}
                    keyExtractor={(menuItem) => menuItem.title}
                    ItemSeparatorComponent={ListItemSeparator}
                    renderItem={({ item }) => (
                        <Link href={{
                            pathname: item.targetScreen
                        }} asChild>
                            <Pressable>
                                <ListItem
                                    title={item.title}
                                    Icon={
                                        <Icon
                                            name={item.icon.name}
                                            backgroundColor={item.icon.backgroundColor}
                                        />
                                    }
                                />
                            </Pressable>
                        </Link>
                    )}
                />
            </View>
            <ListItem
                title="Log Out"
                Icon={<Icon name="logout" backgroundColor="#ffe66d" />}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    screen: {
        backgroundColor: colors.lightGrey,
    },
    container: {
        marginVertical: 20,
    },
});