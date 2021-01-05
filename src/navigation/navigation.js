import { createAppContainer } from 'react-navigation';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import Icon from 'react-native-vector-icons/Ionicons';
// import FacebookFeed from '../screens/FacebookFeed';
// import FacebookNoti from '../screens/FacebookNoti';
// import FacebookSetting from '../screens/FacebookSetting';
// import FacebookProfile from '../screens/FacebookProfile';
import FacebookSignin from '../screens/FacebookSignin';
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Driver from '../screens/Driver';



const Tabs = createMaterialTopTabNavigator(
  {
    FacebookSignin: {
      screen: FacebookSignin,
      navigationOptions: {
        tabBarLabel: ({ tintColor }) => (
          <View style={styles.iconCOntainer}>
            <Text style={{ fontSize: hp('2.7%'), fontWeight: 'bold', }}>Fleet Manager</Text>
          </View>
        ),
      },
    },
    Driver: {
      screen: Driver,
      navigationOptions: {
        tabBarLabel: ({ tintColor }) => (
          <View style={styles.iconCOntainer}>
            <Text style={{ fontSize: hp('2.7%'), fontWeight: 'bold', }}>Driver</Text>
          </View>
        ),
      },
    },
  },
  {
    initialRouteName: 'FacebookSignin',
    lazyLoad: true,
    tabBarPosition: 'top',
    swipeEnabled: true,
    tabBarOptions: {
      style: {
        height: 50,
        backgroundColor: '#fff',
        // paddingBottom: 3,
        // paddingTop: 3,
      },
      indicatorStyle: {
        backgroundColor: 'red',
        elevation: 10,
      },
      activeTintColor: 'red',
      inactiveTintColor: 'gray',
    },
  },
);

const MainScreenNavigator = createStackNavigator({
  Tabs: {
    screen: Tabs,
    navigationOptions: {
      title: 'Login as',
      headerStyle: {
        backgroundColor: '#fff',
        // color: 'black'
      },
      headerTitleStyle: {
        // color: 'black',
        fontFamily: 'Roboto',
        fontSize: hp('2.2%'),
       
      },
    },
  },

});

export default createAppContainer(MainScreenNavigator);

const styles = StyleSheet.create({
  iconCOntainer: {
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
});