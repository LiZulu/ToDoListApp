// src/app/index.js

import { AppRegistry } from 'react-native';
import App from '../App';  // Ensure this is correctly pointing to App.js
import { name as appName } from '../src/app.json';

AppRegistry.registerComponent(appName, () => App);
