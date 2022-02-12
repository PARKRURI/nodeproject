//NewScreen.js
import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import BasicFlatList from './BasicFlatList'

export default class App extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <BasicFlatList/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});