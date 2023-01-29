import { StyleSheet, Text, View } from "react-native";
import React from "react";

const NotificationsScreen = () => {
    return (
        <View style={s.container}>
            <Text>NotificationsScreen</Text>
        </View>
    );
};

export default NotificationsScreen;

const s = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "purple",
    },
});
