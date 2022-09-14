import { StyleSheet, Text, FlatList, ScrollView, View } from 'react-native'
import React, { useState } from 'react'
import SelectList from 'react-native-dropdown-select-list'
import { month, year } from '../MockData/MockData';
import { FontAwesome } from '@expo/vector-icons';
import Items from '../CustomTabs/Items';

const Attendance = () => {

  const [months, setMonths] = React.useState("");
  const [years, setYears] = React.useState("");

  const [attendance, setAttendance] = useState([
    {
      date: '01/09/2022',
      key: '1',
      status: 'On Time',
      inTime: '9:00 AM',
      outTime: '5:00 PM',
    },
    {
      date: '02/09/2022',
      key: '2',
      status: 'Weekend',
      inTime: '9:00 AM',
      outTime: '5:00 PM',
    },
    {
      date: '03/09/2022',
      key: '3',
      status: 'Late',
      inTime: '9:00 AM',
      outTime: '5:00 PM',
    },
    {
      date: '04/09/2022',
      key: '4',
      status: 'On Time',
      inTime: '9:00 AM',
      outTime: '5:00 PM',
    },
    {
      date: '05/09/2022',
      key: '5',
      status: 'Weekend',
      inTime: '9:00 AM',
      outTime: '5:00 PM',
    },
    {
      date: '06/09/2022',
      key: '6',
      status: 'Late',
      inTime: '9:00 AM',
      outTime: '5:00 PM',
    },
    {
      date: '07/09/2022',
      key: '7',
      status: 'On Time',
      inTime: '9:00 AM',
      outTime: '5:00 PM',
    },
    {
      date: '08/09/2022',
      key: '8',
      status: 'Weekend',
      inTime: '9:00 AM',
      outTime: '5:00 PM',
    },
    {
      date: '09/09/2022',
      key: '9',
      status: 'Late',
      inTime: '9:00 AM',
      outTime: '5:00 PM',
    },
    {
      date: '10/09/2022',
      key: '10',
      status: 'On Time',
      inTime: '9:00 AM',
      outTime: '5:00 PM',
    },
    {
      date: '11/09/2022',
      key: '11',
      status: 'Weekend',
      inTime: '9:00 AM',
      outTime: '5:00 PM',
    },
    {
      date: '12/09/2022',
      key: '12',
      status: 'Late',
      inTime: '9:00 AM',
      outTime: '5:00 PM',
    },
    {
      date: '13/09/2022',
      key: '13',
      status: 'On Time',
      inTime: '9:00 AM',
      outTime: '5:00 PM',
    },
    {
      date: '14/09/2022',
      key: '14',
      status: 'Weekend',
      inTime: '9:00 AM',
      outTime: '5:00 PM',
    },
    {
      date: '15/09/2022',
      key: '15',
      status: 'Late',
      inTime: '9:00 AM',
      outTime: '5:00 PM',
    },
    {
      date: '16/09/2022',
      key: '16',
      status: 'On Time',
      inTime: '9:00 AM',
      outTime: '5:00 PM',
    },
    {
      date: '17/09/2022',
      key: '17',
      status: 'Weekend',
      inTime: '9:00 AM',
      outTime: '5:00 PM',
    },
    {
      date: '18/09/2022',
      key: '18',
      status: 'Late',
      inTime: '9:00 AM',
      outTime: '5:00 PM',
    },
    {
      date: '19/09/2022',
      key: '19',
      status: 'On Time',
      inTime: '9:00 AM',
      outTime: '5:00 PM',
    },
    {
      date: '20/09/2022',
      key: '20',
      status: 'Weekend',
      inTime: '9:00 AM',
      outTime: '5:00 PM',
    },
    {
      date: '21/09/2022',
      key: '21',
      status: 'Late',
      inTime: '9:00 AM',
      outTime: '5:00 PM',
    },
    {
      date: '22/09/2022',
      key: '22',
      status: 'On Time',
      inTime: '9:00 AM',
      outTime: '5:00 PM',
    },
    {
      date: '23/09/2022',
      key: '23',
      status: 'Weekend',
      inTime: '9:00 AM',
      outTime: '5:00 PM',
    },
    {
      date: '24/09/2022',
      key: '24',
      status: 'Late',
      inTime: '9:00 AM',
      outTime: '5:00 PM',
    },
    {
      date: '25/09/2022',
      key: '25',
      status: 'On Time',
      inTime: '9:00 AM',
      outTime: '5:00 PM',
    },
    {
      date: '26/09/2022',
      key: '26',
      status: 'Weekend',
      inTime: '9:00 AM',
      outTime: '5:00 PM',
    },
    {
      date: '27/09/2022',
      key: '27',
      status: 'Late',
      inTime: '9:00 AM',
      outTime: '5:00 PM',
    },
    {
      date: '28/09/2022',
      key: '28',
      status: 'On Time',
      inTime: '9:00 AM',
      outTime: '5:00 PM',
    },
    {
      date: '29/09/2022',
      key: '29',
      status: 'Weekend',
      inTime: '9:00 AM',
      outTime: '5:00 PM',
    },
    {
      date: '30/09/2022',
      key: '30',
      status: 'Late',
      inTime: '9:00 AM',
      outTime: '5:00 PM',
    }
  ]);


  return (
    <View style={{ flex: 1 }}>
      <View style={styles.container}>
        <View>
          <SelectList
            setSelected={setMonths}
            data={month}
            months={months}
            placeholder="Select Month"
            style={styles.month}
          />
        </View>
        <View>
          <SelectList
            setSelected={setYears}
            data={year}
            selected={years}
            placeholder="Select Year"
            style={styles.year}
          />
        </View>
        <View>
          <FontAwesome
            name="search"
            size={30}
            color="black"
            style={styles.search}
          />
        </View>
      </View>

      <View style={styles.list}>
        {/* <ScrollView>
          {
            attendance.map((item) => {
              return (
                <View key={item.key}>
                  <Items item={item} />
                </View>
              )
            })
          }
        </ScrollView> */}
        <FlatList
          data={attendance}
          renderItem={({ item }) => (
            <Items item={item} />
          )}
        />
      </View>
    </View>
  )
}

export default Attendance

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 5,
    margin: 5,
    borderRadius: 10,
    backgroundColor: '#fff',
  },

  search: {
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 5,
    margin: 5,
  },
  list: {
    flex: 3,
  }
})