import ListItem from "@/components/ListItem";
import ListItemDeleteAction from "@/components/ListItemDeleteAction";
import ListItemSeparator from "@/components/ListItemSeparator";
import { MessageViewModel } from "@/model/MessageViewModel";
import React, { useState } from "react";
import { FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const initialMessages = [
    {
        id: 1,
        title: "Mosh Hamedani",
        description: "Hey! Is this item still available?",
        image: require("../../assets/images/mosh.jpg"),
    },
    {
        id: 2,
        title: "Mosh Hamedani",
        description:
            "I'm interested in this item. When will you be able to post it?",
        image: require("../../assets/images/mosh.jpg"),
    },
];

export default function MessagesScreen() {
    const [messages, setMessages] = useState(initialMessages);
    const [refreshing, setRefreshing] = useState(false);

    const handleDelete = (message: MessageViewModel) => {
        setMessages(messages.filter((m) => m.id !== message.id));
    };

    return (
        <SafeAreaView>
            <FlatList
                data={messages}
                keyExtractor={(message) => message.id.toString()}
                renderItem={({ item }) => (
                    <ListItem
                        title={item.title}
                        subtitle={item.description}
                        image={item.image}
                        onPress={() => console.log("Message selected", item)}
                        renderRightActions={() => (
                            <ListItemDeleteAction onPress={() => handleDelete(item)} />
                        )}
                    />
                )}
                ItemSeparatorComponent={ListItemSeparator}
                refreshing={refreshing}
                onRefresh={() => {
                    setMessages([
                        {
                            id: 2,
                            title: "T2",
                            description: "D2",
                            image: require("../../assets/images/mosh.jpg"),
                        },
                    ]);
                }}
            />
        </SafeAreaView>
    );
}