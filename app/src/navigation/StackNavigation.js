import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MovieDetailScreen from "../containers/screens/MovieDetailScreen";
import Dashboard from "../containers/tabscreens/Dashboard";

const HomeStack = createNativeStackNavigator();
const HomeStackScreen=()=> {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen   options={{
                headerShown: false,
            }} name="Home" component={Dashboard} />
            <HomeStack.Screen name="Details" options={{
                headerShown: false,
            }} component={MovieDetailScreen} />
        </HomeStack.Navigator>
    );
}
export default HomeStackScreen;
