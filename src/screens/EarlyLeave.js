import { StyleSheet, Text, View, TextInput, Pressable, Alert } from 'react-native'
import React from 'react'
import RadioButtonRN from 'radio-buttons-react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

const Tab = createMaterialTopTabNavigator();

const EarlyLeave = () => {

  const data = [
    {
      label: '1st Half'
    },
    {
      label: '2nd Half'
    }
  ];


  function Request() {
    return (
      <View style={{ marginTop: '10%' }}>
        <View>
          <RadioButtonRN
            data={data}
            // selectedBtn={(e) => console.log(e)}
            box={false}
            icon={
              <Icon
                name="check-circle"
                size={25}
                color="#2c9dd1"
              />
            }
          />
        </View>
        <View>
          <TextInput
            style={styles.input}
            placeholder="Remarks"
            placeholderTextColor="#ccc"
          />
        </View>
        <View>
          <Text>In Time</Text>
          <TextInput
            style={styles.input2}
            placeholder="In Time"
            placeholderTextColor="#ccc"
          />
        </View>

        <View>
          <Pressable
            onPress={() => Alert.alert('Sorry', 'API is not ready', [
              { text: 'Understood' }
            ])}
            style={styles.button}
          >
            <Text style={{ color: '#ccc', textTransform: 'uppercase', fontWeight: 'bold' }}>Confirm</Text>
          </Pressable>
        </View>
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

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    margin: "5%",
    padding: "5%",
    borderColor: '#ccc',
    borderRadius: 10,
    height: 100,
  },
  input2: {
    borderWidth: 1,
    margin: "5%",
    padding: "5%",
    borderColor: '#ccc',
    borderRadius: 10,
    // height: 50,

  },

  button: {
    backgroundColor: "#fff",
    padding: 10,
    margin: 15,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#ccc",
    width: "50%",
    marginLeft: '25%',
    alignItems: "center",
  }
})