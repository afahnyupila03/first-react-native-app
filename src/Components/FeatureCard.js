import {Text, TouchableOpacity} from 'react-native';
import Card from './Card';

export default function ({data, onSelect}) {
  const {title, id} = data;

  return (
    <TouchableOpacity>
      <Text style={{color: "white", fontSize: 20}}>{title}</Text>
    </TouchableOpacity>
  );
}
