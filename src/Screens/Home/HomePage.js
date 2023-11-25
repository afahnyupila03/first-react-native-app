import {Text, View, ScrollView, StyleSheet} from 'react-native';

export default function () {
  return (
    <ScrollView>
      <View>
        <Text>This is the Home Page</Text>
        <Text style={styles.welcomeText}>Well Done, we have our app up and running...</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
    welcomeText: {
        fontSize: 40
    }
})
