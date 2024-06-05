import React from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';

const ViewMapScreen = ({ route }) => {
    console.log('Ccc', route)
    return (
        <View style={styles.container}>
            <MapView
                initialRegion={{
                    latitude:route?.params?.itemDetails?.reg?.latitude,
                    longitude: route?.params?.itemDetails?.reg?.longitude,
                    latitudeDelta: route?.params?.itemDetails?.reg?.latitudeDelta,
                    longitudeDelta: route?.params?.itemDetails?.reg?.longitudeDelta,
                }}
                showsUserLocation
                showsMyLocationButton
                style={StyleSheet.absoluteFill} provider={PROVIDER_GOOGLE}
            >
                <Marker coordinate={{ latitude: route?.params?.itemDetails?.reg?.latitude, longitude: route?.params?.itemDetails?.reg?.longitude }} />
            </MapView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
});

export default ViewMapScreen;