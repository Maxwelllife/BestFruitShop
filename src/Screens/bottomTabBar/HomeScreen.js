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
import data from "./data.json";

const fruits = data.data;

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
            <FlatList
                data={fruits}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={{ ...s.fruitItem, width: (width - 20) / 2 }}>
                        {/* <Image source={require(item.url)} /> */}
                        <Text>{item.name}</Text>
                        <Text>{item.price}</Text>
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

    input: {
        marginTop: 22,
        paddingLeft: 62,
        padding: 13,
        fontFamily: "Roboto-Regular",
        fontSize: 18,
        lineHeight: 21,
        backgroundColor: "#FFF",
        borderRadius: 30,
        color: "#C0C0C0",
        shadowColor: " #00000040",
    },
    search: {
        position: "absolute",
        bottom: 15,
        right: 19,
    },
    fruitItem: {},
});
