/**
 * @format
 */

import {AppRegistry, YellowBox} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import 'react-native-gesture-handler';

YellowBox.ignoreWarnings(['Setting a timer']);
AppRegistry.registerComponent(appName, () => App);
