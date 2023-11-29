import {Text, TouchableOpacity} from 'react-native';
import Card from './Card';

export default function ({data, onSelect}) {
  const {title, Icon} = data;

  return (
    <TouchableOpacity onPress={onSelect}>
      {/* <Icon /> */}
      <Text style={{color: 'white', fontSize: 20}}>{title}</Text>
    </TouchableOpacity>
  );
}
