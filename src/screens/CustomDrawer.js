import * as React from 'react';
import { View, Text, Image, ImageBackground } from 'react-native';
import {
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
    useDrawerProgress,
} from '@react-navigation/drawer';
import Animated from 'react-native-reanimated';

export default function CustomDrawer(props) {
    const progress = useDrawerProgress();

    const translateX = Animated.interpolateNode(progress, {
        inputRange: [0, 1],
        outputRange: [-100, 0],
    });

    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView
                {...props}
            // contentContainerStyle={{ backgroundColor: '#8200d6' }}
            >
                <ImageBackground>
                    <View
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            padding: 20,
                        }}
                    >
                        <Image
                            source={require('../../assets/NassaLogo.png')}
                            style={{
                                width: 60,
                                height: 60,
                                borderRadius: 50,
                                marginTop: 20
                            }}
                        />
                        <Text
                            style={{
                                fontSize: 20,
                                fontWeight: 'bold',
                                marginTop: 20
                            }}
                        >NASSA HR</Text>
                    </View>
                    <View style={{ padding: 20 }}>
                        <Text>Mohammad Sohrab Hossain</Text>
                        <Text>sohrab@nassagroup.org</Text>
                    </View>
                </ImageBackground>
                <Animated.View style={{ transform: [{ translateX }] }}>
                    <DrawerItemList {...props} />
                </Animated.View>
            </DrawerContentScrollView>
        </View>
    );
}