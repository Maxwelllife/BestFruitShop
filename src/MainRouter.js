import React, { useEffect, useState } from "react";
import {
    NavigationContainer,
    useNavigationContainerRef,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import PreviewScreen from "./Screens/auth/PreviewScreen";
import RegisterScreen from "./Screens/auth/RegisterScreen";
import LoginScreen from "./Screens/auth/LoginScreen";
import TabBarRouter from "./TabBarRouter";

import { useDispatch, useSelector } from "react-redux";
import { getCurrentUser } from "./redux/auth/auth-operations";
import { getAuthStore } from "./redux/auth/auth-selectors";

const StartStack = createStackNavigator();
const UserStack = createStackNavigator();

const MainRouter = () => {
    const navigationRef = useNavigationContainerRef();

    const { userId } = useSelector(getAuthStore);
    const dispatch = useDispatch();

    useEffect(() => {
        if (userId === null) {
            dispatch(getCurrentUser());
        }

        navigationRef.navigate(userId ? "TabRouter" : "Preview");
        // navigationRef.navigate(userId ? "Preview" : "TabRouter");
    }, [userId]);

    return (
        <NavigationContainer ref={navigationRef}>
            <StartStack.Navigator screenOptions={{ headerShown: false }}>
                <StartStack.Screen name="Preview" component={PreviewScreen} />
                <StartStack.Screen name="Register" component={RegisterScreen} />
                <StartStack.Screen name="Login" component={LoginScreen} />
                <UserStack.Screen name="TabRouter" component={TabBarRouter} />
            </StartStack.Navigator>
        </NavigationContainer>
    );
};

export default MainRouter;
