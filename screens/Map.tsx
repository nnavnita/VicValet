import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

export default function Map() {
    return (
        <View style={styles.container}>
            <MapView
                provider={PROVIDER_GOOGLE}
                style={styles.map}
                region={{
                    latitude: -37.814834,
                    longitude: 144.940051,
                    latitudeDelta: 0.001,
                    longitudeDelta: 0.001,
                }}
                showsUserLocation={true}
                followsUserLocation={true}
                showsTraffic={true}
            >
            </MapView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
  });
