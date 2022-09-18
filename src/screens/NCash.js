import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

const NCash = () => {

  const [taka, setTaka] = useState(0)

  return (
    <View>
      <Text style={{
        color: taka > 0 ? 'green' : 'red',
        fontSize: taka > 0 ? 30 : 20,
        fontWeight: taka < 0 ? 'bold' : 'normal',
        textAlign: 'center',
        marginTop: 100,
      }}>
        {
          taka <= 0 ? 'Please Recharge' : taka
        }
      </Text>
      <Text style={{
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
      }}>
        Your current balance.
      </Text>
    </View>
  )
}

export default NCash

const styles = StyleSheet.create({})