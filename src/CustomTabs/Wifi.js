import React, { useState } from 'react'
import { StyleSheet, Text, View, Button, Alert } from 'react-native'
import moment from 'moment';

const Wifi = () => {

  const [date, setDate] = useState(new Date());


  return (
    <View>
      <View style={styles.dateContainer}>
        <Text style={styles.date}>
          {moment(date).format('ddd, D MMM YYYY')}
        </Text>
      </View>
      <View style={styles.wifiContainer}>
        <Text style={styles.wifiName}>NASSA</Text>
        <Text style={styles.wifiText}>Wifi Name</Text>
        <View style={styles.buttons}>
          <Button
            title='Present'
            onPress={() => Alert.alert('Sorry', 'API is not ready', [
              { text: 'Understood' }
            ])}
          />
          <Button
            title='Out'
            onPress={() => Alert.alert('Sorry', 'API is not ready', [
              { text: 'Understood' }
            ])}
          />
        </View>
      </View>
    </View>
  )
}

export default Wifi

const styles = StyleSheet.create({
  container: {
      flex: 1,
  },
  header: {
      fontSize: 24,
      fontWeight: "bold",
  },
  dateContainer: {
      marginVertical: 10,
      padding: 10,
      alignItems: "center",
  },
  date: {
      fontSize: 14,
      fontWeight: "bold",
      color: "#888",
  },
  wifiContainer: {
      marginVertical: 150,
      padding: 10,
      alignItems: "center",
  },
  wifiName: {
      fontSize: 32,
      fontWeight: "bold",
      textTransform: "uppercase",
      marginBottom: 5,
  },
  wifiText: {
      fontSize: 14,
      fontWeight: "thin",
      color: "#888",
  },
  buttons: {
      flexDirection: "row",
      justifyContent: "space-around",
      width: 200,
      marginTop: 20,
  },

  footer: {
      padding: 20,
      backgroundColor: '#eee',
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "center",
  },
  footerText: {
      fontSize: 12,
      color: "#888",
      textAlign: "center",
  },
});