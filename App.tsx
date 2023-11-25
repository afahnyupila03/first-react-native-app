/**
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
} from 'react-native';
import HomePage from './src/Screens/Home/HomePage';


function App(): JSX.Element {

  return (
    <SafeAreaView>
      <ScrollView>
        <HomePage />
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
