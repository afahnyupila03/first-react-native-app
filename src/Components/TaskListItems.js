import React from 'react';
import Card from './Card';
import {
  View,
  Text,
  StyleSheet,
  Touchable,
  TouchableOpacity,
} from 'react-native';

export default function ({taskData, onPress}) {
  const {todo, id, completed} = taskData || [];

  return (
    <TouchableOpacity onPress={onPress}>
      <Card id={id}>
        <View style={styles.listItemContainer}>
          <View style={styles.listText}>
            <View>
              <Text style={{fontSize: 20, color: 'white', fontStyle: 'italic'}}>
                {reduceChars(todo)}
              </Text>
            </View>
            <View>
              <Text style={{fontSize: 20, color: 'white', fontStyle: 'italic'}}>
                {completed}
              </Text>
            </View>
          </View>
          {/* <View></View> */}
        </View>
      </Card>
    </TouchableOpacity>
  );
}

function reduceChars(CHARS) {
  const MAX_CHARS = 10
  if (CHARS.length > MAX_CHARS) {
    return `${CHARS.slice(0, MAX_CHARS)}...`
  }
  return CHARS;
}

const styles = StyleSheet.create({
  listItemContainer: {
    height: 40,
  },
  listText: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 6,
    justifyContent: 'space-between',
    padding: 4,
    // j: 'center'
  },
});
