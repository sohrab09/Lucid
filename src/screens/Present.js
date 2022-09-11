import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import Wifi from '../CustomTabs/Wifi';
import Location from '../CustomTabs/Location';
import { StyleSheet } from 'react-native'


const Tab = createMaterialBottomTabNavigator();


export default function Present() {
    return (
            <Tab.Navigator
                initialRouteName="Wifi"
                activeColor="#fff"
            >
                <Tab.Screen
                    name="Wifi"
                    component={Wifi}
                    options={{
                        tabBarLabel: 'Wifi',
                        tabBarIcon: ({ color }) => (
                            <MaterialCommunityIcons name="wifi" color={color} size={24} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Location"
                    component={Location}
                    options={{
                        tabBarLabel: 'Location',
                        tabBarIcon: ({ color }) => (
                            <MaterialIcons name="location-on" color={color} size={24} />
                        ),
                    }}
                />
            </Tab.Navigator>
    );
}

const styles = StyleSheet.create({});