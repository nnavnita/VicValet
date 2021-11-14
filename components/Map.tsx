import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import MapView, { Polygon, PROVIDER_GOOGLE } from 'react-native-maps';
import { BAY_SHAPES } from './constants';

function getCoOrdsFromMP(mp: any): any {
    let coords: any = [];
    mp.map((b: any) => {
        let coord: any = [];
        let c: string = (b[8] as string)
            .replace('MULTIPOLYGON (((', '')
            .replace(')))', '');
        let ca: string[] = c.split(',');
        ca.forEach(e => {
            let c = e.split(' ');
            coord.push({
                'latitude': Number(c[0]),
                'longitude': Number(c[1])
            })
        });
        coords.push(coord);
    });
    return coords;
}

export default function Map() {
    const [bays, setBays] = useState([]);
    // get parking data
    fetch(BAY_SHAPES)
    .then(res => res.json())
    .then(json => setBays(getCoOrdsFromMP(json.data)))
    .catch(err => {
        throw new Error(`Error fetching BAY_SHAPES: ${err}`)
    })
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
                onRegionChange={() => {/*update parking spots for new location */}}
            >
                {/* {
                    bays.map(b => {
                        <Polygon
                            coordinates={b}
                            fillColor="rgba(130,255,130,0.5)"
                            strokeColor="rgba(0,255,130,0.5)"
                            strokeWidth={2}
                        />
                    })
                } */}
                <Polygon
                    coordinates={[
                        {latitude: -37.814834,
                        longitude: 144.940051},
                        {latitude: -37.8149,
                        longitude: 144.940051},
                        {latitude: -37.8149,
                        longitude: 144.9401},
                        {latitude: -37.814834,
                        longitude: 144.9401}
                    ]}
                    fillColor="rgba(130,255,130,0.5)"
                    strokeColor="rgba(0,255,130,0.5)"
                    strokeWidth={2}
                />
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
