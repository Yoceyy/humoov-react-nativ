import React, { useState } from 'react';
import { StyleSheet, Image, View, TouchableOpacity, Text } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import CountdownTimer from '@/components/CountdownTimer';

function handleMenuPress(id: string) {
    // Handle menu press
}

export default function TabTwoScreen() {
    const [showDetails, setShowDetails] = useState(false);
    const [showEditProfile, setShowEditProfile] = useState(false);
    const [showMenu, setShowMenu] = useState(false);

    const menuItems = [
        { id: 'profile', icon: <Ionicons name="person" size={30} color="white" />, label: 'Profile' },
        { id: 'photos', icon: <Ionicons name="images" size={30} color="white" />, label: 'Photos' },
        { id: 'videos', icon: <Ionicons name="videocam" size={30} color="white" />, label: 'Videos' },
        { id: 'infinity', icon: <Ionicons name="infinite" size={30} color="white" />, label: 'Infinity' },
        { id: 'dice', icon: <MaterialIcons name="casino" size={30} color="white" />, label: 'Dice' },
        { id: 'settings', icon: <Ionicons name="settings" size={30} color="white" />, label: 'Settings' },
    ];

    return (
        <View style={{ flex: 1, backgroundColor: '#2C037D' }}>
            <ParallaxScrollView
                headerBackgroundColor="#2C037D"
                headerImage={
                    <View style={styles.headerContainer}>
                        <View style={styles.gradientBackground} />
                        <Image source={require('@/assets/images/arriere fond-profil.jpg')} style={styles.backgroundImage} />
                        <TouchableOpacity
                            style={styles.profileImageContainer}
                            onPress={() => setShowEditProfile(true)}
                        >
                            <Image source={require('@/assets/images/avatar_mamos.jpg')} style={styles.profileImage} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setShowDetails(true)} style={styles.certifButton}>
                            <Icon name="certificate" size={24} color="white" />
                            <Text style={styles.certifCount}>0</Text>
                        </TouchableOpacity>
                    </View>
                }
            >
                <ThemedView style={styles.titleContainer}>
                    <View style={styles.titleContent}>
                        <ThemedText type="title" style={styles.usernameText}>@username</ThemedText>
                        <TouchableOpacity style={styles.settingsButton} onPress={() => console.log("Settings pressed")}>
                            <Icon name="ellipsis-v" size={20} color="white" />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.buttonContainer}>
                        {menuItems.map(item => (
                            <TouchableOpacity
                                key={item.id}
                                style={styles.menuItem}
                                onPress={() => handleMenuPress(item.id)}
                            >
                                {item.icon}
                            </TouchableOpacity>
                        ))}
                    </View>
                </ThemedView>
            </ParallaxScrollView>

            {/* Countdown Timer */}
            <CountdownTimer />

            {showDetails && (
                <View style={styles.certification_humoov_Overlay}>
                    <TouchableOpacity onPress={() => setShowDetails(false)} style={styles.closeButton}>
                        <Icon name="close" size={24} color="white" />
                    </TouchableOpacity>
                    <Text style={styles.certifTitle}>Certification humoov</Text>
                    <View style={styles.separator} />
                    <Text style={styles.certifDescription}>
                        En cliquant sur l'icône <Icon name="certificate" size={20} /> : vous pouvez voter pour certifier votre Collègue.
                        La certification permet d'accréditer le contenu du Collègue. Les votes sont anonymes et uniques, vous ne pouvez voter
                        plusieurs fois pour le même Collègue et vous ne pouvez voter que pour un seul Collègue.
                    </Text>
                </View>
            )}

            {/* Edit Profile Screen */}
            {showEditProfile && (
                <View style={styles.editProfileOverlay}>
                    <View style={styles.editProfileContainer}>
                        <Image source={require('@/assets/images/avatar_mamos.jpg')} style={styles.profilePicture} />
                        <TouchableOpacity style={styles.changePictureButton}>
                            <Text style={styles.changePictureButtonText}>Modifier la photo</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.changePictureButton}>
                            <Text style={styles.changeInfoButtonText}>Réglages et Modifications</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setShowEditProfile(false)} style={styles.closeButton}>
                            <Icon name="close" size={30} color="white" />
                        </TouchableOpacity>
                    </View>
                </View>
            )}

            {/* Menu Overlay */}
            {showMenu && (
                <View style={styles.menuOverlay}>
                    <View style={styles.menuContainer}>
                        {menuItems.map(item => (
                            <TouchableOpacity
                                key={item.id}
                                style={styles.menuItem}
                                onPress={() => handleMenuPress(item.id)}
                            >
                                {item.icon}
                            </TouchableOpacity>
                        ))}
                        <TouchableOpacity style={styles.closeButton} onPress={() => setShowMenu(false)}>
                            <Icon name="close" size={30} color="white" />
                        </TouchableOpacity>
                    </View>
                </View>
            )}
        </View>
    );
}


