import React, {PureComponent} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from '../screens/Home';
import Detail from '../screens/Detail';
import Navbar from '../components/Navbar';
import Search from './Search';

const Stack = createNativeStackNavigator();

class MainNavigation extends PureComponent {
  render() {
    return (
      <Stack.Navigator
        screenOptions={{
          headerStatusBarHeight: 0,
        }}>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            header: ({navigation}) => (
              <Navbar navigation={navigation} main={true} />
            ),
          }}
        />
        <Stack.Screen
          name="Detail"
          component={Detail}
          options={{
            header: ({navigation}) => (
              <Navbar navigation={navigation} main={false} />
            ),
          }}
        />
         <Stack.Screen
          name="Search"
          component={Search}
          options={{
            headerTransparent: true,
            header: ({navigation}) => (
              <Navbar navigation={navigation} main={false} />
            ),
          }}
        />
      </Stack.Navigator>
    );
  }
}

export default MainNavigation;
