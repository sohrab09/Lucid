import { StyleSheet, Dimensions, View, Button, Pressable, Text, Alert } from 'react-native'
import React from 'react'
import MapView, { Callout, Circle, Marker } from "react-native-maps"
import SelectList from 'react-native-dropdown-select-list'

const Location = () => {

  // const [pin, setPin] = React.useState({
  //   latitude: 37.78825,
  //   longitude: -122.4324
  // })
  // const [region, setRegion] = React.useState({
  //   latitude: 37.78825,
  //   longitude: -122.4324,
  //   latitudeDelta: 0.0922,
  //   longitudeDelta: 0.0421
  // })

  const [selected, setSelected] = React.useState("");

  const data = [
    {
      key: '1',
      value: 'AJ Super Garments',
    },
    {
      key: '2',
      value: 'Nassa Heights',
    },
    {
      key: '3',
      value: 'Basic Complex',
    },
    {
      key: '4',
      value: 'Head Office',
    },
    {
      key: '5',
      value: 'Kimia Complex',
    },
    {
      key: '6',
      value: 'Liz Complex',
    },
    {
      key: '7',
      value: 'Liz Complex Ltd',
    },
    {
      key: '8',
      value: 'Nassa Complex',
    },
    {
      key: '9',
      value: 'Nassa Supreme Wash Limited',
    },
    {
      key: '10',
      value: 'Ssain Apparels',
    },
  ];

  return (
    <View style={styles.container}>

      {/* <MapView
        style={styles.map}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        }}
        provider="google"
      >
        <Marker coordinate={{ latitude: region.latitude, longitude: region.longitude }} />
        <Marker
          coordinate={pin}
          pinColor="black"
          draggable={true}
          onDragStart={(e) => {
            console.log("Drag start", e.nativeEvent.coordinates)
          }}
          onDragEnd={(e) => {
            setPin({
              latitude: e.nativeEvent.coordinate.latitude,
              longitude: e.nativeEvent.coordinate.longitude
            })
          }}
        >
          <Callout>
            <Text>I'm here</Text>
          </Callout>
        </Marker>
        <Circle center={pin} radius={1000} />
      </MapView> */}
      <View
        style={{ marginBottom: 10, backgroundColor: "#fff" }}
      >
        <SelectList
          setSelected={setSelected}
          data={data}
        />
      </View>
      <MapView style={styles.map} />

      <View style={styles.buttons}>
        <Pressable
          onPress={() => Alert.alert('Sorry', 'API is not ready', [
            { text: 'Understood' }
          ])}
          style={styles.button}
        >
          <Text style={{ color: 'green', textTransform: 'uppercase', fontWeight: 'bold' }}>Present</Text>
        </Pressable>
        <Pressable
          onPress={() => Alert.alert('Sorry', 'API is not ready', [
            { text: 'Understood' }
          ])}
          style={styles.button}
        >
          <Text style={{ color: 'red', textTransform: 'uppercase', fontWeight: 'bold' }}>Out</Text>
        </Pressable>
      </View>
    </View>
  )
}

export default Location

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  map: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  buttons: {
    padding: 5,
    flexDirection: "row",
    justifyContent: "space-around",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "#fff",
    padding: 10,
    margin: 5,
    borderRadius: 5,
    borderWidth: 1.5,
    borderColor: "#ccc",
    width: "50%",
    alignItems: "center",
  }
})