import 'react-native-gesture-handler';
import {AppRegistry, LogBox} from 'react-native';

import Orientation from 'react-native-orientation-locker';

import {AppCore} from './src/app';
import {name as appName} from './app.json';

// Actual
LogBox.ignoreAllLogs(true);

Orientation.lockToPortrait();

AppRegistry.registerComponent(appName, () => AppCore);
