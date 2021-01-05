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
    StatusBar, Image, SafeAreaView, ImageBackground, Animated
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import { Picker } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useTheme, Avatar, Title, Caption, Paragraph, Drawer, TouchableRipple, Switch, } from 'react-native-paper';
import Logosvg from '../images/Load.svg';



const Load = (props) => {
    
    const { navigate } = props.navigation; 
    const position = new Animated.ValueXY({ x: -150, y: 0 })
    Animated.timing(position, {
        toValue: { x: 290, y: 800 },
        duration: 4000,
    }
    ).start(() => props.navigation.navigate('FacebookProfile'))


    return (
        <>

            <SafeAreaView>

                <ImageBackground source={require('../images/bg.png')} style={{ width: '100%', height: '100%' }}>
                    <View style={styles.containers}>
                        <View style={styles.actio}>
                            <View style={{ felx: 1, justifyContent: 'center', alignItems: 'center', }}>
                                <Text style={{ paddingTop: '50%', fontSize: 20, fontFamily: 'Roboto', padding: 15, fontWeight: 'bold' }}>
                                    Verifying and Processing
                             </Text>
                            </View>
                            <View>
                                <View>
                                    <Animated.View style={{
                                        height: 300,
                                        width: 300,
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        transform: [
                                            { translateX: position.x },

                                        ]
                                    }} >
                                        <Image
                                            style={{ resizeMode: 'contain', width: '100%', paddingTop: '60%', marginTop: '-15%' }}
                                            source={require('../images/Load.png')}
                                            // size={500}
                                            width="100%"
                                            height="100%"
                                        />
                                    </Animated.View>
                                </View>
                            </View>
                        </View>
                    </View>
                </ImageBackground>
            </SafeAreaView>
        </>
    );
};

export default Load;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#8d0000',
        color: '#fff',

    },
    containers: {
        color: '#fff',
        height: hp('100'), // 70% of height device screen
    },
    logincontainer: {
        backgroundColor: '#4267B2',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: wp('10'),
        color: '#fff',
    },
    textWrapper: {
        backgroundColor: '#4267B2',
        height: hp('100'), // 70% of height device screen
        width: wp('100%'),   // 80% of width device screen
    },
    myText: {
        fontSize: hp('5%') // End result looks like the provided UI mockup
    },
    actions: {
        width: ('100%'),   // 80% of width device screen
        flexDirection: 'row',
        marginTop: 15,
        paddingLeft: 15,
        paddingBottom: 15,
        color: '#fff',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    textInput: {
    },
    action: {
        width: ('30%'),
        // flex: 1,
        // position: 'absolute',
        bottom: 50,
        alignSelf: 'flex-end',
        top: 140,
        right: 10,
        color: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20,
        flexDirection: 'column',
        paddingBottom: 5,
        paddingTop: 5,
        paddingLeft: 30,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        borderTopLeftRadius: 50,
        borderBottomRightRadius: 50,
        borderBottomLeftRadius: 50,
        borderTopRightRadius: 50,
        backgroundColor: '#c60017',
        color: 'white'
    },
    button: {
        alignItems: 'center',
        marginTop: 50,
    },
    signIn: {
        width: '90%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    image: {
        flex: 1,
        resizeMode: "contain",
        justifyContent: "center"
    }
});
