import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Settings = () => {
    return (
        <View style={s.container}>
            <Text>Settings</Text>
        </View>
    );
};

export default Settings;

const s = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "teal",
    },
});
