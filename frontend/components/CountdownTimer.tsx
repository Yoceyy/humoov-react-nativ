import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'; // Ajoutez TouchableOpacity ici

const CountdownTimer = () => {
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 15, seconds: 23 });

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeLeft(prevTime => {
                if (prevTime.seconds > 0) {
                    return { ...prevTime, seconds: prevTime.seconds - 1 };
                } else if (prevTime.minutes > 0) {
                    return { ...prevTime, minutes: prevTime.minutes - 1, seconds: 59 };
                } else if (prevTime.hours > 0) {
                    return { ...prevTime, hours: prevTime.hours - 1, minutes: 59, seconds: 59 };
                } else if (prevTime.days > 0) {
                    return { ...prevTime, days: prevTime.days - 1, hours: 23, minutes: 59, seconds: 59 };
                }
                return prevTime;
            });
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Il vous reste</Text>
            <Text style={styles.time}>
                {timeLeft.days}j, {timeLeft.hours}h, {timeLeft.minutes}m, {timeLeft.seconds}s
            </Text>
            <Text style={styles.text}>avant votre prochaine connexion</Text>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Ajouter une connexion</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#00C4B6',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
    },
    text: {
        color: 'white',
        fontSize: 16,
    },
    time: {
        color: 'purple',
        fontSize: 24,
        fontWeight: 'bold',
    },
    button: {
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 5,
        marginTop: 10,
    },
    buttonText: {
        color: '#00C4B6',
        fontSize: 16,
    },
});

export default CountdownTimer;
