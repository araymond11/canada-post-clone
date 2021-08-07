import React from 'react';
import {View,Text} from 'react-native';
import { createDrawerNavigator } from 'react-navigation-drawer';
import TrackScreen from '../screen/TrackScreen';
import FindPostOfficeScreen from '../screen/FindPostOfficeScreen';

const DrawerNavigator = createDrawerNavigator({
  "Track": TrackScreen,
  "Find a post office": FindPostOfficeScreen,
});

export default DrawerNavigator;