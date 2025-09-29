/**
 * 🚀 DOLIBARR BTP MOBILE APP 2025
 * App principale avec navigation et gamification intégrée
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons, FontAwesome5 } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';

// Screens
import DashboardScreen from './screens/DashboardScreen';
import InterventionScreen from './screens/InterventionScreen';
import ProfileScreen from './screens/ProfileScreen';

// Additional screens (placeholders)
import TicketListScreen from './screens/TicketListScreen';
import MapScreen from './screens/MapScreen';
import CameraScreen from './screens/CameraScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// Tab Navigator avec gamification
function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let IconComponent = MaterialIcons;

          if (route.name === 'Dashboard') {
            iconName = 'dashboard';
          } else if (route.name === 'Tickets') {
            iconName = 'assignment';
          } else if (route.name === 'Map') {
            iconName = 'map';
          } else if (route.name === 'Camera') {
            iconName = 'camera';
          } else if (route.name === 'Profile') {
            iconName = 'trophy';
            IconComponent = FontAwesome5;
          }

          return (
            <IconComponent
              name={iconName}
              size={size}
              color={focused ? '#007AFF' : '#8E8E93'}
            />
          );
        },
        tabBarActiveTintColor: '#007AFF',
        tabBarInactiveTintColor: '#8E8E93',
        tabBarStyle: {
          backgroundColor: '#1a1a1a',
          borderTopColor: '#333',
          borderTopWidth: 1,
          paddingBottom: 5,
          height: 60,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '600',
        },
        headerShown: false,
      })}
    >
      <Tab.Screen
        name="Dashboard"
        component={DashboardScreen}
        options={{
          title: 'Accueil',
          tabBarBadge: null, // Peut être utilisé pour notifications
        }}
      />
      <Tab.Screen
        name="Tickets"
        component={TicketListScreen}
        options={{ title: 'Tickets' }}
      />
      <Tab.Screen
        name="Map"
        component={MapScreen}
        options={{ title: 'Carte' }}
      />
      <Tab.Screen
        name="Camera"
        component={CameraScreen}
        options={{ title: 'Photo' }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ title: 'Profil' }}
      />
    </Tab.Navigator>
  );
}

// Stack Navigator principal
export default function App() {
  return (
    <NavigationContainer
      theme={{
        dark: true,
        colors: {
          primary: '#007AFF',
          background: '#1a1a1a',
          card: '#2a2a2a',
          text: '#ffffff',
          border: '#333333',
          notification: '#FF3B30',
        },
      }}
    >
      <StatusBar style="light" backgroundColor="#1a1a1a" />

      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          cardStyle: { backgroundColor: '#1a1a1a' },
        }}
      >
        {/* Tabs principales */}
        <Stack.Screen name="Main" component={MainTabs} />

        {/* Écrans modaux/overlay */}
        <Stack.Screen
          name="Intervention"
          component={InterventionScreen}
          options={{
            presentation: 'card',
            gestureEnabled: true,
          }}
        />

        {/* Autres écrans */}
        <Stack.Group screenOptions={{ presentation: 'modal' }}>
          <Stack.Screen name="CameraModal" component={CameraScreen} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// Configuration Expo
export const ExpoConfig = {
  name: "Dolibarr BTP Mobile",
  slug: "dolibarr-btp-mobile",
  version: "1.0.0",
  orientation: "portrait",
  icon: "./assets/icon.png",
  userInterfaceStyle: "dark",
  splash: {
    image: "./assets/splash.png",
    resizeMode: "contain",
    backgroundColor: "#1a1a1a"
  },
  assetBundlePatterns: ["**/*"],
  ios: {
    supportsTablet: false,
    bundleIdentifier: "com.dolibarr.btpmobile",
    buildNumber: "1.0.0"
  },
  android: {
    adaptiveIcon: {
      foregroundImage: "./assets/adaptive-icon.png",
      backgroundColor: "#1a1a1a"
    },
    package: "com.dolibarr.btpmobile",
    versionCode: 1,
    permissions: [
      "ACCESS_FINE_LOCATION",
      "ACCESS_COARSE_LOCATION",
      "CAMERA",
      "READ_EXTERNAL_STORAGE",
      "WRITE_EXTERNAL_STORAGE"
    ]
  },
  web: {
    favicon: "./assets/favicon.png"
  },
  plugins: [
    "expo-location",
    "expo-camera",
    "expo-notifications",
    [
      "expo-font",
      {
        fonts: ["./assets/fonts/Inter-Regular.ttf", "./assets/fonts/Inter-Bold.ttf"]
      }
    ]
  ],
  extra: {
    eas: {
      projectId: "your-project-id-here"
    }
  }
};