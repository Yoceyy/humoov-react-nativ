import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { COLORS } from '@/constants/Theme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        /* tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint, */
        tabBarActiveTintColor: 'white',
        headerShown: false,
        tabBarButton: HapticTab,
        /* tabBarBackground: TabBarBackground, */
        tabBarStyle: Platform.select({
          ios: {
            position: 'absolute',
            backgroundColor: 'rgba(44, 3, 125, 0.98)', // Fond avec couleur rgba (opacité à 1 pour être opaque)
            borderTopWidth: 0, // Supprime la bordure
          },
          default: {
            backgroundColor: 'rgba(44, 3, 125, 0.95)', // Idem pour Android
          },
        }),
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <Icon size={28} name="house" color={color} />,
        }}
      />
      
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => <Icon size={28} name="person" color={color} />,
        }}
      />

      <Tabs.Screen
        name="clepsydres"
        options={{
          title: 'Clepsydres',
          tabBarIcon: ({ color }) => <Icon size={28} name="hourglass-bottom" color={color} />,
        }}
      />

      <Tabs.Screen
        name="regles"
        options={{
          title: 'Règles',
          tabBarIcon: ({ color }) => <Icon name="balance" size={28} color={color} />,
        }}
      />

      <Tabs.Screen
        name="donnees"
        options={{
          title: 'Données',
          tabBarIcon: ({ color }) => <Icon name="handshake" size={28} color={color} />,
        }}
      />
     
    </Tabs>
  );
}
