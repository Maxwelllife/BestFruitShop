import { StyleSheet, Text, View } from "react-native";
import React from "react";

const ShopScreen = () => {
    return (
        <View style={s.container}>
            <Text>ShopScreen</Text>
        </View>
    );
};

export default ShopScreen;

const s = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "orange",
    },
});
