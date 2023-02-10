import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { logOut } from "../../redux/auth/auth-operations";
import { useDispatch } from "react-redux";

const Settings = () => {
    const dispach = useDispatch();
    const logOutUser = () => {
        dispach(logOut());
    };
    return (
        <View style={s.container}>
            <TouchableOpacity style={s.bnts}>
                <Text>Your Account</Text>
            </TouchableOpacity>
            <TouchableOpacity style={s.bnts}>
                <Text>Your Order</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={logOutUser}
                style={{ ...s.bnts, backgroundColor: "#E74C3C" }}
            >
                <Text styles={s.text}>Sign Out</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Settings;

const s = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: "center",
        // alignItems: "center",
        backgroundColor: "#fff",
        paddingHorizontal: 30,
        // color: "#fff",
    },
    bnts: {
        marginTop: 12,
        // fontSize: 20,
        // fontFamily: "Montserrat-Medium",
        // lineHeight: 24,
        paddingLeft: 42,
        paddingVertical: 21,
        backgroundColor: "#c4c4c459",
        borderRadius: 30,
        // color: "#00000080",
    },
    text: {
        selectionColor: "#fff",
    },
});
