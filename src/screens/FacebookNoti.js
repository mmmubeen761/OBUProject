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
    ScrollView, Modal,
    TouchableHighlight, Alert,
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

const FacebookNoti = (props) => {
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

    const [modalVisible, setModalVisible] = useState(false);
    return (
        <>


            <View style={styles.container}>
                <View style={styles.actions}>
                    <FontAwesome
                        name="bars"
                        color="#fff"
                        size={25}
                    />
                    <Text style={{ flex: 1, justifyContent: 'center', alignItems: "center", color: '#fff', fontSize: 24, fontFamily: 'Roboto', paddingLeft: 65 }}>Lorem Ipsum</Text>
                </View>
            </View>
            <ScrollView>
                <View style={styles.containers}>
                    <View style={styles.actio}>
                        <View>
                            <Text style={{ fontSize: 24, fontWeight: 'bold', fontFamily: 'Roboto', padding: 15 }}>
                                Transfer an Onboard Unit
                </Text>
                        </View>
                        <View>
                            <Text style={{ fontSize: 16, fontFamily: 'Roboto', padding: 15, paddingTop: 0 }}>
                                Please scan or type new vehicle license plate number to transfer this OBU into new vehicle
                </Text>
                        </View>
                        <View>
                            <View style={{ justifyContent: 'center', }}>
                                <Image
                                    style={{ resizeMode: 'contain', width: '80%', alignSelf: 'center' }}
                                    source={require('../images/OBUIcon.png')}
                                    size={200}
                                />
                            </View>
                        </View>
                        <View>
                            <Text style={{ fontSize: 16, fontFamily: 'Roboto', padding: 15, paddingTop: 20 }}>
                                Current Vehicle license plate
                </Text>
                        </View>
                        <View>
                            <View style={{ justifyContent: 'center', }}>
                                <Image
                                    style={{ resizeMode: 'contain', width: '80%', alignSelf: 'center' }}
                                    source={require('../images/L1.png')}
                                    size={200}
                                />
                            </View>
                        </View>
                        <View>
                            <Text style={{ fontSize: 16, fontFamily: 'Roboto', padding: 15, paddingTop: 20 }}>
                                Current Vehicle license plate
                       </Text>
                        </View>
                        <View>
                            <View style={{ justifyContent: 'center', }}>
                                <Image
                                    style={{ resizeMode: 'contain', width: '80%', alignSelf: 'center' }}
                                    source={require('../images/L1.png')}
                                    size={200}
                                />
                            </View>
                        </View>
                        <View>
                            <Text style={styles.action} onPress={() => {
                                setModalVisible(true)
                            }}>Transfer</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.centeredView}>
                    <Modal
                        animationType="fade"
                        transparent={true}
                        visible={modalVisible}
                        onRequestClose={() => {
                            Alert.alert("Modal has been closed.");
                        }}
                    >
                        <View style={styles.centeredView}>
                            <View style={styles.modalView}>
                            <View>
                            <Text style={{ fontSize: 16, fontFamily: 'Roboto', padding: 15, paddingTop: 20,fontWeight:'bold',textAlign:'center' }}>
                            Transfer an Onboard Unit
                       </Text>
                        </View>
                        <View>
                            <Text style={{ fontSize: 14, fontFamily: 'Roboto', padding: 10, paddingTop: 1 }}>
                            Are you sure you want to  transfer Onboard Unit number 00049 0000001315 01676 1515 from vehicle K SC 2275 to D OA 701
                       </Text>
                        </View>

                                <View style={styles.btn}>
                                    <TouchableHighlight
                                        style={{ ...styles.openButton, backgroundColor: "#2196F3", flex: 1 }}
                                        onPress={() => {
                                            setModalVisible(!modalVisible);
                                        }}
                                    >
                                        <Text style={styles.textStyle}>Cancel</Text>
                                    </TouchableHighlight>
                                    <TouchableHighlight
                                        style={{ ...styles.openButton, backgroundColor: "#c60017", flex: 1 }}
                                       
                                    >
                                        <Text style={styles.textStyle} onPress={() => props.navigation.navigate('Load',setModalVisible(!modalVisible))}>Transfer</Text>
                                    </TouchableHighlight>
                                </View>
                            </View>
                        </View>
                    </Modal>
                </View>
            </ScrollView>
        </>
    );
};

export default FacebookNoti;

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
        top: '15%',
        right: 10,
        color: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20,
        flexDirection: 'column',
        paddingBottom: 8,
        paddingTop: 8,
        paddingLeft: 20,
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
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 5,
        padding: 15,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 10,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    openButton: {
        backgroundColor: "#F194FF",
        borderRadius: 5,
        padding: 10,
        elevation: 2,
        margin: 1
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    }, btn: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop:10
    }
});
