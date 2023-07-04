import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import store from './store';

import HomeScreen from './pages/HomeScreen';
import SignIn from './pages/SignIn';
import JoinGroup1 from './pages/JoinGroup1';
import JoinGroup2 from './pages/JoinGroup2';
import JoinGroup3 from './pages/JoinGroup3';
import NewGroup1 from './pages/NewGroup1';
import NewGroup2 from './pages/NewGroup2';
import NewGroup3 from './pages/NewGroup3';
import NewGroup01 from './pages/NewGroup01';
import NewGroup02 from './pages/NewGroup02';
import Dashboard from './pages/Dashboard';
import Projects from './pages/Projects';
import Expenses from './pages/Expenses';
// import Sidebar from './pages/Sidebar';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="HomeScreen">
          <Stack.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{
              title: '', //Set Header Title
              headerStyle: {
                backgroundColor: '#0b2447', //Set Header color
              },
              headerTintColor: '#fff', //Set Header text color
              headerTitleStyle: {
                fontWeight: 'bold', //Set Header text style
              },
            }}
          />
          <Stack.Screen
            name="SignIn"
            component={SignIn}
            options={{
              title: '', //Set Header Title
              headerStyle: {
                backgroundColor: '#0b2447', //Set Header color
              },
              headerTintColor: '#fff', //Set Header text color
              headerTitleStyle: {
                fontWeight: 'bold', //Set Header text style
              },
            }}
          />
          <Stack.Screen
            name="JoinGroup1"
            component={JoinGroup1}
            options={{
              title: '', //Set Header Title
              headerStyle: {
                backgroundColor: '#0b2447', //Set Header color
              },
              headerTintColor: '#fff', //Set Header text color
              headerTitleStyle: {
                fontWeight: 'bold', //Set Header text style
              },
            }}
          />
          <Stack.Screen
            name="JoinGroup2"
            component={JoinGroup2}
            options={{
              title: '', //Set Header Title
              headerStyle: {
                backgroundColor: '#0b2447', //Set Header color
              },
              headerTintColor: '#fff', //Set Header text color
              headerTitleStyle: {
                fontWeight: 'bold', //Set Header text style
              },
            }}
          />
          <Stack.Screen
            name="JoinGroup3"
            component={JoinGroup3}
            options={{
              title: '', //Set Header Title
              headerStyle: {
                backgroundColor: '#0b2447', //Set Header color
              },
              headerTintColor: '#fff', //Set Header text color
              headerTitleStyle: {
                fontWeight: 'bold', //Set Header text style
              },
            }}
          />
          <Stack.Screen
            name="NewGroup01"
            component={NewGroup01}
            options={{
              title: '', //Set Header Title
              headerStyle: {
                backgroundColor: '#0b2447', //Set Header color
              },
              headerTintColor: '#fff', //Set Header text color
              headerTitleStyle: {
                fontWeight: 'bold', //Set Header text style
              },
            }}
          />
          <Stack.Screen
            name="NewGroup02"
            component={NewGroup02}
            options={{
              title: '', //Set Header Title
              headerStyle: {
                backgroundColor: '#0b2447', //Set Header color
              },
              headerTintColor: '#fff', //Set Header text color
              headerTitleStyle: {
                fontWeight: 'bold', //Set Header text style
              },
            }}
          />
          <Stack.Screen
            name="NewGroup1"
            component={NewGroup1}
            options={{
              title: '', //Set Header Title
              headerStyle: {
                backgroundColor: '#0b2447', //Set Header color
              },
              headerTintColor: '#fff', //Set Header text color
              headerTitleStyle: {
                fontWeight: 'bold', //Set Header text style
              },
            }}
          />
          <Stack.Screen
            name="NewGroup2"
            component={NewGroup2}
            options={{
              title: '', //Set Header Title
              headerStyle: {
                backgroundColor: '#0b2447', //Set Header color
              },
              headerTintColor: '#fff', //Set Header text color
              headerTitleStyle: {
                fontWeight: 'bold', //Set Header text style
              },
            }}
          />
          <Stack.Screen
            name="NewGroup3"
            component={NewGroup3}
            options={{
              title: '', //Set Header Title
              headerStyle: {
                backgroundColor: '#0b2447', //Set Header color
              },
              headerTintColor: '#fff', //Set Header text color
              headerTitleStyle: {
                fontWeight: 'bold', //Set Header text style
              },
            }}
          />
          <Stack.Screen
            name="Dashboard"
            component={Dashboard}
            options={{
              title: '', //Set Header Title
              headerStyle: {
                backgroundColor: '#0b2447', //Set Header color
              },
              headerTintColor: '#fff', //Set Header text color
              headerTitleStyle: {
                fontWeight: 'bold', //Set Header text style
              },
            }}
          />
          <Stack.Screen
            name="Projects"
            component={Projects}
            options={{
              title: '', //Set Header Title
              headerStyle: {
                backgroundColor: '#0b2447', //Set Header color
              },
              headerTintColor: '#fff', //Set Header text color
              headerTitleStyle: {
                fontWeight: 'bold', //Set Header text style
              },
            }}
          />
          <Stack.Screen
            name="Expenses"
            component={Expenses}
            options={{
              title: '', //Set Header Title
              headerStyle: {
                backgroundColor: '#0b2447', //Set Header color
              },
              headerTintColor: '#fff', //Set Header text color
              headerTitleStyle: {
                fontWeight: 'bold', //Set Header text style
              },
            }}
          />
          {/* <Stack.Screen
                    name="Sidebar"
                    component={Sidebar}
                    options={{
                      title: '', //Set Header Title
                      headerStyle: {
                        backgroundColor: '#0b2447', //Set Header color
                      },
                      headerTintColor: '#fff', //Set Header text color
                      headerTitleStyle: {
                        fontWeight: 'bold', //Set Header text style
                      },
                    }}
                  /> */}
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
