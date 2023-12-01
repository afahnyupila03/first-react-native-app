import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function({children}) {

    return (
        <View style={styles.cardContainer}>
            <View>
                {children}
            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    cardContainer: {
        padding: 4,
        borderRadius: 4,
        borderColor: "gray",
        borderWidth: 2,
        margin: 5
    }
})