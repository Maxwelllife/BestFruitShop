import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { TouchableOpacity } from "react-native";

import HomeScreen from "./Screens/bottomTabBar/HomeScreen";
import NotificationsScreen from "./Screens/bottomTabBar/NotificationsScreen";
import AddScreen from "./Screens/bottomTabBar/AddScreen";
import ShopScreen from "./Screens/bottomTabBar/ShopScreen";
import SettingsScreen from "./Screens/bottomTabBar/SettingsScreen";
import Home from "./Components/Home";
import GoBack from "./Components/GoBack";
import Search from "./Components/Search";
import Basket from "./Components/Basket";
import Settings from "./Components/Settings";
import Notifications from "./Components/Notifications";
import AddButton from "./Components/AddButton";

const Tab = createBottomTabNavigator();
// createMaterialBottomTabNavigator;

function TabBarRouter() {
    return (
        <Tab.Navigator
            screenOptions={{
                headerTitleAlign: "center",
                tabBarShowLabel: false,
                tabBarStyle: {
                    height: 99,
                    // shadowColor: "#000",
                    // shadowOffset: {
                    //     width: 0,
                    //     height: 12,
                    // },
                    // shadowOpacity: 0.58,
                    // shadowRadius: 16.0,
                    // elevation: 24,
                },
            }}
        >
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={({ route }) => {
                    return {
                        title: "Home",
                        headerShown: false,
                        tabBarIcon: ({ focused }) => (
                            <Home stroke={focused ? "#F1C40F" : "#C0C0C0"} />
                        ),
                    };
                }}
            />
            <Tab.Screen
                name="Notifications"
                component={NotificationsScreen}
                options={({ navigation }) => {
                    return {
                        title: "Notifications",

                        tabBarIcon: ({ focused }) => (
                            <Notifications
                                stroke={focused ? "#F1C40F" : "#C0C0C0"}
                            />
                        ),
                    };
                }}
            />
            <Tab.Screen
                name="Add"
                component={AddScreen}
                options={({ navigation }) => {
                    return {
                        title: "Add fruit",
                        tabBarIconStyle: { position: "absolute", top: 15 },
                        tabBarIcon: () => <AddButton />,
                    };
                }}
            />

            <Tab.Screen
                name="Shop"
                component={ShopScreen}
                options={({ navigation }) => {
                    return {
                        title: "Shop/Cart",
                        headerLeft: () => (
                            <TouchableOpacity style={{ paddingLeft: 30 }}>
                                <GoBack />
                            </TouchableOpacity>
                        ),
                        headerRight: () => (
                            <TouchableOpacity style={{ paddingRight: 30 }}>
                                <Search width={38} height={38} />
                            </TouchableOpacity>
                        ),

                        tabBarIcon: ({ focused }) => (
                            <Basket stroke={focused ? "#F1C40F" : "#C0C0C0"} />
                        ),
                    };
                }}
            />
            <Tab.Screen
                name="Settings"
                component={SettingsScreen}
                options={({ navigation }) => {
                    return {
                        title: "Settings",
                        headerLeft: () => (
                            <TouchableOpacity style={{ paddingLeft: 30 }}>
                                <GoBack />
                            </TouchableOpacity>
                        ),
                        headerRight: () => (
                            <TouchableOpacity style={{ paddingRight: 30 }}>
                                <Search width={38} height={38} />
                            </TouchableOpacity>
                        ),
                        tabBarIcon: ({ focused }) => (
                            <Settings
                                stroke={focused ? "#F1C40F" : "#C0C0C0"}
                            />
                        ),
                    };
                }}
            />
        </Tab.Navigator>
    );
}

export default TabBarRouter;
