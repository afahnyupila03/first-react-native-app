import React, {useState} from 'react';
import {tailwind} from 'react-native-tailwind';
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  For,
  Button,
  StyleSheet,
} from 'react-native';

export default function () {
  const [name, setName] = useState('');
  console.log(name);
  return (
    <View>
      
    </View>
  );
}

const styles = StyleSheet.create({
    submitButton: {
        color: 'red',
        fontWeight: 'bold',
    }
})
