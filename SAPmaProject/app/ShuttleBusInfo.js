import React, { Component} from 'react';
import {View, Text,  StyleSheet } from 'react-native';

export default class ShuttleBusInfo extends Component {
    render() {
        var bus = this.props.bus;
       // var features = (typeof bus.features !== 'undefined') ? bus.features : '';
        return (
            <View style={styles.container}>        
                <Text style={styles.features}>Testing: {bus.features}</Text>
            </View>
        );
    }
}

var styles = StyleSheet.create({
    container: {
        marginTop: 75,
        alignItems: 'center'
    },
    features: {
        padding: 10,
        fontSize: 15,
        color: '#656565'
    }
});

