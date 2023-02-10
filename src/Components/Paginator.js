import { StyleSheet, View } from "react-native";
import React from "react";
import Dot from "./Dot";

const Paginator = ({ currentIndex, slides }) => {
    return (
        <View styles={s.dots}>
            {slides.map((_, index) => (
                <Dot
                    key={index}
                    color={currentIndex === index ? "#F1C40F" : "#C4C4C4"}
                    size={currentIndex === index ? 10 : 8}
                />
            ))}
        </View>
    );
};

export default Paginator;

const s = StyleSheet.create({
    dots: {
        // marginBottom: 100,
        flexDirection: "row",
        // justifyContent: "center",
    },
});
