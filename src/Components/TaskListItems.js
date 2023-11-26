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
  const {title, id} = taskData || [];

  return (
    <TouchableOpacity onPress={onPress}>
      <Card id={id}>
        <View style={styles.listItemContainer}>
          <View style={styles.listText}>
            <View>
              <Text style={{fontSize: 20, color: 'white', fontStyle: 'italic'}}>
                {title}
              </Text>
            </View>
            <View>
              <Text style={{fontSize: 20, color: 'white', fontStyle: 'italic'}}>
                {id}
              </Text>
            </View>
          </View>
          {/* <View></View> */}
        </View>
      </Card>
    </TouchableOpacity>
  );
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
