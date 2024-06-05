import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { api } from '../Api'

const MapScreen = () => {

  const [region, setRegion] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  })

  const [list, SetList] = useState([])

  useEffect(() => {
    getList()
  }, [])

  const onRegionChange = (region) => {
    setRegion(region);
  }

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

  const getMapDetails = (lat, lon, reg) => {
    api.getMapDetails(lat, lon).then(result => {
      if (result?.status == 200) {
        Alert.alert(`${result?.data?.lat} ${result?.data?.lon}`, result?.data?.display_name, [
          {
            text: 'Save', onPress: () => {
              const data = [...list];
              data.push({ id: list.length + 1, reg, name: result?.data?.display_name });
              AsyncStorage.setItem('LocationData', JSON.stringify(data))
            }
          },
        ]);
        console.log("getMapDetails ----->>", result?.data)
      }
    }).catch(err => {
      console.log("getMapDetails ----->>", err);
    });
  }

  return (
    <View style={styles.container}>
      <MapView
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        showsUserLocation
        showsMyLocationButton
        style={StyleSheet.absoluteFill} provider={PROVIDER_GOOGLE}
        onRegionChangeComplete={onRegionChange}
      >
        <Marker draggable coordinate={{ latitude: region.latitude, longitude: region.longitude }} onPress={() => getMapDetails(region.latitude, region.longitude, region)} />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'White'
  },
});

export default MapScreen;