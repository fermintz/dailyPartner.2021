import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from './view/home.js';
import Detail from './view/detail.js';
import Search from './view/search.js';
import Splash from './view/splash.js';
import Login from './view/login.js';
import Options from './view/options.js';

// 컴포넌트
import Header from './components/header.js';
import DrawerCustom from './components/drawer.js';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerComponent = props => {
  return (
    <Drawer.Navigator
      drawerPosition="right"
      screenOptions={{
        headerShown: true,
        header:() => <Header />,
        headerStyle: {
          backgroundColor: '#008BE8',
          elevation: 0,
          height: 50,
        },
        headerTitleStyle: {
          color: '#fff',
        },
        headerTitleAlign: 'center',
        headerTitle: '데일리파트너',
        headerTitleStyle: {
          color: '#fff',
        },
      }}
      drawerContent={props => <DrawerCustom {...props}/>}
    >
      <Drawer.Screen component={Home} name="Home" />
      <Drawer.Screen component={Options} name="Options" />
    </Drawer.Navigator>
  );
};



export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown:true,
          headerStyle:{
            elevation:0,
            height:50,
            borderBottomWidth:1,
          },
          cardStyle:{
            backgroundColor:'#fff'
          }
        }}
        initialRouteName="Splash"
      >
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{
            headerShown:false,
          }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown:false,
          }}
        />
        <Stack.Screen
          name="Home"
          component={DrawerComponent}
          options={{
            headerShown:false,
          }}
        />
        <Stack.Screen 
          name="Detail"
          component={Detail}
        />
        <Stack.Screen 
          name="Search"
          component={Search}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
