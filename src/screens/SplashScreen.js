import React, { useState } from 'react';
import {
    View,
    Text,
    Button,
    TouchableOpacity,
    Dimensions,
    TextInput,
    Platform,
    StyleSheet,
    ScrollView,
    StatusBar, Image, SafeAreaView
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import { Picker } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useTheme, Avatar, Title, Caption, Paragraph, Drawer, TouchableRipple, Switch, } from 'react-native-paper';
// import { Provider, Portal, FAB } from 'react-native-paper';


const SplashScreeen = (props) => {

    
  setTimeout(() => {
     props.navigation.navigate('AnimationScreen') 
  }, 3000);



    return (
        <>
        <View style={{backgroundColor:'#c60017',width:'100%',height:'100%'}}>

        </View>
        </>
    );
};

export default SplashScreeen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#8d0000',
        color: '#fff',

    },
    containers: {
        color: '#fff',
        height: hp('100'),
    },
    textWrapper: {
        backgroundColor: '#4267B2',
        height: hp('100'),
        width: wp('100%'),
    },
    myText: {
        fontSize: hp('5%')
    },
    actions: {
        width: ('100%'),
        flexDirection: 'row',
        marginTop: 15,
        paddingLeft: 15,
        paddingBottom: 15,
        color: '#fff',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
});
