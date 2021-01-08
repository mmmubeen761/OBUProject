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
        useNativeDriver: true,

    }
    ).start(() => props.navigation.navigate('EndScreen'))


    return (
        <>

            <SafeAreaView>

                <ImageBackground source={require('../images/bg.png')} style={{ width: '100%', height: '100%' }}>
                    <View style={{ felx: 1, justifyContent: 'center', alignItems: 'center', }}>
                        <Text style={{ paddingTop: '47%', fontSize: 20, fontFamily: 'Roboto', padding: 15, fontWeight: 'bold' }}>
                            Verifying and Processing
                             </Text>
                    </View>
                    <View >
                        <View >
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
    containers: {
        color: '#fff',
        height: hp('100')
    },
});
