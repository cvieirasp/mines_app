import React from 'react'
import { View, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    centerMine: {
        height: 14,
        width: 14,
        borderRadius: 10,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
    },
    line: {
        position: 'absolute',
        height: 3,
        width: 20,
        borderRadius: 3,
        backgroundColor: 'black',
    }
})

export default props => {
    return (
        <View style={styles.container}>
            <View style={styles.centerMine} />
            <View style={styles.line} />
            <View style={[styles.line, { transform: [{ rotate: '45deg' }] }]} />
            <View style={[styles.line, { transform: [{ rotate: '90deg' }] }]} />
            <View style={[styles.line, { transform: [{ rotate: '135deg' }] }]} />
        </View>
    )
}