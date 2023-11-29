import { FlatList, SafeAreaView, StyleSheet } from "react-native";
import FeatureCard from "../../../Components/FeatureCard";
import React from 'react'

const features = [
    {
      id: 'DONE',
      title: 'Done',
    },
    {
      id: 'TRASH',
      title: 'Trash',
    },
    {
      id: 'ARCHIVED',
      title: 'Archived',
    },
    {
      id: 'FAILED',
      title: 'Failed',
    },
  ];
  
  export const Features = () => {
    const [featureList, setFeatureList] = React.useState(features);
  
    return (
      <SafeAreaView style={styles.featuresContainer}>
        <FlatList
          data={featureList}
          columnWrapperStyle={{justifyContent: 'space-around'}}
          keyExtractor={item => item.id.toString()}
          numColumns={4}
          renderItem={({item}) => <FeatureCard data={item} />}
        />
      </SafeAreaView>
    );
  };

  const styles = StyleSheet.create({
    featuresContainer: {
        padding: 10,
        backgroundColor: "gray"
    }
  })