import {
    StyleSheet,
    Text,
    View,
    Animated,
    useWindowDimensions,
} from "react-native";
import React from "react";
import Dot from "./Dot";

const Paginator = ({ data, scrollX }) => {
    const { width } = useWindowDimensions();
    return (
        <View style={{ flexDirection: "row" }}>
            {data.map(({ _, id }) => {
                const inputRange = [
                    // (id - 1) * width,
                    // id * width,
                    // (id + 1) * width,
                    (id - 2) * width,
                    (id - 1) * width,
                    id * width,
                ];

                // const dotWidth = scrollX.interpolate({
                //     inputRange,
                //     outputRange: [16, 20, 16],
                // });
                const color = scrollX.interpolate({
                    inputRange,
                    outputRange: ["#C4C4C4", "#F1C40F", "#C4C4C4"],
                    extrapolate: "clamp",
                });

                return (
                    <Animated.View
                        key={id}
                        style={[s.dot, { backgroundColor: color }]}
                    />
                );
            })}
        </View>
    );
};

export default Paginator;

const s = StyleSheet.create({
    dot: {
        height: 16,
        width: 16,
        borderRadius: 30,
        marginHorizontal: 9,
    },
});
