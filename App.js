import { StatusBar } from "expo-status-bar";
import { View, Text } from "react-native";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";

import MainRouter from "./src/MainRouter";
import { useCallback, useEffect, useState } from "react";
import { Provider } from "react-redux";
import { store } from "./src/redux/store";

SplashScreen.preventAutoHideAsync();

export default function App() {
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        async function prepare() {
            try {
                await Font.loadAsync({
                    "Roboto-light": require("./assets/fonts/Roboto-Light.ttf"), //300
                    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"), //400
                    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"), //500
                    "Montserrat-Medium": require("./assets/fonts/Montserrat-Medium.ttf"), //500
                    "Montserrat-SemiBold": require("./assets/fonts/Montserrat-SemiBold.ttf"), //600
                    "Montserrat-Bold": require("./assets/fonts/Montserrat-Bold.ttf"), //700
                });
            } catch (e) {
                console.warn(e);
            } finally {
                setIsReady(true);
            }
        }
        prepare();
    }, []);

    const onLayoutRootView = useCallback(async () => {
        if (isReady) {
            await SplashScreen.hideAsync();
        }
    }, [isReady]);

    if (!isReady) {
        return null;
    }

    return (
        <Provider store={store}>
            {/* <Provider> */}
            <View onLayout={onLayoutRootView} style={{ height: "100%" }}>
                <MainRouter />
            </View>
            <StatusBar style="auto" />
        </Provider>
    );
}
