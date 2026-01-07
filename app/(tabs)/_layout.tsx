import { Tabs } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function TabLayout() {
    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: '#ffd33d', // Edit active tab color later
                headerStyle: {
                    backgroundColor: '#25292e', // Edit header background color later
                },
                headerShadowVisible: false,
                headerTintColor: '#fff',
                tabBarStyle: {
                    backgroundColor: '#25292e', // Edit tab bar background color later
                },
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Home',
                    tabBarIcon: ({ color, focused }) => (
                        <Ionicons name={focused ? 'home' : 'home-outline'} color={color} size={24} />
                    ),
                }}
            />
            <Tabs.Screen
                name="pantry"
                options={{
                    title: 'Pantry',
                    tabBarIcon: ({ color, focused }) => (
                        <Ionicons name={focused ? 'basket' : 'basket-outline'} color={color} size={24} />
                    ),
                }}
            />
        </Tabs>
    );
}