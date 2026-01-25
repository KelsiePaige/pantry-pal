import { View, Text, StyleSheet } from 'react-native';
import { Image } from 'expo-image';

const TestImage = require('../../assets/images/test-images/avocado.jpg');
const STATUS_COLORS = {
    fresh: '#28a745', // Green
    good: '#2474ec', // Blue
    use_soon: '#ffbf00', // Yellow
    expired: '#dc3545', // Red
    consumed: '#4217b8', // Purple
    discarded: '#6c757d', // Gray
    unknown: '#343a40', // Dark Gray
}

const STATUS_LABELS: Record<string, string> = {
    fresh: 'Fresh',
    good: 'Good',
    use_soon: 'Use Soon',
    expired: 'Expired',
    consumed: 'Consumed',
    discarded: 'Discarded',
    unknown: 'Unknown',
};

type PantryItemCardProps = {
    name: string;
    quantity: number;
    status: 'fresh' | 'good' | 'use_soon' | 'expired' | 'consumed' | 'discarded' | 'unknown';
    location: 'pantry' | 'fridge' | 'freezer' | 'other';
    urgencyLabel: string;
};

export default function PantryItemCard({ name, quantity, status, location, urgencyLabel }: PantryItemCardProps) {
    return (
        <View style={styles.container}>

            <Image source={TestImage} style={styles.testImage} />

            <View style={styles.itemDetails}>
                <Text style={styles.name}>{name}</Text>
                <View style={styles.metaRow}>
                    <Text style={[styles.meta, { color: STATUS_COLORS[status] }]}>
                        {STATUS_LABELS[status].toUpperCase()}
                    </Text>

                    <Text style={styles.meta}> • </Text>

                    <Text style={styles.meta}>
                        {location.toUpperCase()}
                    </Text>
                </View>
            </View>

            <View style={styles.right}>
                <Text style={styles.quantity}>{quantity}</Text>
                <Text style={styles.urgency}>{urgencyLabel}</Text>
            </View>
        </View>
    );
}
const backgroundGuide = '#154360'; // Dark blue background for the summary container

const lightBackgroundGuide = '#7fb3d5'; // Lighter blue for individual summary cards

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 12,
        paddingHorizontal: 16,
    },
    testImage: {
        width: 64,
        height: 64,
        borderRadius: 5,
    },
    itemDetails: {
        flex: 1,
        paddingHorizontal: 16,
    },
    name: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 6,
        color: '#fff',
    },
    metaRow: {
        flexDirection: "row",
        alignItems: "center",
    },
    meta: {
        fontSize: 12,
        color: "#555",
        fontWeight: 500,
    },
    right: {
        flex: 1,
        alignItems: "flex-end",
    },
    quantity: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 6,
        color: '#fff',
    },
    urgency: {
        fontSize: 14,
        color: "#dc3545", // Red color for urgency
    },
});