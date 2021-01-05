import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from '../screens/MainScreen';
import FacebookFeed from '../screens/FacebookFeed';
import FacebookSignin from '../screens/FacebookSignin';
import FacebookNoti from '../screens/FacebookNoti';
import FacebookSetting from '../screens/FacebookSetting';
import FacebookProfile from '../screens/FacebookProfile';
import Load from '../screens/Load';
import Driver from '../screens/Driver';

const Stack = createStackNavigator();

function StartNavigation(props) {

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerShown: false
            }}>
                <Stack.Screen name="FacebookSignin" component={FacebookSignin} />
                <Stack.Screen name="MainScreen" component={MainScreen} />
                <Stack.Screen name="FacebookFeed" component={FacebookFeed} />
                <Stack.Screen name="Driver" component={Driver} />
                <Stack.Screen name="FacebookSetting" component={FacebookSetting} />
                <Stack.Screen name="FacebookNoti" component={FacebookNoti} />
                <Stack.Screen name="FacebookProfile" component={FacebookProfile} />
                <Stack.Screen name="Load" component={Load} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}


export default StartNavigation;

