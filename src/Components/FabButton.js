import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

export default function ({onPress, style, iconText}) {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: 'red',
        position: 'absolute',
        borderRadius: 50,
        bottom: 250,
        // top: 750,
        right: 25,
        height: 50,
        width: 50,
        zIndex: 100,
        elevation: 5,
        shadowColor: '#A8A8A8',
      }}
      onPress={onPress}>
      <Text style={{fontSize: 30, color: 'white', backgroundColor: 'gray'}}>
        {iconText}
      </Text>
    </TouchableOpacity>
  );
}
