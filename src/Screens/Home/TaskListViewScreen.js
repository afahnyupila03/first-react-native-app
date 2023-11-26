import {Text, View, ScrollView, StyleSheet} from 'react-native';
import TaskListItems from '../../Components/TaskListItems';
import FabButton from '../../Components/FabButton';
import {Header} from 'react-native/Libraries/NewAppScreen';

const Title = [
  {title: 'Task 1', id: 1},
  {title: 'Task 2', id: 2},
  {title: 'Task 3', id: 3},
  {title: 'Task 4', id: 4},
  {title: 'Task 5', id: 5},
  {title: 'Task 6', id: 6},
  {title: 'Task 7', id: 7},
  {title: 'Task 8', id: 8},
  {title: 'Task 9', id: 9},
  {title: 'Task 10', id: 10},
  {title: 'Task 11', id: 11},
  {title: 'Task 12', id: 12},
  {title: 'Task 13', id: 13},
  {title: 'Task 14', id: 14},
  {title: 'Task 15', id: 15},
  {title: 'Task 16', id: 16},
];

export default function () {
  return (
    <View style={styles.listViewContainer}>
      <ScrollView>
        <View>
          {Title.map(task => (
            <TaskListItems
              key={task.id}
              taskData={task}
              onPress={() => console.log(task)}
            />
          ))}
        </View>
      </ScrollView>

      <FabButton
        onPress={() => console.log('Create Task')}
        iconText="Create"
      />
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
