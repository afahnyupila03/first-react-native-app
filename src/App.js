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
import {QueryClientProvider, QueryClient} from "react-query";


function App() {

  return (
    <QueryClientProvider client={new QueryClient()}>
      <SafeAreaView>
        <ScrollView>
          <TaskListViewScreen />
        </ScrollView>
      </SafeAreaView>
    </QueryClientProvider>
  );
}

export default App;