const styles = StyleSheet.create({
    headerContainer: {
        position: 'relative',
        alignItems: 'center',
    },

    usernameText: {
        fontSize: 21, // Ajustez la taille de la police selon vos besoins
    },

    gradientBackground: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        borderRadius: 20,
    },
    backgroundImage: {
        width: '100%',
        height: 200,
        resizeMode: 'cover',
        borderRadius: 20,
    },
    profileImageContainer: {
        position: 'absolute',
        bottom: -40,
        left: 20,
        borderWidth: 4,
        borderColor: '#00ffcc',
        borderRadius: 50,
        overflow: 'hidden',
    },
    profileImage: {
        width: 80,
        height: 80,
        borderRadius: 50,


    },
    certifButton: {
        position: 'absolute',
        bottom: 10,
        right: 10,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        padding: 10,
        borderRadius: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    certifCount: {
        color: 'white',
        marginLeft: 5,
        fontWeight: 'bold',
    },

    certification_humoov_Overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: 'rgba(44, 3, 125, 0.98)', // Violet avec opacité
    },

    closeButton: {
        position: 'absolute',
        top: 40,
        right: 20,
    },
    certifTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
    },
    separator: {
        height: 1,
        backgroundColor: '#ccc',
        marginVertical: 10,
        width: '80%',
    },
    certifDescription: {
        textAlign: 'center',
        color: 'white',
        fontSize: 16,
    },
    titleContainer: {
        flexDirection: 'column', // Alignement vertical pour le nom et les boutons
        alignItems: 'center', // Centrer horizontalement
    },

    titleContent: {
        flexDirection: 'row', // Alignement horizontal pour le nom et les points
        alignItems: 'center', // Centrer verticalement
        justifyContent: 'space-between', // Espacer le nom et les points
        width: '110%', // Occuper toute la largeur
        paddingHorizontal: 1, // Marge horizontale
    },

    settingsButton: {
        padding: 10,
    },

    buttonContainer: {
        flexDirection: 'row', // Alignement horizontal pour les boutons
        flexWrap: 'wrap', // Permettre le retour à la ligne
        justifyContent: 'space-evenly', // Centrer horizontalement
        marginTop: 7, // Marge supérieure
    },

    menuItem: {
        margin: 5,
        borderRadius: 50,  // Make icons circular
        padding: 10,      // Padding around icons
        backgroundColor: 'rgba(197,51,255,0.5)', // Icon background color
        alignItems: 'center', // Center icon vertically
        justifyContent: 'center', // Center icon horizontally
    },
    menuOverlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(111,14,202,0.5)', // Semi-transparent
        justifyContent: 'center',
        alignItems: 'center',
    },

    menuContainer: {
        backgroundColor: 'rgba(44, 3, 125)', // Menu background color
        borderRadius: 10,
        padding: 20,
        flexDirection: 'row', // Align icons horizontally
        flexWrap: 'wrap',    // Wrap to next line if needed
        justifyContent: 'center',
        alignItems: 'center',
    },

    editProfileOverlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.8)', // Semi-transparent overlay
        justifyContent: 'center',
        alignItems: 'center',
    },

    editProfileContainer: {
        backgroundColor: 'rgb(44, 3, 125)', // Dark semi-transparent background
        borderRadius: 10, // Rounded corners
        padding: 20,
        width: '80%', // Occupy 80% of screen width
        alignItems: 'center', // Center content horizontally
    },

    profilePicture: {
        width: 120,
        height: 120,
        borderRadius: 75, // Make it a circle
        marginBottom: 10,
        borderWidth: 3,
        borderColor: '#00ffcc', // Light green border
    },

    changePictureButton: {
        backgroundColor: '#007bff', // Light green button
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
        marginBottom: 20,
    },

    changePictureButtonText: {
        color: 'white', // Dark text color
        fontWeight: 'bold',
        fontSize: 14,
    },

    changeInfoButtonText: {
        color: 'white', // Dark text color
        fontWeight: 'bold',
        fontSize: 14,
    },

});
