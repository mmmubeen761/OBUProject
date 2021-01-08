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


const theme = {
    roundness: 2,
    backgroundColor: {
        primary: '#8d0000',
        accent: '#8d0000',
    },
};

const ScanVehicle = (props) => {
  
    return (
        <>

            <View style={styles.container}>
                <View style={styles.actions}>
                    <FontAwesome
                        name="arrow-left"
                        color="#fff"
                        size={25}
                    />
                    <Text style={{ flex: 1, justifyContent: 'center', alignItems: "center", color: '#fff', fontSize: 24, fontFamily: 'Roboto', paddingLeft: 65 }}>Lorem Ipsum</Text>
                </View>
            </View>
            <ScrollView>

                <SafeAreaView>
                    <View style={styles.containers}>
                        <View style={styles.actio}>
                            <View>
                                <Text style={{ fontSize: 20, fontWeight: 'bold', fontFamily: 'Roboto', padding: 15, textAlign: 'center', paddingBottom: 85 }}>
                                    Scan new vehicle licence plate
                </Text>
                            </View>
                            <View>
                                <View style={{ justifyContent: 'center', }}>
                                    <Image
                                        style={{ resizeMode: 'contain', width: '80%', alignSelf: 'center' }}
                                        source={require('../images/Scan.png')}
                                        size={200}
                                    />
                                </View>
                            </View>
                        </View>

                    </View>
                </SafeAreaView>
            </ScrollView>
            <View style={{ alignSelf: 'center', position: 'absolute', bottom: 20 }}>
                <FontAwesome name="barcode" style={{ fontSize: 20, backgroundColor: '#c60017', borderRadius: 50, padding: 10, color: 'white' }} onPress={() => props.navigation.navigate('TransferOBU')} />
            </View>
            <View style={{ position: 'absolute', bottom: 20, alignSelf: 'flex-end', paddingRight: 20 }}>
                <FontAwesome name="pen" style={{ fontSize: 20, backgroundColor: 'gray', borderRadius: 50, padding: 10, color: 'white' }} />
            </View>
        </>
    );
};

export default ScanVehicle;

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
