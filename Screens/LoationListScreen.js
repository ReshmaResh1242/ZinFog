import React, { useState, useEffect } from 'react';
import { View, StyleSheet, FlatList, StatusBar, SafeAreaView, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import ListLocation from '../Components/ListLocation';

const LoationListScreen = ({ navigation }) => {

  const [list, SetList] = useState([])


  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getList()
    });

    return unsubscribe;
  }, [navigation]);


  const getList = async () => {
    try {
      const list = JSON.parse(await AsyncStorage.getItem("LocationData"))
      console.log('LocationData', list)
      if (list !== null) {
        SetList(list)
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={list}
        style={{ backgroundColor: 'white' }}
        renderItem={({ item }) =>
          <ListLocation item={item} navigation={navigation}/>
        }
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 20,
    color: 'green'
  },
});

export default LoationListScreen;