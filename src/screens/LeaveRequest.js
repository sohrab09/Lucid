import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SelectList from 'react-native-dropdown-select-list'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();


const LeaveRequest = () => {

  const [selected, setSelected] = React.useState("");

  const data = [
    {
      key: '1',
      value: 'Sick Leave',
    },
    {
      key: '2',
      value: 'Casual Leave',
    },
    {
      key: '3',
      value: 'Maternity Leave',
    },
  ];

  function Request() {
    return (
      <View style={{
        marginTop: 50,
        padding: 10,
      }}>
        <SelectList
          setSelected={setSelected}
          data={data}
        />
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

export default LeaveRequest

const styles = StyleSheet.create({})