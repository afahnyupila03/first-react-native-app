/**
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
} from 'react-native';
import TaskListViewScreen from './Screens/Home/TaskListViewScreen';


function App(): JSX.Element {

  return (
    <SafeAreaView>
      <ScrollView>
        <TaskListViewScreen />
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
