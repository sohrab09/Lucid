import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { Entypo } from '@expo/vector-icons';


export default function Items({ item }) {
    return (
        <View style={styles.container}>
            <View style={styles.item}>
                <View style={styles.status}>
                    <Text style={styles.value}>{item.date}</Text>
                    <Entypo
                        name="dot-single"
                        size={40}
                        color="black"
                    />
                    <Text style={{
                        color:
                            item.status === 'On Time' ? 'green'
                                :
                                item.status === 'Late' ? 'red'
                                    :
                                    item.status === 'Weekend' ? 'orange' : 'black',
                        fontSize: 16,
                        fontWeight: 'bold',
                    }}>{item.status}</Text>
                </View>
                <View style={styles.status}>
                    <Text style={styles.value}>In: {item.inTime}</Text>
                    <Text style={styles.value}> - </Text>
                    <Text style={styles.value}>Out: {item.outTime}</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: 5,
        borderRadius: 5,
        backgroundColor: '#fff',
    },
    item: {
        margin: 5,
        borderRadius: 5,
        width: '100%',
    },
    status: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 5,
    },
    value: {
        fontSize: 16,
        color: '#6B6B6B',
    },
   
});