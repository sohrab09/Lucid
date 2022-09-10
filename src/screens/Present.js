import React, { useState } from 'react'
import { StyleSheet, Text, View, Image, Button, Alert } from 'react-native'
import moment from 'moment';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

const Present = () => {

    const [date, setDate] = useState(new Date());

    return (
        <View style={styles.container}>
            <View style={styles.dateContainer}>
                <Text style={styles.date}>
                    {moment(date).format('ddd, D MMM YYYY')}
                </Text>
            </View>
            <View style={styles.wifiContainer}>
                <Text style={styles.wifiName}>NASSA</Text>
                <Text style={styles.wifiText}>Wifi name</Text>
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
            <View style={styles.footer}>
                <View style={{ textAlign: 'center' }}>
                    <MaterialCommunityIcons name="wifi" size={24} color="#273592" />
                    <Text style={styles.footerText}>Wifi</Text>
                </View>
                <View style={{ textAlign: 'center' }}>
                    <MaterialIcons name="location-on" size={24} color="#AAAAAA" />
                    <Text style={styles.footerText}>Location</Text>
                </View>
            </View>
        </View>
    )
}

export default Present

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
        fontSize: 11,
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