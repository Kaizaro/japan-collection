/**
 * @format
 */

import {AppRegistry, LogBox} from 'react-native';

import {AppCore} from './src/app';

import {name as appName} from './app.json';

// Actual
LogBox.ignoreAllLogs(true);

AppRegistry.registerComponent(appName, () => AppCore);
