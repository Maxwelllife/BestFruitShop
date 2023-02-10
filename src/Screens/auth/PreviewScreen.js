import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    FlatList,
} from "react-native";
import React, { useState, useRef } from "react";
import slides from "./preview";
import PreviewItem from "../../Components/PreviewItem";
import Dot from "../../Components/Dot";
// import Paginator from "../../Components/Paginator";

const PreviewScreen = ({ navigation }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const slidesRef = useRef(null);

    const itemsChangeHandler = useRef(({ changed }) => {
        setCurrentIndex(changed.length ? changed[0].index : null);
    });

    const viewConfig = useRef({
        minimumViewTime: 100,
        viewAreaCoveragePercentThreshold: 80,
        waitForInteraction: true,
    }).current;

    const scrollTo = () => {
        if (currentIndex < slides.length - 1) {
            slidesRef.current.scrollToIndex({ index: currentIndex + 1 });
            setCurrentIndex(currentIndex + 1);
        } else {
            console.log("last slide in slides redirect to register");
            navigation.navigate("Register");
        }
    };

    return (
        <View style={s.container}>
            <FlatList
                data={slides}
                renderItem={({ item }) => <PreviewItem item={item} />}
                horizontal
                showsHorizontalScrollIndicator={false}
                pagingEnabled
                bounced={false}
                keyExtractor={(item, index) => index}
                ref={slidesRef}
                viewabilityConfig={viewConfig}
                onViewableItemsChanged={itemsChangeHandler.current}
                scrollEventThrottle={32}
            />
            <View styles={s.dots}>
                {slides.map((_, index) => (
                    <Dot
                        key={index}
                        color={currentIndex === index ? "#F1C40F" : "#C4C4C4"}
                        size={currentIndex === index ? 10 : 8}
                    />
                ))}
            </View>
            {/* <Paginator
                style={{ flexDirection: "row" }}
                currentIndex={currentIndex}
                slides={slides}
            /> */}
            <TouchableOpacity onPress={scrollTo}>
                <Text style={s.nextBtn}>Next</Text>
            </TouchableOpacity>
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
    dots: {
        marginBottom: 100,
        flexDirection: "row",
        // justifyContent: "center",
    },
    nextBtn: {
        marginTop: 88,
        // marginTop: 188,
        marginBottom: 53,
        fontFamily: "Montserrat-Medium",
        fontSize: 20,
        color: "#F1C40F",
    },
});
