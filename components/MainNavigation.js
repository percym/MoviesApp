import React, {PureComponent} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from './screens/Home';
import Detail from './screens/Detail';
import Navbar from './components/Navbar';

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
            headerTransparent: true,
            header: ({navigation}) => (
              <Navbar navigation={navigation} main={true} />
            ),
          }}
        />
        <Stack.Screen
          name="Detail"
          component={Detail}
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
