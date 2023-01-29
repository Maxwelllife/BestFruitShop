import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Platform,
    KeyboardAvoidingView,
    Keyboard,
    TouchableWithoutFeedback,
    useWindowDimensions,
} from "react-native";

// import { register } from "../../redux/auth/auth-operations";

const initialState = {
    login: "",
    email: "",
    password: "",
    avatarURL: null,
};

export default function RegisterScreen({ navigation }) {
    const [state, setState] = useState(initialState);
    const [isShowKeyboard, setIsShowKeyboard] = useState(false);

    const { width } = useWindowDimensions();

    const dispatch = useDispatch();

    const handleSubmit = () => {
        dispatch(register(state));
        setState(initialState);
    };

    const keyboardHide = () => {
        Keyboard.dismiss();
    };

    useEffect(() => {
        const showSubscription = Keyboard.addListener("keyboardDidShow", () => {
            setIsShowKeyboard(true);
        });
        const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
            setIsShowKeyboard(false);
        });
        return () => {
            showSubscription.remove();
            hideSubscription.remove();
        };
    }, []);

    return (
        <View style={s.container}>
            <TouchableWithoutFeedback onPress={keyboardHide}>
                <View
                    style={{
                        ...s.form,
                        marginBottom: isShowKeyboard ? -180 : 0,
                        width: width,
                    }}
                >
                    <View>
                        <Text style={s.title}>Creat Account</Text>
                    </View>
                    <KeyboardAvoidingView
                        behavior={Platform.OS === "ios" ? "padding" : "height"}
                    >
                        <View style={{ marginTop: 90 }}>
                            <TextInput
                                style={s.input}
                                textAlign={"left"}
                                placeholder={"Email"}
                                value={state.login}
                                onChangeText={(value) =>
                                    setState((prevState) => ({
                                        ...prevState,
                                        login: value,
                                    }))
                                }
                            />
                        </View>
                        <View style={{ marginTop: 36 }}>
                            <TextInput
                                style={s.input}
                                textAlign={"left"}
                                placeholder={"Password"}
                                value={state.email}
                                onChangeText={(value) =>
                                    setState((prevState) => ({
                                        ...prevState,
                                        email: value,
                                    }))
                                }
                            />
                        </View>
                        <View style={{ marginTop: 36 }}>
                            <TextInput
                                style={s.input}
                                textAlign="left"
                                placeholder="Confirmation Password"
                                value={state.password}
                                onChangeText={(value) =>
                                    setState((prevState) => ({
                                        ...prevState,
                                        password: value,
                                    }))
                                }
                            />
                        </View>
                        <TouchableOpacity
                            style={s.btn}
                            activeOpacity={0.6}
                            onPress={handleSubmit}
                        >
                            <Text style={s.text}>Sign Up</Text>
                        </TouchableOpacity>
                        <View>
                            <Text
                                style={s.menuBtn}
                                onPress={() => navigation.navigate("Login")}
                            >
                                Sign In menu
                            </Text>
                        </View>
                    </KeyboardAvoidingView>
                </View>
            </TouchableWithoutFeedback>
        </View>
    );
}

const s = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },

    title: {
        textAlign: "center",
        fontSize: 25,
        fontFamily: "Montserrat-Bold",
    },

    form: {
        paddingTop: 121,
        paddingLeft: 30,
        paddingRight: 30,
        backgroundColor: "#FFFFFF",
    },
    input: {
        fontSize: 20,
        fontFamily: "Montserrat-Medium",
        lineHeight: 24,
        paddingLeft: 42,
        paddingVertical: 21,
        backgroundColor: "#c4c4c459",
        borderRadius: 30,
        color: "#00000080",
    },

    btn: {
        padding: 18,
        marginTop: 127,
        borderRadius: 30,
        borderWidth: 1,
        ...Platform.select({
            ios: { borderColor: "#E8E8E8", backgroundColor: "#F1C40F" },
            android: { borderColor: "#E8E8E8", backgroundColor: "#FF6C00" },
        }),
    },
    text: {
        textAlign: "center",
        color: "#fff",
        fontFamily: "Montserrat-Bold",
        fontSize: 25,
    },
    menuBtn: {
        marginTop: 95,
        textAlign: "center",
        fontSize: 20,
        fontFamily: "Montserrat-Medium",
        color: "#F1C40F",
    },
});
