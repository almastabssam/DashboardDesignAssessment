import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {NavigationContainer} from "@react-navigation/native";
import HomeStackScreen from "./StackNavigation";
import Collaboraters from "../containers/tabscreens/Collaboraters";
import {
    View, Image,
} from 'react-native';
import {Images} from "../../config/Images";
import Colors from "../../config/Colors";
const TabContainer = () => {
    const Tab = createBottomTabNavigator();
    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={{
                tabBarStyle: { backgroundColor: Colors.black,
                    borderRadius: 20,
                    marginBottom: 10,
                    marginTop: 5,
                    paddingHorizontal: 12,
                    paddingTop: 12,
                    height: 60,
                    marginHorizontal: 5,
                    position: "absolute" },

            }}>
                <Tab.Screen options={{
                    headerShown: false,
                    tabBarLabel: '',
                    tabBarIcon: ({focused}) => {
                        return (
                            <View>
                                <Image
                                    source={Images.dashboard}
                                    style={{
                                        width: 20,
                                        height: 18,
                                        tintColor: focused ? '#5136FF' : '#FFF',
                                    }}
                                />
                            </View>
                        );
                    },
                }} name="Dashboard" component={HomeStackScreen} />
                <Tab.Screen options={{
                    headerShown: false,
                    tabBarLabel: '',
                    tabBarIcon: ({focused}) => {
                        return (
                            <View>
                                <Image
                                    source={Images.colUsers}
                                    style={{
                                        width: 20,
                                        height: 18,
                                        tintColor: focused ? '#5136FF' : '#FFF',
                                    }}
                                />
                            </View>
                        );
                    },
                }} name="Collaboraters" component={Collaboraters} />
            </Tab.Navigator>
        </NavigationContainer>
    );
};
export default TabContainer;
const navigationTheme = {
    colors: {
        background: "transparent",
    },
};
