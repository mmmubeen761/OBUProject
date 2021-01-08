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
import { Provider, Portal, FAB } from 'react-native-paper';


const FABScreen = (props) => {
    const [state, setState] = React.useState({ open: false });

    const { open } = state;
    const onStateChange = ({ open }) => setState({ open });

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

                <SafeAreaView>
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

                        </View>
                    </View>
                </SafeAreaView>
                    </ScrollView>
                <Provider >
                    <Portal>
                        <FAB.Group
                            fabStyle={{ backgroundColor: '#c60017' }}
                            style={styles.fab}
                            color="white"
                            open={open}
                            icon={open ? 'close' : 'menu'}
                            onStateChange={onStateChange}
                            actions={[
                                {
                                    icon: 'barcode',
                                    onPress: () => props.navigation.navigate('ScanVehicle'),
                                    label: "Scan number",
                                },
                                {
                                    icon: 'pen',
                                    onPress: () => props.navigation.navigate('MainScreLoaden'),
                                    label: "Type number"
                                },
                            ]}
                        />
                    </Portal>
                </Provider>
        </>
    );
};

export default FABScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#8d0000',
        color: '#fff',

    },
    containers: {
        color: '#fff',
        height: hp('100'),
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
    textInput: {
    },
    signIn: {
        width: '90%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    }, fab: {
        position: 'absolute',
        // margin: 16,
        right: 0,
        bottom: 0,
        color: 'red'
        // backgroundColor: 'red'
    },
});
