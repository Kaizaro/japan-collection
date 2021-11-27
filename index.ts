/**
 * @format
 */

import {AppRegistry, LogBox} from 'react-native';
import {App} from '@src/app';
import {name as appName} from './app.json';

// Actual
LogBox.ignoreAllLogs(true);

AppRegistry.registerComponent(appName, () => App);
