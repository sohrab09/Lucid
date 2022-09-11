import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SelectList from 'react-native-dropdown-select-list'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

const EarlyLeave = () => {




  function Request() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
         <Text>Request!</Text>
      </View>
    );
  }

  function Pending() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Pending!</Text>
      </View>
    );
  }

  function Approve() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Approve!</Text>
      </View>
    );
  }


  return (
    <Tab.Navigator>
      <Tab.Screen name="Request" component={Request} />
      <Tab.Screen name="Pending" component={Pending} />
      <Tab.Screen name="Approve" component={Approve} />
    </Tab.Navigator>
  )
}

export default EarlyLeave

const styles = StyleSheet.create({})