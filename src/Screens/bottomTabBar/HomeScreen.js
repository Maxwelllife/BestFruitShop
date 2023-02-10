import React, { useState } from "react";
import {
    Image,
    StyleSheet,
    Text,
    View,
    TouchableWithoutFeedback,
    TextInput,
    FlatList,
    useWindowDimensions,
} from "react-native";
import Search from "../../Components/Search";
import fruits from "./data.js";
let numColumns = 2;
const HomeScreen = () => {
    const [state, setState] = useState("");
    const { width } = useWindowDimensions();

    const keyboardHide = () => {
        Keyboard.dismiss();
    };

    return (
        <View style={s.container}>
            {/* <TouchableWithoutFeedback onPress={keyboardHide}> */}
            <View>
                <View style={s.header}>
                    <Image
                        source={require("../../../assets/png/appleLogo.png")}
                    />
                    <Text style={s.title}>BestFruitShop</Text>
                    <Image source={require("../../../assets/png/user.png")} />
                </View>
                <View style={s.inputWrap}>
                    <TextInput
                        style={s.input}
                        textAlign="left"
                        placeholder="Search"
                        value={state.email}
                        onChangeText={(value) =>
                            setState((prevState) => ({
                                ...prevState,
                                email: value,
                            }))
                        }
                        onPress={() => {
                            handleFilter;
                        }}
                    />
                    <Search style={s.search} width={25} height={25} />
                </View>
            </View>
            <FlatList
                key={2}
                numColumns={2}
                contentContainerStyle={s.containerStyle}
                data={fruits}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={{ ...s.fruitItem, width: (width - 80) / 2 }}>
                        <Image
                            source={item.image}
                            style={{ height: 167, marginBottom: -30 }}
                        />
                        <Text style={{ paddingBottom: 5 }}>{item.title}</Text>
                        <Text style={{ paddingBottom: 5 }}>{item.price}</Text>
                    </View>
                )}
            />
            {/* </TouchableWithoutFeedback> */}
        </View>
    );
};

export default HomeScreen;

const s = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 30,
    },
    header: {
        position: "relative",
        paddingTop: 57,
        flexDirection: "row",
        width: "100%",
        alignItems: "center",
    },
    title: {
        marginRight: "auto",
        fontFamily: "Montserrat-SemiBold",
        fontSize: 20,
        lineHeight: 24,
        color: "#34495E",
    },
    inputWrap: {
        marginTop: 22,
        marginBottom: 86,
    },
    input: {
        paddingLeft: 62,
        padding: 13,
        fontFamily: "Roboto-Regular",
        fontSize: 18,
        lineHeight: 21,
        backgroundColor: "#FFF",
        borderRadius: 30,
        color: "#C0C0C0",

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 4,
    },
    search: {
        position: "absolute",
        bottom: 15,
        right: 19,
    },
    containerStyle: {
        margin: -10,
    },
    fruitItem: {
        backgroundColor: "#fff",
        borderRadius: 10,
        alignItems: "center",
        margin: 10,
        // height: 167,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 4,
    },
});
