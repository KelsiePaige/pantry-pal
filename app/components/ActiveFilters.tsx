import { Text, View, StyleSheet } from 'react-native';

export default function ActiveFilters() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Active Filters Component</Text>
        </View>
    );
}

const backgroundGuide = '#154360'; // Dark blue background for the filter container
const lightBackgroundGuide = '#7fb3d5'; // Lighter blue for individual filters

const styles = StyleSheet.create({
    container: {
        backgroundColor: backgroundGuide, // Dark blue background for the filter container
        width: '100%',
        height: 50,
    },
    text: {
        color: '#fff', // Placeholder color
        fontSize: 16,
    },
});