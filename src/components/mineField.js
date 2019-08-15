import React from 'react'
import { StyleSheet, View } from 'react-native'
import Field from './Field'

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#EEE',
    }
})

export default props => {
    const rows = props.board.map((row, rowIndex) => {
        const columns = row.map((field, colIndex) => {
            return <Field {...field} key={colIndex} 
                onOpen={() => props.onOpenField(rowIndex, colIndex)} 
                onSelect={() => props.onSelectField(rowIndex, colIndex)} />
        })
        return <View key={rowIndex} style={{flexDirection: 'row'}}>{columns}</View>
    })
    return <View style={styles.container}>{rows}</View>
}