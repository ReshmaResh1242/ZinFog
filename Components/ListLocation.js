import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const ListLocation = ({ navigation, item }) => {

    return (
        <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('ViewMap', { itemDetails: item })}>
            <Text style={styles.title}>Lattitude: {item?.reg?.latitude}</Text>
            <Text style={styles.title}>Longitude: {item?.reg?.longitude}</Text>
            <Text style={styles.title}>{item?.name}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    item: {
        marginHorizontal: 20,
        borderBottomWidth: 0.5,
        borderColor: 'grey',
        paddingVertical: 20
    },
    title: {
        color: 'black',
        fontSize: 14,
        fontWeight: 'bold',
        paddingTop: 10,
    },
});

export default ListLocation;