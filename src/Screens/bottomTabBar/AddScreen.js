import { StyleSheet, Text, View } from "react-native";
import React from "react";

const AddScreen = () => {
    return (
        <View style={s.container}>
            <Text>AddScreen</Text>
        </View>
    );
};

export default AddScreen;

const s = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "pink",
    },
});
