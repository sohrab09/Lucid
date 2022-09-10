import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Present from './src/screens/Present';
import Attendance from './src/screens/Attendance';
import EarlyLeave from './src/screens/EarlyLeave';
import LeaveRequest from './src/screens/LeaveRequest';
import NCash from './src/screens/NCash';
import Notifications from './src/screens/Notifications';
import WorkOutside from './src/screens/WorkOutside';
import CustomDrawer from './src/screens/CustomDrawer';
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';


const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Drawer.Navigator
        useLegacyImplementation
        drawerContent={(props) => <CustomDrawer {...props} />}
        initialRouteName="Present"
      >
        <Drawer.Screen
          name="Present"
          component={Present}
          options={{
            title: 'Present',
            drawerIcon: ({ focused, size }) => (
              <Entypo
                name="back-in-time"
                size={size}
                color={focused ? '#273592' : '#AAAAAA'}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="Leave Request"
          component={LeaveRequest}
          options={{
            title: 'Leave Request',
            drawerIcon: ({ focused, size }) => (
              <Entypo
                name="dots-three-horizontal"
                size={size}
                color={focused ? '#273592' : '#AAAAAA'}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="Early Leave Request"
          component={EarlyLeave}
          options={{
            title: 'Early Leave Request',
            drawerIcon: ({ focused, size }) => (
              <Entypo
                name="dots-three-horizontal"
                size={size}
                color={focused ? '#273592' : '#AAAAAA'}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="Work Outside"
          component={WorkOutside}
          options={{
            title: 'Work Outside',
            drawerIcon: ({ focused, size }) => (
              <MaterialIcons
                name="work"
                size={size}
                color={focused ? '#273592' : '#AAAAAA'}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="Attendance"
          component={Attendance}
          options={{
            title: 'Attendance',
            drawerIcon: ({ focused, size }) => (
              <MaterialCommunityIcons
                name="timetable"
                size={size}
                color={focused ? '#273592' : '#AAAAAA'}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="NCash"
          component={NCash}
          options={{
            title: 'NCash',
            drawerIcon: ({ focused, size }) => (
              <MaterialIcons
                name="attach-money"
                size={size}
                color={focused ? '#273592' : '#AAAAAA'}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="Notifications"
          component={Notifications}
          options={{
            title: 'Notifications',
            drawerIcon: ({ focused, size }) => (
              <Ionicons
                name="notifications"
                size={size}
                color={focused ? '#273592' : '#AAAAAA'}
              />
            ),
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
