import {Text, View, ScrollView, StyleSheet, ActivityIndicator} from 'react-native';
import TaskListItems from '../../Components/TaskListItems';
import FabButton from '../../Components/FabButton';
import React from 'react';
import {useQuery} from "react-query";
import FeatureCard from '../../Components/FeatureCard';
import {Features} from './components/Features';
import {TodosService} from "../../Services/TodosService";

const Title = [
  {title: 'Task 1', id: 1, message: 'This is task 1'},
  {title: 'Task 2', id: 2, message: 'This is task 2'},
  {title: 'Task 3', id: 3, message: 'This is task 3'},
  {title: 'Task 4', id: 4, message: 'This is task 4'},
  {title: 'Task 5', id: 5, message: 'This is task 5'},
  {title: 'Task 6', id: 6, message: 'This is task 6'},
  {title: 'Task 7', id: 7, message: 'This is task 7'},
  {title: 'Task 8', id: 8, message: 'This is task 8'},
  {title: 'Task 9', id: 9, message: 'This is task 9'},
  {title: 'Task 10', id: 10, message: 'This is task 10'},
  {title: 'Task 11', id: 11, message: 'This is task 11'},
  {title: 'Task 12', id: 12, message: 'This is task 12'},
  {title: 'Task 13', id: 13, message: 'This is task 13'},
  {title: 'Task 14', id: 14, message: 'This is task 14'},
  {title: 'Task 15', id: 15, message: 'This is task 15'},
  {title: 'Task 16', id: 16, message: 'This is task 16'},
];

export default function () {

  const {data = {}, isFetching, isError, error, refetch} = useQuery(
    "todos", () => TodosService()
  )
  console.log(data);

  if (isFetching) {
    return (
      <View>
        <ActivityIndicator size="large" />
      </View>
    )
  }

  return (
    <View>
      <View style={styles.listViewContainer}>
        <ScrollView>
          <View>
            {data.map(task => (
              <TaskListItems
                key={task.id}
                taskData={task}
                onPress={() =>
                  console.log(
                    'title: ' + task.todo,
                    'id: ' + task.id,
                    'message: ' + task.completed,
                  )
                }
              />
            ))}
          </View>
        </ScrollView>
        <FabButton
          onPress={() => console.log('Create Task')}
          iconText="Create"
        />
      </View>
      <Features/>
    </View>
  );
}

const styles = StyleSheet.create({
  listViewContainer: {
    backgroundColor: 'gold',
    height: '100%',
    display: 'flex',
    flex: 1,
    width: '100%',
    padding: 10,
    marginTop: 0,
    paddingTop: 12,
  },
});
