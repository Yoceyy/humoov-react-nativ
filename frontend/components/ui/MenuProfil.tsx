import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function IconBar() {
    return (
        <View style={styles.container}>
            <Text style={styles.username}>@yooceyy</Text>
            <View style={styles.iconContainer}>
                <TouchableOpacity style={styles.iconButton}>
                    <Icon name="layer-group" size={24} color="white" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconButton}>
                    <Icon name="image" size={24} color="white" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconButton}>
                    <Icon name="video" size={24} color="white" />
                </TouchableOpacity>
                <TouchableOpacity style={[styles.iconButton, styles.activeIconButton]}>
                    <Icon name="infinity" size={24} color="white" />
                </TouchableOpacity>                <TouchableOpacity style={styles.iconButton}>
                    <Icon name="dice" size={24} color="white" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconButton}>
                    <Icon name="sliders-h" size={24} color="white" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconButton}>
                    <Icon name="chart-bar" size={24} color="white" />
                </TouchableOpacity>
            </View>
            <Icon name="ellipsis-h" size={24} color="white" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#4B0082',
        padding: 10,
    },
    username: {
        color: 'white',
        fontSize: 18,
        marginRight: 10,
    },
    iconContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 10,
    },
    iconButton: {
        backgroundColor: '#2E0854',
        padding: 10,
        borderRadius: 50,
        marginHorizontal: 5,
    },
    activeIconButton: {
        backgroundColor: '#00FFFF',
    },
});