import {FlatList, SafeAreaView, StyleSheet} from 'react-native';
import FeatureCard from '../../../Components/FeatureCard';
import React from 'react';

const features = [
  {
    id: 'DONE',
    title: 'Done',
    Icon: '',
  },
  {
    id: 'FAILED',
    title: 'Failed',
    Icon: '',
  },
  {
    id: 'ARCHIVED',
    title: 'Archived',
    Icon: '',
  },
  {
    id: 'TRASH',
    title: 'Trash',
    Icon: '',
  },
];

export const Features = ({navigation}) => {
  const [featureList, setFeatureList] = React.useState(features);

  // implement function when react-native-navigation dependency is done.
  const handleFeatureSelect = feature => {
    switch (feature.id) {
      case 'DONE':
        navigation.navigate(HomeStack);
        break;
      case 'FAILED':
        navigation.navigate(FailedStack);
        break;
      case 'ARCHIVED':
        navigation.navigate(ArchivedStack);
        break;
      case 'TRASH':
        navigation.navigate(TrashStack);
        break;
      default:
        break;
    }
  };

  return (
    <SafeAreaView style={styles.featuresContainer}>
      <FlatList
        data={featureList}
        columnWrapperStyle={{justifyContent: 'space-around'}}
        keyExtractor={item => item.id.toString()}
        numColumns={4}
        renderItem={({item}) => (
          <FeatureCard
            data={item}
            // onSelect={() => handleFeatureSelect(item)}
            onSelect={() => console.log('title: ' + item.title)}
          />
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  featuresContainer: {
    padding: 10,
    backgroundColor: 'gray',
  },
});
