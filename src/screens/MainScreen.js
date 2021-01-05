import React,{useState} from 'react';
import { View, Text, Button, TouchableOpacity, Dimensions, TextInput, Platform, StyleSheet, ScrollView, StatusBar } from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import { Picker } from "react-native";
import Navigation from '../navigation/navigation';


const MainScreen = (props) => {

   

    return (
        <>
        <View style={styles.container}>
        <Navigation />
        </View>
        </>
        
        // <View style={styles.container}>
        //     <StatusBar backgroundColor='#009387' barStyle="light-content" />
        //     <View style={styles.header}>
        //         <Text style={styles.text_header}>World Memon Organization !</Text>
        //     </View>
        //     <Animatable.View
        //         animation="fadeInUpBig"
        //         style={styles.footer}
        //     >
        //         <ScrollView>
                  
        //             <View style={styles.button}>
        //                 <TouchableOpacity
        //                     style={styles.signIn}
        //                         onPress={() => props.navigation.navigate("Home")}
        //                     >
        //                     <LinearGradient
        //                         colors={['#08d4c4', '#01ab9d']}
        //                         style={styles.signIn}
        //                     >
        //                         <Text style={[styles.textSign, {
        //                             color: '#fff'
        //                         }]}>Sign Up Form</Text>
        //                     </LinearGradient>
        //                 </TouchableOpacity>
        //             </View>
        //         </ScrollView>
        //     </Animatable.View>
        // </View>
    );
};

export default MainScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop:'30%',
        
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: Platform.OS === 'ios' ? 3 : 5,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    textPrivate: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 20
    },
    color_textPrivate: {
        color: 'grey'
    }
});