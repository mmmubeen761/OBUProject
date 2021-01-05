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

const FacebookProfile = () => {


    return (
        <>

            <SafeAreaView>
                <View style={styles.containers}>
                    <View style={styles.actio}>
                        <View>
                            <Text style={{ fontSize: 24, fontWeight: 'bold', fontFamily: 'Roboto', paddingTop: '20%',textAlign:'center'}}>
                                Transfer an Onboard Unit
                </Text>
                        </View>
                        <View>
                            <Text style={{ fontSize: 16, fontFamily: 'Roboto', paddingBottom: 85, paddingTop: 20,textAlign:'center' }}>
                             Onboard Unit is transferred from vehicle K SC 2275 D OA 701
                 </Text>
                        </View>
                        <View>
                            <View style={{ justifyContent: 'center', }}>
                                <Image
                                    style={{ resizeMode: 'contain', width: '80%', alignSelf: 'center' }}
                                    source={require('../images/DoneIcon.png')}
                                    size={200}
                                />
                            </View>
                        </View>
                        <View>
                            <Text style={{ fontSize: 16, fontFamily: 'Roboto', padding: 15, paddingTop: 70,textAlign:'center' }}>
                                You will receive an email in a while
                </Text>
                        </View>
                        <View>
                         <Text style={{ fontSize: 16, fontFamily: 'Roboto',color:'black',textAlign:'center' }}>
                            <Text style={{ fontSize: 16, fontFamily: 'Roboto', padding: 15, paddingTop: 10,color:'red' }}>
                                Please note:
                         </Text>
                                The license plate change can take upto 3 workin days. During this time you can not use the mautbox in any vehicle
                         </Text>
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        </>
    );
};

export default FacebookProfile;

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
});
