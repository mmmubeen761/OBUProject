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
    StatusBar,
    Image
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import { Picker } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


const Home = (props) => {
    const [data, setData] = React.useState({
        username: '',
        password: '',
        confirm_password: '',
        check_textInputChange: false,
        secureTextEntry: true,
        confirm_secureTextEntry: true,
    });

    const textInputChange = (val) => {
        if (val.length !== 0) {
            setData({
                ...data,
                username: val,
                check_textInputChange: true
            });
        } else {
            setData({
                ...data,
                username: val,
                check_textInputChange: false
            });
        }
    }

    const handlePasswordChange = (val) => {
        setData({
            ...data,
            password: val
        });
    }

    const handleConfirmPasswordChange = (val) => {
        setData({
            ...data,
            confirm_password: val
        });
    }

    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        });
    }

    const updateConfirmSecureTextEntry = () => {
        setData({
            ...data,
            confirm_secureTextEntry: !data.confirm_secureTextEntry
        });
    }


    return (
        <>

            <View style={styles.textWrapper}>
                <View>
                    <Text style={{ paddingLeft: 20, fontSize: 16, fontFamily: "roboto",  }}>Login as</Text>
                    <View style={{ flexDirection: "row" }}>
                        <View style={{ width: '50%' }}>
                            <Text style={{ paddingTop: 20, alignSelf: 'center', fontSize: 20, fontWeight: 'bold', fontFamily: "roboto", borderBottomWidth: 2, borderBottomColor: 'red', }}>Fleet Manager</Text>
                        </View>
                        <View style={{ width: '50%' }}>
                            <Text style={{ paddingTop: 20, alignSelf: 'center', fontSize: 20, fontWeight: 'bold', fontFamily: "roboto" }} onPress={() => props.navigation.navigate('Driver')}>Driver</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.logincontainer}>
                    <View style={styles.action}>
                        <Image source={require('../images/UserName.png')} style={{ resizeMode: 'contain', width: '10%', }} />
                        <TextInput
                            placeholder="Enter your portal user name"
                            placeholderTextColor="black"
                            style={styles.textInput}
                            autoCapitalize="none"
                            onChangeText={(val) => textInputChange(val)}
                        />
                    </View>

                    <View style={styles.action}>
                        <Image source={require('../images/key.png')} style={{ resizeMode: 'contain', width: '10%' }} />
                        <TextInput
                            placeholder="Enter your portal password"
                            placeholderTextColor="black"
                            secureTextEntry={data.confirm_secureTextEntry ? true : false}
                            style={styles.textInput}
                            autoCapitalize="none"
                            onChangeText={(val) => textInputChange(val)}
                        />
                    </View>
                </View>
                <View>
                    <Text style={styles.actio} onPress={() => props.navigation.navigate('FacebookFeed')}>Login</Text>
                </View>
            </View>

        </>
    );
};

export default Home;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        // height: '100%'
    },
    logincontainer: {
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: wp('10'),
        color: 'black',
    },
    textWrapper: {
        backgroundColor: '#fff',
        height: hp('100'), // 70% of height device screen
        width: wp('100%'),   // 80% of width device screen
        paddingTop: wp('30'),

    },
    myText: {
        fontSize: hp('5%') // End result looks like the provided UI mockup
    },
    action: {
        width: ('80%'),   // 80% of width device screen
        flexDirection: 'row',
        marginTop: 20,
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        paddingBottom: 5,
        color: 'black',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: 'black',
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
    }, actio: {
        width: ('30%'),
        // flex: 1,
        // position: 'absolute',
        bottom: 50,
        alignSelf: 'flex-end',
        top: '40%',
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
});
