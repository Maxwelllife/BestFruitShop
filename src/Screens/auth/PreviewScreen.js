import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    FlatList,
    Animated,
} from "react-native";
import React, { useState, useRef } from "react";
import slides from "./preview";
import PreviewItem from "../../Components/PreviewItem";
import Paginator from "../../Components/Paginator";

const PreviewScreen = ({ navigation }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    console.log("currentIndex: ", currentIndex);

    const scrollX = useRef(new Animated.Value(0)).current;
    const slidesRef = useRef(null);

    const viewableItemsChanged = useRef(({ viewableItems }) => {
        setCurrentIndex(viewableItems[0].index);
    }).current;

    const viewConfig = useRef({ viewAreaCoveragePersentThreshold: 50 }).current;

    const scrollTo = () => {
        if (currentIndex < slides.length - 1) {
            slidesRef.current.scrollToIndex({ index: currentIndex + 1 });
        } else {
            console.log("last slide in slides");
        }
    };
    const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);
    return (
        <View style={s.container}>
            <Animated.View>
                <AnimatedFlatList
                    data={slides}
                    renderItem={({ item }) => <PreviewItem item={item} />}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled
                    bounced={false}
                    keyExtractor={(item) => item.id}
                    onScroll={Animated.event(
                        [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                        { useNativeDriver: false }
                    )}
                    // scrollEventThrottle={32} doesnt work?

                    // onViewableItemsChanged={viewableItemsChanged}
                    // viewabilityConfig={viewConfig}
                    ref={slidesRef}
                />

                <View style={s.threeDots}>
                    <Paginator data={slides} scrollX={scrollX} />
                </View>

                <View style={s.wrapperBtn}>
                    <TouchableOpacity onPress={() => scrollTo()}>
                        <Text style={s.nextBtn}>Next</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("Register")}
                    >
                        <Text style={s.skipBtn}>Skip</Text>
                    </TouchableOpacity>
                </View>
            </Animated.View>
        </View>
    );
};

export default PreviewScreen;

const s = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "#fff",
    },

    threeDots: {
        // marginTop: 99,
        alignItems: "center",
        // justifyContent: "center",
    },
    wrapperBtn: {
        justifyContent: "center",

        marginTop: 188,
        marginBottom: 53,
        flexDirection: "row",
    },
    nextBtn: {
        fontFamily: "Montserrat-Medium",
        fontSize: 20,
        color: "#F1C40F",
        marginRight: 35,
    },
    skipBtn: {
        fontFamily: "Montserrat-Medium",
        fontSize: 20,
        // color: "#f1c40fb7",
        color: "red",
    },
});
