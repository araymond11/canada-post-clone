import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import DrawerNavigator from './DrawerNavigator';

export default createAppContainer(
  createSwitchNavigator({
    Main: DrawerNavigator
  })
);