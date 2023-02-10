import {
    StyleSheet,
    Text,
    View,
    Image,
    useWindowDimensions,
} from "react-native";
import React, { useState, useEffect } from "react";

const PreviewItem = ({ item }) => {
    const { width } = useWindowDimensions();

    return (
        <View style={[s.container, { width }]}>
            {/* <View style={{...s.container, width} }> */}
            <Image
                source={item.image}
                style={[s.img, { width, resizeMode: "contain" }]}
            />
            <View style={s.wrap}>
                <Text style={s.title}>{item.title}</Text>
                <Text style={s.description}>{item.description}</Text>
            </View>
        </View>
    );
};

export default PreviewItem;

const s = StyleSheet.create({
    container: {
        // flex: 1,
        alignItems: "center",
        backgroundColor: "#fff",
    },
    img: {
        // flex: 0.7,
        // justifyContent: "center",
        marginTop: 121,
        width: 265,
        height: 265,
        borderRadius: 30,
    },
    wrap: {
        alignItems: "center",
    },
    title: {
        marginTop: 32,
        fontFamily: "Montserrat-Bold",
        fontSize: 25,
        color: "#000000",
    },
    description: {
        marginTop: 32,
        width: 170,
        textAlign: "center",
    },
});
